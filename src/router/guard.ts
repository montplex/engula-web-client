import { RouteLocationNormalized, Router } from "vue-router";
import { CacheEnum } from "#/enum";
import Cookies from "js-cookie";
import { useRouter } from "vue-router";
class Guard {
	constructor(private router: Router) {}

	public run() {
		this.router.beforeEach(this.beforeEach.bind(this));
	}

	private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
		console.log("全局导航守卫--------->", to, from, to.meta.auth, this.cookie());
		if (import.meta.env.MODE !== "development") {
			if (to.meta.auth && !this.cookie()) {
				window.location.replace(import.meta.env.VITE_API_URL + "/engula/auth0/login");
			}
		}
	}
	private cookie(): string | undefined {
		console.log("cookie-------->", Cookies.get(CacheEnum.COOKIE));
		return Cookies.get(CacheEnum.COOKIE);
	}
}

export default (router: Router) => {
	new Guard(router).run();
};
