<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useDbStore } from "@/stores/cache";
import { addCache } from "@/api/cache";
import { AddCacheParams } from "#/cache";
import { createCacheRules, resetForm, submit } from "@/utils/rules";
import type { FormInstance } from "element-plus";

const store = useDbStore();
const router = useRouter();

const addForm = reactive<AddCacheParams>({
	cloudProvider: "",
	name: "",
	region: ""
	// des: ""
});

const region = computed(() => {
	let regionObj: any = {};
	store.regionList.map((item) => item.regions && (regionObj[item.cloudProvider] = item.regions));
	return regionObj;
});

const cross = ref(false); // 控制超出创建限制 (显示弹窗)

const isRefresh = ref(false); // 刷新按钮 laoding
const importVisible = ref(false); // 导入弹窗
const addVisible = ref(false); // 新建弹窗
const searchVal = ref(""); // 搜索

const dbList = ["DB_1", "DB2", "DB3"];
const dbList2 = ["NGinx", "Ecrssio", "Montplex"];
const importFrom = reactive({ first: "", second: "" });

const addFormRef = ref<FormInstance>();

/* 新建 Cache  */
const createCache = () => {
	resetForm(addFormRef.value);
	if (store?.serviceList?.length >= 5) cross.value = true;
	else {
		store.setCloudProviderList();
		addVisible.value = true;
	}
};

const addCallback = () => {
	addCache(addForm).then((res) => {
		store.setCacheList();
		ElMessage.success("Create successfully");
		addVisible.value = false;
	});
};

/* 导入 */
const importCache = () => (importVisible.value = true);

/* 去详情页 */
const goDetail = (id: number) => router.push({ path: "/redis", query: { id } });

/* 搜索 */
const handleSearch = (e: string) => store.filterCacheList(e);

/* 刷新按钮  */
function refresh() {
	isRefresh.value = true;
	store.setCacheList();
	setTimeout(() => {
		isRefresh.value = false;
		ElMessage.success("Refresh successfully");
	}, 1000);
}
</script>

