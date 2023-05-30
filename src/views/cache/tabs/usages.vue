<template>
	<div class="mt-8 grid grid-cols-1 gap-6">
		<div class="card-box">
			<!-- <h3 class="text-bold m-0 text-base">Current Month</h3> -->
			<div class="grid-card">
				<div class="items">
					<div class="title">{{ $t("redis.storageBytes") }}</div>
					<div class="meat">{{ cards?.storageBytes ?? 0 }}</div>
				</div>
				<div class="items">
					<div class="title">{{ $t("redis.readBytes") }}</div>
					<div class="meat">{{ cards?.readBytes ?? 0 }}</div>
				</div>

				<div class="items">
					<div class="title">{{ $t("redis.writeBytes") }}</div>
					<div class="meat">{{ cards?.writeBytes ?? 0 }}</div>
				</div>
				<div class="items">
					<div class="title">{{ $t("redis.fee") }}</div>
					<div class="meat">{{ cards?.fee ?? 0 }}<span>$</span></div>
				</div>
			</div>
		</div>

		<div class="flex items-center">
			<h4 class="text-base">{{ $t("redis.filterData") }}</h4>
			<div class="ml-auto">
				<!-- select -->
				<el-select v-model="unit" @change="timeChange" class="w-full">
					<el-option :label="$t('redis.usages.past_hour')" value="hour" />
					<el-option :label="$t('redis.usages.past_3_hours')" value="hour,3" />
					<el-option :label="$t('redis.usages.past_12_hours')" value="hour,12" />
					<el-option :label="$t('redis.usages.past_day')" value="day" />
					<el-option :label="$t('redis.usages.past_3_days')" value="day,3" />
					<el-option :label="$t('redis.usages.past_week')" value="week" />
				</el-select>
			</div>
		</div>

		<chart-list :metrics="metrics" />
	</div>
</template>

<script setup lang="ts">
import ChartList from "@/components/Cache/ChartList.vue";
import { computed, reactive, ref } from "vue";
import { getChart } from "@/api/fee";
import { ChartParams, ChartRes, Metrics, Cards } from "#/cache";
import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import { formatBytes, toThousandFilter } from "@/utils/util";
import { useI18n } from "vue-i18n";
import { dayjs } from "element-plus";

const { locale } = useI18n();
const lang = computed(() => locale.value == "en");

const route = useRoute(),
	unit = ref("hour"),
	metrics = ref<Metrics>(),
	cards = ref<Cards>(),
	lineData = ref();

const params = reactive<ChartParams>({
	cacheServiceId: route.params.id as string,
	start: getTimeAgo("hour") / 1000,
	end: new Date().getTime() / 1000,
	step: "3m"
});

function formatCharts(res: ChartRes) {
	let memo = {} as any;
	let card = {} as any;
	for (const [key, value] of Object.entries(res)) {
		if (value instanceof Array) {
			const x = value.map((item) => {
				const formatStr = lang.value ? "D MMM HH:mm" : "YYYY年MM月DD日 HH:mm";
				return dayjs(item[0] * 1000).format(formatStr);
			});

			const y = value.map((item) => (item[1] == "NaN" ? 0 : Number(item[1])));
			const item = mergeData({ x, y });

			memo[key] = item;
		} else {
			card[key] = key == "fee" ? toThousandFilter(value) : formatBytes(value);
			// card[key] = toThousandFilter(value);
		}
	}
	console.log(lineData.value);
	return { memo, card };
}

function initChart() {
	getChart(params).then((res) => {
		const { memo, card } = formatCharts(res);
		metrics.value = memo;
		cards.value = card;
	});
}

watchEffect(() => {
	initChart();
});

function mergeData(value: any) {
	const res = {
		// 悬浮提示相关
		tooltip: {
			trigger: "axis"
		},
		//图表边界控制
		/* grid: {
			top: "10px",
			bottom: "10px",
			left: "10px",
			right: "10px",
			containLabel: true
		}, */
		grid: {
			left: "0",
			right: "0",
			bottom: "2%",
			top: "10px",
			containLabel: true
		},
		xAxis: {
			type: "category",
			axisLabel: {
				show: true,
				margin: 10,
				color: "#1e324f"
			},
			data: value.x,
			axisLine: {
				// show:false
				lineStyle: {
					color: "rgba(39, 76, 129, 0.11)",
					width: 0.5
				}
			},
			splitLine: {
				show: false
			},
			axisTick: { show: false } //不显示坐标轴刻度
		},
		yAxis: {
			type: "value",

			axisLine: { show: false }, //不显示坐标抽轴线
			axisTick: { show: false }, //不显示坐标轴刻度
			splitLine: {
				show: true,
				lineStyle: {
					color: "rgba(39, 76, 129, 0.11)",
					type: "dashed",
					width: 0.5
				}
			}
		},

		series: [
			{
				data: value.y,
				type: "line",
				smooth: false,
				symbol: "circle",
				symbolSize: 6,
				animation: true,
				areaStyle: {
					color: "rgba(128, 255, 165,0.2)"
				},
				lineStyle: { color: "#67c23a", width: 3 },
				itemStyle: {
					color: "#67c23a"
				}
			}
		]
	};
	return res;
}

const setMap = new Map([
	["hour", "3m"],
	["hour,3", "20m"],
	["hour,12", "30m"],
	["day", "1h"],
	["day,3", "3h"],
	["week", "6h"]
]);

function timeChange(e: string) {
	const [type, ago] = e.split(","),
		start = getTimeAgo(type as any, ago ? Number(ago) : 1) / 1000;
	params.start = start;
	params.step = setMap.get(e) as string;
}

function getTimeAgo(type: "hour" | "day" | "week", ago = 1) {
	const now = new Date().getTime(),
		hour = 60 * 60 * 1000, // 1小时的毫秒数
		day = 24 * hour, // 1天的毫秒数
		week = 7 * day; // 1周的毫秒

	switch (type) {
		case "hour":
			return now - ago * hour;
		case "day":
			return now - ago * day;
		case "week":
			return now - ago * week;
		default:
			return now - ago * hour;
	}
}
</script>

<style lang="scss" scoped>
.chart-item {
	@apply grid grid-cols-1 gap-8 rounded-lg border border-gray-200 p-4 sm:px-8 sm:py-7;
	header h4 {
		@apply m-0 mb-1 text-base;
	}
}
.card-box {
	@apply rounded-lg bg-gray-100 p-6;
	.grid-card {
		@apply mt-4 grid gap-2 sm:grid-cols-4 sm:gap-4;
		.items {
			@apply rounded-lg px-5 pt-4 pb-3 shadow-sm bg-white;
			.title {
				@apply text-[#606266] mb-1 leading-5 opacity-70;
			}
			.meat {
				@apply text-info-8 text-xl font-normal;
			}
			span {
				padding-left: 0.25rem;
			}
		}
	}
}
</style>
