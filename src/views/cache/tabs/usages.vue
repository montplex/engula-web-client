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
		<div class="grid grid-cols-1 gap-8 rounded-lg border border-gray-200 p-4 sm:px-8 sm:py-7">
			<header>
				<h4 class="m-0 mb-1 text-base">Daily Requests</h4>
				<p class="text-xs text-gray-600">Last 5 days</p>
			</header>
			<div style="width: 100%; height: 300px">
				<Echarts width="100%" height="300px" />
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

		<div class="grid grid-cols-1 gap-8 rounded-lg border border-gray-200 p-4 sm:px-8 sm:py-7">
			<header>
				<h4 class="m-0 mb-1 text-base">Throughput (commands per sec)</h4>
			</header>
			<div style="width: 100%; height: 300px">
				<Echarts width="100%" height="300px" :options="chart" />
			</div>
		</div>
		<div class="grid grid-cols-1 gap-8 rounded-lg border border-gray-200 p-4 sm:px-8 sm:py-7">
			<header>
				<h4 class="m-0 mb-1 text-base">Service Time Latency (msec)</h4>
			</header>
			<div style="width: 100%; height: 300px">
				<Echarts width="100%" height="300px" />
			</div>
		</div>
		<div class="grid grid-cols-1 gap-8 rounded-lg border border-gray-200 p-4 sm:px-8 sm:py-7">
			<header><h4 class="m-0 mb-1 text-base">Data Size (MB)</h4></header>
			<div style="width: 100%; height: 300px">
				<Echarts width="100%" height="300px" />
			</div>
		</div>
		<div class="grid grid-cols-1 gap-8 rounded-lg border border-gray-200 p-4 sm:px-8 sm:py-7">
			<header><h4 class="m-0 mb-1 text-base">Connections</h4></header>
			<div style="width: 100%; height: 300px">
				<Echarts width="100%" height="300px" />
			</div>
		</div>
		<div class="grid grid-cols-1 gap-8 rounded-lg border border-gray-200 p-4 sm:px-8 sm:py-7">
			<header><h4 class="m-0 mb-1 text-base">Keyspace</h4></header>
			<div style="width: 100%; height: 300px">
				<Echarts width="100%" height="300px" />
			</div>
		</div>
		<div class="grid grid-cols-1 gap-8 rounded-lg border border-gray-200 p-4 sm:px-8 sm:py-7">
			<header><h4 class="m-0 mb-1 text-base">Hits / Misses</h4></header>
			<div style="width: 100%; height: 300px">
				<my-echarts width="100%" height="300px" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import MyEcharts from "@/components/Echarts/index.vue";
import { formatChartsData } from "@/utils/util";
import { reactive, ref } from "vue";

// eslint-disable-next-line vue/require-prop-types
const props = defineProps(["id"]);
console.log(props.id);

const unit = ref("3D");
const unitSelectList = reactive([
	{ label: "Past 3 hours", value: "3D" },
	{ label: "Past 12 hours", value: "12D" },
	{ label: "Past day", value: "1D" },
	{ label: "Past 3 day", value: "3D" },
	{ label: "Past week", value: "1W" }
]);

const chartObj = {
	jvm_threads_current: [
		[1678204800000, "1"],
		[1678208400000, "2"],
		[1678212000000, "3"],
		[1678215600000, "3"],
		[1678219200000, "3"],
		[1678222800000, "3"],
		[1678226400000, "3"],
		[1678230000000, "3"],
		[1678233600000, "3"],
		[1678237200000, "3"],
		[1678240800000, "3"],
		[1678244400000, "3"],
		[1678248000000, "0.5"],
		[1678251600000, "2"],
		[1678255200000, "0.5"],
		[1678258800000, "2"],
		[1678262400000, "0.5"],
		[1678266000000, "0.5"],
		[1678269600000, "2"],
		[1678273200000, "0.5"],
		[1678276800000, "0.5"],
		[1678280400000, "2"],
		[1678284000000, "0.5"],
		[1678287600000, "2"]
	]
};
const chartData = formatChartsData(chartObj);
const chart = {
	xAxis: {
		type: "category",
		data: chartData.jvm_threads_current.x.en
	},
	yAxis: {
		type: "value"
	},
	tooltip: {
		trigger: "axis"
	},
	series: [
		{
			data: chartData.jvm_threads_current.y,
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

console.log("------------------", chart);
//3.获取定义的Dom模板
// const echarsDom: Ref<HTMLElement | any> = ref(null);
</script>

<style lang="scss"></style>
