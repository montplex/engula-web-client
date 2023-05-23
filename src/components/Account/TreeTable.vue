<template>
	<div>
		<div class="flex flex-row-reverse mt-4 mb-6">
			<el-select class="w-32" v-model="month">
				<el-option v-for="item in selectList" :key="item.label" :label="item.label" :value="item.value" />
			</el-select>
		</div>

		<div class="grid grid-cols-1 rounded-lg border border-gray-200 p-2 sm:px-4 sm:py-4 mb-6">
			<div style="width: 100%; height: 140px">
				<Echarts width="100%" height="140px" :options="chartOptions" />
			</div>
		</div>

		<el-table :data="currentMonthList" v-bind="tableStyle">
			<el-table-column fixed prop="cacheServiceName" label="Name"> </el-table-column>
			<el-table-column prop="avgMb" label="avgMb"></el-table-column>
			<el-table-column prop="fee" label="Fee" sortable />
			<el-table-column prop="id">
				<template #default="scope">
					<el-button type="primary" text @click="handleDetail(scope.row)">Detail</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>

	<cacheByidDialog v-model="dialogTableVisible" ref="cacheRef" :cacheName="cacheName" />
</template>
<script lang="ts" setup>
import { tableStyle } from "#/consts";
import { getFeeOrgList, getFeeListByDay } from "@/api/fee";
import { currentMonthOption } from "@/utils/util";
import { computed, onMounted, ref } from "vue";
import { dayjs } from "element-plus";
import type { DetailList } from "#/cache";
import cacheByidDialog from "./cacheChildDialog.vue";

const month = ref(dayjs().format("YYYY MMM"));
const chartOptions = ref();
const detailList = ref<DetailList[]>();
const dialogTableVisible = ref(false);
const cacheName = ref("");
const cacheRef = ref();

const currentMonthList = computed(() => {
	return detailList.value?.filter((item) => item.monthStr === month.value || item.monthStr_en === month.value);
});

// 过滤出列表里的月份，组成一个不重复的数组，用于下拉筛选
const selectList = computed(() => {
	const list = detailList.value?.map((item) => ({ label: item.monthStr_en, value: item.monthStr }));
	return Array.from(new Set(list));
});

onMounted(async () => {
	const res = await getFeeOrgList();
	if (res.detailList) {
		res.detailList.map((item) => (item.monthStr_en = dayjs(item.monthStr).format("YYYY MMM")));
		detailList.value = res.detailList;
	}
	initChart();
});

function initChart() {
	getFeeListByDay({
		monthStr: dayjs(month.value).format("YYYY-MM")
	}).then((res) => {
		if (res) {
			const x = res?.map((item) => item.dayStr);
			const y = res?.map((item) => item.fee);
			chartOptions.value = currentMonthOption({ x, y });
		}
	});
}

function handleDetail(row: DetailList) {
	cacheName.value = row.cacheServiceName;
	cacheRef.value.initData(row.cacheServiceId, row.monthStr);
	dialogTableVisible.value = true;
}
</script>

<style lang="scss">
.el-table__inner-wrapper::before {
	background-color: #ebeef521;
}

/* .cell {
	display: flex;
	align-items: center;
	.el-table__expand-icon {
		color: var(--color-primary);
		cursor: pointer;
		transition: color 0.3s;
		width: 20px !important;
		line-height: 20px !important;
		height: 20px !important;
		display: inline-flex;
		background: #fff;
		border-color: #f0f0f0;
		border-style: solid;
		border-width: 1px;
		border-radius: 4px;

		i svg path {
			d: path("M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z");
		}

		&:hover,
		&:focus {
			color: var(--el-color-primary);
			border-color: var(--el-color-primary);
		}
	}

	.el-table__expand-icon--expanded {
		transform: rotate(0deg);
		i svg path {
			d: path("M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z");
		}
	}
} */
</style>
