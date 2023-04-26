import { defineStore } from "pinia";
import cookie from "@/utils/cookie";
import { CacheEnum } from "#/enum";
import { IUserInfo, userInfo, getUsers, IUsers } from "@/api/auth";
import Cookies from "js-cookie";

type User = {
	info: null | IUserInfo;
	usersNum: IUsers;
};

export const userStore = defineStore({
	id: "user",
	persist: {
		key: "user",
		storage: localStorage
	},
	state: (): User => ({
		info: {} as null | IUserInfo,
		usersNum: {} as IUsers
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
		},
		async usersNumber() {
			const res = await getUsers();
			this.usersNum = res;
			return res;
		}
	}
});
