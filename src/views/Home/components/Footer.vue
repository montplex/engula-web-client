<template>
	<footer class="home-page-footer">
		<div class="container mx-auto !max-w-screen-lg px-4">
			<div class="home-footer py-12">
				<img class="w-44 h-10" src="@/assets/images/logo.png" alt="MontPlex" />
				<div class="meta-walk py-14">
					<a href="#" aria-label="Montplex on Twitter">
						<svgIcon icon="twitter" />
					</a>
					<a href="#" aria-label="Montplex on Blog">
						<svgIcon icon="blog" />
					</a>
					<a href="#" aria-label="Montplex on Discord">
						<svgIcon icon="discord" />
					</a>
				</div>
				<div class="meta-walk text-main">
					<a href="#" aria-label="Contact Us">
						Contact Us
						<svgIcon icon="arrow-right" />
					</a>
					<a href="#" aria-label="Privacy Policy">
						Privacy Policy
						<svgIcon icon="arrow-right" />
					</a>
					<a href="#" aria-label="Terms of Service">
						Terms of Service
						<svgIcon icon="arrow-right" />
					</a>
				</div>
				<div class="my-10">© 2022 Upstash, Inc. Based in California.</div>
				<div class="px-40 text-center text-6 text-sm">
					<p>
						Redis is a trademark of Redis Labs Ltd. Any rights therein are reserved to Redis Ltd. Any use by Upstash is for
						referential purposes only and does not indicate any sponsorship, endorsement or affiliation between Redis and Upstash.
					</p>
					<p>
						Cloudflare, the Cloudflare logo, and Cloudflare Workers are trademarks and/or registered trademarks of Cloudflare,
						Inc. in the United States and other jurisdictions.
					</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import {} from "vue";
</script>

<style lang="scss" scoped>
.home-page-footer {
	/* height: 19.75rem; */
	width: 100%;
	color: #ffffff;
	background: linear-gradient(to bottom, #120834, #040419);
}
.home-footer {
	display: flex;
	flex-direction: column;
	align-items: center;
	.meta-walk {
		display: flex;
		align-items: center;
		a {
			display: flex;
			align-items: center;
			&:not(:last-of-type) {
				margin-right: 1rem;
			}
			svg {
				width: 20px;
				height: 20px;
			}
		}
	}
	.text-main a:not(:last-of-type) {
		margin-right: 4rem;
	}
}
</style>
