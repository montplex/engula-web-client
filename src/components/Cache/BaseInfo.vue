<template>
	<!-- style="position: sticky; top: 0; z-index: 99" -->
	<div class="bg-gray-50 py-6 shadow border-b-0" style="position: sticky; top: 0; z-index: 99" v-if="cache">
		<div class="container mx-auto !max-w-screen-xl px-4">
			<div class="flex items-center">
				<div>
					<h1 class="m-0 flex items-center text-2xl font-bold leading-none">
						<span>{{ cache.name }}</span>
						<el-tooltip effect="dark" content="Rename Database" placement="top-start">
							<button type="button" @click="editName(cache.name)" class="ml-3 inline-flex h-auto items-center !p-0">
								<svgIcon icon="edit" class="text-gray-400" />
							</button>
						</el-tooltip>
					</h1>
					<div class="mt-2 mr-20">
						<div class="inline-flex flex-wrap items-center gap-1 text-sm">
							<span> {{ cache.des }}</span>
						</div>
					</div>
				</div>

				<div class="ml-auto">
					<!-- <el-tooltip effect="dark" content="Help" placement="top-start">
							<el-button
								plain
								class="!flex w-[32px] shrink-0 items-center justify-center !py-0 text-gray-400 sm:flex hover:bg-transparent"
							>
								<el-icon :size="22">
									<svgIcon icon="error" />
								</el-icon>
							</el-button>
						</el-tooltip> -->

					<div class="gap-6 ml-3">
						<!-- <el-button plain @click="powerCache">
								<el-icon :class="['el-icon--left', { 'is-loading': powerLoading }]" size="16" color="#717179">
									<SvgIcon icon="power" v-if="!powerLoading" />
									<i-ep:loading v-else />
								</el-icon>
								<span class="text-[#717179]">power</span>
							</el-button> -->

						<el-button type="primary" @click="stopVisible = true">
							<el-icon :class="['el-icon--left', { 'is-loading': stopLoading }]" size="16">
								<SvgIcon icon="ban" v-if="!stopLoading" />
								<i-ep:loading v-if="stopLoading" />
							</el-icon>
							<!-- text-[#717179] -->
							<span>stop</span>
						</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<el-dialog v-model="editVisible" title="Rename Database" width="520px" style="border-radius: 8px">
		<label class="dialog-label mb-1">Database name</label>
		<el-input v-model="cacheNewName" />
		<div class="alert-base info !mt-6">Your connections and clients will not be affected by this change.</div>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="editVisible = false">Cancel</el-button>
				<el-button type="primary" @click="editVisible = false"> Confirm </el-button>
			</span>
		</template>
	</el-dialog>

	<el-dialog v-model="stopVisible" title="Stop cache service" width="520px" style="border-radius: 8px">
		<div class="space-y-4">
			<div>
				<p>Are you sure to stop the current deployment?</p>
				<div class="alert-base danger px-4 mt-2 text-red-500">
					After stopping the deployment, you will not be able to connect to the deployment. Your data, connection address, and
					value-added services (if any) will be preserved.
				</div>
			</div>
			<div class="space-y-2 rounded-lg bg-gray-100 px-6 py-5">
				<p>
					Please type
					<span class="c-tag">
						<strong>{{ cache.name }}</strong>
					</span>
					to confirm.
				</p>
				<el-input @input="nameInput" v-model="repeatedName" placeholder="Enter the name of the cache" />
			</div>
		</div>

		<template #footer>
			<span class="dialog-footer">
				<el-button plain @click="stopVisible = false">Cancel</el-button>
				<el-button :disabled="isStop" :type="isStop ? '' : 'danger'" @click="stopCache"> stop </el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { cacheOne } from "@/api/cache";
import { useRoute } from "vue-router";
import { ICacheListItem } from "#/cache";
import { cacheStore } from "@/stores/cache";

const route = useRoute();
const store = cacheStore();

const props = defineProps({
	cache: {
		type: Object as () => ICacheListItem,
		default: () => ({})
	}
});

const editVisible = ref(false),
	cacheNewName = ref(""),
	stopVisible = ref(false),
	isStop = ref(true),
	powerLoading = ref(false),
	stopLoading = ref(false),
	repeatedName = ref("");

/* 启动 */
function powerCache() {
	powerLoading.value = true;
	console.log("start");
}

function editName(name: string) {
	editVisible.value = true;
	cacheNewName.value = name;
}

function nameInput(e: string) {
	isStop.value = e !== props.cache?.name;
}

/* 关闭缓存 */
function stopCache() {
	stopLoading.value = true;
	stopVisible.value = false;
	cacheOne({ id: route.query.id as any, opt: "stop" }).then(async (res) => {
		stopLoading.value = false;
		ElMessage.success("stop success");
		await store.setOneCache({ id: route.query.id as string });
	});
}
</script>
