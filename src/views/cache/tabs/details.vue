<!-- eslint-disable vue/require-prop-types -->
<template>
	<div class="mt-8 grid grid-cols-1 gap-8" v-if="cache">
		<base-port :cache="cache.one" :host="cache.host" />
		<!-- <div class="section-connect">
			<div class="col-span-1">
				<h3 class="text-xl font-normal">{{ $t("redis.connect") }}</h3>
			</div>
			<div class="overflow-x-auto sm:overflow-hidden">
				<el-radio-group v-model="tabPosition" size="large" fill="#21cc93">
					<el-radio-button
						v-for="item in codeRadioGroup"
						:key="item.name"
						:label="item.com"
						>{{ item.name }}</el-radio-button
					>
				</el-radio-group>
			</div>
			<Component :is="tabPosition" />
		</div> -->
		<!-- <configuration /> -->
		<!-- 收费标准 Start -->
		<!-- <billing-standards /> -->
		<!-- 收费标准 End -->

		<div class="section-connect grid-cols-3 !border-red-200 bg-red-50">
			<div class="col-span-2">
				<h4 class="text-lg">{{ $t("redis.del.alert.title") }}</h4>
				<div class="text-gray-600">
					<p>
						{{ $t("redis.del.alert.info") }}
					</p>
				</div>
			</div>
			<div class="overflow-x-auto sm:overflow-hidden">
				<div class="flex h-full items-center justify-end">
					<el-button
						type="danger"
						:loading="delLoading"
						@click="delVisible = true"
					>
						<template #loading>
							<el-icon class="el-icon--left is-loading" size="16">
								<i-ep:loading />
							</el-icon>
						</template>
						{{ $t("msg.delete") }}</el-button
					>
				</div>
			</div>
		</div>
	</div>

	<!-- Delete-dialog Start -->
	<el-dialog
		v-model="delVisible"
		:title="$t('redis.del.dialog.title')"
		width="520px"
		style="border-radius: 8px"
	>
		<div class="space-y-4">
			<div>
				<p>{{ $t("redis.del.dialog.meta") }}</p>
				<div class="alert-base danger px-4 mt-2 text-red-500">
					{{ $t("redis.del.dialog.alert") }}
				</div>
			</div>
			<div class="space-y-2 rounded-lg bg-gray-100 px-6 py-5">
				<p class="mb-2" v-if="lang">
					Please type
					<span class="c-tag font-semibold"
						><code>{{ cache.one.name }}</code></span
					>
					to confirm.
				</p>
				<p class="mb-2" v-else>
					请输入
					<span class="c-tag font-semibold"
						><code>{{ cache.one.name }}</code></span
					>
					再次确认
				</p>
				<el-input
					@input="nameInput"
					v-model="repeatedName"
					:placeholder="$t('redis.del.dialog.placeholder')"
				/>
			</div>
		</div>

		<template #footer>
			<span class="dialog-footer">
				<el-button @click="delVisible = false">{{
					$t("msg.cancel")
				}}</el-button>
				<el-button
					:disabled="isdel"
					:type="isdel ? '' : 'danger'"
					@click="delCache"
				>
					{{ $t("msg.delete") }}
				</el-button>
			</span>
		</template>
	</el-dialog>
	<!-- Delete-dialog End -->
</template>

<script setup lang="ts">
import BillingStandards from "@/components/Cache/BillingStandards.vue";
import Configuration from "@/components/Cache/Configuration.vue";
import BasePort from "@/components/Cache/BasePort.vue";
import { ElMessage } from "element-plus";

import { ref, watchEffect, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { cacheStore } from "@/stores/cache";
import { cacheOne } from "@/api/cache";
import { ICacheOneRes } from "#/cache";

import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const lang = computed(() => locale.value == "en");

const route = useRoute(),
	router = useRouter(),
	store = cacheStore(),
	delVisible = ref(false),
	isdel = ref(true),
	delLoading = ref(false),
	repeatedName = ref(""),
	cache = ref<ICacheOneRes>({} as ICacheOneRes);

watchEffect(async () => {
	cache.value = store.oneCache;
});

function nameInput(e: string) {
	isdel.value = e !== cache.value.one.name;
}

function delCache() {
	delLoading.value = true;
	delVisible.value = false;

	cacheOne({ id: route.params.id as any, opt: "terminate" })
		.then((res) => {
			if (res.one) {
				store.updateOneCache(res);
				ElMessage.success("cache terminate");
				router.go(-1);
			}
		})
		.catch(() => ElMessage.error("cache terminate error!"))
		.finally(() => (delLoading.value = false));
}
</script>

<style lang="scss">
.copy-text {
	font-size: 15px;
	// font-weight: 550;
	line-height: 1.9rem;
	svg {
		&:focus {
			opacity: 0.7;
			outline: none !important;
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
	color: rgb(0 0 0 / 0.88);
	background-color: #fffbe6;
	border: 1px solid #ffe58f;
	border-radius: 8px;
}
.c-tag {
	code {
		padding-block: 0.2em 0.1em;
		padding-inline: 0.6em;
		font-size: 14px;
		background: rgb(150 150 150 / 0.1);
		border: 1px solid rgb(100 100 100 / 0.2);
		border-radius: 3px;
	}
	strong {
		font-weight: 600;
		color: #111111;
	}
}
</style>
