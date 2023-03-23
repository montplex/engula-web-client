<template>
	<base-header />
	<base-info :base="cache.one" />
	<div class="container mx-auto !max-w-screen-xl px-4 pt-8 pb-20">
		<el-tabs v-model="activeTab" @tab-click="tabClick">
			<el-tab-pane v-for="item in tabs" :label="item" :name="item.toLowerCase()" :key="item" :lazy="true" />
			<router-view />
		</el-tabs>
	</div>
</template>

<script setup lang="ts">
import BaseHeader from "@/components/Cache/BaseHeader.vue";
import BaseInfo from "@/components/Cache/BaseInfo.vue";

import { ICacheOneRes } from "#/cache";
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";
import { useDbStore } from "@/stores/cache";

const router = useRouter(),
	route = useRoute(),
	store = useDbStore(),
	activeTab = ref("details"),
	tabs = ref(["Details", "Usages", "Cli", "Token"]),
	cache = ref({} as ICacheOneRes);

function tabClick({ paneName }: any) {
	activeTab.value = paneName;
	const toPage = (path: string) => router.replace({ path, query: { id: route.query.id } });
	toPage(`/redis/${paneName}`);
}

store.setOneCache({ id: route.query.id as string }).then((res) => {
	cache.value = res;
});

store.setCacheList();

/* 监听路由变化,切换子路由页面时保持tab选中状态 */
watch(
	() => router.currentRoute.value.path,
	(newValue: string) => {
		activeTab.value = newValue.split("/")[2];
	},
	{ immediate: true }
);
</script>
