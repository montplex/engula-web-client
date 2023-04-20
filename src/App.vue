<template>
	<router-view />
</template>

<script setup lang="ts">
import { useTheme } from "@/hooks/useTheme";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

useTheme();

// <el-dropdown-item @click="handleLang('en')">English</el-dropdown-item>
// <el-dropdown-item @click="handleLang('zh_CN')">简体中文</el-dropdown-item>
function handleLang(val: string) {
	locale.value = val;
	console.log(val, locale.value);
	// localStorage.setItem('language', val)
}
</script>
