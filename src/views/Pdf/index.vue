vue
<template>
	<div class="pdf-page">
		<div id="example1"></div>
	</div>
</template>

<script setup lang="ts">
import * as PDFObject from "pdfobject";
import { onMounted } from "vue";

onMounted(() => {
	console.log(PDFObject);
	PDFObject.embed(
		"https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
		"#example1"
	);
});
</script>

<style lang="scss">
pdf-page {
	height: 100vh;
	width: 100vw;
	.pdfobject-container {
		height: 100vh;
		width: 100vw;
	}
}
</style>
