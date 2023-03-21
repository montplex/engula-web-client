import { createRouter as createVueRouter, createWebHistory } from "vue-router";
import { CacheEnum } from "#/enum";
import Cookies from "js-cookie";
import { App } from "vue";
import routes from "./router";

const router = createVueRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes
});

router.beforeEach((to, from) => {
	const cookie = Cookies.get(CacheEnum.COOKIE);
	console.log("全局导航守卫--------->", to, from, to.meta.auth, cookie);
	if (to.meta.auth && !cookie) {
		window.location.replace(import.meta.env.VITE_API_URL + "/engula/auth0/login");
	}
});

export async function setupRouter(app: App) {
	app.use(router);
}

export default router;
