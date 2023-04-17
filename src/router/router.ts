import { RouteRecordRaw } from "vue-router";
import Home from "@/views/home/index.vue";
import Cache from "@/views/cache/cache.vue";
import { CacheEnum } from "#/enum";
import Cookies from "js-cookie";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		/* children: [
			{
				path: "/",
				name: "Home",
				component: () => import("@/views/home/home.vue")
			},
			{
				path: "about",
				name: "About",
				component: () => import("@/views/home/about.vue")
			},
			{
				path: "careers",
				name: "Careers",
				component: () => import("@/views/home/careers.vue")
			}
		] */
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("@/views/login/index.vue")
	},
	{
		path: "/payment",
		name: "Payment",
		component: () => import("@/views/payment/index.vue")
	},
	{
		path: "/account",
		name: "Account",
		component: () => import("@/views/account/index.vue")
	},
	{
		path: "/console",
		name: "Console",
		meta: { auth: true },
		component: () => import("@/views/cache/index.vue")
		/* beforeEnter: (to, from) => {
			console.log("路由独享守卫--------->", to, from);
			if (Cookies.get(CacheEnum.COOKIE)) {
				return true;
			} else {
				window.location.href = import.meta.env.VITE_API_URL + "/engula/auth0/login";
			}
		} */
	},
	{
		path: "/redis",
		name: "Redis",
		meta: { auth: true },
		component: Cache,
		redirect: { name: "Details" },
		children: [
			{
				path: "details",
				name: "Details",
				component: () => import("@/views/cache/tabs/details.vue")
			},
			{
				path: "usages",
				name: "Usages",
				component: () => import("@/views/cache/tabs/usages.vue")
			},
			{
				path: "cli",
				name: "Cli",
				component: () => import("@/views/cache/tabs/cli.vue")
			},
			{
				path: "token",
				name: "Token",
				component: () => import("@/views/cache/tabs/token.vue")
			}
		]
	},

	{
		path: "/404",
		meta: { auth: true },
		component: () => import("@/components/error/404.vue")
	},
	{
		path: "/:pathMatch(.*)",
		redirect: "/404"
	}
] as RouteRecordRaw[];

export default routes;
