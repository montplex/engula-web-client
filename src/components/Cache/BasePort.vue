<template>
	<div class="base-port" v-if="cache">
		<div class="gr-box">
			<div>
				<div class="title">Region</div>
				<div class="info copy-text">
					<div class="mr-1">{{ cache.region }}</div>
				</div>
			</div>

			<div>
				<div class="title">Status</div>
				<div class="info copy-text">
					<StatusIcon :status="cache.status" />
					<div class="mx-1" :style="{ color: statusStyle[cache.status] }">
						{{ CachestatusTo[cache.status] }}
					</div>
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
				<div class="copy-text info group min-w-[100px]" @click="handleCopyClick(password)">
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
					<div class="mr-1">{{ store.port }}</div>
					<div class="hidden group-hover:block">
						<el-tooltip effect="dark" placement="top" content="Copy" :show-after="200">
							<svgIcon icon="copy" class="!inline !text-xl" />
						</el-tooltip>
					</div>
				</div>
			</div>
		</div>

		<el-tooltip effect="dark" placement="top" content="Copy" :show-after="300">
			<div class="url" @click="handleCopyClick(`redis://${password}@${host}:${store.port}`)">
				<div class="_copy">
					<p class="pr-2">redis://**********@{{ host }}:{{ store.port }}</p>
					<svgIcon icon="copy" class="text-[#1677ff] text-sm" />
				</div>
			</div>
		</el-tooltip>
	</div>
</template>

<script setup lang="ts">
import StatusIcon from "@/components/Cache/StatusIcon.vue";
import { useRoute } from "vue-router";
import { cacheStore } from "@/stores/cache";
import { handleCopyClick } from "@/utils/util";
import { ref } from "vue";
import { ICacheListItem } from "#/cache";
import { CachestatusTo, statusStyle } from "#/enum";

defineProps({
	cache: {
		type: Object as () => ICacheListItem,
		default: () => ({})
	},
	host: {
		type: String,
		default: ""
	}
});

const store = cacheStore(),
	route = useRoute(),
	password = ref<string>("");

async function init() {
	await store.setTokenList(route.query.id as any);
	password.value = store.getTokenByid(route.query.id as any as number);
}

init();
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
