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
		const x = res?.map((item) => item.dayStr);
		const y = res?.map((item) => item.fee);
		chartOptions.value = currentMonthOption({ x, y });
	});
}

const emits = defineEmits(["update:modelValue"]);

const handleClose = (done: () => void) => {
	emits("update:modelValue", false);
	done();
};

defineExpose({ initData });
</script>
<style scoped>
.dialog-footer button:first-child {
	margin-right: 10px;
}
</style>

<style lang="scss">
.my-collapse {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	font-size: 14px;
	color: rgb(0 0 0 / 0.88);
	background-color: rgb(0 0 0 / 0.02);
	border: 1px solid #d9d9d9;
	border-bottom: 0;
	border-radius: 8px;
	.collapse-item {
		&:last-child {
			border-bottom: 1px solid #d9d9d9;
			border-radius: 0 0 8px 8px;
			.header {
				border-radius: 0 0 8px 8px;
			}
		}
		.header {
			position: relative;
			display: flex;
			flex-wrap: nowrap;
			align-items: flex-start;
			padding: 12px 16px;
			line-height: 1.58;
			color: rgb(0 0 0 / 0.8);
			cursor: pointer;
			transition: all 0.3s, visibility 0s;
		}
		.content {
			color: rgb(0 0 0 / 0.88);
			background-color: #ffffff;
			border-top: 1px solid #d9d9d9;
			border-radius: 0 0 8px 8px;
			transition: all 0.3s ease-in;
		}
	}
}

.ep_close {
	display: inline;
	font-size: 24px;
	color: rgb(0 0 0 / 0.45);
	transition: color 0.2s;
	&:hover {
		color: rgb(0 0 0 / 0.88);
	}
}
</style>
