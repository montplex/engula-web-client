<template>
	<base-header />
	<base-info :base="cache" />
	<div class="container mx-auto !max-w-screen-xl px-4 pt-8 pb-20">
		<el-tabs v-model="cName">
			<el-tab-pane label="Details" name="Details"><chche-details v-if="cName === 'Details'" /></el-tab-pane>
			<el-tab-pane label="Usage" name="Usage"><chche-usage v-if="cName === 'Usage'" /></el-tab-pane>
			<el-tab-pane label="Cli" name="Cli"><chche-cli v-if="cName === 'Cli'" /></el-tab-pane>
			<el-tab-pane label="Token" name="Token"><chche-token v-if="cName === 'Token'" /></el-tab-pane>
		</el-tabs>
	</div>
</template>

<script setup lang="ts">
import BaseHeader from "@/components/Cache/BaseHeader.vue";
import BaseInfo from "@/components/Cache/BaseInfo.vue";

import ChcheDetails from "./tabs/details.vue";
import ChcheUsage from "./tabs/usages.vue";
import ChcheCli from "./tabs/cli.vue";
import ChcheToken from "./tabs/token.vue";

import { ICacheListItem } from "#/cache";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { useDbStore } from "@/stores/modules/cache";

const cName = ref("Details");
const store = useDbStore();
const route = useRoute();

const cache = ref({} as ICacheListItem);

store.setOneCache({ id: route.query.id as string }).then((res) => {
	cache.value = res;
});

store.setCacheList();
</script>

<style lang="scss"></style>
