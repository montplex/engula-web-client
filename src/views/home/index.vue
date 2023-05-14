<template>
	<div id="home-page">
		<Header />
		<RouterView />
		<Footer />
	</div>
</template>

<script setup lang="ts">
import Header from "@/components/Home/Header.vue";
import Footer from "@/components/Home/HeroFooter.vue";
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
