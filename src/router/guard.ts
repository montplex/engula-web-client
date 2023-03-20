import { RouteLocationNormalized, Router } from "vue-router";
import cookie from "@/utils/cookie";
import { env } from "@/utils/util";
import { CacheEnum } from "#/enum";

const WHITE_LIST: string[] = ["/403", "/404", "/500", "/login", "/", "/home", "/careers", "/about"];
// WHITE_LIST.includes(to.name as string)

class Guard {
	constructor(private router: Router) {}

	public run() {
		this.router.beforeEach(this.beforeEach.bind(this));
	}

	private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
		console.log("全局导航守卫--------->", to, from);
		/* if (from.meta.auth && !this.cookie()) {
			if (env().MODE === "development") {
				window.location.href = "https://dev.montplex.com/engula/auth0/login";
			} else {
				window.location.href = env().VITE_API_URL + "/engula/auth0/login";
			}
		} */
	}

	private cookie(): string | null {
		return cookie.get(CacheEnum.COOKIE);
	}
}

export default (router: Router) => {
	new Guard(router).run();
};
