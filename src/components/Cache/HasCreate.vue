<template>
	<el-dialog
		:modelValue="modelValue"
		width="26%"
		:lock-scroll="false"
		:show-close="false"
		class="br-8"
	>
		<div class="flex flex-col gap-2">
			<div>
				<svg
					width="4em"
					height="4em"
					viewBox="0 0 48 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g opacity="0.8">
						<path
							d="M17 38H31V33C31 29.134 27.866 26 24 26C20.134 26 17 29.134 17 33V38Z"
							fill="#f0f9eb"
							stroke="#67c23a"
							stroke-width="2"
						></path>
						<rect x="16" y="33" width="16" height="5" fill="#67c23a"></rect>
						<rect
							x="13"
							y="13"
							width="22"
							height="2"
							rx="1"
							fill="#67c23a"
						></rect>
						<rect
							x="13"
							y="37"
							width="22"
							height="2"
							rx="1"
							fill="#67c23a"
						></rect>
						<path
							d="M17 14H31V19C31 22.866 27.866 26 24 26C20.134 26 17 22.866 17 19V14Z"
							fill="white"
							stroke="#67c23a"
							stroke-width="2"
						></path>
						<path
							d="M28.874 23C28.4299 24.7252 26.8638 26 25 26H23C21.1362 26 19.5701 24.7252 19.126 23H28.874Z"
							fill="#67c23a"
							stroke="#67c23a"
							stroke-width="2"
						></path>
					</g>
				</svg>
			</div>
			<span class="font-semibold text-base">
				{{ lang ? "Cache is initializing" : "正在创建中..." }}
			</span>
			<span>
				{{
					lang
						? "Your cache will be ready once this becomesAVAILABLE"
						: "缓存服务将在创建后可用,请稍后..."
				}}
			</span>
			<div class="mt-4">
				<el-button
					type="primary"
					size="large"
					style="font-size: 14px"
					@click="$emit('update:modelValue', false)"
					>Got it!</el-button
				>
			</div>
		</div>
	</el-dialog>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const lang = computed(() => locale.value == "en");

defineProps({ modelValue: { type: Boolean, default: false } });
defineEmits(["update:modelValue"]);
</script>
