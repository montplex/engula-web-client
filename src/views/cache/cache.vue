<template>
	<base-header />
	<base-info :cache="cache" @update="updateName" />
	<div class="container mx-auto !max-w-screen-xl px-4 pt-8 pb-20">
		<el-tabs v-model="activeTab" @tab-click="tabClick">
			<el-tab-pane :label="$t('redis.tabs.details')" name="Details" />
			<el-tab-pane :label="$t('redis.tabs.usages')" name="Usages" />
			<el-tab-pane :label="$t('redis.tabs.cli')" name="Cli" />
			<el-tab-pane :label="$t('redis.tabs.token')" name="Token" />
			<router-view />
		</el-tabs>
	</div>
</template>

<script setup lang="ts">
import BaseHeader from "@/components/Cache/BaseHeader.vue";
import BaseInfo from "@/components/Cache/BaseInfo.vue";

import { ICacheListItem } from "#/cache";
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";
import { cacheStore } from "@/stores/cache";

const router = useRouter(),
	route = useRoute(),
	store = cacheStore(),
	activeTab = ref("details"),
	cache = ref<ICacheListItem>();

// tab切换时,每次都会重新请求数据
/* watchEffect(async () => {
	store.setOneCache({ id: route.params.id as string }).then((res) => {
		cache.value = res.one;
	});
}); */

store.setOneCache({ id: route.params.id as string }).then((res) => {
	cache.value = res.one;
});

function tabClick({ paneName }: any) {
	activeTab.value = paneName;
	router.replace({ name: paneName });
}

/* 监听路由变化,切换子路由页面时保持tab选中状态 */
watch(
	() => router.currentRoute.value.path,
	(newValue: string) => {
		const pathStr = newValue.split("/").pop();
		activeTab.value = titleCase(pathStr) as string;
	},
	{ immediate: true }
);

/* 首字母大写 */
function titleCase(str: string | undefined) {
	if (!str) return;
	return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

function updateName(name: string) {
	cache.value!.name = name;
}
</script>
