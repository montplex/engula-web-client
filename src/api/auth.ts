import { http } from "@/plugins/axios";

export interface IUserInfo {
	id: number;
	nickname: string;
	roles: string[];
	picture: string;
	email?: string;
	lastLoginTime: number;
}

export interface IUsers {
	cacheServiceNumber: number;
	userNumber: number;
}

/**
 * Get Login user
 */
export const userInfo = () => {
	return http.get<IUserInfo>({
		url: "/auth0/user",
		showLoading: false
	});
};

/**
 * Get Users and Cache Service Number
 */
export const getUsers = () => {
	return http.get<IUsers>({
		url: "/home/user_cache_service/number",
		showLoading: false
	});
};
