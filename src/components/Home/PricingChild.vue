<template>
	<!-- Pricing PC Start -->
	<!-- md:block -->
	<div class="mt-20 hidden">
		<div class="grid grid-cols-4">
			<!-- 第一行 -->
			<div class="flex items-center justify-center p-4"></div>
			<div class="table-item">
				<h5 class="text-3xl font-bold text-block">Free</h5>
			</div>
			<div class="table-item bg-ly-check" style="border-radius: 16px 16px 0 0">
				<h5 class="text-3xl font-bold text-block">Pay as you go</h5>
			</div>
			<div class="table-item">
				<h5 class="text-3xl font-bold text-block">Enterprise</h5>
			</div>
			<div class="col-span-4"><div class="h-[1px] bg-ly-line"></div></div>

			<!-- 第二行 -->
			<div class="table-item text-left !text-lable-70">
				<span class="flex items-center">
					Commands Limit
					<svgIcon icon="info-line" class="!inline ml-2 text-xl" />
				</span>
			</div>
			<div class="table-item">
				<span>Max 10,000 Commands Daily</span>
			</div>
			<div class="table-item bg-ly-check">
				<span>Unlimited</span>
			</div>
			<div class="table-item">
				<span class="chakra-text css-0">Unlimited</span>
			</div>
			<div class="col-span-4"><div class="h-[1px] bg-ly-line"></div></div>

			<!-- 第四行 -->
			<div class="col-span-4"><div class="h-[1px] bg-ly-line"></div></div>
			<div class="table-item text-left !text-lable-70">
				<span class="flex items-center">
					Encryption (TLS)
					<svgIcon icon="info-line" class="!inline ml-2 text-xl" />
				</span>
			</div>
			<div class="table-item">
				<svgIcon icon="true" class="!h-5 !w-5" />
			</div>
			<div class="table-item bg-ly-check">
				<svgIcon icon="true" class="!h-5 !w-5" />
			</div>
			<div class="table-item">
				<svgIcon icon="true" class="!h-5 !w-5" />
			</div>
			<div class="col-span-4"><div class="h-[1px] bg-ly-line"></div></div>

			<!-- 第五行 -->
			<div class="table-item text-left !text-lable-70">
				<span class="flex items-center">
					Multi Zone Replication
					<svgIcon icon="info-line" class="!inline ml-2 text-xl" />
				</span>
			</div>
			<div class="table-item">
				<svgIcon icon="none" class="!h-5 !w-5" />
				<!-- <svgIcon icon="none" class="!h-5 !w-5" /> -->
			</div>
			<div class="table-item bg-ly-check">
				<svgIcon icon="true" class="!h-5 !w-5" />
			</div>
			<div class="table-item">
				<svgIcon icon="true" class="!h-5 !w-5" />
			</div>
			<div class="col-span-4"><div class="h-[1px] bg-ly-line"></div></div>

			<!-- 第六行 -->
			<div class="table-item text-left !text-lable-70">
				<span class="flex items-center">
					VPC Peering
					<svgIcon icon="info-line" class="!inline ml-2 text-xl" />
				</span>
			</div>
			<div class="table-item">
				<svgIcon icon="none" class="!h-5 !w-5" />
			</div>
			<div class="table-item bg-ly-check">
				<svgIcon icon="none" class="!h-5 !w-5" />
			</div>
			<div class="table-item">
				<svgIcon icon="true" class="!h-5 !w-5" />
			</div>
			<div class="col-span-4"><div class="h-[1px] bg-ly-line"></div></div>

			<div class="table-item text-left !text-lable-70">
				<span class="flex items-center">
					Professional Support
					<svgIcon icon="info-line" class="!inline ml-2 text-xl" />
				</span>
			</div>
			<div class="table-item">
				<svgIcon icon="none" class="!h-5 !w-5" />
			</div>
			<div class="table-item bg-ly-check">Optional</div>
			<div class="table-item">Optional</div>
			<div class="col-span-4"><div class="h-[1px] bg-ly-line"></div></div>

			<!-- 第九行 -->
			<div class="table-item text-left !text-lable-70"></div>
			<div class="table-item">
				<span>Free (No credit card required)</span>
			</div>
			<div class="table-item bg-ly-check">
				<span
					>$0.15 per GB read write throughput, up to $160 monthly max..</span
				>
			</div>
			<div class="table-item"><span>Custom</span></div>
			<div class="col-span-4"><div class="h-[1px] bg-ly-line"></div></div>

			<!-- 第十行 底部按钮 -->
			<div class="table-item"></div>
			<div class="table-item">
				<a
					class="ck-button"
					href="https://dev.montplex.com/console"
					target="_blank"
				>
					Start for free
				</a>
			</div>
			<div class="table-item bg-ly-check" style="border-radius: 0 0 16px 16px">
				<a
					class="ck-button login"
					href="https://dev.montplex.com/console"
					target="_blank"
					>Login</a
				>
			</div>
			<div class="table-item">
				<a
					class="ck-button"
					href="https://docs.upstash.com/docs/help/support"
					target="_blank"
				>
					Contact Us
				</a>
			</div>
		</div>
	</div>
	<!-- Pricing PC End -->

	<!-- Pricing Mobie Start -->
	<!-- md:hidden block -->
	<div class="">
		<div class="cardContent md:flex-row flex-col md:!px-4 px-0 !mb-10">
			<!-- <div class="cardItem gradient-border">
				<div class="cardBox text-white !px-0">
					<div class="px-7 pt-10 text-center">
						<h3 class="text-block text-[26px] font-medium">Free</h3>
						<div class="text-base">Cost by quantity</div>
						<svg
							width="100"
							height="4"
							class="vectors-wrapper mt-4 mx-auto"
							viewBox="0 0 100 4"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_404_3106)">
								<rect width="100" height="4" rx="2" fill="url(#paint0_linear_404_3106)" />
							</g>
							<defs>
								<linearGradient
									id="paint0_linear_404_3106"
									x1="-3.5269e-08"
									y1="1.84615"
									x2="98.6286"
									y2="13.5533"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#F926E1" />
									<stop offset="1" stop-color="#2AB5FB" />
								</linearGradient>
								<clipPath id="clip0_404_3106">
									<rect width="100" height="4" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
					<div class="grid grid-cols-2 w-full px-8">
						<div class="table-item !justify-start !text-lable-70">Commands Limit</div>
						<div class="table-item">
							<p class="text-center">Max 10,000 Commands Daily</p>
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !justify-start !text-lable-70">Encryption (TLS)</div>
						<div class="table-item">
							<svgIcon icon="true" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !justify-start !text-lable-70">Multi Zone Replication</div>
						<div class="table-item">
							<svgIcon icon="none" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !justify-start !text-lable-70">VPC Peering</div>
						<div class="table-item">
							<svgIcon icon="none" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !justify-start !text-lable-70">Professional Support</div>
						<div class="table-item">
							<svgIcon icon="none" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>
					</div>
					<div class="table-item">Free (No credit card required)</div>
					<div class="px-8 w-full flex justify-center">
						<a class="ck-button w-full" href="https://dev.montplex.com/console" target="_blank"> Start for free </a>
					</div>
				</div>
			</div> -->
			<div class="cardItem gradient-border">
				<div class="cardBox text-white !px-0">
					<div class="px-7 pt-10 text-center">
						<h3 class="text-block text-[26px] font-medium">
							{{ $t("home.price.payas") }}
						</h3>
						<svg
							width="100"
							height="4"
							class="vectors-wrapper mt-4 mx-auto"
							viewBox="0 0 100 4"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_404_3106)">
								<rect
									width="100"
									height="4"
									rx="2"
									fill="url(#paint0_linear_404_3106)"
								/>
							</g>
							<defs>
								<linearGradient
									id="paint0_linear_404_3106"
									x1="-3.5269e-08"
									y1="1.84615"
									x2="98.6286"
									y2="13.5533"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#F926E1" />
									<stop offset="1" stop-color="#2AB5FB" />
								</linearGradient>
								<clipPath id="clip0_404_3106">
									<rect width="100" height="4" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
					<div class="grid grid-cols-2 w-full px-8">
						<div class="table-item !justify-start !text-lable-70">
							{{ $t("home.price.commands") }}
						</div>
						<div class="table-item">{{ $t("home.price.unlimited") }}</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !justify-start !text-lable-70">
							{{ $t("home.price.tls") }}
						</div>
						<div class="table-item">
							<svgIcon icon="true" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !justify-start !text-lable-70">
							{{ $t("home.price.zone") }}
						</div>
						<div class="table-item">
							<svgIcon icon="true" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !justify-start !text-lable-70">
							{{ $t("home.price.vpc") }}
						</div>
						<div class="table-item">
							<svgIcon icon="none" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !justify-start !text-lable-70">
							{{ $t("home.price.ps") }}
						</div>
						<div class="table-item">{{ $t("home.price.optional") }}</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>
					</div>
					<div class="table-item">
						<p class="text-center"><!-- {{ $t("home.price.dj") }} --></p>
					</div>
					<div class="px-8 w-full flex justify-center">
						<a
							class="ck-button w-full login"
							href="https://dev.montplex.com/console"
							target="_blank"
						>
							{{ $t("home.login") }}
						</a>
					</div>
				</div>
			</div>
			<div class="cardItem gradient-border">
				<div class="cardBox text-white !px-0">
					<div class="px-7 pt-10 text-center">
						<h3 class="text-block text-[26px] font-medium">
							{{ $t("home.price.enterprise") }}
						</h3>
						<svg
							width="100"
							height="4"
							class="vectors-wrapper mt-4 mx-auto"
							viewBox="0 0 100 4"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_404_3106)">
								<rect
									width="100"
									height="4"
									rx="2"
									fill="url(#paint0_linear_404_3106)"
								/>
							</g>
							<defs>
								<linearGradient
									id="paint0_linear_404_3106"
									x1="-3.5269e-08"
									y1="1.84615"
									x2="98.6286"
									y2="13.5533"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#F926E1" />
									<stop offset="1" stop-color="#2AB5FB" />
								</linearGradient>
								<clipPath id="clip0_404_3106">
									<rect width="100" height="4" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
					<div class="grid grid-cols-2 w-full px-8">
						<div class="table-item !justify-start !text-lable-70">
							{{ $t("home.price.commands") }}
						</div>
						<div class="table-item">Unlimited</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !justify-start !text-lable-70">
							{{ $t("home.price.tls") }}
						</div>
						<div class="table-item">
							<svgIcon icon="true" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !justify-start !text-lable-70">
							{{ $t("home.price.zone") }}
						</div>
						<div class="table-item">
							<svgIcon icon="true" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !justify-start !text-lable-70">
							{{ $t("home.price.vpc") }}
						</div>
						<div class="table-item">
							<svgIcon icon="true" class="!h-5 !w-5" />
						</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>

						<div class="table-item !justify-start !text-lable-70">
							{{ $t("home.price.ps") }}
						</div>
						<div class="table-item">{{ $t("home.price.optional") }}</div>
						<div class="col-span-2"><div class="h-[1px] bg-ly-line"></div></div>
					</div>
					<div class="table-item">{{ $t("home.price.custom") }}</div>
					<div class="px-8 w-full flex justify-center">
						<a
							class="ck-button w-full"
							href="https://dev.montplex.com/console"
							target="_blank"
						>
							{{ $t("home.contact") }}</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Pricing Mobie End -->
</template>

<script setup lang="ts"></script>

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

.pricing-right {
	background-color: #ffffff;
	border: 1px solid rgb(0 0 0 / 0.05);
	border-radius: 12px;
	box-shadow: 0 0 18px 4px rgb(249 38 225 / 0.07);
	object-fit: fill;
}

.talk-button {
	padding: 16px 32px;
	margin-top: 12px;
	margin-bottom: 12px;
	width: 100%;
	font-size: 16px;
	text-align: left;
	color: #ffffff;
	background-color: #3898ec;
	border-radius: 14px;
	cursor: pointer;
	background-image: linear-gradient(90deg, #f926e1, #2ab5fb);
}
</style>
