<template>
	<div class="swiper-container home-table-swiper">
		<div class="swiper-wrapper">
			<div class="swiper-slide" index="2">
				<div class="table-col choose-base">
					<div class="title">Free</div>
					<div class="b-bottom">
						<p>Commands Limit</p>
						<p>Max 10,000 Commands Daily</p>
					</div>
					<div class="b-bottom">
						<p>Persistence</p>
						<img src="@/assets/images/tick.png" />
					</div>
					<div class="b-bottom">
						<p>Encryption (TLS)</p>
						<img src="@/assets/images/tick.png" />
					</div>
					<div class="b-bottom">
						<p>REST API</p>
						<img src="@/assets/images/tick.png" />
					</div>
					<div class="b-bottom">
						<p>Multi Zone Replication</p>
						<p>-</p>
					</div>
					<div class="b-bottom">
						<p>VPC Peering</p>
						<p>-</p>
					</div>
					<div class="b-bottom">
						<p>Professional Support</p>
						<p>-</p>
					</div>
					<div class="b-bottom">-</div>
					<div class="py-4">
						<p class="h-12">Free (No credit card required)</p>
						<button class="w-3/5 h-10 btn-base bg-info my-10 font-semibold">START FOR FREE</button>
					</div>
				</div>
			</div>
			<div class="swiper-slide" index="3">
				<div class="table-col choose-base">
					<div class="title">Pay as you go</div>
					<div class="b-bottom">
						<p>Commands Limit</p>
						<p class="text-white">Unlimited</p>
					</div>
					<div class="b-bottom">
						<p>Persistence</p>
						<img src="@/assets/images/tick.png" />
					</div>
					<div class="b-bottom">
						<p>Encryption (TLS)</p>
						<img src="@/assets/images/tick.png" />
					</div>
					<div class="b-bottom">
						<p>REST API</p>
						<img src="@/assets/images/tick.png" />
					</div>
					<div class="b-bottom">
						<p>Multi Zone Replication</p>
						<img src="@/assets/images/tick.png" />
					</div>
					<div class="b-bottom">
						<p>VPC Peering</p>
						<p>-</p>
					</div>
					<div class="b-bottom">
						<p>Professional Support</p>
						<p class="text-white">Optional</p>
					</div>
					<div class="py-4">
						<p class="h-12 text-white text-ellipsis">
							$0.2 per 100K commands,<br />
							up to $160 monthly max.
						</p>
						<button class="w-3/5 h-10 btn-base bg-success my-10 font-semibold">LOGIN</button>
					</div>
				</div>
			</div>
			<div class="swiper-slide" index="4">
				<div class="table-col choose-base">
					<div class="title">Enterprise</div>
					<div class="b-bottom">
						<p>Commands Limit</p>
						<p class="text-white">Unlimited</p>
					</div>
					<div class="b-bottom">
						<p>Persistence</p>
						<img src="@/assets/images/tick.png" />
					</div>
					<div class="b-bottom">
						<p>Encryption (TLS)</p>
						<img src="@/assets/images/tick.png" />
					</div>
					<div class="b-bottom">
						<p>REST API</p>
						<img src="@/assets/images/tick.png" />
					</div>
					<div class="b-bottom">
						<p>Multi Zone Replication</p>
						<img src="@/assets/images/tick.png" />
					</div>
					<div class="b-bottom">
						<p>VPC Peering</p>
						<img src="@/assets/images/tick.png" />
					</div>

					<div class="b-bottom">
						<p>Professional Support</p>
						<p class="text-white">Optional</p>
					</div>
					<div class="py-4">
						<p class="h-12 text-white" style="line-height: 3rem">Custom</p>
						<button class="w-3/5 h-10 btn-base bg-info my-10 font-semibold">CONTACT US</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import Swiper, { Autoplay, EffectCoverflow } from "swiper";
import "swiper/swiper.scss";
Swiper.use([Autoplay, EffectCoverflow]);
onMounted(() => {
	initSwiper();
});

const initSwiper = () => {
	new Swiper(".home-table-swiper", {
		//循环
		loop: true,
		// spaceBetween: false, 	//每张播放时长3秒，自动播放
		// 切换效果
		effect: "coverflow",
		// 该选项给Swiper用户提供小小的贴心应用，设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。
		grabCursor: true,
		// 设定为true时，active slide会居中，而不是默认状态下的居左。
		centeredSlides: true,
		// 设置slider容器能够同时显示的slides数量(carousel模式)。
		slidesPerView: 1.32,
		// 启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。默认false，不开启，可以使用update()方法更新。
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		// 类似于苹果将多首歌曲的封面以3D界面的形式显示出来的方式
		coverflowEffect: {
			// slide做3d旋转时Y轴的旋转角度
			rotate: 0,
			// 每个slide之间的拉伸值，越大slide靠得越紧。5.3.6 后可使用%百分比
			stretch: -110,
			// slide的位置深度。值越大z轴距离越远，看起来越小。
			depth: 360,
			// depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。
			modifier: 1,
			// 是否开启slide阴影
			slideShadows: false
		}
	});
};
</script>

<style lang="scss" scoped>
.swiper-wrapper {
	.table-col {
		width: 100%;
		padding: 0 20px;
		color: rgb(255 255 255 / 60%);
		text-align: center;
	}
	.info {
		justify-content: flex-start !important;
		img {
			width: 1rem;
			height: 1rem;
			margin-left: 0.5em;
		}
	}
	.table-col div:not(:last-of-type) {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 64px;
	}
	.title {
		font-size: 1.5rem;
		font-weight: 800;
		color: rgb(255 255 255 / 80%);
	}
	.b-bottom {
		flex-direction: column;
		text-align: center;
		p {
			display: block;
		}
	}
	img,
	.svg-icon {
		width: 1.5rem;
		height: 1.5rem;
	}
}
</style>
