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
import { userStore } from "@/stores/user";
import { cacheStore } from "@/stores/cache";
import { onBeforeUnmount, ref } from "vue";
const store = cacheStore();
userStore().getUserInfo();

store.setCacheList(true);
</script>
