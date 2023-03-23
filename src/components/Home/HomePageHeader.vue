<template>
	<header class="home-page-header">
		<nav class="home-container nav-box">
			<div class="flex">
				<a class="-m-1.5 p-1.5" @click.prevent="router.push('/')">
					<span class="sr-only">Montplex</span>
					<img class="h-auto header-logo" src="@/assets/images/logo.png" alt="Montplex" />
				</a>
			</div>
			<div class="flex lg:hidden text-white" @click.stop="menuOpen('menu')">
				<button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
				</button>
			</div>
			<nav class="nav-pc">
				<a v-for="item in navList" :key="item.name" @click.prevent class="_item">
					<span class="pr-1" @click="HandelNavClick(item)">{{ item.name }}</span>
					<svg class="h-5 w-5" viewBox="0 0 24 24" v-if="item.name == 'DOCS'">
						<path
							fill="currentColor"
							d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12l7-7z"
						/>
					</svg>
				</a>
			</nav>
			<div class="console-btn">
				<button @click.stop="handleConsole">CONSOLE</button>
			</div>
		</nav>
		<!-- Mobile menu, show/hide based on menu open state. -->
		<div class="lg:hidden" v-show="open" role="dialog" aria-modal="true">
			<div class="mb-menu">
				<div class="header">
					<div class="-m-1.5 p-1.5">
						<span class="sr-only">Montplex</span>
						<img class="h-auto w-40" src="@/assets/images/logo.png" alt="Montplex" />
					</div>
					<!-- Close menu -->
					<button type="button" class="-m-2.5 rounded-md p-2.5" @click.stop="menuOpen('close')">
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root text-white">
					<div class="-my-6">
						<div class="nav-mb">
							<a v-for="item in navList" :key="item.name" @click.prevent class="item">
								<span class="pr-1" @click="HandelNavClick(item)">{{ item.name }}</span>
								<svg class="h-4 w-4" viewBox="0 0 24 24" v-if="item.name == 'DOCS'">
									<path
										fill="currentColor"
										d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12l7-7z"
									/>
								</svg>
							</a>
						</div>
						<div class="py-6 w-full console-btn">
							<button @click.stop="handleConsole">CONSOLE</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import { env } from "@/utils/util";
import { ref } from "vue";
import { RouteLocationRaw, useRouter } from "vue-router";

type TNav = {
	name: string;
	url?: RouteLocationRaw;
	herf?: string | URL;
};

let open = ref(false);
const router = useRouter();

const navList: TNav[] = [
	{ name: "HOME", url: "/" },
	{ name: "DOCS", herf: "http://www.baidu.com" },
	{ name: "BLOG", herf: "http://www.baidu.com" },
	{ name: "ABOUT", url: "/about" },
	{ name: "CARREERS", url: "/careers" }
];

const menuOpen = (str: string) => {
	open.value = !open.value;
};

const HandelNavClick = (item: TNav) => {
	item.herf ? window.open(item.herf) : router.push(item.url!);
	if (open.value) open.value = false;
};

const handleConsole = () => {
	if (env().DEV) {
		router.push("/console");
	} else {
		window.location.href = env().VITE_API_URL + "/engula/auth0/login";
	}
};
</script>

<style lang="scss">
.home-page-header {
	@apply bg-transparent w-full left-0 top-0;
	z-index: 99999;
	.nav-box {
		@apply mx-auto flex max-w-full items-center justify-between py-7 px-6 lg:px-0;
	}

	.nav-pc {
		@apply hidden lg:flex lg:flex-1 justify-center lg:gap-x-10 text-white text-xl text-center duration-300 ease-in;
		._item {
			display: flex;
			align-items: center;
			color: rgb(255 255 255 / 64%);
			&:hover {
				color: #712dff;
				text-decoration: underline;
				text-decoration: underline;
			}
		}
	}
	.console-btn {
		@apply hidden lg:flex lg:justify-end;
		button {
			@apply text-sm font-semibold hover:opacity-80 duration-300;
			width: 9rem;
			height: 3rem;
			color: #ffffff;
			font-size: 16px;
			text-align: center;
			cursor: pointer;
			background: linear-gradient(180deg, #642dff 0%, #892dff 100%);
			border-radius: 0.5rem;
		}
	}

	.mb-menu {
		@apply fixed inset-y-0 right-0 w-full overflow-y-auto bg-[#10063A] py-7 px-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10;
		z-index: 9999;
		.header {
			@apply flex items-center justify-between text-white;
		}
		.nav-mb {
			@apply space-y-2 py-6 divide-y divide-gray-500/10;
			.item {
				@apply -mx-3 py-2 px-3 text-base focus:text-[#712dff] leading-7 flex items-center;
			}
		}
	}
}

.header-logo {
	width: 10rem;
}
@media screen and (min-width: 1024px) {
	.header-logo {
		width: 13.8rem;
	}
}
</style>
