<template>
	<base-header />
	<div class="bg-gray-100">
		<div class="container mx-auto !max-w-screen-xl py-6 px-4">
			<h1 class="text-bold m-0 text-4xl opacity-80">PayMent</h1>
		</div>
	</div>
	<div class="container mx-auto !max-w-screen-xl px-4">
		<div class="mt-8">
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="Billing" name="billing">
					<Billing v-if="activeName === 'billing'" />
				</el-tab-pane>
				<el-tab-pane label="Cost Explorer" name="const">
					<TreeTable v-if="activeName === 'const'" />
				</el-tab-pane>
				<el-tab-pane label="Settings" name="setting">Settings</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script setup lang="ts">
import Billing from "@/components/Account/Billing.vue";
import TreeTable from "@/components/Account/TreeTable.vue";
import type { TabsPaneContext } from "element-plus";
import { ref } from "vue";

const activeName = ref("billing");

const handleClick = (tab: TabsPaneContext, event: Event) => {
	console.log(tab.paneName);
};
</script>

<style lang="scss"></style>
