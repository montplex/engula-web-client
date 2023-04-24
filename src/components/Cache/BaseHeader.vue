<template>
	<header class="hidden bg-black py-4 text-white shadow sm:block">
		<div class="container mx-auto !max-w-screen-xl px-4">
			<div class="flex items-center gap-6">
				<h3 class="flex items-center gap-1 text-white cursor-pointer h-8 text-xl font-semibold" @click="$router.push('/')">
					<img src="@/assets/images/main-logo.png" alt="logo" class="h-[30px]" />
					<span class="text-block">Montplex</span>
				</h3>
				<nav cy-id="master-nav" class="flex items-center gap-2">
					<!-- <RouterLink
						class="inline-flex h-11 items-center gap-1 rounded-md px-3 hover:bg-gray-700 hover:text-white !bg-white font-semibold !text-black"
						to="/mycli"
						>Redis</RouterLink
					> -->
				</nav>
				<div class="ml-auto flex items-center gap-3">
					<el-dropdown popper-class="lang-menu" @command="handleLang">
						<button
							@click="openSort = !openSort"
							class="flex text-white items-center justify-start font-semibold focus-visible:outline-none"
						>
							<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
								<path
									fill="currentColor"
									d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
								></path>
							</svg>
							<span class="mx-2">{{ langName }}</span>
							<svg
								fill="currentColor"
								viewBox="0 0 20 20"
								width="20"
								height="20"
								class="transition-transform duration-200 transform"
							>
								<path
									fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</button>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item command="en">English</el-dropdown-item>
								<el-dropdown-item command="zh_CN">简体中文</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
					<button
						@click="question = true"
						type="button"
						class="flex items-center justify-center h-11 w-11 rounded-md p-0 !text-white"
					>
						<svgIcon icon="question" class="text-2xl" />
					</button>

					<el-popover :offset="16" popper-style="border-radius: 8px;" trigger="click" placement="bottom" :width="360">
						<template #reference>
							<button
								type="button"
								class="flex items-center justify-center h-11 w-11 rounded-md p-0 !text-white hover:bg-[#3f3f46]"
							>
								<svgIcon icon="notice" class="text-2xl" />
							</button>
						</template>
						<div class="-mx-3 -my-3 w-[360px]">
							<div class="py-8 text-center">
								<p class="text-gray-500">{{ $t("msg.notice") }}</p>
								<div class="flex items-center justify-center">
									<svgIcon icon="refresh" class="mt-2 text-2xl text-[#3388ff] hover:text-blue-300 cursor-pointer" />
								</div>
							</div>
							<div class="border-t border-gray-100">
								<a href="#"
									><button
										type="button"
										class="!h-auto w-full !py-3 !font-medium text-[#3388ff] hover:text-blue-300 cursor-pointer"
									>
										<span>{{ $t("msg.viewAll") }}</span>
									</button></a
								>
							</div>
						</div>
					</el-popover>

					<el-dropdown trigger="hover" @command="handleMineCommand">
						<el-avatar class="focus-visible:outline-none" :size="32" :src="info?.picture" />
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item>
									<el-icon size="16"> <i-ep:user /> </el-icon> {{ info?.nickname }}
								</el-dropdown-item>
								<el-dropdown-item v-if="info?.email"> {{ info?.email }} </el-dropdown-item>
								<el-dropdown-item command="account" divided>
									<el-icon size="16"> <i-ep:credit-card /> </el-icon> {{ $t("redis.set.account") }}
								</el-dropdown-item>
								<!-- <el-dropdown-item>  {{ $t("redis.set.settings") }}  </el-dropdown-item> -->
								<el-dropdown-item command="out" divided>
									<el-icon size="16"> <i-ep:switch-button /> </el-icon> {{ $t("redis.set.out") }}
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</div>
			</div>
		</div>
	</header>

	<header class="relative z-50 bg-black py-4 text-white shadow sm:hidden">
		<div class="container mx-auto !max-w-screen-lg px-4">
			<div class="flex items-center">
				<div class="flex items-center gap-1 cursor-pointer h-8" @click="$router.push('/')">
					<img src="@/assets/images/main-logo.png" alt="logo" class="h-[24px]" />
					<span class="text-block font-semibold text-lg">Montplex</span>
				</div>
				<div class="ml-auto flex items-center h-9 px-2 rounded bg-[#3f3f46]">
					<el-dropdown trigger="click" @command="handleMineCommand">
						<div class="flex items-center">
							<el-avatar class="mr-3" :size="26" :src="info?.picture" />
							<i-ant-design:caret-down-outlined class="!text-[12px] text-w-80" />
						</div>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item>
									<el-icon size="16"> <i-ep:user /> </el-icon> {{ info?.nickname }}
								</el-dropdown-item>
								<el-dropdown-item v-if="info?.email"> {{ info?.email }} </el-dropdown-item>
								<el-dropdown-item command="account" divided>
									<el-icon size="16"> <i-ep:credit-card /> </el-icon> {{ $t("redis.set.account") }}
								</el-dropdown-item>
								<!-- <el-dropdown-item>  {{ $t("redis.set.settings") }}  </el-dropdown-item> -->
								<el-dropdown-item command="out" divided>
									<el-icon size="16"> <i-ep:switch-button /> </el-icon> {{ $t("redis.set.out") }}
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</div>
			</div>
		</div>
	</header>

	<el-dialog v-model="question" :title="$t('redis.more.title')" class="br-8 sm:!w-[520px]">
		<div class="more-dialog">
			<a href="#" target="_blank" class="more-link is-link">
				<svgIcon icon="description" class="!text-[20px]" />
				<div class="lable">
					<h5>{{ $t("redis.more.docs") }}</h5>
				</div>
				<svgIcon icon="right" class="!text-[20px] opacity-50" />
			</a>

			<a href="#" target="_blank" class="more-link is-link">
				<svgIcon icon="cloud" class="!text-[20px]" />
				<div class="lable">
					<h5>{{ $t("redis.more.api") }}</h5>
				</div>
				<svgIcon icon="right" class="!text-[20px] opacity-50" />
			</a>

			<a href="#" target="_blank" class="more-link is-link">
				<svgIcon icon="bug" class="!text-[20px]" />
				<div class="lable">
					<h5>{{ $t("redis.more.bug") }}</h5>
				</div>
				<svgIcon icon="right" class="!text-[20px] opacity-50" />
			</a>

			<a href="#" target="_blank" class="more-link is-link">
				<svgIcon icon="base-email" class="!text-[20px]" />
				<div class="lable">
					<h5>{{ $t("redis.more.contact") }}</h5>
				</div>
				<svgIcon icon="right" class="!text-[20px] opacity-50" />
			</a>

			<a href="#" target="_blank" class="more-link is-link">
				<svgIcon icon="discord" class="!text-[20px]" />
				<div class="lable">
					<h5>{{ $t("redis.more.discord") }}</h5>
				</div>
				<svgIcon icon="right" class="!text-[20px] opacity-50" />
			</a>

			<a href="#" target="_blank" class="more-link is-link">
				<svgIcon icon="twitter" class="!text-[20px]" />
				<div class="lable">
					<h5>{{ $t("redis.more.twitter") }}</h5>
				</div>
				<svgIcon icon="right" class="!text-[20px] opacity-50" />
			</a>
		</div>
		<template #footer>
			<el-button @click="question = false"> {{ $t("msg.close") }} </el-button>
		</template>
	</el-dialog>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import { userStore } from "@/stores/user";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const store = userStore();
