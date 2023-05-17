<template>
	<section class="ly-box !pb-0" id="bander-pricing">
		<div class="top-rect"></div>
		<div class="content">
			<header>
				<h2 class="text-5xl inline-block font-bold text-block leading-normal">
					{{ $t("home.price.title") }}
				</h2>
				<p class="mt-2">
					<span class="inline-block text-xl text-white">
						{{ $t("home.price.subTitle") }}</span
					>
				</p>
				<VectorsWrapper class="mt-4 mx-auto" />
			</header>
			<PricingChild />
			<!-- meat -->
			<div
				class="flex items-center flex-col text-white mb-28"
				style="font-family: 'Airbnbcereal book'">
				<!-- <p>Read write throughput cost is $0.15 per GB per month.</p> -->
				<!-- 	<p>
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
				</p>
				<p>
					See
					<a
						target="_blank"
						rel="noopener"
						class="inline-flex items-center text-[#41a5f8] cursor-pointer hover:underline"
						href="https://docs.upstash.com/redis/overall/pricing"
					>
						pricing page
					</a>
					for more information.
				</p>
				<p>
					Talk to
					<a
						target="_blank"
						rel="noopener"
						class="inline-flex items-center text-[#41a5f8] cursor-pointer hover:underline"
						href="https://docs.upstash.com/docs/help/support"
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
import PricingChild from "./PricingChild.vue";
</script>

<style lang="scss" scoped>
.table-item {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	color: #ffffff;
	-webkit-box-align: center;
	-webkit-box-pack: center;
}

.ck-button {
	position: relative;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 60%;
	height: 2.8rem;
	font-size: 1rem;
	color: #ffffff;
	background: rgb(255 255 255 / 0.11);
	border-radius: 0.375rem;
	font-weight: 500;
	cursor: pointer;
	&:hover {
		background: rgb(255 255 255 / 0.2);
	}

	&.login {
		background-image: linear-gradient(90deg, #f926e1, #2ab5fb);
		&:hover {
			background-image: linear-gradient(90deg, #2ab5fb, #f926e1);
		}
	}
}
</style>
