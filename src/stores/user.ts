import { defineStore } from "pinia";
import cookie from "@/utils/cookie";
import { CacheEnum } from "#/enum";
import { IUserInfo, userInfo } from "@/api/auth";
import Cookies from "js-cookie";

type User = {
	info: null | IUserInfo;
};

export const userStore = defineStore({
	id: "user",
	persist: {
		key: "user",
		storage: localStorage
	},
	state: (): User => ({
		info: {} as null | IUserInfo
	}),
	actions: {
		async getUserInfo() {
			if (import.meta.env.MODE === "development") {
				const res = await userInfo();
				this.info = res;
			} else {
				if (cookie.get(CacheEnum.COOKIE)) {
					const res = await userInfo();
					this.info = res;
				}
			}
		}
	}
});
