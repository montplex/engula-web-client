<template>
	<div class="container mx-auto !max-w-screen-xl px-4 pt-8 pb-20">
		<h1 class="text-3xl mt-2 text-[#3f3f46]">Cache Services</h1>
		<!-- Sraech and AddButton Start -->
		<div class="mt-6 flex grid-cols-2 items-center gap-2 sm:grid sm:gap-8">
			<div class="flex">
				<div class="flex-1 w-full">
					<el-input @input="handleSearch" @change="handleSearch" v-model="searchVal" placeholder="Search..." />
				</div>
				<div class="ml-9">
					<el-select v-model="selectVal" placeholder="Filter..." @change="rStatusChange">
						<el-option label="Running" :value="1" />
						<el-option label="Terminated" value="-10" />
					</el-select>
				</div>
			</div>

			<div class="flex items-center justify-end gap-2">
				<!-- Refresh -->
				<el-tooltip class="box-item" effect="dark" content="Refresh databases" placement="top-start">
					<el-button
						@click="refresh"
						class="!flex w-[32px] shrink-0 items-center justify-center !py-0 text-gray-400 sm:flex base-btn-hover"
					>
						<el-icon :size="22" :class="{ 'is-loading': isRefresh }">
							<svgIcon icon="refresh" />
						</el-icon>
					</el-button>
				</el-tooltip>
				<el-button type="success" @click="createCache"> Create</el-button>
			</div>
		</div>
		<!-- Sraech and AddButton End -->

		<!-- dbList Start -->
		<div class="mt-6 sm:mt-10" v-if="store.filterList && store.filterList.length">
			<div cy-id="redis-db-list" class="grid gap-6 sm:grid-cols-2 sm:gap-8">
				<div
					v-for="item in store.filterList"
					:key="item.id"
					class="flex flex-col rounded-lg border border-gray-200 shadow-sm"
					:class="{ 'cursor-not-allowed': item.status == '-10' }"
				>
					<header class="p-4 sm:p-6 sm:pt-6 sm:pb-6" :class="{ 'pointer-events-none  opacity-70': item.status == '-10' }">
						<h3 class="text-lg font-semibold text-[#3f3f46] cursor-pointer" @click="goDetail(item.id)">
							{{ item.name }}
						</h3>
						<span class="mt-1.5 flex items-center gap-1.5 opacity-50">
							<span>Regional</span> {{ item.cloudProvider }} <span></span>{{ item.region }}
						</span>
						<div class="mt-1.5 flex items-center justify-between gap-1.5">
							<span class="flex-1 opacity-50">Status</span>

							<StatusIcon :status="item.status" />

							<span :style="{ color: statusStyle[item.status] }" class="text-base">
								{{ CachestatusTo[item.status] }}
							</span>
						</div>
					</header>

					<!-- <header class="p-4 sm:p-6 sm:pt-5 sm:pb-4">
						<div class="mb-2 flex items-center justify-between">
							<div class="text-lg font-semibold text-gray-900 line-clamp-1">
								{{ item.name }}
							</div>
							<span class="text-sm text-label">{{ item.region }}·{{ item.des }}·{{ item.cloudProvider }}</span>
						</div>

						<div class="flex items-center justify-between">
							<div class="text-label">CreatedDate</div>
							<div class="text-sm">{{ item.createdDate }}</div>
						</div>

						<div class="flex items-center justify-between">
							<div class="text-label">Status</div>
							<div class="text-sm">{{ CachestatusTo[item.status] }}</div>
						</div>
					</header> -->
					<!-- Buttom Chart-->
					<!-- hidden sm:block -->
					<footer class="cb-tip">
						<div class="cb-tip bg-[#34d399eb]" v-if="item.status === 0">
							<el-progress :percentage="100" :stroke-width="6" :text-inside="true" :indeterminate="true" :duration="10">
								<span></span>
							</el-progress>
						</div>
						<!-- <div>121312</div> -->
					</footer>
				</div>
			</div>
		</div>
		<!-- dbList End -->
		<cacheEmpty @btn-click="createCache" v-else />
	</div>

	<!-- add-dialog Start -->
	<el-dialog v-model="addVisible" title=" Create Cache Service " width="520px" style="border-radius: 8px">
		<el-form
			label-position="top"
			label-width="100px"
			ref="addFormRef"
			:model="addForm"
			style="max-width: 460px"
			:rules="createCacheRules"
		>
			<el-form-item label="Name" prop="name">
				<el-input v-model="addForm.name" placeholder="Cache sercice name" />
			</el-form-item>

			<el-form-item label="Describes" prop="des">
				<el-input v-model="addForm.des" placeholder="Describes" />
			</el-form-item>

			<el-form-item label="Cloud Provider" prop="cloudProvider">
				<el-select
					v-model="addForm.cloudProvider"
					@change="addForm.region = ''"
					clearable
					filterable
					placeholder="Select cloud provider"
					class="w-full"
				>
					<el-option
						v-for="item in store.regionList"
						:key="item.cloudProvider"
						:label="item.cloudProvider"
						:value="item.cloudProvider"
					/>
				</el-select>
			</el-form-item>

			<el-form-item label="Region" prop="region" v-show="addForm.cloudProvider">
				<el-select v-model="addForm.region" placeholder="Select region" class="w-full" @change="addForm.primaryZone = ''">
					<el-option v-for="(item, index) in region[addForm.cloudProvider]" :key="index" :label="item" :value="item" />
				</el-select>
			</el-form-item>

			<!-- <div class="my-2 text-xs">
				<p class="text-gray-500">For best performance, select the region that is closer to your application.</p>
			</div> -->

			<el-form-item label="Primary Zone" prop="primaryZone" v-show="addForm.region">
				<el-select v-model="addForm.primaryZone" placeholder="Select Zones" class="w-full" :allow-create="true">
					<el-option v-for="(item, index) in zoneList[addForm.region as any]" :key="index" :label="item" :value="item" />
				</el-select>
			</el-form-item>
		</el-form>

		<template #footer>
			<span class="dialog-footer">
				<el-button @click="addVisible = false">Cancel</el-button>
				<el-button :loading="addLoading" type="primary" @click="submit(addFormRef, addCallback)">
					<template #loading>
						<el-icon class="el-icon--left is-loading" size="16">
							<i-ep:loading />
						</el-icon>
					</template>
					Create
				</el-button>
			</span>
		</template>
	</el-dialog>
	<!-- add-dialog End -->
	<!-- 超出创建数量限制 -->
	<el-dialog v-model="cross" width="26%" :lock-scroll="false" :show-close="false" class="br-8">
		<template #header="{ titleId }">
			<div class="flex">
				<i-ep:warning-filled class="text-2xl text-[#faad14]" />
				<h4 :id="titleId" class="font-semibold ml-2">You can create 5 cache service in free tier.</h4>
			</div>
		</template>
		<div class="text-info-88 pl-9 text-start pb-0 text-sm">
			You can <a class="is-link" href="#">add a payment method</a> to upgrade your plan and create more cache services.
		</div>
		<template #footer>
			<span class="dialog-footer">
				<el-button color="#67c23a" style="color: #ffffff" @click="cross = false"> OK </el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script setup lang="ts">
