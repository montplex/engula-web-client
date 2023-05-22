import axios, { AxiosInstance } from "axios";
import { IRequestConfig, IResponseData } from "#/axios";
import { ElLoading, ElMessage } from "element-plus";

import { LoadingInstance } from "element-plus/lib/components/loading/src/loading";
import { userStore } from "@/stores/user";

// 引入Elmessage和Elloading的css样式文件
/* import "element-plus/theme-chalk/el-loading.css"; */
import "element-plus/theme-chalk/el-message.css";

const DEFAULT_LOADING = true;

class Request {
	private instance: AxiosInstance;
	private showLoading: boolean;
	private loading?: LoadingInstance;

	constructor(config: IRequestConfig) {
		// 默认不加载loading
		this.showLoading = config.showLoading ?? DEFAULT_LOADING;
		this.instance = axios.create(config);

		/* 从config中取出的拦截器是从实例中取出的拦截器 */
		// 创建实例请求拦截器
		this.instance.interceptors.request.use(
			config.interceptors?.requestSuccessInterceptor,
			config.interceptors?.requestErrorInterceptor
		);
		// 创建实例响应拦截器
		this.instance.interceptors.response.use(
			config.interceptors?.responseSuccessInterceptor,
			config.interceptors?.responseErrorInterceptor
		);
		// 创建全局请求拦截器
		this.instance.interceptors.request.use(
			(config: IRequestConfig) => {
				config.metadata = { startTime: new Date() };
				console.log("全局请求拦截器 res=========", config);
				if (this.showLoading) {
					// 添加加载loading
					this.loading = ElLoading.service({
						lock: true,
						text: "loading...",
						background: "rgba(255, 255, 255, 1)"
					});
				}
				return config;
			},
			(err) => {
				console.log("全局请求拦截器 err=========", err);
				this.loading?.close();
				return err;
			}
		);
		// 创建全局响应拦截器
		this.instance.interceptors.response.use(
			(res: any) => {
				/* --------------- 全局响应拦截器 success ------------ */
				const statusCode = res?.response !== undefined ? res.status || res?.response.status : null;
				showMessage(statusCode);
				console.log("全局响应拦截器 res=========", statusCode, res);
				this.loading?.close();
				return res;
			},
			(err) => {
				// console.log("--------全局响应拦截器 err--------", err);
				const statusCode = err.response !== undefined ? err.status || err.response.status : null;
				console.log("==============全局响应拦截器 err=========", statusCode, err);
				showMessage(statusCode);
				this.loading?.close();
				return err;
			}
		);
	}
	/** 通用请求工具函数 */
	// 传入的泛型是约束返回值
	request<T>(config: IRequestConfig<T>): Promise<T> {
		return new Promise((resolve, reject) => {
			// 定制该请求是否加loading。当为传入该参数时，默认为true
			if (config.showLoading === false) {
				this.showLoading = false;
			}
			// 创建单个请求的请求拦截器
			if (config.interceptors?.requestSuccessInterceptor) {
				// 直接调用，然后将处理后的config返回
				config = config.interceptors.requestSuccessInterceptor(config);
			}
			this.instance
				.request<any, T>(config)
				.then((res) => {
					// 调用传入的响应拦截器 [单个请求对返回数据的处理]
					if (config.interceptors?.responseSuccessInterceptor) {
						res = config.interceptors.responseSuccessInterceptor(res);
					}
					resolve(res);
				})
				.catch((err) => {
					reject(err);
				})
				.finally(() => {
					/* 避免影响下一次请求设置的 showLoading */
					this.showLoading = DEFAULT_LOADING;
				});
		});
	}

	get<T>(config: IRequestConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: "GET" });
	}

	post<T>(config: IRequestConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: "POST" });
	}

	delete<T>(config: IRequestConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: "DELETE" });
	}

	patch<T>(config: IRequestConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: "PATCH" });
	}

	put<T>(config: IRequestConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: "PUT" });
	}
}

function logout() {
	userStore().info = null;
	window.location.replace(import.meta.env.VITE_API_URL + "/engula/auth0/login");
}

function showMessage(statusCode: number) {
	switch (statusCode) {
		case 400:
			$Toast("请求错误 400");
			break;
		case 401:
			$Toast("身份已过期，请重新登录");
			logout();
			break;
		case 403:
			$Toast("拒绝访问 403");
			logout();
			break;
		case 404:
			$Toast("网络开小差了 404");
			break;
		case 408:
			$Toast("请求超时 408");
			break;
		case 500:
			$Toast("服务器错误 500");
			break;
		case 501:
			$Toast("服务未实现 501");
			break;
		case 502:
			$Toast("网络错误 502");
			break;
		case 503:
			$Toast("服务不可用 503");
			break;
		case 504:
			$Toast("网络超时 504");
			break;
		case 505:
			$Toast("HTTP版本不受支持 505");
			break;
		default:
			break;
	}
}
function $Toast(message: string) {
	ElMessage({
		message,
		type: "error",
		showClose: true,
		duration: 2000
	});
}

export default Request;
