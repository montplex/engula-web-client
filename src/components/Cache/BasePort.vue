<template>
	<div class="rounded-lg border border-gray-200 p-4 sm:p-8">
		<div class="grid items-center gap-4 sm:grid-flow-col">
			<div class="grid items-center gap-4 sm:grid-flow-col">
				<div>
					<div class="text-gray-500">Region</div>
					<div class="copy-text flex items-center">
						<div class="mr-1">{{ cache.name }}</div>
					</div>
				</div>

				<div>
					<div class="text-gray-500">Status</div>
					<div class="copy-text flex items-center">
						<StatusIcon status="1" />
						<div class="mx-1">{{ CachestatusTo[cache.status] }}</div>
					</div>
				</div>

				<div>
					<div class="text-gray-500">Endpoint</div>
					<div class="copy-text group w-full" v-copy>
						<sapn class="mr-1 inline-block">{{ host }}</sapn>
						<span class="inline-block min-w-[40px]">
							<span class="hidden group-hover:inline-block">
								<el-tooltip effect="dark" placement="top" content="Copy" :show-after="200">
									<svgIcon icon="copy" class="!inline !text-xl" />
								</el-tooltip>
							</span>
						</span>
					</div>
				</div>

				<div>
					<div class="text-gray-500">Password</div>
					<div class="copy-text flex items-center group min-w-[100px]" @click="copyPassword">
						<div class="mr-1">•••••••••</div>
						<div class="hidden group-hover:block">
							<el-tooltip effect="dark" placement="top" content="Copy" :show-after="200">
								<svgIcon icon="copy" class="!inline !text-xl" />
							</el-tooltip>
						</div>
					</div>
				</div>

				<div>
					<div class="text-gray-500">Port</div>
					<div class="copy-text flex items-center group min-w-[100px]" v-copy>
						<div class="mr-1">8125</div>
						<div class="hidden group-hover:block">
							<el-tooltip effect="dark" placement="top" content="Copy" :show-after="200">
								<svgIcon icon="copy" class="!inline !text-xl" />
							</el-tooltip>
						</div>
					</div>
				</div>

				<!-- 	<div>
					<div class="text-gray-500">TLS/SSL</div>
					<div class="copy-text flex items-center">
						<div class="mr-1">Enabled</div>
					</div>
				</div> -->
			</div>
		</div>

		<el-tooltip effect="dark" placement="top" content="Copy" :show-after="300">
			<div
				v-copy
				class="relative mt-6 cursor-pointer justify-center rounded-b-lg bg-gray-50 py-4 text-center hover:bg-gray-100 sm:mt-6 sm:flex"
			>
				<div class="!bg-transparent !font-mono text-sm flex items-center">
					<!-- token@host:port -->
					<sapn class="pr-2">redis://**********@{{ host }}:8125 </sapn>
					<svgIcon icon="copy" class="text-[#1677ff] text-sm" />
				</div>
			</div>
		</el-tooltip>
	</div>
</template>

<script setup lang="ts">
import StatusIcon from "@/components/Cache/StatusIcon.vue";
import { useRoute } from "vue-router";
import { useDbStore } from "@/stores/cache";
import { handleCopyClick } from "@/utils/util";
import { ref } from "vue";

import { CachestatusTo } from "#/enum";

const store = useDbStore(),
	route = useRoute();
const cache = ref(store.oneCache.one);
const host = ref<string>(store.oneCache.host);

/* store.setOneCache({ id: route.query.id as string }).then((res) => {
	cache.value = res;
}); */

function copyPassword() {
	handleCopyClick("121312312312312312");
}
</script>

<style lang="scss"></style>
