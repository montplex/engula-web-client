<template>
	<div class="bg-gray-100 py-8">
		<div class="container mx-auto !max-w-screen-xl px-4">
			<h3 class="m-0 text-base">{{ $t("redis.countTitle") }}</h3>
			<div class="mt-4 grid gap-2 sm:grid-cols-3 sm:gap-4">
				<!-- <div class="rounded-lg px-5 pt-4 pb-3 shadow-sm bg-white">
					<el-statistic title="" :value="62" />
				</div> -->
				<div class="cu-items">
					<div class="title">{{ $t("redis.readBytes") }}</div>
					<div class="meat">{{ fee?.readByte ?? 0 }}</div>
				</div>
				<div class="cu-items">
					<div class="title">{{ $t("redis.writeBytes") }}</div>
					<div class="meat">{{ fee?.writeByte ?? 0 }}</div>
				</div>

				<div class="cu-items">
					<div class="title">{{ $t("redis.fee") }}</div>
					<div class="meat">{{ fee?.fee ?? 0 }}<span>$</span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getFeeOrgList } from "@/api/cache";
import { formatBytes, toThousandFilter } from "@/utils/util";
import { ref } from "vue";

type Fee = {
	readByte: number | string;
	writeByte: number | string;
	fee: number | string;
};
const fee = ref<Fee>();

getFeeOrgList().then((res) => {
	console.log(res);
	if (!res[0]) return;
	fee.value = sumOrg(res);
});

function sumOrg(arr: any): Fee {
	const len = arr.length;
	let readByte = 0,
		writeByte = 0,
		fee = 0;

	for (let i = 0; i < len; i++) {
		readByte += arr[i].readByte;
		writeByte += arr[i].writeByte;
		fee += arr[i].fee;
	}
	return { readByte: formatBytes(readByte), writeByte: formatBytes(writeByte), fee: toThousandFilter(fee) };
}
</script>

<style lang="scss" scoped>
.cu-items {
	@apply rounded-lg px-5 pt-4 pb-4 shadow-sm bg-white;
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
