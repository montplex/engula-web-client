<template>
	<div class="sticky top-0 z-[99]">
		<div class="bg-gray-50 py-6 shadow border-b-0">
			<div class="container mx-auto !max-w-screen-xl px-4">
				<div class="flex items-center">
					<div>
						<h1 class="m-0 flex items-center text-2xl font-bold leading-none">
							<span>{{ base.name }}</span>
							<el-tooltip effect="dark" content="Rename Database" placement="top-start">
								<button type="button" class="ml-3 inline-flex h-auto items-center !p-0">
									<svgIcon @click="editVisible = true" icon="edit" class="text-gray-400" />
								</button>
							</el-tooltip>
						</h1>
						<div class="mt-2 mr-20">
							<div class="inline-flex flex-wrap items-center gap-1 text-sm">
								<span>Free Tier</span><span>·</span><span>Single Replica</span><span>·</span><span>10K commands per day</span>
							</div>
						</div>
					</div>

					<div class="ml-auto">
						<el-tooltip effect="dark" content="Help" placement="top-start">
							<el-button
								class="!flex w-[32px] shrink-0 items-center justify-center !py-0 text-gray-400 sm:flex hover:bg-transparent"
							>
								<el-icon :size="22">
									<svgIcon icon="error" />
								</el-icon>
							</el-button>
						</el-tooltip>
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
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDbStore } from "@/stores/cache";
import { ICacheListItem } from "#/cache";
defineProps<{
	base: ICacheListItem;
}>();

const store = useDbStore();
const editVisible = ref(false);
const cacheName = store.oneCache?.name;
const cacheNewName = ref(cacheName);
</script>

<style lang="scss"></style>
