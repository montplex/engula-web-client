<template>
	<section className="pt-10 3xl:py-14 bg-ly-mian">
		<div class="container mx-auto md:px-4 3xl:mt-[9rem]">
			<div
				class="flex mt-14 justify-center flex-col gap-3 font-bold text-center text-7xl 3xl:text-8xl"
			>
				<div class="flex justify-center flex-col md:flex-row">
					<div>
						<span class="text-block">
							{{ $t("home.banner.title") }}
						</span>
					</div>
				</div>

				<div class="mb-8">
					<span
						class="text-block"
						style="background-image: linear-gradient(-120deg, #f926e1, #2ab5fb)"
					>
						{{ $t("home.banner.subTitle") }}
					</span>
				</div>
			</div>

			<div class="3xl:mt-16 mt-4 mx-auto text-center">
				<a
					class="play-btn"
					href="https://dev.montplex.com/console"
					target="_blank"
					>{{ $t("home.banner.button") }}</a
				>
			</div>
		</div>
		<div class="users 3xl:max-w-4xl max-w-2xl 3xl:pt-20 pt-12">
			<div class="grid_box grid-cols-1 md:grid-cols-2">
				<div class="grid_item py-6 3xl:py-10">
					<p class="font-semibold 3xl:text-5xl text-4xl">
						<span class="text-block">{{
							store?.usersNum?.userNumber ?? 173
						}}</span>
					</p>
					<p class="s-title text-xl">
						<span class="dbi1" style="width: 10px; height: 10px"></span>
						{{ $t("home.cards.users") }}
					</p>
				</div>
				<div class="grid_item py-6 3xl:py-10">
					<p class="font-semibold 3xl:text-5xl text-4xl">
						<span class="text-block">
							{{ store?.usersNum?.cacheServiceNumber ?? 412 }}
						</span>
					</p>
					<p class="s-title text-xl">
						<span class="dbi1" style="width: 10px; height: 10px"></span>
						{{ $t("home.cards.caches") }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { userStore } from "@/stores/user";
const store = userStore();
store.usersNumber();
</script>

<style lang="scss" scoped>
.users {
	padding-inline-start: 2rem;
	padding-inline-end: 2rem;
	width: 100%;
	margin-inline-start: auto;
	margin-inline-end: auto;
	.grid_box {
		display: grid;
		grid-gap: 3rem;
		.grid_item {
			/* background-color: #fff;
			color: #171923;
			box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,
				rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px; */
			border-radius: 1rem;
			text-align: center;
			position: relative;
			background: rgba(255, 255, 255, 0.02);
			color: #fff;
			&::before {
				content: "";
				pointer-events: none;
				user-select: none;
				position: absolute;
				inset: 0px;
				border-radius: inherit;
				padding: 1px;
				background: linear-gradient(
					rgba(255, 255, 255, 0.1),
					rgba(255, 255, 255, 0.07)
				);
				-webkit-mask: linear-gradient(black, black) content-box content-box,
					linear-gradient(black, black);
				-webkit-mask-composite: xor;
			}

			.s-title {
				margin-top: 1rem;
				color: #718096;
				line-height: 1;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
}

.dbi1 {
	margin-right: 0.5rem;
	display: inline-flex;
	width: 15px;
	height: 15px;
	background-color: #00e9a3;
	border-radius: 999px;
	animation: 1s ease 0s infinite alternate none running online;
}

@keyframes online {
	0% {
		opacity: 0;
	}
}
</style>
