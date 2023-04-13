<template>
	<div class="pay-page">
		<form @submit.prevent="handleSubmit">
			<!-- Email -->
			<div id="link-auth"></div>
			<!-- Payment -->
			<div id="payment" class="mb-6"></div>
			<div id="card" class="mb-6"></div>

			<div id="address-element" class="mb-6">
				<!-- Elements will create form elements here -->
			</div>

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
let cardElement: StripeCardElement;
let emailAddress = "";
let address = ref("");
// publishable API key
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
			line2: "",
			city: "South San Francisco",
			state: "CA",
			postal_code: "94080",
			country: "US"
		}
	},
	// allowedCountries: ["US"], //允许的国家
	// blockPoBox: true, //是否禁止PO Box
	fields: {
		phone: "always"
	},
	validation: {
		phone: {
			required: "never"
		}
	}
} as StripeAddressElementOptions;

const cardtOptions = {
	business: { name: "MontPlex" },
	layout: "accordion"
};

async function initStripe() {
	stripe = (await loadStripe(key)) as Stripe;
	elements = stripe.elements(options);

	// const linkAuthElement = elements.create("linkAuthentication");
	// linkAuthElement.mount("#link-auth");

	// linkAuthElement.on("change", (event: any) => {emailAddress = event.value.email;});
	// card,cardNumber , cardExpiry, cardCvc, postalCode, paymentRequestButton, iban, idealBank, p24Bank, auBankAccount, fpxBank, affirmMessage, afterpayClearpayMessage;
	cardElement = elements.create("card");
	cardElement.mount("#card");

	cardElement.on("change", (e) => {
		console.log(111);
		console.log(e.value);
	});
	/* // Create the Address Element in billing mode
	let addressElement = elements.create("address", { mode: "billing" });
	addressElement.mount("#address"); */

	const paymentElement = elements.create("payment");
	paymentElement.mount("#payment");

	/* const addressElement = elements.create("address", addressOptions);
	addressElement.mount("#address-element");

	addressElement.on("change", (e) => {
		if (e.complete) {
			address.value = e.value.address as any;
		}
	}); */
}

async function handleSubmit(e: any) {
	e.preventDefault();
	// setLoading(true);
	stripe
		.confirmCardPayment(options.clientSecret as string, {
			payment_method: {
				card: cardElement,
				billing_details: {
					name: "Jenny Rosen"
				}
			}
		})
		.then(function (result) {
			console.log(result);
		});
	const { error } = await stripe.confirmPayment({
		elements,
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
	// console.log(error);
}
initStripe();
</script>

<style lang="scss" scoped>
.pay-page {
	display: flex;
	align-content: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	font-family: -apple-system, BlinkMacSystemFont, sans-serif;
	font-size: 16px;
	-webkit-font-smoothing: antialiased;
	form {
		align-self: center;
		width: 30vw;
		min-width: 500px;
		padding: 40px;
		border-radius: 7px;
		box-shadow: 0 0 0 0.5px rgb(50 50 93 / 10%), 0 2px 5px 0 rgb(50 50 93 / 10%),
			0 1px 1.5px 0 rgb(0 0 0 / 7%);
	}
}
</style>
