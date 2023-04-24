<template>
	<section className="py-14 bg-ly-mian">
		<div class="container mx-auto md:px-4 mt-[9rem]">
			<!-- <div class="mt-[9rem]">
				<div class="flex mt-16 justify-center items-stretch">
					<img width="110" class="" src="@/assets/images/main-logo.png" alt="" />
					<div class="flex items-center pl-2 font-semibold !text-8xl">
						<span class="text-block">Mont</span>
						<span class="text-block">plex</span>
					</div>
				</div>
			</div> -->
			<div class="flex mt-14 justify-center flex-col text-8xl gap-3 font-bold text-center">
				<!-- Serverless Cache for Global Business -->
				<div class="flex justify-center flex-col md:flex-row text-block">
					<div>
						<span class="text-block">
							{{ $t("home.banner.title") }}
						</span>
					</div>
					<!-- <div><span class="text-block">Serverless</span></div> -->
					<!-- <div><span class="pl-4">Cache</span></div> -->
				</div>
				<div></div>
				<div class="mb-8">
					<span class="text-block" style="background-image: linear-gradient(-120deg, #f926e1, #2ab5fb)">
						{{ $t("home.banner.subTitle") }}
					</span>
				</div>
				<!-- <h3 class="md:text-4xl text-[26px] text-white text-center"></h3> -->
			</div>

			<!--  <div
        class="md:w-[600px] mt-6 mx-auto ml-auto text-base text-center"
        style="color: 'color: hsla(0,0%,100%,.7)'"
      >
        <p className="pt-3 text-white text-center opacity-70 text-base ">
          On December 31st, Vue 2 will reach its end of life.
          <br />
          <br />
          But don't worry about migrating all your code to Vue 3 by then – get NES Vue 2 and stay on
          supported, secured Vue 2 for as long as you need.
        </p>
      </div> -->
			<div class="mt-16 mx-auto text-center">
				<a class="play-btn" href="https://dev.montplex.com" target="_blank">{{ $t("home.banner.button") }}</a>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(() => {
	// typeWriter();
});
/* function typeWriter() {
	const typeWriter = document.getElementById("typewriter-text");
	const text: string = "Global Business";
	typeWriter!.innerHTML = text;
	typeWriter!.style.setProperty("--characters", text.length.toString());
} */
</script>

<style></style>
