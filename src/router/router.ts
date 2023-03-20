import { RouteRecordRaw } from "vue-router";
import Home from "@/views/home/index.vue";
const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		children: [
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
		]
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("@/views/login/index.vue")
	},
	{
		path: "/console",
		name: "Console",
		meta: { auth: true },
		component: () => import("@/views/cache/index.vue")
		// beforeEnter: createAuthGuard(app)
	},
	{
		path: "/redis",
		name: "Redis",
		meta: { auth: true },
		component: () => import("@/views/cache/cache.vue")
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
