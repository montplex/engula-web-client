<template>
	<div class="container mx-auto relative z-10 md:!px-8 px-6">
		<section class="see">
			<div class="cardContent md:flex-row flex-col">
				<div class="cardItem gradient-border">
					<div class="cardBox card">
						<div class="icon_8">
							<svg class="logo24" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="20" y="20" width="60" height="60" rx="8" stroke="url(#grad1)" stroke-width="2" />

								<path
									d="M39 28L41.2451 34.9098H48.5106L42.6327 39.1803L44.8779 46.0902L39 41.8197L33.1221 46.0902L35.3673 39.1803L29.4894 34.9098H36.7549L39 28Z"
									stroke="url(#grad1)"
									stroke-width="2"
								/>
								<rect x="55" y="31" width="14" height="14" stroke="url(#grad1)" stroke-width="2" />
								<circle cx="39" cy="61" r="8" stroke="url(#grad1)" stroke-width="2" />
								<path d="M62 53L70.6603 68H53.3397L62 53Z" stroke="url(#grad1)" stroke-width="2" />
								<defs>
									<linearGradient id="grad1" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
										<stop stop-color="#F926E1" />
										<stop offset="1" stop-color="#2AB5FB" />
									</linearGradient>
								</defs>
							</svg>
						</div>
						<div class="meta">
							<div class="meta_title font-semibold text-[22px]">
								{{ $t("home.cards.list.redis") }}
							</div>
						</div>
					</div>
				</div>
				<div class="cardItem gradient-border">
					<div class="cardBox card">
						<div class="icon_8">
							<svg class="logo24" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="20" y="20" width="60" height="60" rx="8" stroke="url(#grad1)" stroke-width="2" />
								<path
									d="M50 37.5V62.5M43.75 56.6292L45.5812 58.0021C48.0208 59.8333 51.9771 59.8333 54.4187 58.0021C56.8604 56.1708 56.8604 53.2042 54.4187 51.3729C53.2 50.4563 51.6 50 50 50C48.4896 50 46.9792 49.5417 45.8271 48.6271C43.5229 46.7958 43.5229 43.8292 45.8271 41.9979C48.1312 40.1667 51.8687 40.1667 54.1729 41.9979L55.0375 42.6854M68.75 50C68.75 52.4623 68.265 54.9005 67.3227 57.1753C66.3805 59.4502 64.9993 61.5172 63.2582 63.2582C61.5172 64.9993 59.4502 66.3805 57.1753 67.3227C54.9005 68.265 52.4623 68.75 50 68.75C47.5377 68.75 45.0995 68.265 42.8247 67.3227C40.5498 66.3805 38.4828 64.9993 36.7417 63.2582C35.0006 61.5172 33.6195 59.4502 32.6773 57.1753C31.735 54.9005 31.25 52.4623 31.25 50C31.25 45.0272 33.2254 40.2581 36.7417 36.7417C40.2581 33.2254 45.0272 31.25 50 31.25C54.9728 31.25 59.7419 33.2254 63.2582 36.7417C66.7746 40.2581 68.75 45.0272 68.75 50Z"
									stroke="url(#grad1)"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<defs>
									<linearGradient id="grad1" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
										<stop stop-color="#F926E1" />
										<stop offset="1" stop-color="#2AB5FB" />
									</linearGradient>
								</defs>
							</svg>
						</div>
						<div class="meta">
							<div class="meta_title font-semibold text-[22px]">
								{{ $t("home.cards.list.effort") }}
							</div>
						</div>
					</div>
				</div>
				<div class="cardItem gradient-border">
					<div class="cardBox card">
						<div class="icon_8">
							<svg class="logo24" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M52.8338 16.1153V18.2605C52.8338 19.522 53.3927 20.7154 54.3634 21.5237L58.397 24.8851C60.0664 26.2787 60.4176 28.6996 59.2128 30.5125L57.2866 33.4056C56.2377 34.9775 54.6948 36.155 52.9017 36.7518L52.3617 36.9331C51.7522 37.1369 51.198 37.4784 50.7419 37.9311C50.2859 38.3838 49.9404 38.9355 49.7321 39.5434C49.5239 40.1513 49.4586 40.799 49.5412 41.4362C49.6239 42.0735 49.8524 42.6831 50.2089 43.2177C51.6025 45.3139 50.8472 48.154 48.5962 49.2795L38.6707 54.2422L40.2683 58.2419C40.5905 59.0542 40.6071 59.9559 40.3151 60.7796C40.0231 61.6032 39.4423 62.2931 38.6804 62.7211C37.9184 63.1491 37.0271 63.2862 36.1718 63.1071C35.3164 62.9279 34.5551 62.4446 34.029 61.7468L31.4645 58.325C31.0299 57.7458 30.4545 57.2873 29.7928 56.993C29.1312 56.6987 28.4054 56.5784 27.6842 56.6435C26.963 56.7086 26.2704 56.9569 25.6721 57.3649C25.0739 57.7729 24.5898 58.327 24.2659 58.9746L21.675 64.1564L19.3636 64.7342M52.8338 16.1191C46.8628 15.618 40.8655 16.7042 35.4496 19.2676C30.0337 21.831 25.3916 25.7805 21.9938 30.7158C18.5959 35.6512 16.563 41.397 16.1012 47.3711C15.6393 53.3452 16.7648 59.3352 19.3636 64.7342M52.8338 16.1191C58.7546 16.6129 64.4427 18.65 69.3308 22.0274C74.219 25.4048 78.1365 30.0044 80.6928 35.3678C83.2492 40.7311 84.3551 46.6709 83.9002 52.5949C83.4454 58.5189 81.4458 64.2202 78.1007 69.1305M78.1007 69.1305L77.4322 67.1325C76.8678 65.4406 75.7853 63.9691 74.3381 62.9266C72.8908 61.884 71.1523 61.3233 69.3687 61.3238H66.9968L65.7731 60.1001C65.1585 59.4844 64.4062 59.0237 63.5784 58.7559C62.7506 58.4881 61.8711 58.421 61.0122 58.5601C60.1534 58.6992 59.34 59.0405 58.639 59.5558C57.938 60.0711 57.3696 60.7457 56.9807 61.524L56.8447 61.7997C56.4738 62.5423 55.9526 63.1998 55.3141 63.7303C54.6757 64.2608 53.9339 64.6529 53.1359 64.8815L49.3969 65.9466C47.3196 66.5396 46.0204 68.5979 46.3754 70.7318L46.6511 72.3861C46.9533 74.1763 48.5018 75.4868 50.3146 75.4868C53.5098 75.4868 56.35 77.5339 57.3584 80.5667L58.1704 82.9952M78.0969 69.1342C73.3839 76.0464 66.2903 80.9808 58.1704 82.9952M58.1704 82.9952C50.5886 84.8736 42.5911 84.0834 35.5235 80.7577C28.4558 77.4319 22.7492 71.7735 19.3636 64.7342M64.1642 38.6629C64.1642 42.0469 62.6799 45.0835 60.327 47.1607"
									stroke="url(#grad1)"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<defs>
									<linearGradient id="grad1" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
										<stop stop-color="#F926E1" />
										<stop offset="1" stop-color="#2AB5FB" />
									</linearGradient>
								</defs>
							</svg>
						</div>
						<div class="meta">
							<div class="meta_title font-semibold text-[22px]">Any Sales</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container mx-auto py-20 px-6 text-white" id="bander-about">
				<div class="pb-24 w-full">
					<div class="flex flex-col">
						<div class="text-center">
							<span class="!text-white text-5xl mb-12">
								<span class="text-block">{{ $t("home.aboutTitle") }}</span>
							</span>
							<CuttingLine class="mt-5 mx-auto mb-6" />
						</div>

						<div class="py-6 md:w-3/4 w-full text-center mx-auto">
							<p class="leading-relaxed text-2xl max-w-4xl mx-auto">
								<!-- {{ $t("home.about") }} -->
								Montplex serverless cache, a cutting-edge technology, is specifically designed for cloud environments, providing
								dynamic scaling, pay-as-you-go pricing, and exceptional performance.
								<br />
								As the next-generation cache solution, Montplex is an excellent choice for those seeking a scalable,
								cost-efficient, and high-performing option.
							</p>
						</div>
					</div>
				</div>
				<div class="gradient-border division-line" style="padding: 1px"></div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import CuttingLine from "./vectors-wrapper.vue";
</script>

<style lang="scss" scoped>
.see {
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "Airbnbcereal", sans-serif;
	background-color: var(--my-bg-light);
	flex-direction: column;
}
.cardItem > .cardBox {
	&.card {
		@apply md:flex-col flex-row md:py-10 p-4;
		.icon_8 {
			@apply w-14 h-14 md:w-24 md:h-24;

			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 8px;
			background-image: linear-gradient(90.27deg, rgb(249 38 225 / 0.12) 0.22%, rgb(42 181 251 / 0.12) 99.76%);
		}
	}
}

@media (width <= 768px) {
	.cardItem > .cardBox {
		.icon_8 {
			background-image: none !important;
		}
		.meta {
			width: auto;
		}
	}
}

.meta {
	display: flex;
	flex-direction: column;
	grid-gap: 12px;
	align-items: center;
	width: 100%;

	&_title,
	&_body {
		line-height: 150%;
		color: var(--my-text-main-color);
		letter-spacing: 0;
	}
}
.division-line {
	padding: 1px 1px 0;
	width: 100%;
	height: 2px;
	max-height: 2px;
	border: 1px solid transparent;
	border-top-width: 0;
	box-shadow: 0 4px 64px 0 rgb(0 0 0 / 0.02);
}
</style>
