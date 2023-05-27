<template>
	<header class="z-50 w-full">
		<div class="relative bg-ly-mian home-nav">
			<div class="navbar-pc">
				<div class="nav-box">
					<div class="logo">
						<a href="/" class="flex items-center">
							<span class="sr-only">MontPlex</span>
							<div class="flex items-center pl-2 font-semibold text-2xl text-block">
								<span>Mont</span>
								<span>plex</span>
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
						<div class="group nav-link" @click="handlePricing">
							<span>{{ t("home.nav.pricing") }}</span>
						</div>
						<a href="https://dev.montplex.com/docs/docs/overall/create" target="_blank" class="group nav-link">
							<span>{{ t("home.nav.docs") }}</span>
						</a>
						<div class="group nav-link" @click="$router.push('/about')">
							<span>{{ t("home.nav.about") }}</span>
						</div>

						<div class="group nav-link" @click="$router.push('/careers')">
							<span>{{ t("home.nav.careers") }}</span>
						</div>
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
			<div class="navbar-mb bg-[#050505]">
				<div class="nav-mb-box">
					<Transition
						name="m-meun"
						mode="out-in"
						enter-from-class="duration-200 ease-out"
						enter-active-class="opacity-0 scale-95"
						enter-to-class="opacity-200 scale-100"
						leave-class="duration-200 ease-in"
						leave-to-class="opacity-200 scale-100"
						leave-active-class="opacity-0 scale-95"
					>
						<div class="nav-list" v-if="open">
							<nav class="flex flex-col">
								<a @click.prevent="handlePricing" class="group nav-link">
									<span>{{ t("home.nav.pricing") }}</span>
								</a>

								<a href="https://dev.montplex.com/docs/docs/overall/create" target="_blank" class="group nav-link">
									<span>{{ t("home.nav.docs") }}</span>
									<span class="ml-2">
										<svgIcon icon="right45-write" class="!h-5 !w-5 ml-2 -rotate-45 group-hover:hidden" />
										<svgIcon icon="right45" class="hidden !h-5 !w-5 ml-2 -rotate-45 group-hover:block" />
									</span>
								</a>

								<div class="group nav-link" @click="$router.push('/about')">
									<span>{{ t("home.nav.about") }}</span>
								</div>
								<a @click.prevent="$router.push('/careers')" class="group nav-link">
									<span>{{ t("home.nav.careers") }}</span>
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
import { nextTick, ref } from "vue";
import { env } from "@/utils/util";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { scrollToAnchor } from "@/utils/util";

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

const { t, locale } = useI18n();

const open = ref(false),
	router = useRouter();

const handleConsole = () => {
	if (env().DEV) {
		router.push("/console");
	} else {
		window.location.href = env().VITE_API_URL + "/engula/auth0/login";
	}
};
</script>
