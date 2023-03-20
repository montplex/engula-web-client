import { createRouter as createVueRouter, createWebHistory } from "vue-router";
import { App } from "vue";
import routes from "./router";
import guard from "./guard";

const router = createVueRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes
});

export async function setupRouter(app: App) {
	// await userStore().getUserInfo();
	guard(router);
	app.use(router);
}

export default router;
