<template>
	<div class="antialiased w-full h-full text-gray-400 font-inter p-10">
		<div class="container px-4 mx-auto">
			<div>
				<!-- grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-evenly -->
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-evenly gap-0 pt-10">
					<div class="rounded-lg col-auto text-center overflow-hidden w-full hover:shadow-2xl">
						<div id="title" class="w-full py-5 brb-1">
							<h2 class="font-bold text-3xl text-white min-h-[40px]"></h2>
						</div>
						<div id="content" class="">
							<div id="icon" class="my-5 min-h-[80px]"></div>
							<div id="contain" class="leading-8 mb-10 text-lg font-light">
								<ul class="p-cell-item left">
									<li><span>Commands Limit</span></li>
									<li><span>Encryption (TLS)</span></li>
									<li><span>High Availability</span></li>
									<li><span>Professional Support</span></li>
									<li><span>BYOC(Bring Your Own Cloud)</span></li>
									<li></li>
								</ul>
								<!-- <div id="choose" class="w-full mt-10 px-6 min-h-[60px]"></div> -->
							</div>
						</div>
					</div>
					<div
						id="plan"
						class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:bg-ly-check transition duration-200 ease-in"
					>
						<!--  -->
						<div id="title" class="w-full py-5 brb-1">
							<h2 class="font-bold text-3xl text-white min-h-[40px]">Startup</h2>
						</div>
						<div id="content" class="">
							<div id="icon" class="my-5 min-h-[80px]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-12 w-12 mx-auto fill-stroke text-indigo-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="url(#linear-plan)"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1"
										d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<p class="text-gray-500 text-sm pt-2">Perfect individuals or startups</p>
							</div>
							<div id="contain" class="leading-8 mb-10 text-lg font-light">
								<ul class="p-cell-item">
									<li>
										<span>Unlimited</span>
									</li>
									<li><svgIcon icon="true" class="!h-5 !w-5" /></li>
									<li><svgIcon icon="true" class="!h-5 !w-5" /></li>
									<li><svgIcon icon="none" class="!h-5 !w-5" /></li>
									<li><svgIcon icon="none" class="!h-5 !w-5" /></li>
									<li>Fee</li>
								</ul>
								<div id="choose" class="w-full mt-10 px-6">
									<a
										href="#"
										class="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
										>Choose</a
									>
								</div>
							</div>
						</div>
					</div>
					<div
						id="plan"
						class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:bg-ly-check transition duration-200 ease-in"
					>
						<div id="title" class="w-full py-5 brb-1">
							<h2 class="font-bold text-3xl text-white min-h-[40px]">Corporate</h2>
						</div>
						<div id="content" class="">
							<div id="icon" class="my-5 min-h-[80px]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-12 w-12 mx-auto fill-stroke text-indigo-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="url(#linear-plan)"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1"
										d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
									/>
								</svg>
								<p class="text-gray-500 text-sm pt-2">Perfect for teams up to 12 people</p>
							</div>
							<div id="contain" class="leading-8 mb-10 text-lg font-light">
								<ul class="p-cell-item">
									<li>
										<span>Unlimited</span>
									</li>
									<li><svgIcon icon="true" /></li>
									<li><svgIcon icon="true" /></li>
									<li><svgIcon icon="true" /></li>
									<li><svgIcon icon="none" /></li>
									<li>Coming Soon</li>
								</ul>
								<div id="choose" class="w-full mt-10 px-6">
									<a
										href="#"
										class="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
										>Choose</a
									>
								</div>
							</div>
						</div>
					</div>
					<div
						id="plan"
						class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:bg-ly-check transition duration-200 ease-in"
					>
						<div id="title" class="w-full py-5 brb-1">
							<h2 class="font-bold text-3xl text-white min-h-[40px]">Enterprise</h2>
						</div>
						<div id="content" class="">
							<div id="icon" class="my-5 min-h-[80px]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-12 w-12 mx-auto fill-stroke text-indigo-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="url(#linear-plan)"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1"
										d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
									/>
									<g>
										<linearGradient
											id="linear-plan"
											x1="4.90015"
											y1="11.4162"
											x2="20.4851"
											y2="11.4921"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#F926E1" />
											<stop offset="1" stop-color="#2AB5FB" />
										</linearGradient>
									</g>
								</svg>
								<p class="text-gray-500 text-sm pt-2">Perfect large scale team</p>
							</div>
							<div id="contain" class="leading-8 mb-10 text-lg font-light">
								<ul class="p-cell-item">
									<li><span>Unlimited</span></li>
									<li><svgIcon icon="true" /></li>
									<li><svgIcon icon="true" /></li>
									<li><svgIcon icon="true" /></li>
									<li><svgIcon icon="true" /></li>
									<li>Custom</li>
								</ul>
								<div id="choose" class="w-full mt-10 px-6">
									<a
										href="#"
										class="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
										>Choose</a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {} from "vue";
</script>

<style lang="scss" scoped>
/* #plan:hover {
	#title,
	.p-cell-item li {
		border-bottom: none;
	}
} */
#plan .p-cell-item li {
	color: #fff;
}

.p-cell-item {
	li {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 56px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.06);
	}
	&.left li {
		justify-content: flex-start;
	}
}

.brb-1 {
	border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
</style>
