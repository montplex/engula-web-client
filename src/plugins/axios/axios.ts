import axios, { AxiosInstance } from "axios";
import { IRequestConfig } from "#/axios";
import { ElLoading, ElMessage } from "element-plus";
import store from "@/utils/store";
import { LoadingInstance } from "element-plus/lib/components/loading/src/loading";
import cookie from "@/utils/cookie";
import { useRouter } from "vue-router";
import { CacheEnum } from "#/enum";
import Cookies from "js-cookie";

// 引入Elmessage和Elloading的css样式文件
/* import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css"; */

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
			(config) => {
				/*    */
				console.log("--------全局请求拦截器 success--------", config);
				if (this.showLoading) {
					// console.log("loadding.....");
					// 添加加载loading
					this.loading = ElLoading.service({
						lock: true,
						text: "加载中...",
						background: "rgba(255, 255, 255, 0.7)"
					});
				}
				return config;
			},
			(err) => {
				console.log("--------全局请求拦截器 err--------", err);
				this.loading?.close();
				return err;
			}
		);
		// 创建全局响应拦截器
		this.instance.interceptors.response.use(
			(config) => {
				console.log("--------全局响应拦截器 success--------", config);
				this.loading?.close();
				return config;
			},
			(err) => {
				console.log("--------全局响应拦截器 err--------", err);
				if ([401, 403].includes(err.response.status)) {
					Cookies.remove(CacheEnum.COOKIE);
					Cookies.remove(CacheEnum.JSAUTH);
					useRouter().replace("/login");
				}

				if (err.response.status === 404) {
					ElMessage({ message: "404错误~", type: "error", showClose: true });
				}

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

export default Request;
