<template>
	<div class="mt-6 sm:mt-10">
		<el-empty class="rounded-lg bg-gray-50 !p-14" v-if="!store.filterList?.length && !user.info?.canCreateCacheService">
			<template #image>
				<svgIcon icon="cache-error" style="width: 100%; height: 90px" />
			</template>
			<template #description>
				<div class="mx-auto my-4 max-w-screen-sm text-gray-600">
					<h3>Network service interruption.</h3>
					<div>
						<p>Service maintenance in progress, please be patient and wait...</p>
					</div>
				</div>
				<el-button @click="$router.push('/')" type="success">Back Home</el-button>
			</template>
		</el-empty>

		<el-empty class="rounded-lg bg-gray-50 !p-14" v-else>
			<template #image>
				<svgIcon icon="empty-cache" style="width: 100%; height: 90px" />
			</template>
			<template #description>
				<div class="mx-auto my-4 max-w-screen-sm text-gray-600">
					<h3>Create a Cache Service</h3>
					<div>{{ store.filterList }} {{ user.info?.canCreateCacheService }}</div>
					<div>
						<p>We manage the cache service for you and you only pay what you use.</p>
					</div>
				</div>
				<el-button @click="$emit('btnClick')" type="success">Create cache service</el-button>
			</template>
		</el-empty>
	</div>
</template>

<script setup lang="ts">
import { cacheStore } from "@/stores/cache";
import { userStore } from "@/stores/user";

const store = cacheStore();
const user = userStore();

defineEmits(["btnClick"]);
</script>

<style lang="scss"></style>
