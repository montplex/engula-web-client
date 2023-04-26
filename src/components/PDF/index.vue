<template>
	<div id="mypdf"></div>
</template>

<script setup lang="ts">
import PDFObject from "pdfobject";
import { nextTick } from "vue";

const props = defineProps({ pdf: { type: String, required: true } });

nextTick(() => {
	let url = "https://soft.xiaoz.org/office/hee%20hee.pdf";
	const baseUrl = props.pdf.trim().length > 0 ? props.pdf : url;
	PDFObject.embed(baseUrl, "#mypdf");
});

</script>

<style scoped>
.pdfobject-container {
	height: 100vh;
}
</style>
