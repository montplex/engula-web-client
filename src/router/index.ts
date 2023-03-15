import { createRouter as createVueRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/index.vue";
import { App } from "vue";
// import { createAuthGuard } from "@auth0/auth0-vue";

export function createRouter(app: App) {
	return createVueRouter({
		history: createWebHistory(import.meta.env.BASE_URL),
		routes: [
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
				component: () => import("@/views/cache/index.vue")
				// beforeEnter: createAuthGuard(app)
			},
			{
				path: "/redis",
				name: "Redis",
				component: () => import("@/views/cache/cache.vue"),
				redirect: "/redis/details",
				children: [
					{
						path: "details",
						name: "Details",
						component: () => import("@/views/cache/tabs/details.vue")
					},
					{
						path: "usage",
						name: "Usage",
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
				component: () => import("@/components/error/404.vue")
			},
			{
				path: "/:pathMatch(.*)",
				redirect: "/404"
			}
		]
	});
}
