import { createRouter as createVueRouter, createWebHistory } from "vue-router";
import { App } from "vue";
import routes from "./router";
import guard from "./guard";
import { userStore } from "@/stores/user";

const router = createVueRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes
});

export async function setupRouter(app: App) {
	console.log("setupRouter----get UserInfo...");
	// await userStore().getUserInfo();
	guard(router);
	app.use(router);
}

export default router;
