<template>
	<div
		v-if="props.options"
		ref="chartRef"
		id="my-eharts"
		:class="props.className"
		:style="{ height: props.height, width: props.width }"
	/>
</template>

<script lang="ts" setup>
import { onActivated, onMounted, onBeforeUnmount, unref, ref, watch, nextTick, defineProps } from "vue";
import type { ECharts, EChartsOption } from "echarts";
import * as echarts from "echarts";

const props = defineProps({
	// 自定义组件的类名
	className: {
		type: String,
		default: "chart"
	},
	// 图表容器的宽度
	width: {
		type: String,
		default: "100%"
	},
	// 图表容器的高度
	height: {
		type: String,
		default: "100%"
	},
	// 图表参数
	options: {
		type: Object,
		default: () => ({})
	},
	// 图表是否具有点击事件
	isClick: {
		type: Boolean,
		default: false
	},
	base: {
		type: Object,
		default: () => ({
			xAxis: {
				type: "category",
				data: ["13:17", "06:06", "15:34", "14:21", "10:53", "03:14", "23:17"]
			},
			yAxis: {
				type: "value"
			},
			tooltip: {
				trigger: "axis"
			},
			series: [
				{
					data: [0.02, 0.03, 0.02, 0.023, 0.023, 0.003, 0.007],
					type: "line",
					smooth: true,
					symbol: "none",
					lineStyle: {
						color: "#5470C6",
						width: 3
					}
				}
			]
		})
	}
});
const chartRef = ref<HTMLCanvasElement | null>(null);
let chart: ECharts | null = null;
watch(
	() => props.options,
	(options: EChartsOption | undefined) => {
		nextTick(() => {
			if (chart) {
				chart.setOption(options as EChartsOption, true);
			}
		});
	},
	{
		deep: true
	}
);
const emits = defineEmits(["chart-click"]);
onMounted(() => {
	// 设置异步，不然图例一开始的宽度不正确。
	nextTick(() => {
		initChart();
	});
});
const initChart = (): void => {
	// 初始化echart
	const _c = document.getElementById("my-eharts") as HTMLElement;
	if (_c) _c.style.width = "100%";

	const chartRefWrap = unref(chartRef);
	if (chartRefWrap) {
		chart = echarts.init(chartRefWrap, "", {
			renderer: "svg"
		});
		// 若图表需要点击事件做些其他功能，在初始化示例时注册图表的点击事件
		if (props.isClick) {
			chart.on("click", (params: any) => {
				emits("chart-click", params);
			});
		}

		chart.setOption(props.options as EChartsOption, true); //true用来解决数据不更新问题
		window.addEventListener("resize", chartsResize);
	}
};
onActivated(() => {
	// 防止keep-alive之后图表变形
	if (chart) {
		nextTick(() => {
			chart!.resize();
		});
	}
});

const chartsResize = () => {
	chart && chart.resize();
};

onBeforeUnmount(() => {
	window.removeEventListener("resize", chartsResize);
	chart = null;
});
</script>

<style>
#my-eharts {
	max-width: 100%;
}
</style>
