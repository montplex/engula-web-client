import { defineStore } from "pinia";
import cookie from "@/utils/cookie";
import { CacheEnum } from "#/enum";
import { IUserInfo, userInfo } from "@/api/auth";
import { useRouter } from "vue-router";

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
			// if (cookie.get(CacheEnum.COOKIE)) {
			const res = await userInfo();
			this.info = res;
			console.log("info>>>>>>>", res);
			// }
		},
		logout() {
			cookie.del(CacheEnum.COOKIE);
			this.info = null;
			useRouter().push("/");
		}
	}
});
