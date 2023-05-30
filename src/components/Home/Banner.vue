<template>
	<div class="sunsetWrapper">
		<div class="hdClients">
			<div class="sunset">
				<div class="sunsetEclipse"></div>
				<div class="divBlock70"></div>
			</div>
			<div class="container mx-auto md:px-4 px-6 flex pt-20 flex-col justify-center items-center gap-3">
				<div class="text-block text-5xl" style="text-align: center">{{ $t("home.cards.title") }}</div>
				<CuttingLine class="mt-2" />
			</div>
		</div>
		<Card />
	</div>
</template>

<script setup lang="ts">
import Card from "./Card.vue";
import CuttingLine from "./vectors-wrapper.vue";
</script>
