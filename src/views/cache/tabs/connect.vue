<!-- eslint-disable vue/require-prop-types -->
<template>
	<div class="mt-8 grid grid-cols-1 gap-8" v-if="cache">
		<div class="section-connect">
			<div class="col-span-1">
				<h3 class="text-xl font-normal">{{ $t("redis.connect") }}</h3>
			</div>
			<div class="overflow-x-auto sm:overflow-hidden">
				<el-radio-group v-model="tabPosition" size="large" fill="#21cc93">
					<el-radio-button
						v-for="item in codeRadioGroup"
						:key="item.name"
						:label="item.com"
						>{{ item.name }}</el-radio-button
					>
				</el-radio-group>
			</div>
			<Component :is="tabPosition" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";

import { ref, watchEffect, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { cacheStore } from "@/stores/cache";
import { cacheOne } from "@/api/cache";
import { ICacheOneRes } from "#/cache";

import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const lang = computed(() => locale.value == "en");

let codeRadioGroup = reactive([
	{ name: "Redis-cli", com: "CodeRedis" },
	{ name: "Node", com: "CodeNode" },
	{ name: "PHP", com: "CodePhp" },
	{ name: "Python", com: "CodePython" },
	{ name: "Java", com: "CodeJava" },
	{ name: "Go", com: "CodeGo" },
	{ name: "Docker", com: "CodeDocker" }
]);
const tabPosition = ref("CodeRedis"),
	route = useRoute(),
	router = useRouter(),
	store = cacheStore(),
	delVisible = ref(false),
	isdel = ref(true),
	delLoading = ref(false),
	cache = ref<ICacheOneRes>({} as ICacheOneRes);

watchEffect(async () => {
	cache.value = store.oneCache;
});
</script>

<script lang="ts">
import CodeRedis from "@/components/Cache/SampleCode/Redis.vue";
import CodeNode from "@/components/Cache/SampleCode/Node.vue";
import CodePhp from "@/components/Cache/SampleCode/Php.vue";
import CodePython from "@/components/Cache/SampleCode/Python.vue";
import CodeJava from "@/components/Cache/SampleCode/Java.vue";
import CodeGo from "@/components/Cache/SampleCode/Go.vue";
import CodeDocker from "@/components/Cache/SampleCode/Docker.vue";

export default {
	components: {
		// eslint-disable-next-line vue/no-unused-components
		CodeRedis,
		// eslint-disable-next-line vue/no-unused-components
		CodeNode,
		// eslint-disable-next-line vue/no-unused-components
		CodePhp,
		// eslint-disable-next-line vue/no-unused-components
		CodePython,
		// eslint-disable-next-line vue/no-unused-components
		CodeJava,
		// eslint-disable-next-line vue/no-unused-components
		CodeGo,
		// eslint-disable-next-line vue/no-unused-components
		CodeDocker
	}
};
</script>
<style lang="scss">
.copy-text {
	font-size: 15px;
	// font-weight: 550;
	line-height: 1.9rem;
	svg {
		&:focus {
			opacity: 0.7;
			outline: none !important;
		}

		font-size: 16px;
		color: #1677ff;
	}
}
.svg-root {
	display: inline-block;
	flex-shrink: 0;
	width: 1em;
	height: 1em;
	font-size: 1.25rem;
	line-height: 1.75rem;
	color: currentColor;
	user-select: none;
	fill: currentcolor;
	transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.info-warning {
	padding: 8px 12px;
	font-size: 14px;
	line-height: 1.6rem;
	color: rgb(0 0 0 / 0.88);
	background-color: #fffbe6;
	border: 1px solid #ffe58f;
	border-radius: 8px;
}
.c-tag {
	code {
		padding-block: 0.2em 0.1em;
		padding-inline: 0.6em;
		font-size: 14px;
		background: rgb(150 150 150 / 0.1);
		border: 1px solid rgb(100 100 100 / 0.2);
		border-radius: 3px;
	}
	strong {
		font-weight: 600;
		color: #111111;
	}
}
</style>
