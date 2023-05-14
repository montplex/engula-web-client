<template>
	<div
		v-if="isExternal"
		:style="styleExternalIcon"
		class="svg-external-icon svg-icon"
		:class="className"
	/>
	<svg v-else class="svg-icon" :class="className" aria-hidden="true">
		<use :xlink:href="iconName" />
	</svg>
</template>

<script setup lang="ts">
import { computed } from "vue";
/**
 * 判断是否为外部资源
 */
function external(path: string) {
	return /^(https?:|mailto:|tel:)/.test(path);
}

const props = defineProps({
	// icon 图标
	icon: {
		type: String,
		required: true
	},
	// 图标类名
	className: {
		type: String,
		default: ""
	}
});

/**
 * 判断是否为外部图标
 */
const isExternal = computed(() => external(props.icon));
/**
 * 外部图标样式
 */
const styleExternalIcon = computed(() => ({
	mask: `url(${props.icon}) no-repeat 50% 50%`,
	"-webkit-mask": `url(${props.icon}) no-repeat 50% 50%`
}));
/**
 * 项目内图标
 */
const iconName = computed(() => `#icon-${props.icon}`);
</script>

<style scoped>
.svg-icon {
	overflow: hidden;
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	fill: currentColor;
}
.svg-external-icon {
	display: inline-block;
	background-color: currentColor;
	mask-size: cover !important;
}
/* 
.svg-icon { 
	 /* 因icon大小被设置为和字体大小一致，而span等标签的下边缘会和字体的基线对齐，故需设置一个往下的偏移比例，来纠正视觉上的未对齐效果 
    vertical-align: -0.1em;
		/* 定义元素的颜色，currentColor是一个变量，这个变量的值就表示当前元素的color值，如果当前元素未设置color值，则从父元素继承 
    fill: currentColor; 
    overflow: hidden;
 }*/
</style>
