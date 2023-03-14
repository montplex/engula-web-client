import { http } from "@/plugins/axios";
import { ICacheListRes } from "./type/cache";

export const getServiceList = () => {
	return http.get<ICacheListRes>({
		url: "/api/dblist",
		showLoading: false
	});
};

/* http
	.get<IRequestData>({
		url: "/engula/cache_service/list?id=3",
		showLoading: true,
		interceptors: {
			requestSuccessInterceptor(config) {
				console.log("get请求的拦截器");
				return config;
			}
		}
	})
	.then(res => {
		console.log("res ====", res);
	}); */
