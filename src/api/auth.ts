import { http } from "@/plugins/axios";
import { IUserInfo } from "./type/auth";

/**
 * Get Login user
 */
export const getServiceList = () => {
	return http.get<IUserInfo>({
		url: "/api/dblist",
		showLoading: true
	});
};
