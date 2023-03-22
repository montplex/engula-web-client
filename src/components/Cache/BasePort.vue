<template>
	<div class="rounded-lg border border-gray-200 p-4 sm:p-8">
		<div class="grid items-center gap-4 sm:grid-flow-col">
			<div class="grid items-center gap-4 sm:grid-flow-col">
				<div>
					<div class="text-gray-500">Region</div>
					<div class="copy-text flex items-center">
						<div class="mr-1">us-east-1</div>
					</div>
				</div>

				<div>
					<div class="text-gray-500">Endpoint</div>
					<div class="copy-text group w-full" v-copy>
						<sapn class="mr-1 inline-block">us1-trusty-tick-39796.upstash.io</sapn>
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
						<div class="mr-1">39796</div>
						<div class="hidden group-hover:block">
							<el-tooltip effect="dark" placement="top" content="Copy" :show-after="200">
								<svgIcon icon="copy" class="!inline !text-xl" />
							</el-tooltip>
						</div>
					</div>
				</div>

				<div>
					<div class="text-gray-500">TLS/SSL</div>
					<div class="copy-text flex items-center">
						<div class="mr-1">Enabled</div>
					</div>
				</div>

				<!-- <template v-if="false">
			<div>
				<div class="text-gray-500">cloudProvider</div>
				<div class="copy-text flex items-center">
					<div class="mr-1">{{ store.oneCache!.cloudProvider }}</div>
				</div>
			</div>
			<div>
				<div class="text-gray-500">Region</div>
				<div class="copy-text flex items-center">
					<div class="mr-1">{{ store.oneCache!.region }}</div>
				</div>
			</div>
			<div>
				<div class="text-gray-500">Status</div>
				<div class="copy-text flex items-center">
					<div class="mr-1">{{ CachestatusTo[store.oneCache!.status] }}</div>
				</div>
			</div>
			<div>
				<div class="text-gray-500">CreateTime</div>
				<div class="copy-text flex items-center">
					<div class="mr-1">
						{{ dayjs(store.oneCache?.createdDate).format("MMM D, YYYY") }}
					</div>
				</div>
			</div>
		</template> -->
			</div>
		</div>
		<el-tooltip effect="dark" placement="top" content="Copy" :show-after="300">
			<div
				v-copy
				class="relative mt-6 cursor-pointer justify-center rounded-b-lg bg-gray-50 py-4 text-center hover:bg-gray-100 sm:mt-6 sm:flex"
			>
				<div class="!bg-transparent !font-mono text-sm flex items-center">
					<sapn class="pr-2">redis://default:4c4fd8b269b4482288c4376136d6f569@usw2-wise-garfish-30456.upstash.io:30456</sapn>
					<svgIcon icon="copy" class="text-[#1677ff] text-sm" />
				</div>
			</div>
		</el-tooltip>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useDbStore } from "@/stores/cache";
import { handleCopyClick } from "@/utils/util";
/* import { dayjs } from "element-plus";
import { CachestatusTo } from "#/enum";
import { reactive } from "vue";
 */
const store = useDbStore(),
	route = useRoute();

store.setOneCache({ id: route.query.id as string });

function copyPassword() {
	handleCopyClick("121312312312312312");
}
</script>

<style lang="scss"></style>
