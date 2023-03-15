<template>
	<div class="text-center mt-36 mx-8" id="bander-info">
		<div class="flex justify-center items-center">
			<img class="w-40" src="@/assets/images/main-logo.png" alt="logo" />
		</div>
		<!-- <div class="mt-15">Engula</div>
		<div class="mt-10">Managed Caching Service for Global Business</div> -->
		<div class="text-white opacity-80 font-semibold text-center my-10">
			<h1 class="text-5xl">Engula</h1>
			<h3 class="text-xl pt-6">Managed Caching Service for Global Business</h3>
		</div>
		<a class="mt-20" href="http://engula.montplex.com">
			<button class="console">CONSOLE</button>
		</a>
	</div>

	<div class="">
		<main class="home-container">
			<div class="home-cards">
				<div class="card-item">
					<svgIcon icon="card01" class="icon" />
					<h2 class="block">Redis compatible</h2>
				</div>
				<div class="card-item">
					<svgIcon icon="card02" class="icon" />
					<h2 class="block">Lower cost with zero effort</h2>
				</div>
				<div class="card-item">
					<svgIcon icon="card03" class="icon" />
					<h2 class="block two-lines">Any scale any place, any cloud</h2>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
import {} from "vue";
</script>

<style lang="scss">
.home-cards {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 16rem;
	margin: 10rem 0;
	.card-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 31.6%;
		height: 100%;
		padding: 2rem;
		background: rgb(160 178 242 / 10%);
		border: 1px solid rgb(255 255 255 / 18%);
		border-radius: 0.5rem;
		box-shadow: 0 8px 32px 0 rgba(31 38 135 / 13%);
		backdrop-filter: blur(18px);
		backdrop-filter: blur(18px);
		&:hover {
			.icon {
				transition: all 0.5s ease-in-out;
				transform: scale(1.1);
			}
			h2 {
				padding-left: 8px;
				transition: padding 0.2s ease-in-out;
			}
		}
		.icon {
			width: 6rem;
			height: 6rem;
		}
		h2 {
			width: 100%;
			margin-top: 2rem;
			font-size: 1.5rem;
			font-style: normal;
			font-weight: 800;
			color: rgb(255 255 255 / 80%);
			text-align: center;
			white-space: pre-line;
		}
	}
}

@media (max-width: 1080px) {
	.home-cards {
		flex-direction: column;
		height: auto;
		padding: 4rem 0;
		margin: 0 1.5rem;
		.card-item {
			flex-direction: row;
			align-items: center;
			width: 100%;
			padding: 20px;
			margin-bottom: 0.5rem;
			.icon {
				width: 3rem;
				height: 3rem;
				svg {
					width: 3rem;
					height: 3rem;
				}
			}
			h2 {
				flex: 1;
				padding-left: 1em;
				margin-top: 0;
				font-size: 16px;
				line-height: 1.7rem;
				text-align: left;
				white-space: inherit;
				transform: none;
				.two-lines {
					top: -0.3rem;
					white-space: pre-line;
				}
			}
		}
	}
}
.console {
	width: 11.5rem;
	height: 3rem;
	line-height: 3rem;
	color: #ffffff;
	text-align: center;
	cursor: pointer;
	background: linear-gradient(180deg, #642dff 0%, #892dff 100%);
	border-radius: 0.5rem;
}
</style>
