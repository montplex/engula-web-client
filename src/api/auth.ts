import { http } from "@/plugins/axios";

export interface IUserInfo {
	isVerified: boolean; // 注册时email验证
	canCreateCacheService: boolean; // 是否可以创建缓存服务
	feeType: number; // 0/1/2 free/pro/enterprise
	id: number;
	email?: string;
	lastLoginTime: number;
	nickname: string;
	picture: string;
	roles: string[];
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
