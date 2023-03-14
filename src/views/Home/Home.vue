<template>
	<Card />
	<div class="pb-20">
		<div class="text-white opacity-80 font-semibold text-center mb-10">
			<h1 class="text-5xl">Plans & Pricing</h1>
			<h3 class="text-xl pt-6">Pay only for what you use with per-request pricing.</h3>
		</div>
		<table-on-pc class="hidden lg:block" />
		<table-on-mobile class="lg:hidden" />

		<div class="text-6 text-center pt-4">
			<p class="leading-6">Disk storage cost is $0.25 per GB per month.</p>
			<p class="leading-6">Each plan has <a class="text-main font-semibold">quotas</a> for fair use of resources.</p>
			<p class="leading-6">See <a class="text-main font-semibold">pricing page</a> for more information.</p>
			<p class="leading-6">Talk to <a class="text-main font-semibold">us</a> for advanced needs.</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import Card from "./components/card.vue";
import TableOnPc from "./components/TableOnPc.vue";
import TableOnMobile from "./components/TableOnMobile.vue";
</script>

<style lang="scss"></style>
