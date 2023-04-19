<template>
	<div class="container mx-auto py-20 px-6 text-white" id="bander-about">
		<div class="pb-24 w-full">
			<!-- <div class="md:w-3/4 w-full">
				<div class="inline-flex items-center gap-10 md:flex-row-reverse flex-col">
					<div class="">
						<img width="320" src="@/assets/images/about-logo.png" alt="" />
					</div>
					<div class="flex flex-col">
						<span class="!text-white text-5xl mb-12">
							<span class="text-block">The Future of Cache</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="inline-block w-8 h-8 mb-8 pl-2"
								viewBox="0 0 975.036 975.036"
							>
								<path
									d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
								></path>
							</svg>
						</span>

						<p class="leading-relaxed text-xl w-full md:w-[720px]">
							{{ $t("home.about") }}
						</p>
					</div>
				</div>
			</div> -->
			<!-- <img width="320" src="@/assets/images/about-logo.png" alt="" /> -->
			<div class="flex flex-col">
				<div class="text-center">
					<span class="!text-white text-5xl mb-12">
						<span class="text-block">The Future of Cache</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="inline-block w-8 h-8 mb-8 pl-2"
							viewBox="0 0 975.036 975.036"
						>
							<path
								d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
							></path>
						</svg>
					</span>
					<CuttingLine class="mt-2 mx-auto mb-6" />
				</div>
				<!-- <span class="inline-block h-1 w-10 rounded bg-indigo-500 mb-12"></span> -->

				<div class="py-6 md:w-3/4 w-full text-center mx-auto">
					<p class="leading-relaxed text-2xl">
						{{ $t("home.about") }}
					</p>
				</div>
			</div>
		</div>
		<div class="gradient-border division-line"></div>
		<!-- <Team /> -->
	</div>
</template>

<script setup lang="ts">
// import Team from "./Team.vue";
import CuttingLine from "./vectors-wrapper.vue";
</script>

<style lang="scss" scoped></style>
