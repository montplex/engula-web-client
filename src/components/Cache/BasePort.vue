<template>
	<div class="base-port">
		<div class="gr-box">
			<div>
				<div class="title">Region</div>
				<div class="info copy-text">
					<div class="mr-1">{{ cache.name }}</div>
				</div>
			</div>

			<div>
				<div class="title">Status</div>
				<div class="info copy-text">
					<StatusIcon status="1" />
					<div class="mx-1">{{ CachestatusTo[cache.status] }}</div>
				</div>
			</div>

			<div>
				<div class="title">Endpoint</div>
				<div class="copy-text group w-full" v-copy>
					<p class="mr-1 inline-block">{{ host }}</p>
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
				<div class="title">Password</div>
				<div class="copy-text info group min-w-[100px]" @click="copyPassword">
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
				<div class="copy-text info group min-w-[100px]" v-copy>
					<div class="mr-1">8125</div>
					<div class="hidden group-hover:block">
						<el-tooltip effect="dark" placement="top" content="Copy" :show-after="200">
							<svgIcon icon="copy" class="!inline !text-xl" />
						</el-tooltip>
					</div>
				</div>
			</div>
		</div>

		<el-tooltip effect="dark" placement="top" content="Copy" :show-after="300">
			<div v-copy class="url">
				<div class="_copy">
					<!-- token@host:port -->
					<p class="pr-2">redis://**********@{{ host }}:8125</p>
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

<style lang="scss">
.base-port {
	@apply rounded-lg border border-gray-200 p-4 sm:p-8;
	.gr-box {
		@apply grid items-center gap-4 sm:grid-flow-col;
		.title {
			@apply text-gray-500;
		}
		.info {
			@apply flex items-center;
		}
	}
	.url {
		@apply relative mt-6 cursor-pointer justify-center rounded-b-lg bg-gray-50 py-4 text-center hover:bg-gray-100 sm:mt-6 sm:flex;
		._copy {
			@apply bg-transparent font-mono text-sm flex items-center;
		}
	}
}
</style>
