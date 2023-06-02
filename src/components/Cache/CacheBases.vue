<template>
	<div class="container mx-auto !max-w-screen-xl px-4 pt-8 pb-20">
		<h1 class="text-2xl mt-2">{{ $t("redis.cache.title") }}</h1>
		<!-- Sraech and AddButton Start -->
		<div class="mt-6 flex grid-cols-2 items-center gap-2 sm:grid sm:gap-8">
			<div class="flex flex-1">
				<div class="flex-1 w-full">
					<div class="hidden md:block max-w-[300px]">
						<el-input @input="handleSearch" @change="handleSearch" v-model="searchVal" :placeholder="$t('redis.cache.search')" />
					</div>
				</div>
				<!-- v-show="seletShow?.length" -->
				<div class="md:ml-9" v-show="store.serviceList?.length">
					<el-select v-model="selectVal" @change="rStatusChange">
						<template #prefix>
							<span class="w-2 h-2 rounded-full" :style="{ background: selectVal == 1 ? '#00b173' : '#f16538' }"></span>
						</template>

						<el-option :value="1" :label="$t('redis.cache.select.running')">
							<div class="flex items-center">
								<span class="w-2 h-2 block rounded-full bg-[#00b173] mr-2"></span>
								{{ $t("redis.cache.select.running") }}
							</div>
						</el-option>
						<el-option value="-10" :label="$t('redis.cache.select.terminated')">
							<div class="flex items-center">
								<span class="w-2 h-2 block rounded-full bg-[#f16538] mr-2"></span>
								{{ $t("redis.cache.select.terminated") }}
							</div>
						</el-option>
					</el-select>
				</div>
			</div>

			<div class="flex items-center justify-end gap-2">
				<!-- Refresh -->
				<el-tooltip class="box-item" effect="dark" :content="$t('redis.cache.refresh.refreshTip')" placement="top-start">
					<el-button
						@click="refresh"
						class="!flex w-[32px] shrink-0 items-center justify-center !py-0 text-gray-400 sm:flex base-btn-hover"
					>
						<el-icon :size="22" :class="{ 'is-loading': isRefresh }">
							<svgIcon icon="refresh" />
						</el-icon>
					</el-button>
				</el-tooltip>
				<el-button type="success" :disabled="!user.info?.isVerified" @click="createCache">{{ $t("redis.cache.new") }}</el-button>
				<!-- <el-button type="success" @click.prevent.stop="guide('#cache15')">提示</el-button> -->
			</div>
		</div>
		<!-- Sraech and AddButton End -->

		<!-- dbList Start -->
		<div class="mt-6 sm:mt-10" v-if="store.filterList && store.filterList.length">
			<div cy-id="redis-db-list" class="grid gap-6 sm:grid-cols-2 sm:gap-8">
				<div
					v-for="item in store.filterList"
					:key="item.id"
					:id="'cache' + item.id"
					class="flex flex-col rounded-lg border border-gray-200 shadow-sm"
					:class="{ 'cursor-not-allowed': item.status == '-10' }"
				>
					<header class="p-4 sm:p-6 sm:pt-6 sm:pb-6" :class="{ 'pointer-events-none  opacity-70': item.status == '-10' }">
						<h3 class="text-lg cursor-pointer flex items-center justify-between" @click="goDetail(item)">
							<span>{{ item.name }}</span>
							<span>
								<el-icon size="18" color="#67c23a" v-if="item.status === 1">
									<svg-icon icon="right-c" />
								</el-icon>
							</span>
						</h3>
						<span class="mt-1.5 flex items-center gap-1.5 opacity-50">
							<span>{{ $t("redis.regional") }}</span> {{ item.cloudProvider }} <span></span>{{ item.region }}
						</span>
						<div class="mt-1.5 flex items-center justify-between gap-1.5">
							<span class="flex-1 opacity-50">{{ $t("redis.status") }}</span>

							<StatusIcon :status="item.status" />

							<span :style="{ color: statusStyle[item.status] }" class="text-base">
								{{ statusObj[item.status] }}
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
					</footer>
				</div>
			</div>
		</div>
		<!-- dbList End -->
		<cacheEmpty @btn-click="createCache" :select="selectVal" v-else />
	</div>

	<!-- 新增缓存实例 -->
	<addDialog v-model="addVisible" ref="addDialogRef" />
	<!-- cache 数量超出限制 -->
	<CrossDialog v-model="cross" />
	<HasCreate v-model="hasCreate" />
