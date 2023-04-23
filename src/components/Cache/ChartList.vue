<template>
	<div class="chart-item" v-for="(value, key) in metrics" :key="key">
		<header>
			<h4>{{ chatTitle[key] }}</h4>
		</header>
		<div style="width: 100%; height: 300px">
			<Echarts width="100%" height="300px" :options="value" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { Metrics } from "#/cache";
import { PropType, computed } from "vue";
import { chartTitleMap } from "#/consts";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const chatTitle = computed(() => {
	// @ts-expect-error
	return chartTitleMap[locale.value];
});

defineProps({
	metrics: {
		type: Object as PropType<Metrics>,
		default: () => ({})
	}
});
</script>

<style lang="scss" scoped>
.chart-item {
	@apply grid grid-cols-1 gap-8 rounded-lg border border-gray-200 p-4 sm:px-8 sm:py-7;
	header h4 {
		@apply m-0 mb-1 text-base;
	}
}
</style>