<template>
	<div class="container mx-auto !max-w-screen-xl px-4 pt-8 pb-20">
		<h1 class="text-3xl mt-2 text-[#3f3f46]">Cache Services</h1>
		<!-- Sraech and AddButton Start -->
		<div class="mt-6 flex grid-cols-2 items-center gap-2 sm:grid sm:gap-8">
			<div class="w-full">
				<el-input @input="handleSearch" v-model="searchVal" placeholder="Search..." />
			</div>

			<div class="flex items-center justify-end gap-2">
				<!-- Refresh -->
				<el-tooltip class="box-item" effect="dark" content="Refresh databases" placement="top-start">
					<el-button
						@click="refresh"
						class="!flex w-[32px] shrink-0 items-center justify-center !py-0 text-gray-400 sm:flex base-btn-hover"
					>
						<el-icon :size="22">
							<svgIcon icon="refresh" :class="{ circular: isRefresh }" />
						</el-icon>
					</el-button>
				</el-tooltip>

				<!-- Import -->
				<!-- <el-button class="hidden items-center space-x-1 sm:inline-flex base-btn-hover" @click="importCache">
					Import...
				</el-button> -->
				<el-button type="success" @click="createCache"> Create cache service </el-button>
			</div>
		</div>
		<!-- Sraech and AddButton End -->

		<!-- dbList Start -->
		<div class="mt-6 sm:mt-10" v-if="store.filterList">
			<div cy-id="redis-db-list" class="grid gap-6 sm:grid-cols-2 sm:gap-8">
				<div v-for="item in store.filterList" :key="item.id" class="flex flex-col rounded-lg border border-gray-200 shadow-sm">
					<header class="p-4 sm:p-6 sm:pt-6 sm:pb-6">
						<h3 class="text-lg font-semibold text-[#3f3f46] cursor-pointer" @click="goDetail(item.id)">
							{{ item.name }}
						</h3>
						<span class="mt-1.5 flex items-center gap-1.5 opacity-50"> Regional·{{ item.cloudProvider }}·{{ item.region }} </span>
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
					<!-- <footer class="relative hidden h-8 overflow-hidden sm:block">
						<div class="absolute left-6 right-6 top-0 bottom-0 h-8"></div>
					</footer> -->
				</div>
			</div>
		</div>
		<!-- dbList End -->

		<!-- empty Start -->
		<div class="mt-6 sm:mt-10" v-else>
			<el-empty class="rounded-lg bg-gray-50 !p-14">
				<template #image>
					<svgIcon icon="empty-cache" style="width: 100%; height: 90px" />
				</template>
				<template #description>
					<div class="mx-auto my-4 max-w-screen-sm text-gray-600">
						<h3>Create a Cache Service</h3>
						<div>
							<p>We manage the cache service for you and you only pay what you use.</p>
						</div>
					</div>
					<el-button type="success">Create cache service</el-button>
				</template>
			</el-empty>
		</div>
		<!-- empty End -->
	</div>

	<!-- add-dialog Start -->
	<el-dialog v-model="addVisible" title="Create Database" width="520px" style="border-radius: 8px">
		<el-form
			label-position="top"
			label-width="100px"
			ref="addFormRef"
			:model="addForm"
			style="max-width: 460px"
			:rules="createCacheRules"
		>
			<el-form-item label="Name" prop="name">
				<el-input v-model="addForm.name" />
			</el-form-item>

			<!-- <el-form-item label="DES">
				<el-select v-model="addForm.des" filterable placeholder="Select" class="w-full">
					<el-option v-for="item in dbList2" :key="item" :label="item" :value="item" />
				</el-select>
			</el-form-item> -->

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
				<el-select v-model="addForm.region" filterable placeholder="Select region" class="w-full">
					<el-option v-for="item in region[addForm.cloudProvider]" :key="item" :label="item" :value="item" />
				</el-select>
				<div class="mt-2 text-xs">
					<p class="text-gray-500">For best performance, select the region that is closer to your application.</p>
				</div>
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="addVisible = false">Cancel</el-button>
				<el-button type="primary" @click="submit(addFormRef, addCallback)"> Confirm </el-button>
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
		<div class="info-text pl-9 text-start pb-0">
			You can <a class="is-link" href="#">add a payment method</a> to upgrade your plan and create more cache services.
		</div>
		<template #footer>
			<span class="dialog-footer">
				<el-button color="#67c23a" style="color: #ffffff" @click="cross = false"> OK </el-button>
			</span>
		</template>
	</el-dialog>

	<!-- import-dialog Start -->
	<!-- <el-dialog v-model="importVisible" title="Migrate Database" width="520px" style="border-radius: 8px">
		<el-steps direction="vertical" :active="1">
			<el-step>
				<template #title>
					<div class="import-title">
						<span class="font-semibold text-info px-2">From</span>
						<span class="text-info-4">Select the source of the database</span>
					</div>
				</template>
				<template #description>
					<div class="mt-2 mb-4 space-y-4 rounded-lg bg-[#f4f4f5] p-4">
						<el-select v-model="importFrom.first" filterable placeholder="Select database" class="w-full">
							<el-option v-for="item in dbList" :key="item" :label="item" :value="item" />
						</el-select>
						<div>
							<el-checkbox size="large">Import from backups</el-checkbox>
						</div>
						<el-select v-model="importFrom.second" filterable placeholder="Select" class="w-full">
							<el-option v-for="item in dbList2" :key="item" :label="item" :value="item" />
						</el-select>
					</div>
				</template>
			</el-step>

			<el-step>
				<template #title>
					<div class="import-title">
						<span class="font-semibold text-info px-2">To</span>
						<span class="text-info-4">Select the destination</span>
					</div>
				</template>
				<template #description>
					<div class="mt-2 mb-4 space-y-4 rounded-lg bg-[#f4f4f5] p-4">
						<el-select v-model="selectdbVal" filterable placeholder="Select database" class="w-full">
							<el-option v-for="item in dbList" :key="item" :label="item" :value="item" />
						</el-select>
					</div>
				</template>
			</el-step>
		</el-steps>

		<template #footer>
			<span class="dialog-footer">
				<el-button @click="importVisible = false">Cancel</el-button>
				<el-button type="primary" @click="importVisible = false"> Confirm </el-button>
			</span>
		</template>
	</el-dialog> -->
	<!-- import-dialog End -->
</template>

<style lang="scss">
.br-8 {
	border-radius: 8px;
}
.el-form-item__label {
	display: flex;
	gap: 0.25rem;
	align-items: center;
	margin-bottom: 0.25rem;
	font-weight: 550;
	color: rgb(0 0 0 / 88%);
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
.el-step.is-vertical .el-step__title {
	line-height: 32px;
}
.el-step__head.is-process {
	.el-step__icon.is-text {
		color: #111111;
		background-color: #f0f0f0;
		border-color: #f0f0f0;
	}
	.el-step__icon-inner {
		font-weight: 400;
	}
}
.el-step__head.is-finish {
	width: 32px;
	color: var(--el-color-success);
	border-color: var(--el-color-success);
}
.el-step__icon.is-text {
	color: #ffffff;
	background-color: var(--el-color-success);
}
.el-step__icon {
	width: 32px;
	height: 32px;
}
.el-step.is-vertical .el-step__line {
	left: 16px;
	width: 1px;
	background-color: #e2e3e5;
}
.el-step__description {
	padding-right: 0;
}
.circular {
	animation: loading-rotate 2s linear infinite;
}
</style>
