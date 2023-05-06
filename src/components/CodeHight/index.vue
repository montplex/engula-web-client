<template>
	<div class="code-hight overflow-hidden">
		<div class="group relative">
			<div
				class="absolute hidden right-2 top-4 z-10 items-center gap-2 group-hover:flex"
			>
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
			<highlight :language="language" :code="codes" class="py-2 rounded-lg" />
		</div>
	</div>
</template>

<script lang="ts">
import "highlight.js/styles/atom-one-dark.css";
// import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

export default {
	components: {
		highlight: hljsVuePlugin.component
	}
};
</script>

<script setup lang="ts">
import { handleCopyClick } from "@/utils/util";
import { computed, ref } from "vue";
import { cacheStore } from "@/stores/cache";
import { useRoute } from "vue-router";
interface IProps {
	code?: string;
	language?: string;
	eye?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
	code: "",
	language: "js",
	eye: true
});

const store = cacheStore();
const route = useRoute();
const isVisible = ref(false);

const codes = computed(() => {
	const desensitizationCode = props.code.replace(
		/\*\*\*\*\*\*\*\*\*\*/g,
		password.value
	);
	return isVisible.value ? desensitizationCode : props.code;
});

const password = computed(() => {
	return store.getTokenByid(route.params.id as any);
});

function copyCode() {
	const code = props.code.replace(/\*\*\*\*\*\*\*\*\*\*/g, password.value);
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
