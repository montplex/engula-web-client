<template>
	<div class="base-port" v-if="cache">
		<div class="gr-box">
			<div>
				<div class="title">{{ $t("redis.regional") }}</div>
				<div class="info copy-text">
					<div class="mr-1">{{ cache.region }}</div>
				</div>
			</div>
			<div>
				<div class="title">{{ $t("redis.endpoint") }}</div>
				<div class="copy-text group flex items-center">
					<span class="mr-1 inline-block truncate max-w-[220px]">{{ host }}</span>
					<span class="inline-block min-w-[40px]" @click="handleCopyClick(host)" v-if="cache.status === 1">
						<span class="hidden group-hover:block">
							<el-tooltip effect="dark" placement="top" content="Copy" :show-after="200">
								<svgIcon icon="copy" class="!inline !text-base" />
							</el-tooltip>
						</span>
					</span>
				</div>
			</div>

			<div>
				<div class="title">{{ $t("redis.password") }}</div>
				<div class="copy-text info group min-w-[100px]">
					<div class="mr-1">•••••••••</div>
					<div class="hidden group-hover:block" v-if="cache.status === 1" @click="handleCopyClick(password)">
						<el-tooltip effect="dark" placement="top" content="Copy" :show-after="200">
							<svgIcon icon="copy" class="!inline !text-base" />
						</el-tooltip>
					</div>
				</div>
			</div>

			<div>
				<div class="text-gray-500">{{ $t("redis.port") }}</div>
				<div class="copy-text info group min-w-[100px]">
					<div class="mr-1">{{ store.port }}</div>
					<div class="hidden group-hover:block" @click="handleCopyClick(store.port)" v-if="cache.status === 1">
						<el-tooltip effect="dark" placement="top" content="Copy" :show-after="200">
							<svgIcon icon="copy" class="!inline !text-base" />
						</el-tooltip>
					</div>
				</div>
			</div>
		</div>

		<el-tooltip effect="dark" placement="top" content="Copy" :show-after="300">
			<div class="url" @click="handleCopyClick(`redis-cli -h ${store.oneCache.host} -p ${store.port} -a ${password}`)">
				<div class="_copy">
					<p class="pr-2">{{ rcode }}</p>
					<svgIcon icon="copy" class="text-[#1677ff] text-sm" />
				</div>
			</div>
		</el-tooltip>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { cacheStore } from "@/stores/cache";
import { handleCopyClick } from "@/utils/util";
import { computed, ref } from "vue";
import { ICacheListItem } from "#/cache";

const rcode = computed(() => {
	return `redis-cli -h ${store.oneCache.host} -p ${store.port} -a **********`;
});

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
	await store.setTokenList(route.params.id as any);
	password.value = store.getTokenByid(route.params.id as any as number);
}

init();
</script>

<style lang="scss">
.base-port {
	@apply rounded-lg border border-gray-200 p-4 sm:p-8;
	.gr-box {
		@apply grid items-center gap-4 sm:grid-flow-col;
		.title {
			@apply text-[#71717a];
		}
		.info {
			@apply flex items-center;
		}
	}
	.url {
		@apply relative mt-6 cursor-pointer justify-center rounded-b-lg bg-[#fafafa] py-4 text-center hover:bg-gray-100 sm:mt-6 sm:flex;
		._copy {
			@apply font-mono text-sm flex items-center;
		}
	}
}
</style>
