<!-- eslint-disable vue/require-prop-types -->
<template>
	<div class="mt-8 grid grid-cols-1 gap-8">
		<BasePort />
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
		<configuration />
		<!-- 收费标准 Start -->
		<billing-standards />
		<!-- 收费标准 End -->
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
import BillingStandards from "@/components/Cache/BillingStandards.vue";
import Configuration from "@/components/Cache/Configuration.vue";
import BasePort from "@/components/Cache/BasePort.vue";

import { ref } from "vue";
import { useRoute } from "vue-router";
import { useDbStore } from "@/stores/cache";
import { CachestatusTo } from "#/enum";
import { dayjs } from "element-plus";

const route = useRoute();
const store = useDbStore();
store.setOneCache({ id: route.query.id as string });
// const cache = ref(store.oneCache);

const tabPosition = ref("redis");

/* const copyTips = ref("Copy");
const handleCopy = () => (copyTips.value = "Copied"); */
</script>

<style lang="scss">
.copy-text {
	font-size: 15px;
	font-weight: 550;
	line-height: 1.9rem;
	color: rgb(0 0 0 / 88%);
	svg {
		&:focus {
			outline: none !important;
			opacity: 0.7;
		}
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
