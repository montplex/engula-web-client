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
						<!-- <div class="group nav-link" @click="scrollToAnchor('bander-about')">
							<span>{{ t("home.nav.about") }}</span>
						</div> -->
						<a href="https://dev.montplex.com/docs" target="_blank" class="group nav-link">
							<span>{{ t("home.nav.careers") }}</span>
							<span class="ml-2" target="_blank">
								<svgIcon icon="right45-write" class="!h-5 !w-5 ml-2 -rotate-45 group-hover:hidden" />
								<svgIcon icon="right45" class="hidden !h-5 !w-5 ml-2 -rotate-45 group-hover:block" />
							</span>
						</a>
					</nav>
					<div class="conlose">
						<!-- <div>
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
						</div> -->

						<div>
							<!-- <div class="language-style text-white">
								<span class="flex items-center">
									<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" class="svg-icon">
										<path
											fill="currentColor"
											d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
										></path>
									</svg>
									English
								</span>
								<ul class="lang_dropdown__menu">
									<li>
										<a
											href="/w/9F7F85"
											target="_self"
											rel="noopener noreferrer"
											class="dropdown__link dropdown__link--active"
											lang="en-US"
											>English</a
										>
									</li>
									<li>
										<a href="/ko/w/9F7F85" target="_self" rel="noopener noreferrer" class="dropdown__link" lang="ko-KR">한국어</a>
									</li>
								</ul>
							</div> -->

							<div class="flex justify-center">
								<div class="relative lang-mu" v-outside="() => (openSort = !openSort)">
									<button
										@click="openSort = !openSort"
										class="flex text-white bg-gray-200 items-center justify-start w-40 py-2 mt-2 font-semibold bg-transparent rounded-lg"
									>
										<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
											<path
												fill="currentColor"
												d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
											></path>
										</svg>
										<span class="mx-3">{{ langName }}</span>
										<svg
											fill="currentColor"
											viewBox="0 0 20 20"
											width="20"
											height="20"
											:class="{ 'rotate-180': openSort, 'rotate-0': !openSort }"
											class="transition-transform duration-200 transform"
										>
											<path
												fill-rule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
												clip-rule="evenodd"
											></path>
										</svg>
									</button>

									<Transition
										v-show="openSort"
										name="lang-meun"
										enter-class="transition ease-out duration-100"
										enter-active-class="transform opacity-0 scale-95"
										enter-to-class="transform opacity-100 scale-100"
										leave-class="transition ease-in duration-75"
										leave-to-class="transform opacity-100 scale-100"
										leave-active-class="transform opacity-0 scale-95"
										class="absolute z-50 w-full origin-top-right"
									>
										<div class="lang-meun px-2 pt-2 pb-2 bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
											<div class="flex flex-col">
												<div
													@click="handleLang('en')"
													class="flex flex-row items-start rounded-lg bg-transparent p-2 hover:bg-gray-200"
												>
													<div class="">
														<p class="font-semibold">English</p>
													</div>
												</div>

												<div
													@click="handleLang('zh_CN')"
													class="flex flex-row items-start rounded-lg bg-transparent p-2 hover:bg-gray-200"
												>
													<div class="">
														<p class="font-semibold">简体中文</p>
													</div>
												</div>
											</div>
										</div>
									</Transition>
								</div>
							</div>
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
								<!-- <div class="group nav-link" @click="scrollToAnchor('bander-about')">
									<span>{{ t("home.nav.about") }}</span>
								</div> -->
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
import { computed, ref } from "vue";
import { env } from "@/utils/util";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const open = ref(false),
	openSort = ref(false),
	router = useRouter(),
	langName = computed(() => (locale.value == "en" ? "English" : "简体中文"));

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

function handleLang(val: "zh_CN" | "en") {
	openSort.value = !openSort.value;
	locale.value = val;
}
</script>

<style lang="scss">
.language-style {
	display: inline-block;
	padding: 0.25rem;
	display: inline-flex;
	font-weight: 500;
	position: relative;
	vertical-align: top;
	.svg-icon {
		margin-right: 5px;
		vertical-align: text-bottom;
	}
}

.lang_dropdown__menu {
	left: inherit;
	right: 0;
	background-color: #fff;
	border-radius: 0.4rem;
	box-shadow: 0 5px 40px #0003;
	left: 0;
	list-style: none;
	max-height: 80vh;
	min-width: 10rem;
	opacity: 0;
	overflow-y: auto;
	padding: 0.5rem;
	position: absolute;
	top: calc(100% - 0.25rem + 0.3rem);
	transform: translateY(-0.625rem);
	transition-duration: 200ms;
	transition-property: opacity, transform, visibility;
	transition-timing-function: cubic-bezier(0.08, 0.52, 0.52, 1);
	visibility: hidden;
	z-index: 100;
}
</style>
