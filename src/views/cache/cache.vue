<template>
	<base-header />
	<base-info :cache="cache" @update="updateName" />
	<div class="container mx-auto !max-w-screen-xl px-4 pt-8 pb-20">
		<el-tabs v-model="activeTab" @tab-click="tabClick">
			<el-tab-pane :label="$t('redis.tabs.details')" name="details" />
			<el-tab-pane :label="$t('redis.tabs.usages')" name="usages" />
			<el-tab-pane :label="$t('redis.tabs.cli')" name="cli" />
			<el-tab-pane :label="$t('redis.tabs.token')" name="token" />
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

function tabClick({ paneName }: any) {
	activeTab.value = paneName;
	const toPage = (path: string) => router.replace({ path, query: { id: route.query.id } });
	toPage(`/redis/${paneName}`);
}

// tab切换时,每次都会重新请求数据
/* watchEffect(async () => {
	store.setOneCache({ id: route.query.id as string }).then((res) => {
		cache.value = res.one;
	});
}); */

store.setOneCache({ id: route.query.id as string }).then((res) => {
	cache.value = res.one;
});

/* 监听路由变化,切换子路由页面时保持tab选中状态 */
watch(
	() => router.currentRoute.value.path,
	(newValue: string) => {
		activeTab.value = newValue.split("/")[2];
	},
	{ immediate: true }
);

function updateName(name: string) {
	cache.value!.name = name;
}
</script>
