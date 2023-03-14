<template>
	<Header />
	<RedisInfo />
	<div class="container mx-auto !max-w-screen-xl px-4 pt-8 pb-20">
		<el-tabs v-model="activeName" @tab-click="tabClick">
			<el-tab-pane v-for="item in tabs" :label="item" :name="item.toLowerCase()" :key="item" :lazy="true"> </el-tab-pane>
		</el-tabs>
		<router-view />
	</div>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import RedisInfo from "../components/RedisInfo.vue";
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";
import type { TabsPaneContext } from "element-plus";

const route = useRoute();
const router = useRouter();

const tabs = ref(["Details", "Usage", "Cli", "Token"]);

const activeName = ref("details");

const tabClick = ({ paneName }: TabsPaneContext) => {
	router.push({
		path: paneName as string,
		query: { id: route.query.id }
	});
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
