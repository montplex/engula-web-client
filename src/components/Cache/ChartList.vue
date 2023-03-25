<template>
	<div class="chart-item" v-for="(value, key) in metrics" :key="key">
		<header>
			<h4>{{ ChartTitle[key] }}</h4>
		</header>
		<div style="width: 100%; height: 300px">
			<Echarts width="100%" height="300px" :options="value" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { Metrics } from "#/cache";
import { PropType } from "vue";

defineProps({
	metrics: {
		type: Object as PropType<Metrics>,
		default: () => ({})
	}
});

enum ChartTitle {
	memory_used_bytes = "Memory Used Bytes",
	db_keys = "Keyspace",
	client_commands_total = "Client Commands Total",
	hit_rate = "Hits / Misses"
}
</script>

<style lang="scss" scoped>
.chart-item {
	@apply grid grid-cols-1 gap-8 rounded-lg border border-gray-200 p-4 sm:px-8 sm:py-7;
	header h4 {
		@apply m-0 mb-1 text-base;
	}
}
</style>
