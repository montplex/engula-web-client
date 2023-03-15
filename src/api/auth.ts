import { http } from "@/plugins/axios";
interface IUserInfo {
	id: number;
	nickname: string;
	roles: string[];
	picture: string;
	lastLoginTime: number;
}

/**
 * Get Login user
 */
export const login = () => {
	return http.get<IUserInfo>({
		url: "/api/login",
		showLoading: true
	});
};
