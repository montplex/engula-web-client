<template>
	<Tabs :tabs="tabs" v-model="activeTab" @change="tabClick" />
</template>

<script setup lang="ts">
import Tabs from "@/components/Tabs.vue";
import { reactive, ref } from "vue";
const activeTab = ref("details");
const tabs = reactive(["Details", "Usages", "Cli", "Token"]);

const tabClick = (tab: string) => {
	console.log(tab);
};
</script>

<style lang="scss"></style>
