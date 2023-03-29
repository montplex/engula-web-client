<template>
	<form @submit.prevent="handleSubmit">
		<div id="payment-element"></div>
		<el-button type="primary" html-type="submit">Submit</el-button>
	</form>
</template>
<script setup>
import { nextTick } from "vue";
import { loadStripe } from "@stripe/stripe-js";

let stripe, elements;

async function initStripe() {
	stripe = await loadStripe(
		"pk_test_51MdVvdKtlgGSFCEP8CGyhnrD0ve2sxuVjdF7AMrmYdoJxXDGwEdHbXqlJY2IkKWy21xsEDdr9ZSiIrVDZHvjSkDt000ZkK5hih"
	);
	elements = stripe.elements({
		theme: "stripe",
		clientSecret: "rwst",
		locale: "auto"
	});
	const paymentElement = elements.create("payment");
	paymentElement.mount("#payment-element");
}
async function handleSubmit(e) {
	e.preventDefault();
	const { error } = await stripe.confirmPayment({
		elements,
		confirmParams: {
			// Make sure to change this to your payment completion page
			return_url: "http://localhost:4242/checkout.html"
		},
		redirect: "if_required"
		//redirect: 'if_required'如果设置redirect: 'if_required'则不跳转returnUrl
	});
	console.log(error);
}
nextTick(() => {
	initStripe();
});
</script>
