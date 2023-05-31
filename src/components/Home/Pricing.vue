<template>
	<section class="ly-box !pb-0" id="bander-pricing">
		<div class="top-rect"></div>
		<div class="content">
			<header>
				<h2 class="text-5xl inline-block font-bold text-block leading-normal">
					{{ $t("home.price.title") }}
				</h2>
				<p class="mt-2">
					<span class="inline-block text-xl text-white"> {{ $t("home.price.subTitle") }}</span>
				</p>
				<VectorsWrapper class="mt-4 mx-auto" />
			</header>
			<!-- <PricingNew /> -->
			<PricingChild />
			<!-- meat -->
			<div class="flex items-center flex-col text-white mb-28 mt-20" style="font-family: 'Airbnbcereal book'">
				<!-- 	<p>Read write throughput cost is $0.15 per GB per month.</p>
				<p>
					Each plan has
					<a
						target="_blank"
						rel="noopener"
						class="inline-flex items-center text-[#41a5f8] cursor-pointer hover:underline"
						href="https://docs.upstash.com/redis/overall/pricing#pay-as-you-go-plan-quotas"
					>
						quotas
					</a>
					for fair use of resources.
				</p> -->
				<p>
					See
					<a
						target="_blank"
						rel="noopener"
						class="inline-flex items-center text-[#41a5f8] cursor-pointer hover:underline"
						href="https://dev.montplex.com/docs/docs/overall/Pricing"
					>
						Limits
					</a>
					for more information.
				</p>
				<!-- <p>
					Talk to
					<a
						target="_blank"
						rel="noopener"
						class="inline-flex items-center text-[#41a5f8] cursor-pointer hover:underline"
						href="https://dev.montplex.com/docs/docs/overall/usecases"
					>
						us
					</a>
					for advanced needs.
				</p> -->
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import PricingNew from "./PricingNew.vue";
import PricingChild from "./PricingChild.vue";
</script>
