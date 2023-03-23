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

		<div class="section-connect grid-cols-3 !border-red-200 bg-red-50">
			<div class="col-span-2">
				<h4 class="text-lg">Delete this database</h4>
				<div class="text-gray-600">
					<p>Once you delete a database, there is no going back. Please be certain.</p>
				</div>
			</div>
			<div class="overflow-x-auto sm:overflow-hidden">
				<div class="flex h-full items-center justify-end">
					<el-button type="danger" :loading="delLoading" @click="delVisible = true">
						<template #loading>
							<el-icon class="el-icon--left is-loading" size="16">
								<i-ep:loading />
							</el-icon>
						</template>
						Delete</el-button
					>
				</div>
			</div>
		</div>
	</div>

	<!-- Delete-dialog Start -->
	<el-dialog v-model="delVisible" title="Delete Cache Service" width="520px" style="border-radius: 8px">
		<div class="space-y-4">
			<div>
				<p>All data will be deleted permanently.</p>
				<div class="alert-base danger px-4 mt-2 text-red-500">This action cannot be undone.</div>
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
				<el-input @input="nameInput" v-model="repeatedName" placeholder="Enter the name of the database" />
			</div>
		</div>

		<template #footer>
			<span class="dialog-footer">
				<el-button @click="delVisible = false">Cancel</el-button>
				<el-button :disabled="isdel" :type="isdel ? '' : 'danger'" @click="delCache"> delete </el-button>
			</span>
		</template>
	</el-dialog>
	<!-- Delete-dialog End -->
</template>

<script setup lang="ts">
import CodeFragment from "@/components/Cache/CodeFragment.vue";
import BillingStandards from "@/components/Cache/BillingStandards.vue";
import Configuration from "@/components/Cache/Configuration.vue";
import BasePort from "@/components/Cache/BasePort.vue";

import { ref } from "vue";
import { useRoute } from "vue-router";
import { useDbStore } from "@/stores/cache";
import { cacheOne } from "@/api/cache";

const tabPosition = ref("redis"),
	route = useRoute(),
	store = useDbStore(),
	delVisible = ref(false),
	isdel = ref(true),
	delLoading = ref(false),
	repeatedName = ref("");

store.setOneCache({ id: route.query.id as string });

function nameInput(e: string) {
	isdel.value = e !== store.oneCache.one.name;
}

function delCache() {
	delLoading.value = true;
	delVisible.value = false;
	if (Number(store.oneCache.one.status) === 1) return ElMessage.error("Please stop the service first");
	cacheOne({ id: route.query.id as any, opt: "terminate" }).then((res) => {
		delLoading.value = false;
		ElMessage.success("cache terminate");
	});
}
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

.c-tag {
	code {
		padding-inline: 0.6em;
		padding-block: 0.2em 0.1em;
		font-size: 14px;
		background: rgba(150, 150, 150, 0.1);
		border: 1px solid rgba(100, 100, 100, 0.2);
		border-radius: 3px;
	}
	strong {
		color: #111;
		font-weight: 600;
	}
}
</style>
