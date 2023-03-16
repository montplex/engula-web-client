<!-- eslint-disable vue/require-prop-types -->
<template>
	<div class="mt-8 grid grid-cols-1 gap-8">
		<div class="rounded-lg border border-gray-200 p-4 sm:p-8">
			<div class="grid items-center gap-4 sm:grid-flow-col">
				<!-- <div v-for="(item, index) in baseInfo" :key="index" @mouseenter="item.show = true" @mouseleave="item.show = false">
					<div class="text-gray-500">{{ item.name }}</div>
					<div class="copy-text flex items-center">
						<div class="mr-1">{{ item.info }}</div>
						<el-tooltip effect="dark" placement="top" content="Copy">
							<div style="min-width: 20px; min-height: 20px" v-copy>
								<div v-if="item.hover">
									<svgIcon icon="copy" v-show="item.show" />
								</div>
							</div>
						</el-tooltip>
					</div>
				</div> -->
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
			</div>
			<!-- <el-tooltip effect="dark" placement="top">
				<template #content>
					<p class="!text-sm">{{ copyTips }}</p>
				</template>
				<div
					v-copy
					@click="handleCopy"
					class="relative mt-6 cursor-pointer justify-center rounded-b-lg bg-gray-50 py-4 text-center hover:bg-gray-100 sm:mt-6 sm:flex"
				>
					<div class="!bg-transparent !font-mono text-sm flex items-center">
						<sapn class="pr-2">{{ code }}</sapn>
						<svgIcon icon="copy" class="text-[#1677ff] text-sm" />
					</div>
				</div>
			</el-tooltip> -->
		</div>

		<div class="section-connect">
			<div class="col-span-1">
				<h3 class="text-xl font-normal">Connect to your database</h3>
			</div>
			<div class="overflow-x-auto sm:overflow-hidden">
				<el-radio-group v-model="tabPosition" size="large" fill="#21cc93">
					<el-radio-button label="redis">redis-cli</el-radio-button>
					<el-radio-button label="node">Node</el-radio-button>
					<el-radio-button label="php">PHP</el-radio-button>
					<el-radio-button label="python">Python</el-radio-button>
					<el-radio-button label="java">Java</el-radio-button>
					<el-radio-button label="go">Go</el-radio-button>
					<el-radio-button label="docker">Docker</el-radio-button>
				</el-radio-group>
			</div>
			<code-fragment :type="tabPosition" password="70c51cb8867142a8a45b2da7516c9dd1" />
			<!-- <div class="space-y-6">
				<CodeHight @on-eye-click="handleEyeClick" :code="code" />
				<div class="info-warning">
					redis-cli supports TLS starting with version 6. If you are using version 5 or earlier, you should use
					<a class="inline text-[#1677ff]" href="https://www.stunnel.org/" role="link" target="_blank" rel="noopener noreferrer">
						Stunnel
						<svg-icon icon="share" class="hover:opacity-80 inline" />
					</a>
					to establish a secure connection to the TLS enabled database
					<a href="#"> <svg-icon icon="share" class="text-[#1677ff] hover:opacity-80 inline" /> </a>
				</div>
			</div> -->
		</div>
		<div class="section-connect">
			<div class="col-span-1">
				<h3 class="text-xl font-normal">Configuration</h3>
			</div>
			<div class="overflow-x-auto sm:overflow-hidden">
				<div class="mt-2">
					<div class="flex items-center py-6">
						<div class="mr-4 mt-0.5 flex w-10 justify-center self-start">
							<div class="text-xl">
								<span class="mt-0.5 flex h-3 w-3 rounded-full !bg-green-500"></span>
							</div>
						</div>
						<div class="flex-grow">
							<h4 class="text-base text-info-8">TLS (SSL)</h4>
							<div class="text-gray-500">
								This option encrypts the data traffic
								<svg-icon icon="share" class="is-link inline" />
							</div>
						</div>
						<div class="ml-10"><div></div></div>
					</div>
					<div class="border-b border-gray-200"></div>
					<div class="flex items-center py-6">
						<div class="mr-4 mt-0.5 flex w-10 justify-center self-start">
							<div class="text-xl">
								<span class="mt-0.5 flex h-3 w-3 rounded-full !bg-green-500"></span>
							</div>
						</div>
						<div class="flex-grow">
							<h4 class="text-base text-info-8">Eviction</h4>
							<div class="text-gray-500">
								Enable eviction, to evict keys when your database reaches the max size
								<svg-icon icon="share" class="is-link inline" />
							</div>
						</div>
						<el-button class="!ml-10" plain>Disable</el-button>
					</div>
					<div class="border-b border-gray-200"></div>
					<div class="flex items-center py-6">
						<div class="mr-4 mt-0.5 flex w-10 justify-center self-start">
							<div class="text-xl">
								<span class="mt-0.5 flex h-3 w-3 rounded-full bg-gray-300"></span>
							</div>
						</div>
						<div class="flex-grow">
							<h4 class="text-base text-info-8">Auto Scale</h4>
							<div class="text-gray-500">
								Upgrade to higher plans automatically when it hits quotas
								<svg-icon icon="share" class="is-link inline" />
							</div>
						</div>
						<el-button class="!ml-10" plain>Enable</el-button>
					</div>
					<div class="border-b border-gray-200"></div>
					<div class="flex items-center py-6">
						<div class="mr-4 mt-0.5 flex w-10 justify-center self-start">
							<div class="text-xl">
								<span class="mt-0.5 flex h-3 w-3 rounded-full !bg-green-500"></span>
							</div>
						</div>
						<div class="flex-grow">
							<h4 class="text-base text-info-8">Replication</h4>
							<div class="text-gray-500">
								The data is replicated to multiple instances. Replication provides you high availability and better scalability
								<svg-icon icon="share" class="is-link inline" />
							</div>
						</div>
					</div>
					<div class="border-b border-gray-200"></div>
					<div class="flex items-center py-6">
						<div class="mr-4 mt-0.5 flex w-10 justify-center self-start">
							<div class="text-xl">
								<svg-icon icon="security" class="inline !text-xl !opacity-70" />
							</div>
						</div>
						<div class="flex-grow">
							<h4 class="text-base text-info-8">Security Addons</h4>
							<div class="text-gray-500">
								<div class="mb-4">
									The following are additional security features that are enabled at your request for an additional fee.
									<svg-icon icon="share" class="is-link inline" />
								</div>

								<div class="grid grid-cols-2 gap-2">
									<label class="flex select-none items-center">
										<div class="flex items-center">
											<el-switch :disabled="true" />
											<span class="ml-2">IP Whitelisting</span>
										</div>
									</label>

									<label class="flex select-none items-center">
										<div class="flex items-center">
											<el-switch :disabled="true" />
											<span class="ml-2">VPC Peering</span>
										</div>
									</label>

									<label class="flex select-none items-center">
										<div class="flex items-center">
											<el-switch :disabled="true" />
											<span class="ml-2">Private Link</span>
										</div>
									</label>

									<label class="flex select-none items-center">
										<div class="flex items-center">
											<el-switch :disabled="true" />
											<span class="ml-2">TLS Mutual Auth</span>
										</div>
									</label>
								</div>

								<div class="alert-base info mt-4 px-2 py-6">
									Security addons are only available for the Enterprise database. You can upgrade your database to access these
									addons.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="section-connect">
			<div class="col-span-1">
				<h3 class="text-xl font-normal">Subscription</h3>
				<p class="text-gray-600 text-[14px]">
					You can <button class="is-link">add your credit card</button> to upgrade your database to pay-as-you-go plan.
				</p>
			</div>
			<!-- 收费标准 Start -->
			<div class="overflow-x-auto sm:overflow-hidden">
				<div class="min-w-[720px]">
					<div class="mt-2 grid grid-cols-3 gap-y-[1px] bg-gray-200 bg-opacity-80">
						<div class="bg-white px-4 py-2"></div>
						<div class="px-4 py-2 bg-blue-50">
							<h5 class="text-sm">Free Tier</h5>
							<p class="mt-1">
								<span class="whitespace-nowrap rounded-full bg-blue-500 px-2 py-0.5 text-xs text-white">Current Plan</span>
							</p>
						</div>
						<div class="bg-white px-4 py-2">
							<h5 class="text-sm">Pay as you go</h5>
						</div>
						<div class="bg-white px-4 py-2">Max Commands Per Second</div>
						<div class="px-4 py-2 bg-blue-50">1000</div>
						<div class="bg-white px-4 py-2">1K</div>
						<div class="bg-white px-4 py-2">Max Request Size</div>
						<div class="px-4 py-2 bg-blue-50">1MB</div>
						<div class="bg-white px-4 py-2">1MB</div>
						<div class="bg-white px-4 py-2">Max Record Size</div>
						<div class="px-4 py-2 bg-blue-50">100MB</div>
						<div class="bg-white px-4 py-2">100MB</div>
						<div class="bg-white px-4 py-2">Max Memory Storage</div>
						<div class="px-4 py-2 bg-blue-50">64MB</div>
						<div class="bg-white px-4 py-2">1GB</div>
						<div class="bg-white px-4 py-2">Max Data Size</div>
						<div class="px-4 py-2 bg-blue-50">256MB</div>
						<div class="bg-white px-4 py-2">10GB</div>
						<div class="bg-white px-4 py-2">Max Concurrent Connections</div>
						<div class="px-4 py-2 bg-blue-50">100</div>
						<div class="bg-white px-4 py-2">1000</div>
						<div class="bg-white px-4 py-2">Max Daily Bandwidth</div>
						<div class="px-4 py-2 bg-blue-50">50GB</div>
						<div class="bg-white px-4 py-2">50GB</div>
						<div class="px-4 py-2 bg-gray-50">Max Monthly (Cap) Price</div>
						<div class="px-4 py-2 bg-blue-50"><b>Free</b></div>
						<div class="px-4 py-2 bg-gray-50"><b>$160</b></div>
						<div class="px-4 py-2 bg-gray-50">Price</div>
						<div class="px-4 py-2 bg-blue-50"><b>Free</b></div>
						<div class="px-4 py-2 bg-gray-50">
							<p><b>$0.2</b> (per 100k commands)</p>
						</div>
						<div class="bg-white px-4 py-2"></div>
						<div class="px-4 py-2 bg-blue-50"></div>
						<div class="bg-white px-4 py-2">
							<!-- <el-button type="primary" class="!border-blue-600 !bg-blue-500 hover:opacity-80">Connect</el-button> -->
							<!-- padding: 4px 15px -->
							<el-button class="!my-1" type="primary">Add your credit card</el-button>
						</div>
					</div>
				</div>
			</div>
			<!-- 收费标准 End -->
		</div>

		<!-- CacheReset Password Start  -->
		<div class="section-connect grid-cols-3 gap-8 !border-orange-200 bg-orange-50">
			<div class="col-span-2">
				<h4 class="text-lg">Reset Password</h4>
				<div class="text-gray-600">
					<p>This operation will generate a new random password for the Redis database.</p>
				</div>
			</div>
			<div class="overflow-x-auto sm:overflow-hidden">
				<div class="flex h-full items-center justify-end">
					<el-button type="warning" class="!border-orange-600 !bg-orange-500 hover:opacity-80">Reset</el-button>
					<!-- <el-button type="warning">Reset</el-button> -->
				</div>
			</div>
		</div>
		<!-- CacheReset Password End  -->

		<!-- Transfer Start -->
		<div class="section-connect grid-cols-3 !border-orange-200 bg-orange-50">
			<div class="col-span-2">
				<h4 class="text-lg">Transfer Database</h4>
				<div class="text-gray-600">
					<p>Move your Database to a different team with zero downtime.</p>
				</div>
			</div>
			<div class="overflow-x-auto sm:overflow-hidden">
				<div class="flex h-full items-center justify-end">
					<el-button type="warning" class="!border-orange-600 !bg-orange-500 hover:opacity-80">Transfer</el-button>
					<!-- <el-button type="warning">Transfer</el-button> -->
				</div>
			</div>
		</div>
		<!-- Transfer End -->

		<div class="section-connect grid-cols-3 !border-red-200 bg-red-50">
			<div class="col-span-2">
				<h4 class="text-lg">Delete this database</h4>
				<div class="text-gray-600">
					<p>Once you delete a database, there is no going back. Please be certain.</p>
				</div>
			</div>
			<div class="overflow-x-auto sm:overflow-hidden">
				<div class="flex h-full items-center justify-end">
					<el-button type="danger">Delete</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import CodeFragment from "@/components/Cache/CodeFragment.vue";

