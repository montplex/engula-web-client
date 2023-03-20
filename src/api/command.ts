import { http } from "@/plugins/axios";
import { CommandParams } from "#/cache";

export const xmtApi = (params: CommandParams) => {
	return http.get<any>({
		url: "/command/exe",
		params,
		showLoading: false
	});
};
