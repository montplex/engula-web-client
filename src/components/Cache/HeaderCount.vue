<!-- eslint-disable @typescript-eslint/prefer-ts-expect-error -->
<template>
	<div class="bg-gray-100 py-8">
		<div class="container mx-auto !max-w-screen-xl px-4">
			<h3 class="m-0 text-base">{{ $t("redis.countTitle") }}</h3>

			<div class="mt-4 flex gap-8">
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
import { currentMonthOption } from "@/utils/util";

const chartVal = ref();
const fee = ref();

// @ts-expect-error
getFeeListByDay().then((res) => {
	const x = res?.map((item) => item.dayStr);
	const y = res?.map((item) => item.fee);
	fee.value = res?.reduce((prev, cur) => prev + cur.fee, 0);
	chartVal.value = currentMonthOption({ x, y });
});
</script>

<style lang="scss" scoped>
.cu-items {
	@apply rounded-lg px-5 pt-4 pb-4 shadow-sm bg-white text-center flex flex-col justify-center items-center;
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