import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { useDbStore } from "@/stores/modules/cache";
import { CachestatusTo } from "#/enum";
import { dayjs } from "element-plus";
const route = useRoute();
const store = useDbStore();
store.setOneCache({ id: route.query.id as string });
const cache = ref(store.oneCache);

const baseInfo = reactive([
	{ name: "Region", info: "us-east-1" },
	{
		name: "Endpoint",
		info: "us1-trusty-tick-39796.upstash.io",
		show: false,
		hover: true
	},
	{ name: "Password", info: "•••••••••", show: false, hover: true },
	{ name: "Port", info: "39796", show: false, hover: true },
	{ name: "TLS/SSL", info: "Enabled" }
]);

const code = ref("redis-cli -u redis://default:70c51cb8867142a8a45b2da7516c9dd1@us1-hip-bonefish-40037.upstash.io:40037");

const handleEyeClick = (e: boolean) => {
	console.log("chi", e);
	const reg = /(\/\/default:)(.*?)(\@)/;
	const desensitizationCode = code.value.replace(reg, "$1**********$3");
	code.value = e ? code.value : desensitizationCode;
};

const tabPosition = ref("redis");

const copyTips = ref("Copy");
const handleCopy = () => {
	copyTips.value = "Copied";
};
</script>

<style lang="scss">
.copy-text {
	font-size: 15px;
	font-weight: 550;
	line-height: 1.9rem;
	color: rgb(0 0 0 / 88%);
	svg {
		font-size: 16px;
		color: #1677ff;
	}
}
.svg-root {
	display: inline-block;
	flex-shrink: 0;
	width: 1em;
	height: 1em;
	font-size: 1.25rem;
	line-height: 1.75rem;
	color: currentColor;
	user-select: none;
	fill: currentcolor;
	transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.info-warning {
	padding: 8px 12px;
	font-size: 14px;
	line-height: 1.6rem;
	color: rgb(0 0 0 / 88%);
	background-color: #fffbe6;
	border: 1px solid #ffe58f;
	border-radius: 8px;
}
</style>
