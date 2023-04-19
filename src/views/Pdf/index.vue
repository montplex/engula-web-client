<template>
	<div>
		<el-button type="primary" @click="handleClick">打开PDF</el-button>
	</div>
</template>

<script setup lang="ts">
function handleClick() {
	window.open("/static/pdf/web/viewer.html");
}
</script>

<style lang="scss"></style>

<!-- <template>
	<VuePdf v-for="page in numOfPages" :key="page" :src="pdfSrc" :page="page" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { VuePdf, createLoadingTask } from "vue3-pdfjs/esm";
import { VuePdfPropsType } from "vue3-pdfjs/components/vue-pdf/vue-pdf-props"; // Prop type definitions can also be imported

const pdfSrc = ref<VuePdfPropsType["src"]>(
	"https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
);
const numOfPages = ref(0);

onMounted(() => {
	const loadingTask = createLoadingTask(pdfSrc.value);
	loadingTask.promise.then((pdf: any) => {
		numOfPages.value = pdf.numPages;
	});
});
</script>

<script lang="ts">
export default {
	components: { VuePdf }
};
</script>

<style lang="scss"></style> -->
