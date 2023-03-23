<template>
	<div style="position: sticky; top: 0; z-index: 99">
		<div class="bg-gray-50 py-6 shadow border-b-0">
			<div class="container mx-auto !max-w-screen-xl px-4">
				<div class="flex items-center">
					<div>
						<h1 class="m-0 flex items-center text-2xl font-bold leading-none">
							<span>{{ store.oneCache.one.name }}</span>
							<el-tooltip effect="dark" content="Rename Database" placement="top-start">
								<button type="button" class="ml-3 inline-flex h-auto items-center !p-0">
									<svgIcon @click="editVisible = true" icon="edit" class="text-gray-400" />
								</button>
							</el-tooltip>
						</h1>
						<div class="mt-2 mr-20">
							<div class="inline-flex flex-wrap items-center gap-1 text-sm">
								<span>
									{{ store.oneCache.one.des }}
								</span>
								<!-- <span>Free Tier</span><span>·</span><span>Single Replica</span><span>·</span><span>10K commands per day</span> -->
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

							<el-button plain @click="stopVisible = true">
								<el-icon :class="['el-icon--left', { 'is-loading': stopLoading }]" size="16" color="#717179">
									<SvgIcon icon="ban" v-if="!stopLoading" />
									<i-ep:loading v-else />
								</el-icon>
								<span class="text-[#717179]">stop</span>
							</el-button>
						</div>
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
						<code
							><strong>{{ store.oneCache.one.name }}</strong></code
						>
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
import { useDbStore } from "@/stores/cache";
const editVisible = ref(false),
	store = useDbStore(),
	cacheNewName = ref(store.oneCache.one.name),
	stopVisible = ref(false),
	isStop = ref(true),
	powerLoading = ref(false),
	stopLoading = ref(false),
	repeatedName = ref(""),
	route = useRoute();

/* 启动 */
function powerCache() {
	powerLoading.value = true;
	console.log("start");
}

function nameInput(e: string) {
	isStop.value = e !== store.oneCache.one.name;
}

/* 关闭缓存 */
function stopCache() {
	stopLoading.value = true;
	stopVisible.value = false;
	cacheOne({ id: route.query.id as any, opt: "stop" }).then((res) => {
		stopLoading.value = false;
		ElMessage.success("stop success");
	});
}
</script>

<style lang="scss" scoped>
.right-btns {
	display: flex;
	cursor: pointer;
	font-size: 15px;
	font-weight: 500;
	line-height: 1;
	color: #606266;
	button {
		display: flex;
		align-items: center;
	}
	button:hover {
		color: #f8991b !important;
	}
	.icon {
		margin-right: 4px;
		display: inline-block;
	}
}
</style>
