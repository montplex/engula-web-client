<template>
	<span :style="{ color }">
		{{ value }}
	</span>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect, unref, onMounted, watch } from "vue";
import { useTransition, TransitionPresets } from "@vueuse/core";

const props = defineProps({
	startVal: { type: Number, default: 0 },
	endVal: { type: Number, default: 99 },
	duration: { type: Number, default: 1000 },
	autoplay: { type: Boolean, default: true },
	cutting: { type: Boolean, default: false },
	decimals: {
		type: Number,
		default: 0,
		validator(value: number) {
			return value >= 0;
		}
	},
	prefix: { type: String, default: "" },
	suffix: { type: String, default: "" },
	separator: { type: String, default: "," },
	decimal: { type: String, default: "." },
	/**
	 * font color
	 */
	color: { type: String, default: "#000" },
	/**
	 * Turn on digital animation
	 */
	useEasing: { type: Boolean, default: true },
	/**
	 * Digital animation
	 */
	transition: { type: String, default: "linear" }
});

const emit = defineEmits(["onStarted", "onFinished"]);

const source = ref(props.startVal);
const disabled = ref(false);
let outputValue = useTransition(source);

const value = computed(() => formatNumber(unref(outputValue)));

watchEffect(() => {
	source.value = props.startVal;
});

watch([() => props.startVal, () => props.endVal], () => {
	if (props.autoplay) {
		start();
	}
});

onMounted(() => {
	props.autoplay && start();
});

function start() {
	run();
	source.value = props.endVal;
}

function reset() {
	source.value = props.startVal;
	run();
}

function run() {
	const linear = props.transition as keyof typeof TransitionPresets;

	outputValue = useTransition(source, {
		disabled,
		duration: props.duration,
		onFinished: () => emit("onFinished"),
		onStarted: () => emit("onStarted"),
		...(props.useEasing ? { transition: TransitionPresets[linear] } : {})
	});
}

function formatNumber(num: string | number) {
	if (!num && num !== 0) {
		return "";
	}
	const { decimals, decimal, separator, suffix, prefix } = props;
	num = Number(num).toFixed(decimals);
	num += "";

	const x = num.split(".");
	let x1 = x[0];
	const x2 = x.length > 1 ? decimal + x[1] : "";

	const rgx = /(\d+)(\d{3})/;
	if (props.cutting) {
		const stype = typeof separator;
		if (separator && !stype) {
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, "$1" + separator + "$2");
			}
		}
	} else {
		if (separator && !separator) {
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, "$1" + separator + "$2");
			}
		}
	}

	return prefix + x1 + x2 + suffix;
}
</script>
