<template>
	<div>
		<h1 class="py-4 mx-auto text-center">Login Page</h1>
		<el-button @click="login" plain size="large" class="mt-8 w-[240px]">
			<el-icon class="el-icon--left" :size="20">
				<svgIcon icon="google" />
			</el-icon>
			Sign in with Google</el-button
		>
	</div>
</template>

<script lang="ts" setup>
import { useAuth0 } from "@auth0/auth0-vue";
import { reactive } from "vue";

const auth0 = useAuth0();

const loginInfo = reactive({
	isAuthenticated: auth0.isAuthenticated,
	isLoading: auth0.isLoading,
	user: auth0.user
});

const login = () => {
	auth0.loginWithRedirect();
};

const logout = () => {
	auth0.logout({
		logoutParams: {
			returnTo: window.location.origin
		}
	});
};
</script>

<style lang="scss"></style>
