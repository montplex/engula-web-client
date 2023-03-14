<template>
	<div class="custom-class">
		<Header />
		<Billing />
		<Database />
		<Footer />
	</div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Billing from "./components/Billing.vue";
import Database from "./components/Databases.vue";
import Footer from "./components/Footer.vue";
import { getTest } from "@/api/test";
import { useDbStore } from "@/stores/modules/dbList";
const store = useDbStore();

console.log(import.meta.env);
console.log(import.meta.env.VITE_API_URL);
store.setServiceList();
const userInfo = {
	name: "liaoyi",
	age: 23
};
getTest(userInfo).then((res) => {
	console.log("res", res);
});
/* state.serviceList = store.serviceList;
/* watchEffect(async () => {
	
}); */
</script>

<style lang="scss"></style>
