<template>
	<div class="code-hight overflow-hidden">
		<div class="group relative">
			<div class="absolute hidden right-2 top-4 z-10 items-center gap-2 group-hover:flex">
				<button
					@click="isVisible = !isVisible"
					class="!flex !h-8 !w-8 cursor-pointer items-center justify-center rounded-md border-0 bg-white bg-opacity-30 text-white hover:bg-opacity-50"
				>
					<svgIcon :icon="isVisible ? 'eye-off' : 'eye'" class="svg-root" />
				</button>

				<el-tooltip effect="dark" placement="right" content="Copy">
					<button
						@click="copyCode"
						class="!flex !h-8 !w-8 cursor-pointer items-center justify-center rounded-md border-0 bg-white bg-opacity-30 text-white hover:bg-opacity-50"
					>
						<svgIcon icon="copy" class="svg-root" />
					</button>
				</el-tooltip>
			</div>
			<!-- code -->
			<highlight language="javascript" :code="codes" class="py-2 rounded-lg" />
		</div>
	</div>
</template>

<script lang="ts">
import "highlight.js/styles/atom-one-dark.css";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";
export default {
	components: {
		highlight: hljsVuePlugin.component
	}
};
</script>

<script setup lang="ts">
import { handleCopyClick } from "@/utils/util";
import { computed, ref } from "vue";

interface IProps {
	code?: string;
	language?: string;
	eye?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
	code: "",
	language: "shell",
	eye: true
});
const isVisible = ref(false);

const codes = computed(() => {
	const desensitizationCode = props.code.replace(/\*\*\*\*\*\*\*\*\*\*/g, "63246934340262050070490945954639");
	return isVisible.value ? desensitizationCode : props.code;
});

function copyCode() {
	const code = props.code.replace(/\*\*\*\*\*\*\*\*\*\*/g, "63246934340262050070490945954639");
	handleCopyClick(code);
}
</script>

<style lang="scss">
.code-hight {
	pre code.hljs {
		border-radius: 8px;
	}
}
</style>
