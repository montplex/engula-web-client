<template>
	<div id="home-page">
		<Header />
		<TopDescription />
		<Banner />
		<Pricing />
		<!-- <CloudMap /> -->
		<Footer />
	</div>
</template>

<script setup lang="ts">
import CloudMap from "@/components/Home/CloudMap.vue";
import Header from "@/components/Home/Header.vue";
import TopDescription from "@/components/Home/TopDescription.vue";
import Banner from "@/components/Home/Banner.vue";
import Pricing from "@/components/Home/Pricing.vue";
import Footer from "@/components/Home/Footer.vue";
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
