import { http } from "@/plugins/axios";

export const striptPk = () => {
	return http.get<{ pk: string }>({
		url: "/fee/stripe/pk",
		showLoading: false
	});
};
