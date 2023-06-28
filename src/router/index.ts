import { createRouter as createVueRouter, createWebHistory } from "vue-router";
import { CacheEnum } from "#/enum";
import Cookies from "js-cookie";
import { App } from "vue";
import routes from "./router";

const router = createVueRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes,
	// 每次切换路由的时候滚动到页面顶部
	scrollBehavior() {
		return { left: 0, top: 0 };
	}
});

router.beforeEach((to, from) => {
	const cookie = Cookies.get(CacheEnum.COOKIE);
	const isLogin = cookie ? true : false;
	console.log("全局导航守卫------>isLogin", isLogin);
	if (import.meta.env.VITE_NODE_ENV !== "development") {
		const cookie = Cookies.get(CacheEnum.COOKIE);
		if (to.meta.auth && !cookie) {
			window.location.replace(import.meta.env.VITE_API_URL + "/engula/auth0/login");
		}
	}
});

export async function setupRouter(app: App) {
	app.use(router);
}

export default router;
