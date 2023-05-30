<template>
	<el-dialog
		:modelValue="modelValue"
		width="26%"
		:lock-scroll="false"
		:show-close="false"
		class="br-8"
		:before-close="() => $emit('update:modelValue', false)"
	>
		<template #header>
			<div class="flex">
				<i-ep:warning-filled class="text-2xl text-[#faad14]" />
				<h4 class="font-semibold ml-2">
					{{ lang ? "You can create 5 cache services in the free layer." : "您最多可创建5个缓存服务。" }}
				</h4>
			</div>
		</template>
		<div class="text-info-88 pl-9 text-start pb-0 text-sm" v-if="lang">
			You can <a class="is-link" href="#">add a payment method</a> to upgrade your plan and create more cache services.
		</div>
		<div class="text-info-88 pl-9 text-start pb-0 text-sm" v-else>
			如果您需要更多的缓存服务，请先<a class="is-link" href="#">升级您的账户。</a>
		</div>
		<template #footer>
			<span class="dialog-footer">
				<el-button color="#67c23a" style="color: #ffffff" @click="$emit('update:modelValue', false)">
					{{ $t("msg.ok") }}
				</el-button>
			</span>
		</template>
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
