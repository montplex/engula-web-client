<template>
	<base-header />
	<div class="container mx-auto !max-w-screen-xl px-4 pt-8 pb-20">
		<el-tabs v-model="activeName" @tab-click="tabClick">
			<el-tab-pane v-for="item in tabs" :label="item" :name="item.toLowerCase()" :key="item" :lazy="true" />
			<router-view />
		</el-tabs>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { TabsPaneContext } from "element-plus";

const router = useRouter();
const route = useRoute();

const tabs = ref(["Details", "Usage", "Cli", "Token"]);

const activeName = ref("details");

const tabClick = ({ paneName }: TabsPaneContext) => {
	const toPage = (path: string) => router.replace({ path, query: { id: route.query.id } });
	toPage(`/my/${paneName}`);
};
</script>

<style lang="scss"></style>
