<template>
	<div class="mt-8 grid grid-cols-1 gap-6">
		<div class="rounded-lg bg-gray-100 p-6">
			<h3 class="text-bold m-0 text-base">Current Month</h3>
			<div class="mt-4 grid gap-2 sm:grid-cols-4 sm:gap-4">
				<div class="rounded-lg px-5 pt-4 pb-3 shadow-sm bg-white dark:bg-gray-900">
					<el-statistic title="Requests" :value="62" />
				</div>
				<div class="rounded-lg px-5 pt-4 pb-3 shadow-sm bg-white dark:bg-gray-900">
					<el-statistic title="Bandwidth (Today)" suffix="B" :value="789" />
				</div>
				<div class="rounded-lg px-5 pt-4 pb-3 shadow-sm bg-white dark:bg-gray-900">
					<div class="ant-statistic css-1wz8zvc">
						<div class="ant-statistic-title">Average Storage</div>
						<div class="ant-statistic-content">
							<span class="ant-statistic-content-value">0B</span>
						</div>
					</div>
				</div>
				<div class="rounded-lg px-5 pt-4 pb-3 shadow-sm bg-white dark:bg-gray-900">
					<el-statistic title="Cost" suffix="$" :value="789.99" />
				</div>
			</div>
		</div>

		<div class="flex items-center">
			<h4 class="text-base">Filter Data</h4>
			<div class="ml-auto">
				<!-- select -->
				<el-select v-model="unit" filterable placeholder="Select cloud provider" class="w-full">
					<el-option v-for="item in unitSelectList" :key="item.value" :label="item.label" :value="item.value" />
				</el-select>
			</div>
		</div>

		<div class="chart-item" v-for="(value, key) in metrics" :key="key">
			<header>
				<h4>{{ ChartTitle[key] }}</h4>
			</header>
			<!-- {{ value }} -->
			<div style="width: 100%; height: 300px">
				<Echarts width="100%" height="300px" :options="mergeData(value)" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Echarts from "@/components/Echarts/index.vue";
import { formatChartsData } from "@/utils/util";
import { reactive, ref } from "vue";
import { getChart } from "@/api/cache";
import { ChartParams, ChartRes } from "#/cache";
import { useDbStore } from "@/stores/cache";

const ChartTitle: { [index: keyof ChartRes]: string } = {
	memory_used_bytes: "Data Size (MB)",
	db_keys: "Keyspace",
	client_commands_total: "Throughput (commands per sec)",
	hit_rate: "Hits / Misses"
};

const params = reactive<ChartParams>({
	cacheServiceId: useDbStore().oneCache.one.id,
	start: new Date().getTime() / 1000 - 5 * 60,
	end: new Date().getTime() / 1000,
	step: "5m"
});

const metrics = ref<ChartRes>();

getChart(params).then((res) => {
	metrics.value = formatChartsData(res);
	/* console.log(formatChartsData(res));
	console.log(metrics.value); */
});

const unit = ref("3D");

const unitSelectList = reactive([
	{ label: "Past 3 hours", value: "3D" },
	{ label: "Past 12 hours", value: "12D" },
	{ label: "Past day", value: "1D" },
	{ label: "Past 3 day", value: "3D" },
	{ label: "Past week", value: "1W" }
]);

function mergeData(value: any) {
	const res = {
		xAxis: {
			type: "category",
			data: value.x.en
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
</script>

<style lang="scss" scoped>
.chart-item {
	@apply grid grid-cols-1 gap-8 rounded-lg border border-gray-200 p-4 sm:px-8 sm:py-7;
	header h4 {
		@apply m-0 mb-1 text-base;
	}
}
</style>
