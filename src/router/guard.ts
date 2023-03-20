import { RouteLocationNormalized, Router } from "vue-router";
import cookie from "@/utils/cookie";
import { env } from "@/utils/util";
import { CacheEnum } from "#/enum";
import Cookies from "js-cookie";

class Guard {
	constructor(private router: Router) {}

	public run() {
		this.router.beforeEach(this.beforeEach.bind(this));
	}

	private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
		console.log("全局导航守卫--------->", to, from, to.meta.auth, this.cookie());
		if (to.meta.auth && !this.cookie()) {
			window.location.href = env().VITE_API_URL + "/engula/auth0/login";
			/* if (env().MODE === "development") {
				window.location.href = "https://dev.montplex.com/engula/auth0/login";
			} else {
				window.location.href = env().VITE_API_URL + "/engula/auth0/login";
			} */
		}
	}

	private cookie(): string | undefined {
		return Cookies.get(CacheEnum.COOKIE);
	}
}

export default (router: Router) => {
	new Guard(router).run();
};
