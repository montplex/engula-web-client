<template>
	<div class="container mx-auto px-8 max-w-4xl py-16">
		<div class="grid grid-cols-2 gap-12">
			<div class="count">
				<p class="text-4xl font-semibold">{{ store.usersNum.userNumber }}</p>
				<p class="title">
					<span class="dbi1"></span>
					{{ $t("home.cards.users") }}
				</p>
			</div>
			<div class="count">
				<p class="text-4xl font-semibold">
					{{ store.usersNum.cacheServiceNumber }}
				</p>
				<p class="title">
					<span class="dbi1"></span>
					{{ $t("home.cards.caches") }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { userStore } from "@/stores/user";
const store = userStore();
store.usersNumber();
</script>

<style lang="scss" scoped>
.count {
	@apply py-10 text-center rounded-2xl;
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

	.title {
		@apply mt-5 flex items-center justify-center text-xl;
	}

	.dbi1 {
		margin-right: 0.5rem;
		margin-left: calc(var(0.5rem) * -1);
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
}
</style>
