<template>
	<div class="home-container h-table">
		<div class="h_table_box">
			<div :class="['table-col first-col', { 'active-table': tableActive === 1 }]" @click="handeleTableClick(1)">
				<div class="title"></div>
				<div class="b-bottom info">
					<span class="pl-8">Commands Limit</span>
					<img class="w-4 h-4" src="@/assets/images/info.png" />
				</div>
				<div class="b-bottom info">
					<span class="pl-8">Persistence</span>
					<img class="w-4 h-4" src="@/assets/images/info.png" />
				</div>
				<div class="b-bottom info">
					<span class="pl-8">Encryption (TLS)</span>
					<img class="w-4 h-4" src="@/assets/images/info.png" />
				</div>
				<div class="b-bottom info">
					<span class="pl-8">REST API</span>
					<img class="w-4 h-4" src="@/assets/images/info.png" />
				</div>
				<div class="b-bottom info">
					<span class="pl-8">Multi Zone Replication</span>
					<img class="w-4 h-4" src="@/assets/images/info.png" />
				</div>
				<div class="b-bottom info">
					<span class="pl-8">VPC Peering</span>
					<img class="w-4 h-4" src="@/assets/images/info.png" />
				</div>
				<div class="b-bottom info">
					<span class="pl-8">Professional Support</span>
					<img class="w-4 h-4" src="@/assets/images/info.png" />
				</div>
				<div class="py-4"></div>
			</div>

			<div :class="['table-col', { 'active-table': tableActive === 2 }]" @click="handeleTableClick(2)">
				<div class="title">Free</div>
				<div class="b-bottom">Max 10,000 Commands Daily</div>
				<div class="b-bottom"><img src="@/assets/images/tick.png" alt="" /></div>
				<div class="b-bottom"><img src="@/assets/images/tick.png" alt="" /></div>
				<div class="b-bottom"><img src="@/assets/images/tick.png" alt="" /></div>
				<div class="b-bottom">-</div>
				<div class="b-bottom">-</div>
				<div class="b-bottom">-</div>
				<div class="py-4">
					<p class="h-12">Free (No credit card required)</p>
					<button class="w-3/5 h-10 btn-base bg-info my-10 font-semibold">START FOR FREE</button>
				</div>
			</div>

			<div :class="['table-col', { 'active-table': tableActive === 3 }]" @click="handeleTableClick(3)">
				<div class="title">Pay as you go</div>
				<div class="b-bottom">Unlimited</div>
				<div class="b-bottom"><img src="@/assets/images/tick.png" alt="" /></div>
				<div class="b-bottom"><img src="@/assets/images/tick.png" alt="" /></div>
				<div class="b-bottom"><img src="@/assets/images/tick.png" alt="" /></div>
				<div class="b-bottom"><img src="@/assets/images/tick.png" alt="" /></div>
				<div class="b-bottom">-</div>
				<div class="b-bottom">Optional</div>
				<div class="py-4">
					<p class="h-12">$0.2 per 100K commands,up to $160 monthly max.</p>
					<button class="w-3/5 h-10 btn-base bg-success my-10 font-semibold">LOGIN</button>
				</div>
			</div>

			<div :class="['table-col', { 'active-table': tableActive === 4 }]" @click="handeleTableClick(4)">
				<div class="title">Enterprise</div>
				<div class="b-bottom">Unlimited</div>
				<div class="b-bottom"><img src="@/assets/images/tick.png" alt="" /></div>
				<div class="b-bottom"><img src="@/assets/images/tick.png" alt="" /></div>
				<div class="b-bottom"><img src="@/assets/images/tick.png" alt="" /></div>
				<div class="b-bottom"><img src="@/assets/images/tick.png" alt="" /></div>
				<div class="b-bottom"><img src="@/assets/images/tick.png" alt="" /></div>
				<div class="b-bottom">Optional</div>
				<div class="py-4">
					<p class="h-12" style="line-height: 3rem">Custom</p>
					<button class="w-3/5 h-10 btn-base bg-info my-10 font-semibold">CONTACT US</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const tableActive = ref(-1);
const handeleTableClick = (index: number) => {
	console.log("---");
	tableActive.value = index;
	console.log(tableActive.value);
};
</script>

<style lang="scss">
.h-table {
	.h_table_box {
		display: flex;
		color: #ffffff;
		.table-col {
			width: 25%;
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

		/* undeline */
		.b-bottom {
			border-bottom: 1px solid rgb(255 255 255 / 20%);
		}
		img,
		.svg-icon {
			width: 1.5rem;
			height: 1.5rem;

			/* vertical-align: middle; */
		}
	}
}
.active-table {
	background: rgb(160 178 242 / 10%);
	border-radius: 0.5rem;
}
</style>
