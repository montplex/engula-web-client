<template>
	<!-- sticky top-0 -->
	<header class="z-50 w-full">
		<div class="relative bg-ly-mian home-nav">
			<div class="navbar-pc">
				<div class="nav-box">
					<div class="logo">
						<a href="#" class="flex items-center">
							<span class="sr-only">MontPlex</span>
							<img src="@/assets/images/main-logo.png" alt="" />
							<div class="flex items-center pl-2">
								<span class="text-white font-semibold text-2xl">Mont</span>
								<span class="text-block font-semibold !text-2xl">plex</span>
							</div>
						</a>
					</div>

					<div class="check-menu md:hidden">
						<button @click="open = !open" type="button">
							<span class="sr-only">Close menu</span>
							<svg
								v-if="!open"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>

							<svg
								v-if="open"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<nav class="nav-group">
						<a href="https://dev.montplex.com/docs" target="_blank" class="group nav-link">
							<span>Docs</span>
							<span class="ml-2">
								<svgIcon icon="right45-write" class="!h-5 !w-5 ml-2 -rotate-45 group-hover:hidden" />
								<svgIcon icon="right45" class="hidden !h-5 !w-5 ml-2 -rotate-45 group-hover:block" />
							</span>
						</a>
						<a href="https://dev.montplex.com/docs/blog" target="_blank" class="group nav-link">
							<span>Blog</span>
							<span class="ml-2">
								<svgIcon icon="right45-write" class="!h-5 !w-5 ml-2 -rotate-45 group-hover:hidden" />
								<svgIcon icon="right45" class="hidden !h-5 !w-5 ml-2 -rotate-45 group-hover:block" />
							</span>
						</a>
						<div class="group nav-link" @click="scrollToAnchor('bander-about')">
							<span>About</span>
						</div>
						<a href="https://dev.montplex.com/docs" target="_blank" class="group nav-link">
							<span>Careers</span>
							<span class="ml-2" target="_blank">
								<svgIcon icon="right45-write" class="!h-5 !w-5 ml-2 -rotate-45 group-hover:hidden" />
								<svgIcon icon="right45" class="hidden !h-5 !w-5 ml-2 -rotate-45 group-hover:block" />
							</span>
						</a>
					</nav>
					<div class="conlose">
						<div class="cos-btn-home">
							<div class="button-space items-center" @click="handleConsole">
								<div class="text-block">Console</div>
								<svgIcon icon="btn-right" class="!h-6 !w-6" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="navbar-mb">
				<div class="nav-mb-box">
					<Transition
						name="m-meun"
						mode="out-in"
						enter-class="duration-200 ease-out"
						enter-active-class="opacity-0 scale-95"
						enter-to-class="opacity-200 scale-100"
						leave-class="duration-200 ease-in"
						leave-to-class="opacity-200 scale-100"
						leave-active-class="opacity-0 scale-95"
					>
						<div class="nav-list" v-if="open">
							<nav class="flex flex-col">
								<a href="https://dev.montplex.com/docs" target="_blank" class="group nav-link">
									<span>Docs</span>
									<span class="ml-2">
										<svgIcon icon="right45-write" class="!h-5 !w-5 ml-2 -rotate-45 group-hover:hidden" />
										<svgIcon icon="right45" class="hidden !h-5 !w-5 ml-2 -rotate-45 group-hover:block" />
									</span>
								</a>
								<a href="https://dev.montplex.com/docs/blog" target="_blank" class="group nav-link">
									<span>Blog</span>
									<span class="ml-2">
										<svgIcon icon="right45-write" class="!h-5 !w-5 ml-2 -rotate-45 group-hover:hidden" />
										<svgIcon icon="right45" class="hidden !h-5 !w-5 ml-2 -rotate-45 group-hover:block" />
									</span>
								</a>
								<div class="group nav-link" @click="scrollToAnchor('bander-about')">
									<span>About</span>
								</div>
								<a href="https://dev.montplex.com/docs/support" target="_blank" class="group nav-link">
									<span>Careers</span>
									<span class="ml-2">
										<svgIcon icon="right45-write" class="!h-5 !w-5 ml-2 -rotate-45 group-hover:hidden" />
										<svgIcon icon="right45" class="hidden !h-5 !w-5 ml-2 -rotate-45 group-hover:block" />
									</span>
								</a>
							</nav>
							<div class="cos-btn-home">
								<div class="button-space items-center justify-center">
									<div class="text-block" @click="handleConsole">Console</div>
									<svgIcon icon="btn-right" class="!h-5 !w-5" />
								</div>
							</div>
						</div>
					</Transition>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { env } from "@/utils/util";
import { useRouter } from "vue-router";

let open = ref(false);
const router = useRouter();

const handleConsole = () => {
	if (env().DEV) {
		router.push("/console");
	} else {
		window.location.href = env().VITE_API_URL + "/engula/auth0/login";
	}
};

// 平滑滚动
function scrollToAnchor(anchorName: string) {
	if (!anchorName) return;
	// 找到锚点
	const anchorElement = document.getElementById(anchorName);
	// 如果对应id的锚点存在，就跳转到锚点
	if (!anchorElement) return;
	anchorElement.scrollIntoView({ behavior: "smooth", block: "start" });
}
</script>

<style lang="scss"></style>
