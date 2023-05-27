<template>
	<div class="pay-page">
		<form @submit.prevent="handleSubmit">
			<!-- Payment card -->
			<div id="payment" class="mb-6"></div>
			<!-- Email -->
			<div id="link-auth" class="mb-2"></div>
			<div id="address" class="mb-6"></div>
			<el-button native-type="submit" color="#5469d4" class="w-full !h-10 !rounded-lg !font-bold">Pay ow</el-button>
		</form>
	</div>
</template>

<script setup lang="ts">
import {
	loadStripe,
	Stripe,
	StripeElementsOptionsClientSecret,
	StripeElements,
	AddressMode,
	StripeCardElementOptions,
	StripeAddressElementOptions,
	StripePaymentElementOptions,
	StripeLinkAuthenticationElement,
	StripeLinkAuthenticationElementOptions,
	StripeCardElement
} from "@stripe/stripe-js";
import { ref } from "vue";

let stripe: Stripe;
let elements: StripeElements;
let email = ref("");
let address = ref("");

const key = "pk_test_51MdVvdKtlgGSFCEP8CGyhnrD0ve2sxuVjdF7AMrmYdoJxXDGwEdHbXqlJY2IkKWy21xsEDdr9ZSiIrVDZHvjSkDt000ZkK5hih";

const options = {
	locale: "auto",
	appearance: { theme: "stripe" },
	clientSecret: "pi_3MrF95KtlgGSFCEP02yKPSIs_secret_Gltf2AZjucRdxr5CICLNB15Tz"
} as StripeElementsOptionsClientSecret;

const addressOptions = {
	mode: "billing",
	/* // 设置默认信息
	contacts: [
		{
			name: "lioayiyi",
			address: {
				line1: "354 Oyster Point Blvd",
				city: "South San Francisco",
				state: "CA",
				postal_code: "94080",
				country: "US"
			}
		}
	], */
	defaultValues: {
		name: "Jane Doe",
		address: {
			line1: "354 Oyster Point Blvd",
			city: "South San Francisco",
			state: "CA",
			postal_code: "94080",
			country: "US"
		}
	},
	// allowedCountries: ["US"], //允许的国家
	blockPoBox: true //是否禁止PO Box
	/* fields: {
		phone: "always"
	},
	validation: {
		phone: {
			required: "never"
		}
	} */
} as StripeAddressElementOptions;

const cardtOptions = {
	business: { name: "MontPlex" },
	layout: "accordion"
};

async function initStripe() {
	stripe = (await loadStripe(key)) as Stripe;
	elements = stripe.elements(options);

	const paymentElement = elements.create("payment");
	paymentElement.mount("#payment");

	const emailElement = elements.create("linkAuthentication");
	emailElement.mount("#link-auth");

	emailElement.on("change", (e: any) => {
		console.log("emailElement--->", e);
		// email.value = e.value.email;
	});

	let addressElement = elements.create("address", addressOptions);
	addressElement.mount("#address");

	addressElement.on("change", (e) => {
		console.log("addressElement--->", e);
	});
}

async function handleSubmit(e: any) {
	e.preventDefault();

	const res = await stripe.confirmPayment({
		elements,
		redirect: "if_required" //如果设置redirect: 'if_required'则不跳转returnUrl
	});
	console.log("confirmPayment-res--->", res);

	/* if (error?.type === "card_error" || error?.type === "validation_error") {
		showMessage(error.message);
	} else {
		showMessage("An unexpected error occurred.");
	} */
	/* if (error.type === "card_error" || error.type === "validation_error") {
		showMessage(error.message);
	} else {
		showMessage("An unexpected error occurred.");
	} */
	// console.log(error);
}
initStripe();
</script>

<style lang="scss" scoped>
.pay-page {
	display: flex;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	font-size: 16px;
	font-family: -apple-system, BlinkMacSystemFont, sans-serif;
	align-content: center;
	-webkit-font-smoothing: antialiased;
	form {
		padding: 40px;
		width: 30vw;
		min-width: 500px;
		border-radius: 7px;
		box-shadow: 0 0 0 0.5px rgb(50 50 93 / 0.1), 0 2px 5px 0 rgb(50 50 93 / 0.1),
			0 1px 1.5px 0 rgb(0 0 0 / 0.07);
		align-self: center;
	}
}
</style>
