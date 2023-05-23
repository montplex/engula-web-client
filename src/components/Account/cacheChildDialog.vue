<template>
	<el-dialog :modelValue="modelValue" :before-close="handleClose" :title="cacheName" class="!w-8/10 md:!w-[900px] !rounded-lg">
		<div class="">
			<div style="width: 100%; height: 140px">
				<Echarts width="100%" height="140px" :options="chartOptions" />
			</div>
		</div>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="$emit('update:modelValue', false)"> Close </el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script lang="ts" setup>
import { getFeeListByDay } from "@/api/fee";
import { dayjs } from "element-plus";
import { ref } from "vue";
import { currentMonthOption } from "@/utils/util";

const chartOptions = ref();

defineProps({
	modelValue: {
		type: Boolean,
		default: false
	},
	cacheName: {
		type: String,
		default: ""
	}
});

function initData(cacheServiceId: number, monthStr: string) {
	getFeeListByDay({
		monthStr: dayjs(monthStr).format("YYYY-MM")
	}).then((res) => {
		if (res) {
			const x = res?.map((item) => item.dayStr);
			const y = res?.map((item) => item.fee);
			chartOptions.value = currentMonthOption({ x, y });
		}
	});
}

const emits = defineEmits(["update:modelValue"]);

const handleClose = (done: () => void) => {
	emits("update:modelValue", false);
	done();
};

defineExpose({ initData });
</script>
