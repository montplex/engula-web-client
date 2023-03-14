import { http } from "@/plugins/axios";
import { IUserInfo } from "./types/auth";

/**
 * Get Login user
 */
export const login = () => {
	return http.get<IUserInfo>({
		url: "/api/login",
		showLoading: true
	});
};
