<template>
	<header class="bg-transparent w-full left-0 top-0" style="z-index: 99999">
		<nav class="home-container mx-auto flex max-w-full items-center justify-between py-7 px-6 lg:px-0" aria-label="Global">
			<div class="flex">
				<a href="#" class="-m-1.5 p-1.5">
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
			<nav class="hidden lg:flex lg:flex-1 justify-center lg:gap-x-10 text-white text-lg text-center duration-300 ease-in">
				<div class="nav_item" @click="toPage('/')">HOME</div>
				<div class="nav_item flex items-center">
					<span class="pr-1" @click="toPage('/')">DOCS</span>
					<svg class="h-5 w-5" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12l7-7z"
						/>
					</svg>
				</div>
				<div class="nav_item" @click="toPage('/')">BLOG</div>
				<div class="nav_item" @click="toPage('/about')">ABOUT</div>
				<div class="nav_item" @click="toPage('/careers')">CAREERS</div>
			</nav>
			<div class="hidden lg:flex lg:justify-end">
				<button @click.stop="handleConsole" class="console-btn text-sm font-semibold hover:opacity-80">CONSOLE</button>
			</div>
		</nav>
		<!-- Mobile menu, show/hide based on menu open state. -->
		<div class="lg:hidden" v-show="open" role="dialog" aria-modal="true">
			<div
				class="fixed inset-y-0 right-0 w-full overflow-y-auto bg-[#10063A] py-7 px-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
				style="z-index: 9999"
			>
				<div class="flex items-center justify-between text-white">
					<a href="#" class="-m-1.5 p-1.5">
						<span class="sr-only">Montplex</span>
						<img class="h-auto w-40" src="@/assets/images/logo.png" alt="Montplex" />
					</a>
					<!-- Close menu -->
					<button type="button" class="-m-2.5 rounded-md p-2.5" @click.stop="menuOpen('close')">
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root text-white">
					<div class="-my-6">
						<div class="space-y-2 py-6 divide-y divide-gray-500/10">
							<a href="#" class="-mx-3 block py-2 px-3 text-base focus:text-[#712dff] leading-7">HOME</a>
							<a href="#" class="-mx-3 py-2 px-3 text-base focus:text-[#712dff] leading-7 flex items-center">
								<span class="pr-1">DOCS</span>
								<svg class="h-4 w-4" viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12l7-7z"
									/>
								</svg>
							</a>

							<a href="#" class="-mx-3 block py-2 px-3 text-base focus:text-[#712dff] leading-7">BLOG</a>
							<a href="#" class="-mx-3 block py-2 px-3 text-base focus:text-[#712dff] leading-7">ABOUT</a>
							<a @click.stop="handleCreate" href="#" class="-mx-3 block py-2 px-3 text-base focus:text-[#712dff] leading-7"
								>CAREERS</a
							>
						</div>
						<div class="py-6 w-full">
							<button @click.stop="handleConsole" class="console-btn text-base font-semibold hover:opacity-90">CONSOLE</button>
							<!-- href="https://github.com/upstash/issues/issues/new"
								target="_blank" -->
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
import { useRouter } from "vue-router";
// import cookie from "@/utils/cookie";
// import { useAuth0 } from "@auth0/auth0-vue";

/* cookie.set(
	"Auth-Token",
	"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYXN0TG9naW5UaW1lIjoxNjc4NjkwMTg2LCJyb2xlIjoiZW5ndWxhX3VzZXIiLCJpc3MiOiJtb250cGxleCIsIm5pY2tuYW1lIjoiYTI0MTcyNzY0NTkiLCJpZCI6Mn0.VG7dK-2iFZC2f2PAepsLiRFJxEZkopqbu9Qi_K3DReQ",
	1
); */
// cookie.get("Auth-Token"),
// console.log(cookie.get("Auth-Token"));

console.log(env().MODE, env().DEV);
let open = ref(false);

const router = useRouter();
// const auth0 = useAuth0();

const toPage = (url: string) => {
	router.push(url);
};

const menuOpen = (str: string) => {
	console.log(str);
	open.value = !open.value;
};

const handleCreate = () => {
	console.log("xxxxxxx");
};

const handleConsole = () => {
	if (env().DEV) {
		// window.location.href = "https://dev.montplex.com/engula/auth0/login";
		router.push("/console");
	} else {
		window.location.href = env().VITE_API_URL + "/engula/auth0/login";
	}
	/* console.log("auth0 检测——————>");
	const { isAuthenticated, isLoading } = auth0;
	console.log(auth0);
	if (!isAuthenticated && !isLoading) {
		auth0.loginWithRedirect();
	} else {
		console.log("auth0 已登入——————>");
	} */
};
</script>

<style lang="scss">
.console-btn {
	width: 8rem;
	height: 2.64rem;
	color: #ffffff;
	text-align: center;
	cursor: pointer;
	background: linear-gradient(180deg, #642dff 0%, #892dff 100%);
	border-radius: 0.5rem;
}
.header-logo {
	width: 10rem;
}
@media screen and (min-width: 1024px) {
	.header-logo {
		width: 13.8rem;
	}
}
nav {
	.nav_item {
		color: rgb(255 255 255 / 64%);
		&:hover {
			color: #712dff;
			text-decoration: underline;
			text-decoration: underline;
		}
	}
}
</style>