const router = useRouter();
const { info } = storeToRefs(store);
const question = ref(false);
const openSort = ref(false);

const langName = computed(() => (locale.value == "en" ? "English" : "简体中文"));

const handleMineCommand = (command: string) => {
	switch (command) {
		case "out":
			logout();
			break;
		case "account":
			router.push({ path: "/account" });
			break;
		case "pdfview":
			router.push({ path: "/pdf" });
			break;
		default:
			break;
	}
};

function logout() {
	store.info = null;
	if (import.meta.env.MODE === "development") {
		router.push({ path: "/", replace: true });
	} else {
		window.location.replace(import.meta.env.VITE_API_URL + "/engula/auth0/logout");
	}
}

function handleLang(val: "zh_CN" | "en") {
	openSort.value = !openSort.value;
	locale.value = val;
}
</script>

<style lang="scss">
.br-8 {
	border-radius: 8px;
}
.el-dropdown-menu__item:not(.is-disabled):focus {
	color: var(--el-text-color-regular);
	background-color: #f5f5f5;
}
h5 {
	font-size: 1rem;
	font-weight: 600;
	line-height: 1.5rem;
}
.text-block {
	font-weight: 700;
	background-image: -webkit-gradient(linear, left top, right top, from(#c947e7), to(#2ab5fb));
	background-image: linear-gradient(90deg, #c947e7, #2ab5fb);
	background-clip: text;
	-webkit-text-fill-color: transparent;
}

.more-dialog {
	@apply grid gap-3;
	.more-link {
		@apply relative flex h-auto items-center rounded-md bg-white p-5 shadow hover:bg-blue-50;
	}
	.lable {
		@apply ml-4 flex-grow;
	}
}

.lang-menu {
	.el-dropdown-menu__item {
		line-height: 36px;
		padding: 3px 22px;
	}
}
</style>
