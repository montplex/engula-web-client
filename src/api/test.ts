import { http } from "@/plugins/axios";

export const getTest = (params: { name: string; age: number }) => {
	return http.post<any>({
		url: "/text",
		params,
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
