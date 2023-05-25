<template>
	<div>
		<div class="flex flex-row-reverse mt-4 mb-6">
			<el-select class="w-32" v-model="month" @change="handleChange">
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
			<el-table-column prop="avgMb" label="avg MB"></el-table-column>
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
import { curren_month_option, get_chart_data } from "@/utils/util";
import { computed, onMounted, ref } from "vue";
import { dayjs } from "element-plus";
import type { DetailList } from "#/cache";
import cacheByidDialog from "@/components/Account/cacheChildDialog.vue";

const month = ref(dayjs().format("YYYY MMM"));
const chartOptions = ref();
const detailList = ref();
const dialogTableVisible = ref(false);
const cacheName = ref("");
const cacheRef = ref();
const currentMonthList = ref();

const selectList = computed(() => get_month_select_ist(detailList.value));
onMounted(async () => {
	const res = await getFeeOrgList();
	if (res.detailList) {
		res.detailList.map((item) => (item.monthStr_en = dayjs(item.monthStr).format("YYYY MMM")));
		detailList.value = res.detailList;
		currentMonthList.value = res.detailList.filter((item) => item.monthStr === month.value || item.monthStr_en === month.value);
	}
	initChart();
});

function get_month_select_ist(arr: any) {
	if (!arr) return;
	let map = new Map();
	for (let item of arr) {
		if (!map.has(item.monthStr || item.monthStr_en)) {
			map.set(item.monthStr, {
				lable: item.monthStr_en,
				value: item.monthStr
			});
		}
	}
	return [...map.values()];
}

function initChart() {
	getFeeListByDay({
		monthStr: dayjs(month.value).format("YYYY-MM")
	}).then((res) => {
		if (res) {
			const data = get_chart_data(res);
			chartOptions.value = curren_month_option(data);
		}
	});
}

function handleDetail(row: DetailList) {
	cacheName.value = row.cacheServiceName;
	cacheRef.value.initData(row.cacheServiceId, row.monthStr);
	dialogTableVisible.value = true;
}

function handleChange(val: string) {
	console.log(val);
	month.value = val;
	currentMonthList.value = detailList.value.filter((item: DetailList) => item.monthStr === val || item.monthStr_en === val);
	// initChart();
}
</script>

<style lang="scss">
.el-table__inner-wrapper::before {
	background-color: #ebeef521;
}
</style>
