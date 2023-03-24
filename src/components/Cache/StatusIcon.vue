<template>
	<el-icon class="is-loading" color="#00b173" size="14" v-if="status == '0'">
		<i-ep:loading />
	</el-icon>
	<span class="s-running mr-1" v-if="status == '1'"></span>
</template>

<script setup lang="ts">
defineProps({
	status: {
		type: [String, Number],
		default: "0"
	}
});
</script>

<style lang="scss"></style>
