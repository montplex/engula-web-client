<template>
	<!-- Pricing PC Start -->
	<div class="mt-20 hidden md:block">
		<div class="grid grid-cols-4">
			<!-- 第一行 -->
			<div class="flex items-center justify-center p-4"></div>
			<div class="table-item bg-ly-check" style="border-radius: 16px 16px 0 0">
				<h5 class="text-3xl font-bold text-block">Free</h5>
			</div>
			<div class="table-item" style="border-radius: 16px 16px 0 0">
				<h5 class="text-3xl font-bold text-block">Pro</h5>
			</div>
			<div class="table-item">
				<h5 class="text-3xl font-bold text-block">Enterprise</h5>
			</div>
			<div class="col-span-4"><div class="h-[1px] bg-ly-line"></div></div>

			<!-- 第二行 -->
			<div class="table-item text-left !text-lable-70 group">
				<span class="w-full relative z-10">
					Commands Limit
					<!-- <svgIcon icon="info-line" class="!inline ml-2 text-xl" /> -->
					<!-- <div
						style="left: 0px; bottom: 30px"
						class="text-[#171923] bg-[#cbd5e0] text-sm px-3 py-4 min-w-[200px] z-40 absolute rounded-sm text-center animate-[fadeIn] transition-all duration-300 opacity-0 group-hover:opacity-100"
					>
						This is just an example of what you can do using a CSS tooltip, feel free to get creative and produce your own!
					</div> -->
				</span>
			</div>
			<div class="table-item bg-ly-check">
				<span>Unlimited</span>
			</div>
			<div class="table-item">
				<span>Unlimited</span>
			</div>
			<div class="table-item">
				<span class="chakra-text css-0">Unlimited</span>
			</div>
			<div class="col-span-4"><div class="h-[1px] bg-ly-line"></div></div>

			<!-- 第3行 -->
			<div class="col-span-4"><div class="h-[1px] bg-ly-line"></div></div>
			<div class="table-item text-left !text-lable-70">
				<span class="w-full">
					Encryption (TLS)
					<!-- <svgIcon icon="info-line" class="!inline ml-2 text-xl" /> -->
				</span>
			</div>
			<div class="table-item bg-ly-check">
				<svgIcon icon="none" class="!h-5 !w-5" />
			</div>
			<div class="table-item">
				<svgIcon icon="true" class="!h-5 !w-5" />
			</div>
			<div class="table-item">
				<svgIcon icon="true" class="!h-5 !w-5" />
			</div>
			<div class="col-span-4"><div class="h-[1px] bg-ly-line"></div></div>

			<!-- 第五行 -->
			<div class="table-item text-left !text-lable-70">
				<span class="w-full">
					High Availability
					<!-- <svgIcon icon="info-line" class="!inline ml-2 text-xl" /> -->
				</span>
			</div>
			<div class="table-item bg-ly-check">
				<svgIcon icon="none" class="!h-5 !w-5" />
				<!-- <svgIcon icon="none" class="!h-5 !w-5" /> -->
			</div>
			<div class="table-item">
				<svgIcon icon="true" class="!h-5 !w-5" />
			</div>
			<div class="table-item">
				<svgIcon icon="true" class="!h-5 !w-5" />
			</div>
			<div class="col-span-4"><div class="h-[1px] bg-ly-line"></div></div>

			<!-- 第六行 -->
			<div class="table-item text-left !text-lable-70">
				<span class="w-full">
					Professional Support
					<!-- <svgIcon icon="info-line" class="!inline ml-2 text-xl" /> -->
				</span>
			</div>
			<div class="table-item bg-ly-check">
				<svgIcon icon="none" class="!h-5 !w-5" />
			</div>
			<div class="table-item">
				<svgIcon icon="true" class="!h-5 !w-5" />
			</div>
			<div class="table-item">
				<svgIcon icon="true" class="!h-5 !w-5" />
			</div>
			<div class="col-span-4"><div class="h-[1px] bg-ly-line"></div></div>

			<div class="table-item text-left !text-lable-70">
				<span class="w-full flex items-center">
					BYOC （Bring Your Own Cloud）
					<!-- <svgIcon icon="info-line" class="!inline ml-2 text-xl" /> -->
				</span>
			</div>
			<div class="table-item bg-ly-check">
				<svgIcon icon="none" class="!h-5 !w-5" />
			</div>
			<div class="table-item">
				<svgIcon icon="none" class="!h-5 !w-5" />
			</div>
			<div class="table-item">
				<svgIcon icon="true" class="!h-5 !w-5" />
			</div>
			<div class="col-span-4"><div class="h-[1px] bg-ly-line"></div></div>

			<!-- 第九行 -->
			<div class="table-item text-left !text-lable-70"></div>
			<div class="table-item bg-ly-check">
				<!-- <span>GB / Hour</span> -->
				<!-- <span>Free</span> -->
			</div>
			<div class="table-item">
				<!-- <span>Coming Soon</span> -->
			</div>

			<div class="table-item">
				<!-- <span>Custom</span> -->
			</div>
			<!-- <div class="col-span-4"><div class="h-[1px] bg-ly-line"></div></div> -->

			<!-- 第十行 底部按钮 -->
			<div class="table-item"></div>
			<div class="table-item bg-ly-check" style="border-radius: 0 0 16px 16px">
				<a class="ck-button login" href="https://dev.montplex.com/console" target="_blank"> Start </a>
				<!-- <a class="ck-button" href="https://dev.montplex.com/console" target="_blank">watting..</a> -->
			</div>

			<div class="table-item hv-none" style="border-radius: 0 0 16px 16px">
				<a @click.prevent class="ck-button"> Coming Soon </a>
				<!-- <a class="ck-button" href="https://dev.montplex.com/console" target="_blank"> Waiting List </a> -->
			</div>

			<div class="table-item hv-none">
				<a @click.prevent class="ck-button"> Coming Soon </a>
				<!-- <a @click.prevent class="ck-button" href="https://docs.upstash.com/docs/help/support" target="_blank"> Coming Soon </a> -->
			</div>
		</div>
	</div>
	<!-- Pricing PC End -->

	<!-- Pricing Mobie Start -->

	<div class="md:hidden block">
		<div class="cardContent md:flex-row flex-col md:!px-4 px-0 !mb-10">
			<div class="cardItem gradient-border">
				<div class="cardBox text-white !px-0">
					<div class="px-7 pt-10 text-center">
						<h3 class="text-block text-[26px] font-medium">Free</h3>
						<VectorsWrapper class="mt-4 mx-auto" />
					</div>
					<div class="grid grid-cols-2 w-full px-8">
						<div class="table-item !text-lable-70">Commands Limit</div>
						<div class="table-item">
							<p class="text-center">Unlimited</p>
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !text-lable-70">Encryption (TLS)</div>
						<div class="table-item">
							<svgIcon icon="none" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !text-lable-70">High Availability</div>
						<div class="table-item">
							<svgIcon icon="none" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !text-lable-70">Professional Support</div>
						<div class="table-item">
							<svgIcon icon="none" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !text-lable-70">BYOC （Bring Your Own Cloud</div>
						<div class="table-item">
							<svgIcon icon="none" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>
					</div>
					<div class="px-8 w-full flex justify-center">
						<a class="ck-button w-full login" href="https://dev.montplex.com/console" target="_blank"> Start </a>
					</div>
				</div>
			</div>

			<div class="cardItem gradient-border">
				<div class="cardBox text-white !px-0">
					<div class="px-7 pt-10 text-center">
						<h3 class="text-block text-[26px] font-medium">Pro</h3>
						<VectorsWrapper class="mt-4 mx-auto" />
					</div>
					<div class="grid grid-cols-2 w-full px-8">
						<div class="table-item !text-lable-70">Commands Limit</div>
						<div class="table-item">Unlimited</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !text-lable-70">Encryption (TLS)</div>
						<div class="table-item">
							<svgIcon icon="true" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !text-lable-70">High Availability</div>
						<div class="table-item">
							<svgIcon icon="true" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !text-lable-70">Professional Support</div>
						<div class="table-item">
							<svgIcon icon="true" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !text-lable-70">BYOC （Bring Your Own Cloud）</div>
						<div class="table-item">
							<svgIcon icon="none" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>
					</div>
					<div class="table-item">
						<!-- <p class="text-center">GB / Hour</p> -->
					</div>
					<div class="px-8 w-full flex justify-center hv-none">
						<!-- href="https://dev.montplex.com/console" target="_blank" -->
						<a class="ck-button w-full" @click.prevent> Coming Soon </a>
					</div>
				</div>
			</div>
			<div class="cardItem gradient-border">
				<div class="cardBox text-white !px-0">
					<div class="px-7 pt-10 text-center">
						<h3 class="text-block text-[26px] font-medium">Enterprise</h3>
						<VectorsWrapper class="mt-4 mx-auto" />
					</div>
					<div class="grid grid-cols-2 w-full px-8">
						<div class="table-item !text-lable-70">Commands Limit</div>
						<div class="table-item">Unlimited</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !text-lable-70">Encryption (TLS)</div>
						<div class="table-item">
							<svgIcon icon="true" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !text-lable-70">High Availability</div>
						<div class="table-item">
							<svgIcon icon="true" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !text-lable-70">Professional Support</div>
						<div class="table-item">
							<svgIcon icon="true" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !text-lable-70">BYOC （Bring Your Own Cloud）</div>
						<div class="table-item">
							<svgIcon icon="true" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>
					</div>
					<div class="table-item">
						<!-- Custom -->
					</div>
					<div class="px-8 w-full flex justify-center hv-none">
						<!-- href="https://dev.montplex.com/console" target="_blank" -->
						<!-- <a class="ck-button w-full" @click.prevent> {{ $t("home.contact") }}</a> -->
						<a class="ck-button w-full" @click.prevent> Coming Soon</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Pricing Mobie End -->
</template>

<script setup lang="ts">
import VectorsWrapper from "./vectors-wrapper.vue";
</script>

<style lang="scss" scoped>
.table-item {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	color: #ffffff;
	-webkit-box-align: center;
	-webkit-box-pack: center;
}

.ck-button {
	position: relative;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 60%;
	height: 2.8rem;
	font-size: 1rem;
	color: #ffffff;
	background: rgb(255 255 255 / 0.11);
	border-radius: 0.375rem;
	font-weight: 500;
	cursor: pointer;
	&:hover {
		background: rgb(255 255 255 / 0.2);
	}

	&.login {
		background-image: linear-gradient(90deg, #f926e1, #2ab5fb);
		&:hover {
			background-image: linear-gradient(90deg, #2ab5fb, #f926e1);
		}
	}
}

.hv-none {
	a:hover {
		background: rgba(255, 255, 255, 0.11);
		// cursor-not-allowed
		cursor: not-allowed;
	}
}
</style>
