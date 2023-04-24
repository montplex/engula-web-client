<template>
	<router-view />
</template>

<script setup lang="ts">
import { useTheme } from "@/hooks/useTheme";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

useTheme();

function handleLang(val: "zh_CN" | "en") {
	locale.value = val;
	console.log(val, locale.value);
	// localStorage.setItem('language', val)
}

// handleLang("zh_CN");
</script>