import cacheEmpty from "./cacheEmpty.vue";
import StatusIcon from "@/components/Cache/StatusIcon.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { cacheStore } from "@/stores/cache";
import { addCache } from "@/api/cache";
import { AddCacheParams } from "#/cache";
import { createCacheRules, resetForm, submit } from "@/utils/rules";
import { ElMessage, ElNotification, FormInstance } from "element-plus";
import { CachestatusTo, statusStyle } from "#/enum";
import { useIntervalFn } from "@vueuse/core";

// 控制新建cache后60s内轮询(更新cache状态)
const counDown = ref(0);

const store = cacheStore();
const router = useRouter();
const addLoading = ref(false);

const addForm = ref<AddCacheParams>({
	cloudProvider: "",
	name: "",
	region: "",
	des: "",
	primaryZone: ""
});
const { pause, resume } = useIntervalFn(
	async () => {
		if (counDown.value <= 0) pause();
		else {
			counDown.value -= 3;
			await store.setCacheList(false);
			if (store.serviceList.length > 0) {
				const cache = store.serviceList.find((item) => item.name === addForm.value.name);
				if (cache!.status === 1) {
					pause();
					createSuccessMsg();
				}
			}
		}
	},
	3000,
	{ immediate: false }
);
const region = computed(() => {
	let regionObj: any = {};
	store.regionList.map((item) => item.regions && (regionObj[item.cloudProvider] = item.regions));
	return regionObj;
});
const zoneList = computed(() => store.zoneList);

