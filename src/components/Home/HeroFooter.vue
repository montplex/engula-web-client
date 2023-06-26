<template>
	<footer style="color: rgb(208, 214, 224)">
		<section class="container mx-auto px-12">
			<div class="gradient-border division-line" style="padding: 1px"></div>
			<div class="gap-6 justify-between md:flex pb-10 pt-20">
				<div class="flex-1">
					<div class="max-w-xs">
						<!-- <span class="text-block text-4xl">Montplex</span> -->
						<a href="/" class="logo">
							<span class="sr-only">MontPlex</span>
							<img src="/logo.svg" alt="Montplex" class="!h-9" />
						</a>
						<div class="pt-8">
							<span class="flex items-start gap-3">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<g clip-path="url(#clip0_48_1807)">
										<path
											d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z"
											fill="url(#paint0_linear_48_1807)"
										/>
									</g>
									<defs>
										<linearGradient
											id="paint0_linear_48_1807"
											x1="2"
											y1="11.3846"
											x2="22.0029"
											y2="11.5033"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#F926E1" />
											<stop offset="1" stop-color="#2AB5FB" />
										</linearGradient>
										<clipPath id="clip0_48_1807">
											<rect width="24" height="24" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<a href="mailto:support@montplex.com" target="_blank" rel="noopener noreferrer" class="text-block-22"
									>support@montplex.com</a
								>
							</span>
						</div>
					</div>
					<!-- <form class="pt-8" @submit.prevent="onSubmit">
						<label class="block pt-4 pb-2">Subscribe to Our Newsletters</label>
						<div class="flex items-center gap-x-3">
							<div class="relative">
								<svg
									class="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
									></path>
								</svg>
								<input
									type="email"
									id="email"
									v-model="email"
									required
									placeholder="Enter your email"
									class="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
								/>
							</div>
							<button class="play-btn sub">Subscribe</button>
						</div>
					</form> -->
				</div>
				<div class="gap-36 sm:flex pt-14 md:py-0 text-base" style="color: rgb(208, 214, 224)">
					<div class="meta-list" v-for="(item, idx) in linkList" :key="idx">
						<a
							@click.prevent="handleLinkClick(link)"
							v-for="(link, index) in item.items"
							:key="index"
							target="_blank"
							class="mb-7 block max-w-full cursor-pointer"
							><div style="line-height: 150%">
								<span class="linear-hover">{{ link.name }}</span>
							</div></a
						>
					</div>

					<div class="meta-list">
						<a href="https://twitter.com/MontplexDB" class="mb-7 block max-w-full hover:text-white" target="_blank">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								aria-hidden="true"
								focusable="false"
								class="text-2xl"
							>
								<path
									fill="currentColor"
									d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
								></path>
							</svg>
						</a>

						<a href="https://discord.gg/Z7AeCwVn" class="mb-7 block max-w-full hover:text-white" target="_blank">
							<svg role="img" width="24" height="24" class="text-2xl" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path
									fill="currentColor"
									d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<!-- TODO 隐私与服务条款 -->
			<div
				class="mt-8 py-6 items-center justify-between sm:flex"
				style="border-top: 1px solid rgba(255, 255, 255, 0.08); color: rgb(138, 143, 152)"
			>
				<div class="mt-4 sm:mt-0">&copy; 2023 Montplex All rights reserved.</div>
				<!-- <div class="mt-6 sm:mt-0">Privacy Policy | Terms of Service</div> -->
			</div>
		</section>
	</footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { scrollToAnchor } from "@/utils/util";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
function onSubmit(e: any) {
	// e.srcElement[0].value
}

// https://forms.gle/WV4bXKdXKZcUMskE7
const linkList = [
	{
		items: [
			{ name: "Home", herf: "/" },
			{ name: "Pricing", id: "bander-pricing" },
			{
				name: "Docs",
				herf: "https://dev.montplex.com/docs/docs/overall/create"
			},
			{
				name: "Blog",
				herf: "https://dev.montplex.com/docs/blog"
			}
		]
	},
	{
		items: [
			{ name: "About", path: "/about" },
			{ name: "Careers", path: "/careers" }
		]
	}
];

function handleLinkClick(item: any) {
	if (item.id) {
		handlePricing();
		return;
	}
	if (item.path) {
		router.push({ path: item.path });
		return;
	}
	if (item.herf) {
		window.open(item.herf);
		return;
	}
}

async function handlePricing() {
	const path = window?.location?.pathname;
	if (path === "/") {
		scrollToAnchor("bander-pricing");
	} else {
		await router.push({ path: "/", state: { mid: "bander-pricing" } });
		setTimeout(() => {
			scrollToAnchor(history.state.mid);
		}, 300);
	}
}
</script>

<style lang="scss">
.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
	fill: currentColor;
}

.play-btn .sub {
	@apply text-sm text-center text-white active:shadow-none shadow;
	padding: 0.5rem 16px !important;
	border-radius: 8px !important;
	color: #fff;
	transition: transform 0.25s ease;
	will-change: transform;
	margin: 0 !important;
	&:hover {
		transform: translateY(-4px) !important;
	}
}
</style>
