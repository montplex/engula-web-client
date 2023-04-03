<template>
	<div class="pay-page">
		<form @submit.prevent="handleSubmit">
			<div id="link-auth">
				<!--Stripe.js injects the Link Authentication Element-->
			</div>
			<div id="payment" class="mb-6">
				<!--Stripe.js injects the Payment Element-->
			</div>

			<div id="name" class="mb-6">
				<!--Stripe.js injects the Link Authentication Element-->
			</div>

			<div id="card-number" class="mb-6">
				<!--Stripe.js injects the Link Authentication Element-->
			</div>

			<el-button native-type="submit" color="#5469d4" class="w-full !h-10 !rounded-lg !font-bold">Pay ow</el-button>
		</form>
	</div>
</template>

<script setup lang="ts">
import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripe: Stripe;
let elements: any;
let emailAddress = "";
let elName = "";

// publishable API key
const key = "pk_test_51MdVvdKtlgGSFCEP8CGyhnrD0ve2sxuVjdF7AMrmYdoJxXDGwEdHbXqlJY2IkKWy21xsEDdr9ZSiIrVDZHvjSkDt000ZkK5hih";

async function initStripe() {
	stripe = (await loadStripe(key)) as Stripe;
	elements = stripe.elements({
		locale: "auto",
		appearance: { theme: "stripe" },
		clientSecret: "pi_3MrF95KtlgGSFCEP02yKPSIs_secret_Gltf2AZjucRdxr5CICLNB15Tz"
	});

	const linkAuthElement = elements.create("linkAuthentication");
	linkAuthElement.mount("#link-auth");

	linkAuthElement.on("change", (event: any) => {
		emailAddress = event.value.email;
	});
	// card,cardNumber , cardExpiry, cardCvc, postalCode, paymentRequestButton, iban, idealBank, p24Bank, auBankAccount, fpxBank, affirmMessage, afterpayClearpayMessage;
	// const nameElement = elements.create("card");
	// nameElement.mount("#name");
	/* // Create the Address Element in billing mode
	let addressElement = elements.create("address", { mode: "billing" });
	addressElement.mount("#address"); */
	const paymentElement = elements.create("payment", { layout: "tabs" });
	paymentElement.mount("#payment");
}

async function handleSubmit(e: any) {
	e.preventDefault();
	// setLoading(true);
	const { error } = await stripe.confirmPayment({
		elements,
		confirmParams: {
			// Make sure to change this to your payment completion page
			return_url: "http://localhost:4242/checkout.html",
			receipt_email: emailAddress
		},
		redirect: "if_required" //如果设置redirect: 'if_required'则不跳转returnUrl
	});
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
	console.log(error);
}
initStripe();
</script>

<style lang="scss" scoped>
.pay-page {
	font-family: -apple-system, BlinkMacSystemFont, sans-serif;
	font-size: 16px;
	-webkit-font-smoothing: antialiased;
	display: flex;
	justify-content: center;
	align-content: center;
	height: 100vh;
	width: 100vw;
	form {
		width: 30vw;
		min-width: 500px;
		align-self: center;
		box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1), 0px 2px 5px 0px rgba(50, 50, 93, 0.1),
			0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
		border-radius: 7px;
		padding: 40px;
	}
}
</style>