const cross = ref(false); // 控制超出创建限制 (显示弹窗)

const isRefresh = ref(false); // 刷新按钮 laoding
const addVisible = ref(false); // 新建弹窗
const searchVal = ref(""); // 搜索
const selectVal = ref<string | number>(1);
const addFormRef = ref<FormInstance>();

/* 新建 Cache  */
const createCache = async () => {
	resetForm(addFormRef.value);
	/* 最多只能创建五个正在运行的 cache */
	const isCreate = store.serviceList.reduce((sum, item) => (item.status === 1 ? sum + 1 : sum + 0), 0);
	if (isCreate >= 5) cross.value = true;
	else {
		store.setCloudProviderList();
		addVisible.value = true;
	}
};

const addCallback = () => {
	addLoading.value = true;
	addCache(addForm.value)
		.then((res) => {
			if (res.id) {
				creattingMsg();
				counDown.value = 36;
				store.setCacheList(false);
				resume();
			}
		})
		.catch(() => ElMessage.error("request failure"))
		.finally(() => {
			addVisible.value = false;
			addLoading.value = false;
		});
};

const createSuccessMsg = () => {
	ElNotification({
		title: "Success",
		message: "create successfully",
		position: "bottom-right",
		type: "success"
	});
};

const creattingMsg = () => {
	ElNotification({
		title: "Success",
		message: "Database is being prepared for you...",
		type: "success",
		position: "bottom-right"
	});
};

/* 去详情页 */
const goDetail = (id: number) => {
	router.push({ path: "/redis/details", query: { id } });
};

/* 搜索 */
const handleSearch = (e: string) => {
	store.filterCacheList(e, selectVal.value);
};

/* 刷新按钮  */
function refresh() {
	isRefresh.value = true;
	store.setCacheList(true);
	setTimeout(() => {
		isRefresh.value = false;
		ElMessage.success("Refresh successfully");
	}, 1000);
}

function rStatusChange(val: any) {
	const list = store.serviceList.filter((item) => {
		const run = item.status != "-1" && item.status != "-10";
		const stop = item.status == "-10" || item.status == "-1";
		return val == 1 ? run : stop;
	});

	store.filterList = list;
}
</script>

<style lang="scss">
.cb-tip {
	height: 6px;
	border-radius: 0 0 0.5rem 0.5rem;
	overflow: hidden;
}
.el-progress-bar {
	border-radius: 0;
	.el-progress-bar__outer {
		border-radius: 0 0 100px 100px;
		background-color: transparent;
	}
	.el-progress-bar__inner {
		background-image: linear-gradient(to right, rgb(167, 243, 208) 0%, rgb(5, 150, 105) 100%);
	}
}

.br-8 {
	border-radius: 8px;
}
.el-form-item__label {
	display: flex;
	gap: 0.25rem;
	align-items: center;
	margin-bottom: 0.25rem;
	font-weight: 550;
	color: rgb(0 0 0 / 0.88);
}
.base-btn-hover {
	&:focus,
	&:hover {
		color: #67c23a;
		background-color: transparent;
		border-color: #67c23a;
		&:active {
			color: #67c23a;
			border-color: #67c23a;
		}
	}
}
.circular {
	animation: loading-rotate 2s linear infinite;
}

.el-dialog__body {
	padding-top: 0;
}
</style>
