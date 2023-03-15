<template>
	<div class="bander">
		<home-page-header />
		<router-view />
		<home-page-footer />
	</div>
</template>

<script setup lang="ts">
import HomePageHeader from "@/components/Home/HomePageHeader.vue";
import HomePageFooter from "@/components/Home/HomePageFooter.vue";
</script>

<style lang="scss">
.bander {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	font-family: pop;
	font-size: 16px;
	color: #ffffff;
	background: #040319;
	background-image: url("@/assets/images/home-bg.png");
	background-repeat: no-repeat;
	background-size: 100%;
	&::before,
	&::after {
		position: absolute;
		display: block;
		width: 39rem;
		height: 39rem;
		content: "";
		background: rgb(43 18 105 / 60%);
		filter: blur(175px);
	}
	&::before {
		top: 60rem;
		right: -14rem;
		z-index: 1;
	}
	&::after {
		top: 60rem;
		left: -14rem;
		z-index: 1;
	}
}
</style>
