<template>
	<div class="mt-6 sm:mt-10">
		<el-empty class="rounded-lg bg-gray-50 !p-14">
			<template #image>
				<svgIcon icon="empty-cache" style="width: 100%; height: 90px" />
			</template>
			<template #description>
				<div class="mx-auto my-4 max-w-screen-sm text-gray-600">
					<h3>Create a Cache Service</h3>
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
defineEmits(["btnClick"]);
</script>

<style lang="scss"></style>