</template>

<script setup lang="ts">
import CrossDialog from "./CrossDialog.vue";
import addDialog from "./addDialog.vue";
import cacheEmpty from "./cacheEmpty.vue";
import StatusIcon from "@/components/Cache/StatusIcon.vue";
import HasCreate from "./HasCreate.vue";
import { ref, computed, onMounted, h } from "vue";
import { useRouter } from "vue-router";
import { cacheStore } from "@/stores/cache";
import { ElMessage } from "element-plus";
import { statusMap, statusStyle } from "#/consts";
import { useI18n } from "vue-i18n";
import { userStore } from "@/stores/user";
import { ElMessageBox } from "element-plus";
// import { useIntervalFn } from "@vueuse/core";
const { t, locale } = useI18n();

// @ts-expect-error
const statusObj = computed(() => statusMap[locale.value]);

const store = cacheStore();
const router = useRouter();
const addDialogRef = ref();
const hasCreate = ref(false); // 是否正在创建
const cross = ref(false); // 控制超出创建限制 (显示弹窗)

const isRefresh = ref(false); // 刷新按钮 laoding
const addVisible = ref(false); // 新建弹窗
const searchVal = ref(""); // 搜索
const selectVal = ref<string | number>(1);
// const counDown = ref(150);

const user = userStore();

/* 新建 Cache  */
const createCache = async () => {
	if (!user.info?.canCreateCacheService) {
		ElMessageBox({
			title: "Limit Reached",
			message: h("p", {}, [
				h(
					"a",
					{
						style: "color: #67c23a; cursor: pointer;",
						herf: "mailto:support@montplex.com",
						target: "_blank",
						rel: "noopener noreferrer",
						onclick: () => {
							window.open(`mailto:support@montplex.com`);
						}
					},
					"Contact Us"
				)
			])
		});
		return;
	}

	/* if (!user.info?.canCreateCacheService) {
		ElMessageBox.alert(
			'<a herf="www.baidu.com" onClick="" target="_blank" rel="noopener noreferrer">Contact Us</a>',
			"Limit Reached",
			{
				dangerouslyUseHTMLString: true
			}
		);
		return;
	} */

	/* 如果是免费用户，且已经创建了5个cache */
	if (store.serviceList?.length > 5 && user.info?.feeType === 0) {
		cross.value = true;
		return;
	}
	addDialogRef.value.reset();
	store.setCloudProviderList();
	addVisible.value = true;
};

/* 去详情页 */
const goDetail = (item: any) => {
	if (item.status == 0) {
		hasCreate.value = true;
		return;
	}
	router.push({ name: "Cache", params: { id: item.id } });
};

/* 搜索 */
const handleSearch = (e: string) => {
	store.filterCacheList(e, selectVal.value);
};

/* 刷新按钮  */
async function refresh() {
	isRefresh.value = true;
	const res = await store.setCacheList(true);
	if (res) {
		setTimeout(() => {
			selectVal.value = 1;
			isRefresh.value = false;
			ElMessage.success(t("msg.refreshSuccess"));
		}, 800);
	} else {
		ElMessage.success(t("msg.refreshFail"));
	}
}

function rStatusChange(val: any) {
	const list = store.serviceList.filter((item) => {
		const run = item.status != "-1" && item.status != "-10";
		const stop = item.status == "-10" || item.status == "-1";
		return val == 1 ? run : stop;
	});
	store.filterList = list;
	return list;
}

/* const { pause, resume } = useIntervalFn(
	async () => {
		if (!store.serviceList?.length || counDown.value <= 0) {
			pause();
			return;
		}
		counDown.value -= 3;
		const runing_list = store.serviceList.filter((item) => item.status === 1);
		if (!runing_list.length) pause();
		else {
			await store.setCacheList(false);
		}
	},
	2500,
	{ immediate: false }
);

onMounted(() => {
	resume();
}); */
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
