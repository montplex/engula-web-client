<template>
	<div class="mt-8 grid grid-cols-1 gap-6">
		<div class="card-box">
			<h3 class="text-bold m-0 text-base">Current Month</h3>
			<div class="grid-card">
				<div class="items">
					<div class="title">Storage Bytes</div>
					<div class="meat">{{ cards?.storageBytes }}<span>B</span></div>
				</div>
				<div class="items">
					<div class="title">Read Bytes</div>
					<div class="meat">{{ cards?.readBytes }}<span>B</span></div>
				</div>

				<div class="items">
					<div class="title">Read Bytes</div>
					<div class="meat">{{ cards?.readBytes }}<span>B</span></div>
				</div>
				<div class="items">
					<div class="title">Fee</div>
					<div class="meat">{{ cards?.fee }}<span>$</span></div>
				</div>
			</div>
		</div>

		<div class="flex items-center">
			<h4 class="text-base">Write Bytes</h4>
			<div class="ml-auto">
				<!-- select -->
				<el-select v-model="unit" filterable placeholder="Select cloud provider" class="w-full">
					<el-option v-for="item in unitSelectList" :key="item.value" :label="item.label" :value="item.value" />
				</el-select>
			</div>
		</div>

		<chart-list :metrics="metrics" />
	</div>
</template>

<script setup lang="ts">
import ChartList from "@/components/Cache/ChartList.vue";
import { reactive, ref } from "vue";
import { getChart } from "@/api/cache";
import { ChartParams, ChartRes, Metrics, Cards } from "#/cache";
import { dayjs } from "element-plus";
import { watchEffect } from "vue";
import { useRoute } from "vue-router";

const unit = ref("3D"),
	metrics = ref<Metrics>(),
	cards = ref<Cards>();

const params = reactive<ChartParams>({
	cacheServiceId: useRoute().query.id as string,
	start: new Date().getTime() / 1000 - 5 * 60,
	end: new Date().getTime() / 1000,
	step: "5m"
});

function formatCharts(res: ChartRes) {
	let memo = {} as any;
	let card = {} as any;
	for (const [key, value] of Object.entries(res)) {
		if (value instanceof Array) {
			// const ch = value.map((item) => dayjs(item[0]).format("YYYY[年]M[月]D[日] HH:mm"));
			const x = value.map((item) => dayjs(item[0]).format("D MMM HH:mm"));
			const y = value.map((item) => (item[1] == "NaN" ? 0 : Number(item[1])));
			const item = mergeData({ x, y });
			memo[key] = item;
		} else {
			card[key] = value;
		}
	}
	return { memo, card };
}

watchEffect(() => {
	getChart(params).then((res) => {
		const { memo, card } = formatCharts(res);
		metrics.value = memo;
		cards.value = card;
	});
});

function mergeData(value: any) {
	const res = {
		xAxis: {
			type: "category",
			data: value.x
		},
		yAxis: {
			type: "value"
		},
		tooltip: {
			trigger: "axis"
		},
		series: [
			{
				data: value.y,
				type: "line",
				smooth: true,
				symbol: "none",
				lineStyle: {
					color: "#5470C6",
					width: 3
				}
			}
		]
	};
	return res;
}
const unitSelectList = reactive([
	{ label: "Past 3 hours", value: "3D" },
	{ label: "Past 12 hours", value: "12D" },
	{ label: "Past day", value: "1D" },
	{ label: "Past 3 day", value: "3D" },
	{ label: "Past week", value: "1W" }
]);
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
			@apply rounded-lg px-5 pt-4 pb-3 shadow-sm bg-white dark:bg-gray-900;
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
