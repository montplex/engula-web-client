import { RouteRecordRaw } from "vue-router";
import Console from "@/views/cache/index.vue";

const routes = [
	{
		path: "/",
		name: "Console",
		meta: { auth: true },
		component: Console
	},
	{
		path: "/cache/:id",
		name: "Cache",
		meta: { auth: true },
		component: () => import("@/views/cache/cache.vue"),
		redirect: { name: "Details" },
		children: [
			{
				path: "details",
				name: "Details",
				component: () => import("@/views/cache/tabs/details.vue")
			},
			{
				path: "connect",
				name: "Connect",
				component: () => import("@/views/cache/tabs/connect.vue")
			},
			{
				path: "metrics",
				name: "Metrics",
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
		path: "/account",
		name: "Account",
		component: () => import("@/views/account/index.vue"),
		redirect: { name: "Billing" },
		children: [
			{
				path: "teams",
				name: "Teams",
				component: () => import("@/views/account/teams.vue")
			},
			{
				path: "billing",
				name: "Billing",
				component: () => import("@/views/account/billing.vue")
			},
			{
				path: "cost-explorer",
				name: "CostExplorer",
				component: () => import("@/views/account/cost-explorer.vue")
			},
			{
				path: "settings",
				name: "Settings",
				component: () => import("@/views/account/settings.vue")
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
