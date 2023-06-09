<template>
	<div class="container mx-auto !max-w-screen-xl py-6 px-4 flex items-center justify-center bg-white">
		<div class="form">
			<el-form label-position="top" label-width="100px" ref="cardFormRef" :model="cardForm">
				<div class="alert-base info text-info-8 mb-5">
					<p>
						This credit card will be used for your personal account. If you want to use it under a team account, switch to your
						team first.
					</p>
					<i-ep:close class="ep_close" />
				</div>

				<el-form-item label="Credit Card">
					<div id="card" class="mb-2 w-full"></div>
				</el-form-item>

				<el-form-item label="Name/Company">
					<el-input v-model="cardForm.name" placeholder="My Name / My Company Name" />
				</el-form-item>

				<div class="my-collapse !mb-5">
					<div class="collapse-item">
						<div class="header" @click="coll = !coll">
							<i-ep:arrow-right
								class="ep_close !text-base mr-3"
								:class="{
									'rotate-90 transition-all decoration-300': coll
								}"
							/>
							<span class="ant-collapse-header-text">Billing Details</span>
						</div>
						<div class="content p-4" v-show="coll">
							<el-form-item label="Country">
								<el-select v-model="cardForm.country" clearable filterable placeholder="Select cloud provider" class="w-full">
									<el-option v-for="item in selectCountry" :key="item" :label="item" :value="item" />
								</el-select>
							</el-form-item>
							<div class="flex gap-2">
								<el-form-item label="State/Province" class="w-full">
									<el-input v-model="cardForm.state" placeholder="Washington" />
								</el-form-item>
								<el-form-item label="Zip Code" class="w-full">
									<el-input v-model="cardForm.zip" placeholder="eg. 98004" />
								</el-form-item>
							</div>

							<el-form-item label="City">
								<el-input v-model="cardForm.city" placeholder="Seattle" />
							</el-form-item>

							<el-form-item label="Street Address">
								<el-input v-model="cardForm.address" placeholder="Seattle" />
							</el-form-item>
							<el-form-item label="Tax ID (Optional)">
								<el-input v-model="cardForm.tax" placeholder="eg. 4567891233" />
							</el-form-item>
						</div>
					</div>
				</div>

				<el-button @click="handleSubmit" color="#5469d4" class="w-full !h-10 !rounded-lg !font-bold">Pay ow</el-button>
			</el-form>
		</div>

		<!-- <form @submit.prevent="handleSubmit" class="form"></form> -->
	</div>
</template>

<script setup lang="ts">
import { loadStripe, Stripe, StripeElementsOptionsClientSecret, StripeElements, StripeCardElement } from "@stripe/stripe-js";
import { reactive, ref } from "vue";
import { countryList } from "#/consts";

const coll = ref(false);

const selectCountry = reactive(countryList);

const cardForm = reactive({
	country: "",
	cardId: "",
	name: "",
	address: "",
	city: "",
	state: "",
	zip: "",
	tax: ""
});

// publishable API key
const key = "pk_test_51MdVvdKtlgGSFCEP8CGyhnrD0ve2sxuVjdF7AMrmYdoJxXDGwEdHbXqlJY2IkKWy21xsEDdr9ZSiIrVDZHvjSkDt000ZkK5hih";

const options = {
	locale: "auto",
	appearance: { theme: "stripe" },
	clientSecret: "pi_3MrF95KtlgGSFCEP02yKPSIs_secret_Gltf2AZjucRdxr5CICLNB15Tz"
} as StripeElementsOptionsClientSecret;

let stripe: Stripe;
let elements: StripeElements;
let cardElement: StripeCardElement;

(async () => {
	stripe = (await loadStripe(key)) as Stripe;
	elements = stripe.elements(options);
	cardElement = elements.create("card", {
		hidePostalCode: true,
		classes: {
			base: "h-9 border border-gray-300 rounded-lg px-2 py-2.5  bg-white"
		}
	});
	cardElement.mount("#card");
})();

async function handleSubmit(e: Event) {
	e.preventDefault();
	const { error, paymentIntent } = await stripe.confirmCardPayment(options.clientSecret as string, {
		payment_method: {
			card: cardElement,
			billing_details: {
				name: "lioayiyi"
			}
		}
	});

	if (error) {
		console.log(error);
	} else {
		console.log(paymentIntent);
	}
}
</script>

<style lang="scss">
.my-collapse {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	font-size: 14px;
	color: rgb(0 0 0 / 0.88);
	background-color: rgb(0 0 0 / 0.02);
	border: 1px solid #d9d9d9;
	border-bottom: 0;
	border-radius: 8px;
	.collapse-item {
		&:last-child {
			border-bottom: 1px solid #d9d9d9;
			border-radius: 0 0 8px 8px;
			.header {
				border-radius: 0 0 8px 8px;
			}
		}
		.header {
			position: relative;
			display: flex;
			flex-wrap: nowrap;
			align-items: flex-start;
			padding: 12px 16px;
			line-height: 1.58;
			color: rgb(0 0 0 / 0.8);
			cursor: pointer;
			transition: all 0.3s, visibility 0s;
		}
		.content {
			color: rgb(0 0 0 / 0.88);
			background-color: #ffffff;
			border-top: 1px solid #d9d9d9;
			border-radius: 0 0 8px 8px;
			transition: all 0.3s ease-in;
		}
	}
}
.form {
	padding: 40px;
	width: 30vw;
	min-width: 500px;
	border-radius: 7px;
	box-shadow: 0 0 0 0.5px rgb(50 50 93 / 0.1), 0 2px 5px 0 rgb(50 50 93 / 0.1), 0 1px 1.5px 0 rgb(0 0 0 / 0.07);
	align-self: center;
}
.ep_close {
	display: inline;
	font-size: 24px;
	color: rgb(0 0 0 / 0.45);
	transition: color 0.2s;
	&:hover {
		color: rgb(0 0 0 / 0.88);
	}
}
</style>
