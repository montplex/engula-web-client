<!-- eslint-disable @typescript-eslint/prefer-ts-expect-error -->
<template>
	<div class="bg-gray-100 py-8">
		<div class="container mx-auto !max-w-screen-xl px-4">
			<h3 class="m-0 text-base">{{ $t("redis.countTitle") }}</h3>

			<div class="mt-4 flex gap-8 flex-col md:flex-row">
				<div class="m-chart rounded-lg bg-white min-h-[100px] flex-1">
					<Echarts width="100%" height="100px" :options="chartVal" />
					<div class="position w-full h-full" ref="refEcharts"></div>
				</div>
				<div class="cu-items">
					<div class="title">{{ $t("redis.fee") }}</div>
					<div class="meat">{{ fee || 0 }}<span>$</span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getFeeListByDay } from "@/api/fee";
import { ref } from "vue";
import { curren_month_option, get_chart_data } from "@/utils/util";

const chartVal = ref();
const fee = ref();

getFeeListByDay({}).then((res) => {
	if (res) {
		fee.value = res.reduce((a, b) => a + b.fee, 0).toFixed(2);
		const data = get_chart_data(res);
		chartVal.value = curren_month_option(data);
	}
});
</script>

<style lang="scss" scoped>
.cu-items {
	@apply rounded-lg px-5 pt-4 pb-4 shadow-sm bg-white md:text-center flex flex-col md:justify-center md:items-center;
	min-width: 180px;
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
</style>
