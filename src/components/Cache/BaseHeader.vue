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
								<p class="text-gray-500">You have no new notifications.</p>
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
										<span>View all</span>
									</button></a
								>
							</div>
						</div>
					</el-popover>

					<!-- <div class="flex items-center"> -->
					<!-- 	<div class="flex h-11 items-center rounded-l bg-[#3f3f46] px-3 cursor-pointer">
							<el-dropdown trigger="click">
								<div class="flex h-11 items-center">
									<div class="mr-2">
										<div class="text-xs text-gray-400">Team</div>
										<div class="!text-white pt-1">Personal</div>
									</div>
									<i-ant-design:caret-down-outlined style="font-size: 10px; color: white" />
								</div>
								<template #dropdown>
									<el-dropdown-menu>
										<el-dropdown-item>Create Team</el-dropdown-item>
										<el-dropdown-item disabled>
											<span class="mr-2">Switch Team</span>
											<i-ant-design:right-outlined style="font-size: 10px" />
										</el-dropdown-item>
									</el-dropdown-menu>
								</template>
							</el-dropdown>
						</div> -->

					<el-dropdown trigger="hover" @command="handleMineCommand" class="ml-4">
						<el-avatar class="focus-visible:outline-none" :size="32" :src="info?.picture" />
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item> {{ info?.nickname }} </el-dropdown-item>
								<el-dropdown-item v-if="info?.email">
									{{ info?.email }}
								</el-dropdown-item>
								<el-dropdown-item command="account" divided> Account </el-dropdown-item>
								<!-- <el-dropdown-item> Integrations </el-dropdown-item> -->
								<el-dropdown-item> Settings </el-dropdown-item>
								<el-dropdown-item command="out" divided> Log out </el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
					<!-- </div> -->
				</div>
			</div>
		</div>
	</header>

	<header class="relative z-50 bg-black py-4 text-white shadow sm:hidden">
		<div class="container mx-auto !max-w-screen-lg px-4">
			<div class="flex items-center">
				<div class="flex items-center gap-2">
					<router-link to="/" class="flex items-center gap-2">
						<img src="@/assets/images/logo.png" alt="logo" class="h-8" />
					</router-link>
				</div>
				<div class="ml-4 flex items-center space-x-0.5">
					<!-- <div class="flex h-10 items-center rounded-l bg-[#3f3f46] pl-3 pr-2 cursor-pointer">
						<div class="mr-2 leading-none">
							<div class="text-xs text-gray-400">Team</div>
							<div class="">Personal</div>
						</div>
						<i-ant-design:caret-down-outlined class="!text-[12px]" />
					</div> -->
				</div>
				<!-- <div class="ml-auto -mr-2">
					<button class="flex h-10 w-10 items-center justify-center !bg-transparent !p-0 !text-white">
						<SvgIcon icon="menu" class="!text-[20px]" />
					</button>
				</div> -->
				<!-- -mr-2 -->
				<div class="ml-auto">
					<div class="flex h-10 items-center rounded pl-3 pr-2 cursor-pointer">
						<el-dropdown trigger="click" @command="handleMineCommand">
							<div class="flex items-center">
								<el-avatar class="mr-3" :size="26" :src="info?.picture" />
								<i-ant-design:caret-down-outlined class="!text-[12px] text-w-80" />
							</div>
							<template #dropdown>
								<el-dropdown-menu>
									<el-dropdown-item>{{ info?.nickname }}</el-dropdown-item>
									<el-dropdown-item v-if="info?.email"> {{ info?.email }}</el-dropdown-item>
									<el-dropdown-item command="account" divided> Account</el-dropdown-item>
									<!-- <el-dropdown-item> Integrations </el-dropdown-item> -->
									<el-dropdown-item> Settings </el-dropdown-item>
									<el-dropdown-item command="out" divided> Log out </el-dropdown-item>
								</el-dropdown-menu>
							</template>
						</el-dropdown>
					</div>
				</div>
			</div>
		</div>
	</header>

	<!-- dialog -->
	<el-dialog v-model="question" title="Docs & Support" class="br-8 sm:!w-[520px]">
		<div class="grid gap-3">
			<a
				v-for="(item, idx) in questionPopList"
				:key="idx"
				href="#"
				target="_blank"
				class="is-link relative flex h-auto items-center rounded-md bg-white p-5 shadow hover:bg-blue-50"
			>
				<svgIcon :icon="item.icon" class="!text-[20px]" />
				<div class="ml-4 flex-grow">
					<h5>{{ item.title }}</h5>
				</div>
				<svgIcon icon="right" class="!text-[20px] opacity-50" />
			</a>
		</div>
		<template #footer>
			<el-button @click="question = false"> Cancel </el-button>
		</template>
	</el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { userStore } from "@/stores/user";
import { useRouter } from "vue-router";

const store = userStore();
const router = useRouter();
const { info } = storeToRefs(store);

const handleMineCommand = (command: string) => {
	switch (command) {
		case "out":
			logout();
			break;
		case "account":
			router.push({ path: "/account" });
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
const questionPopList = [
	{
		icon: "description",
		title: "Documentation"
	},
	{
		icon: "cloud",
		title: "API Docs"
	},
	{
		icon: "bug",
		title: "Report a Bug"
	},
	{
		icon: "base-email",
		title: "Contact us"
	},
	{
		icon: "discord",
		title: "Join our Discord community"
	},
	{
		icon: "twitter",
		title: "Follow us at Twitter"
	}
];
const question = ref(false);

// const notice = ref(false);
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
	background-image: -webkit-gradient(linear, left top, right top, from(#c947e7), to(#2ab5fb));
	background-image: linear-gradient(90deg, #c947e7, #2ab5fb);
	font-weight: 700;
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
