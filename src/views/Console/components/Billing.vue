<script setup lang="ts"></script>

<template>
	<div class="bg-gray-100 py-8 dark:bg-gray-800">
		<div class="container mx-auto !max-w-screen-xl px-4">
			<h3 class="m-0 text-base">Usage For Current Billing</h3>
			<div class="mt-4 grid gap-2 sm:grid-cols-3 sm:gap-4">
				<div class="rounded-lg px-5 pt-4 pb-3 shadow-sm bg-white dark:bg-gray-900">
					<el-statistic title="Requests" :value="62" />
				</div>
				<div class="rounded-lg px-5 pt-4 pb-3 shadow-sm bg-white dark:bg-gray-900">
					<el-statistic title="Average Storage" suffix="T" :value="2.5" />
				</div>
				<div class="rounded-lg px-5 pt-4 pb-3 shadow-sm bg-white dark:bg-gray-900">
					<el-statistic title="Cost" prefix="$" :value="99.01" />
				</div>
			</div>
		</div>
	</div>
</template>
