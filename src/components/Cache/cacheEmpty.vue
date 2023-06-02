<template>
	<div class="mt-6 sm:mt-10">
		<el-empty class="rounded-lg bg-gray-50 !p-14">
			<template #image>
				<svgIcon :icon="empty_info.icon" style="width: 100%; height: 90px" />
			</template>
			<template #description>
				<div class="mx-auto my-4 max-w-screen-md text-gray-600">
					<h3>{{ empty_info.title }}</h3>
					<div v-if="empty_info.msg" class="py-1">
						<p>{{ empty_info.msg }}</p>
					</div>
				</div>
				<el-button
					v-if="empty_info.btn"
					@click="
						() => {
							empty_info.cb;
						}
					"
					type="success"
					>{{ empty_info.btn }}</el-button
				>
			</template>
		</el-empty>

		<!-- <el-empty class="rounded-lg bg-gray-50 !p-14" v-else>
			<template #image>
				<svgIcon icon="empty-cache" style="width: 100%; height: 90px" />
			</template>
			<template #description>
				<div class="mx-auto my-4 max-w-screen-sm text-gray-600">
					<h3>{{ select != 1 ? "Data Not Found" : "Create a Cache Service" }}</h3>
					<div v-if="select == 1">
						<p>We manage the cache service for you and you only pay what you use.</p>
					</div>
				</div>
				<el-button v-if="select == 1" @click="$emit('btnClick')" type="success">Create cache service</el-button>
			</template>
		</el-empty>
		--></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { cacheStore } from "@/stores/cache";
import { userStore } from "@/stores/user";
import { useRouter } from "vue-router";

const store = cacheStore();
const user = userStore();

const props = defineProps({
	select: {
		type: [Number, String],
		default: 1
	}
});
const router = useRouter();
const emits = defineEmits(["btnClick"]);

const empty_info: any = computed(() => {
	let info = {};
	if (!user.info?.isVerified) {
		info = {
			icon: "email-verification",
			title: "Need Verify In Your Email",
			msg: "We have noticed that your account requires email verification. Please check your email inbox for further instructions on how to complete the verification process.",
			cb: () => router.push("/")
		};
	} else {
		if (!store.filterList?.length && props.select != 1) {
			info = {
				icon: "empty-cache",
				msg: "Data Not Found"
			};
		} else {
			info = {
				icon: "empty-cache",
				title: "Create a Cache Service",
				msg: "We manage the cache service for you and you only pay what you use.",
				btn: "Create cache service",
				cb: () => emits("btnClick")
			};
		}
	}
	return info;
});
</script>
