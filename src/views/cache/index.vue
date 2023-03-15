<template>
	<base-header />
	<header-count />
	<cache-bases />
	<base-footer />
</template>

<script setup lang="ts">
import BaseHeader from "@/components/Cache/BaseHeader.vue";
import HeaderCount from "@/components/Cache/HeaderCount.vue";
import CacheBases from "@/components/Cache/CacheBases.vue";
import BaseFooter from "@/components/Cache/BaseFooter.vue";
import { useDbStore } from "@/stores/modules/cache";
const store = useDbStore();
store.setCacheList();
</script>

<style lang="scss"></style>
