<template>
	<el-icon class="is-loading" color="#00b173" size="14" v-if="status == '0'">
		<i-ep:loading />
	</el-icon>
	<span class="s-running mr-1" v-if="status == '1'"></span>
	<el-icon color="#f16538" size="20" v-if="status == '-10'">
		<svg-icon icon="cancle" />
	</el-icon>
</template>

<script setup lang="ts">
defineProps({
	status: {
		type: [String, Number],
		default: ""
	}
});
</script>

<style lang="scss"></style>
