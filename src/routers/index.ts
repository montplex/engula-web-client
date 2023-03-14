import { createRouter as createVueRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/index.vue";
import Console from "@/views/console/index.vue";
import Redis from "@/views/console/redis/index.vue";
import { App } from "vue";
// import { createAuthGuard } from "@auth0/auth0-vue";

export function createRouter(app: App) {
	return createVueRouter({
		history: createWebHistory(import.meta.env.BASE_URL),
		routes: [
			{
				path: "/",
				name: "home",
				component: Home,
				children: [
					{
						path: "/",
						name: "home",
						component: () => import("@/views/Home/Home.vue")
					},
					{
						path: "about",
						name: "about",
						component: () => import("@/views/Home/About.vue")
					},
					{
						path: "careers",
						name: "careers",
						component: () => import("@/views/Home/Careers.vue")
					}
				]
			},
			{
				path: "/console",
				name: "console",
				component: Console
				// beforeEnter: createAuthGuard(app)
			},
			{
				path: "/login",
				name: "login",
				component: () => import("@/views/login/index.vue")
			},
			{
				path: "/redis",
				name: "redis",
				component: Redis,
				redirect: "/redis/details",
				children: [
					{
						path: "details",
						name: "details",
						component: () => import("@/views/console/redis/pages/Details.vue")
					},
					{
						path: "usage",
						name: "usage",
						component: () => import("@/views/console/redis/pages/Usgae.vue")
					},
					{
						path: "cli",
						name: "cli",
						component: () => import("@/views/console/redis/pages/Cli.vue")
					},
					{
						path: "Token",
						name: "token",
						component: () => import("@/views/Console/redis/pages/Token.vue")
					}
				]
			},
			{
				path: "/404",
				component: () => import("@/components/Error/404.vue")
			},
			{
				path: "/:pathMatch(.*)",
				redirect: "/404"
			}
		]
	});
}
