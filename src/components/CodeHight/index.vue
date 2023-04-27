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
			<highlight :language="language" :code="codes" class="py-2 rounded-lg" />
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
	const desensitizationCode = props.code.replace(/\*\*\*\*\*\*\*\*\*\*/g, password.value);
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

/*!
  Theme: OneDark
  Author: Lalit Magant (http://github.com/tilal6991)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
pre code.hljs {
	display: block;
	overflow-x: auto;
	padding: 1em;
}
code.hljs {
	padding: 3px 5px;
}
.hljs {
	color: #abb2bf;
	background: #282c34;
}
.hljs ::selection,
.hljs::selection {
	background-color: #3e4451;
	color: #abb2bf;
}
.hljs-comment {
	color: #545862;
}
.hljs-tag {
	color: #565c64;
}
.hljs-operator,
.hljs-punctuation,
.hljs-subst {
	color: #abb2bf;
}
.hljs-operator {
	opacity: 0.7;
}
.hljs-bullet,
.hljs-deletion,
.hljs-name,
.hljs-selector-tag,
.hljs-template-variable,
.hljs-variable {
	color: #e06c75;
}
.hljs-attr,
.hljs-link,
.hljs-literal,
.hljs-number,
.hljs-symbol,
.hljs-variable.constant_ {
	color: #d19a66;
}
.hljs-class .hljs-title,
.hljs-title,
.hljs-title.class_ {
	color: #e5c07b;
}
.hljs-strong {
	font-weight: 700;
	color: #e5c07b;
}
.hljs-addition,
.hljs-code,
.hljs-string,
.hljs-title.class_.inherited__ {
	color: #98c379;
}
.hljs-built_in,
.hljs-doctag,
.hljs-keyword.hljs-atrule,
.hljs-quote,
.hljs-regexp {
	color: #56b6c2;
}
.hljs-attribute,
.hljs-function .hljs-title,
.hljs-section,
.hljs-title.function_,
.ruby .hljs-property {
	color: #61afef;
}
.diff .hljs-meta,
.hljs-keyword,
.hljs-template-tag,
.hljs-type {
	color: #c678dd;
}
.hljs-emphasis {
	color: #c678dd;
	font-style: italic;
}
.hljs-meta,
.hljs-meta .hljs-keyword,
.hljs-meta .hljs-string {
	color: #be5046;
}
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
	font-weight: 700;
}
</style>
