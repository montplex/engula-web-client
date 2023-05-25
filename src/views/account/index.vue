<template>
	<div class="!font-inter">
		<base-header />
		<div class="bg-gray-100">
			<div class="container mx-auto !max-w-screen-xl py-6 px-4">
				<h1 class="text-bold m-0 text-4xl">Payment</h1>
			</div>
		</div>
		<div class="container mx-auto !max-w-screen-xl px-4">
			<div class="mt-8">
				<!-- <el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="Billing" name="billing">
					<Billing v-if="activeName === 'billing'" />
				</el-tab-pane>
				<el-tab-pane label="Cost Explorer" name="const">
					<TreeTable v-if="activeName === 'const'" />
				</el-tab-pane>
				<el-tab-pane label="Settings" name="setting">Settings</el-tab-pane>
			</el-tabs> -->
				<el-tabs v-model="activeTab" @tab-click="tabClick">
					<!-- <el-tab-pane label="Teams" name="Teams" /> -->
					<el-tab-pane label="Billing" name="Billing" />
					<el-tab-pane label="Cost Explorer" name="CostExplorer" />
					<!-- <el-tab-pane label="Settings" name="Settings" /> -->
					<router-view />
				</el-tabs>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const activeTab = ref("Billing");
const router = useRouter(),
	route = useRoute();

function tabClick({ paneName }: any) {
	console.log(paneName);
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
	return str === "cost-explorer" ? "CostExplorer" : str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}
</script>

<style lang="scss"></style>
