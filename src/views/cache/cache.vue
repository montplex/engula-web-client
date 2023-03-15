<template>
	<base-header />
	<base-info />
	<div class="container mx-auto !max-w-screen-xl px-4 pt-8 pb-20">
		<el-tabs v-model="activeName" @tab-click="tabClick">
			<el-tab-pane v-for="item in tabs" :label="item" :name="item.toLowerCase()" :key="item" :lazy="true"> </el-tab-pane>
		</el-tabs>
		<router-view />
	</div>
</template>

<script setup lang="ts">
import BaseHeader from "@/components/Cache/BaseHeader.vue";
import BaseInfo from "@/components/Cache/BaseInfo.vue";
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";
import type { TabsPaneContext } from "element-plus";
import { useDbStore } from "@/stores/modules/cache";
const store = useDbStore();

const route = useRoute();
const router = useRouter();
store.setOneCache({ id: route.query.id as string });

const tabs = ref(["Details", "Usage", "Cli", "Token"]);

const activeName = ref("details");

const tabClick = ({ paneName }: TabsPaneContext) => {
	const toPage = (path: string) => router.push({ path, query: { id: route.query.id } });

	const pagesEnum = {
		details: "/redis/details",
		usage: "/redis/usage",
		cli: "/redis/cli",
		token: "/redis/token"
	} as const;

	toPage(pagesEnum[paneName as keyof typeof pagesEnum]);
};

/* 监听路由变化,切换子路由页面时保持tab选中状态 */
watch(
	() => router.currentRoute.value.path,
	(newValue: string) => {
		activeName.value = newValue.split("/")[2];
	},
	{ immediate: true }
);
</script>

<style lang="scss"></style>
