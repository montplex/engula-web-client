<template>
	<div class="bg-gray-100 py-8 dark:bg-gray-800">
		<div class="container mx-auto !max-w-screen-xl px-4">
			<h3 class="m-0 text-base">Usage For Current Billing</h3>
			<div class="mt-4 grid gap-2 sm:grid-cols-3 sm:gap-4">
				<!-- <div class="rounded-lg px-5 pt-4 pb-3 shadow-sm bg-white dark:bg-gray-900">
					<el-statistic title="" :value="62" />
				</div> -->
				<div class="cu-items">
					<div class="title">Read Bytes</div>
					<div class="meat">{{ fee?.readBytes ?? 0 }}<span>B</span></div>
				</div>
				<div class="cu-items">
					<div class="title">Write Bytes</div>
					<div class="meat">{{ fee?.writeBytes ?? 0 }}<span>B</span></div>
				</div>

				<div class="cu-items">
					<div class="title">Fee</div>
					<div class="meat">{{ fee?.fee ?? 0 }}<span>$</span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getFeeOrgList } from "@/api/cache";
import { FeeItem } from "#/cache";
import { ref } from "vue";

const fee = ref<FeeItem>();

getFeeOrgList().then((res) => {
	console.log(res);
	if (!res[0]) return;
});
</script>

<style lang="scss" scoped>
.cu-items {
	@apply rounded-lg px-5 pt-4 pb-4 shadow-sm bg-white dark:bg-gray-900;
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
