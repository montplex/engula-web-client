<template>
	<footer class="home-page-footer">
		<div class="container mx-auto !max-w-screen-lg px-4">
			<div class="home-footer py-12">
				<img class="w-44 h-10" src="@/assets/images/logo.png" alt="MontPlex" />
				<div class="meta-walk md:py-14 py-8">
					<a href="#">
						<svgIcon icon="twitter" />
					</a>
					<a href="#">
						<svgIcon icon="blog" />
					</a>
					<a href="#">
						<svgIcon icon="discord" />
					</a>
				</div>
				<div class="flex items-center text-main flex-col md:flex-row gap-1">
					<a href="#" class="md:mr-16 text-block">
						Contact Us
						<svgIcon icon="right-jb" class="inline" />
					</a>
					<a href="#" class="md:mr-16 text-block">
						Privacy Policy
						<svgIcon icon="right-jb" class="inline" />
					</a>
					<a href="#" class="text-block">
						Terms of Service
						<svgIcon icon="right-jb" class="inline" />
					</a>
				</div>
				<div class="md:my-10 py-6 text-xs md:text-lg">© 2022 Montplex, Inc. All rights reserved</div>
				<div class="hidden px-40 text-center text-6 text-sm md:block">
					<p>
						Redis is a trademark of Redis Labs Ltd. Any rights therein are reserved to Redis Ltd. Any use by Montplex is for
						referential purposes only and does not indicate any sponsorship, endorsement or affiliation between Redis and
						Montplex.
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
}
</style>
