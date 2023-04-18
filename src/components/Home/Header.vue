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
							<span>{{ t("home.nav.docs") }}</span>
							<span class="ml-2">
								<svgIcon icon="right45-write" class="!h-5 !w-5 ml-2 -rotate-45 group-hover:hidden" />
								<svgIcon icon="right45" class="hidden !h-5 !w-5 ml-2 -rotate-45 group-hover:block" />
							</span>
						</a>
						<a href="https://dev.montplex.com/docs/blog" target="_blank" class="group nav-link">
							<span>{{ t("home.nav.blog") }}</span>
							<span class="ml-2">
								<svgIcon icon="right45-write" class="!h-5 !w-5 ml-2 -rotate-45 group-hover:hidden" />
								<svgIcon icon="right45" class="hidden !h-5 !w-5 ml-2 -rotate-45 group-hover:block" />
							</span>
						</a>
						<div class="group nav-link" @click="scrollToAnchor('bander-about')">
							<span>{{ t("home.nav.about") }}</span>
						</div>
						<a href="https://dev.montplex.com/docs" target="_blank" class="group nav-link">
							<span>{{ t("home.nav.careers") }}</span>
							<span class="ml-2" target="_blank">
								<svgIcon icon="right45-write" class="!h-5 !w-5 ml-2 -rotate-45 group-hover:hidden" />
								<svgIcon icon="right45" class="hidden !h-5 !w-5 ml-2 -rotate-45 group-hover:block" />
							</span>
						</a>
					</nav>
					<div class="conlose">
						<div>
							<el-dropdown trigger="click">
								<span class="text-white focus-visible:outline-none mr-10">
									<svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="30" height="30" data-v-12008bb2="">
										<path
											fill="currentColor"
											d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"
										></path>
									</svg>
								</span>
								<template #dropdown>
									<el-dropdown-menu>
										<el-dropdown-item @click="handleLang('en')">English</el-dropdown-item>
										<el-dropdown-item @click="handleLang('zh_CN')">简体中文</el-dropdown-item>
									</el-dropdown-menu>
								</template>
							</el-dropdown>
						</div>
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
									<span>{{ t("home.nav.docs") }}</span>
									<span class="ml-2">
										<svgIcon icon="right45-write" class="!h-5 !w-5 ml-2 -rotate-45 group-hover:hidden" />
										<svgIcon icon="right45" class="hidden !h-5 !w-5 ml-2 -rotate-45 group-hover:block" />
									</span>
								</a>
								<a href="https://dev.montplex.com/docs/blog" target="_blank" class="group nav-link">
									<span>{{ t("home.nav.blog") }}</span>
									<span class="ml-2">
										<svgIcon icon="right45-write" class="!h-5 !w-5 ml-2 -rotate-45 group-hover:hidden" />
										<svgIcon icon="right45" class="hidden !h-5 !w-5 ml-2 -rotate-45 group-hover:block" />
									</span>
								</a>
								<div class="group nav-link" @click="scrollToAnchor('bander-about')">
									<span>{{ t("home.nav.about") }}</span>
								</div>
								<a href="https://dev.montplex.com/docs/support" target="_blank" class="group nav-link">
									<span>{{ t("home.nav.careers") }}</span>
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
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

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

function handleLang(val: string) {
	locale.value = val;
	console.log(val, locale.value);
	// localStorage.setItem('language', val)
}
</script>

<style lang="scss"></style>
