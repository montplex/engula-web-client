<template>
	<div class="py-6">
		<div class="rounded-lg border border-gray-200 p-4 sm:px-8 sm:py-4">
			<div class="flex">
				<svg-icon icon="password" class="!h-8 !w-8 text-gray-600" />
				<ul class="flex flex-1 flex-col pl-7 text-info-8">
					<li class="flex items-center">
						<h3 class="text-base">Access Token:</h3>
						<span class="pl-2 text-info-8">63246934340262050070490945954639</span>
					</li>
					<li class="text-info-8 py-1">Added on {{ day }}</li>
					<li class="flex items-center">
						<h3 class="text-base">Mode:</h3>
						<span class="pl-2 text-info-8">rw</span>
					</li>
				</ul>
				<div class="flex items-center gap-6">
					<el-button type="success">Update</el-button>
					<el-button type="warning" class="del-btn">Delete</el-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { dayjs } from "element-plus";
import { computed } from "vue";

const day = computed(() => dayjs().format("MMM D, YYYY"));

const props = defineProps(["id"]);
console.log(props.id);
</script>

<style lang="scss">
.el-button {
	&.del-btn {
		background-color: #f6f8fa;
		border-color: rgba(27, 31, 36, 0.15);
		color: #dc3545;
		&:hover {
			border-color: #dc3545;
			opacity: 0.9;
			background-color: #dc3545;
			color: #f6f8fa;
		}
	}
}
</style>
