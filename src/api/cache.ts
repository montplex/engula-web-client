import { http } from "@/plugins/axios";

import {
	ICacheListRes,
	AddCacheParams,
	AddCacheRes,
	ICacheListItem,
	CacheByIdParams,
	CloudProviderItem,
	ICloudProviderRes,
	ListAccessToken,
	addTokenParams,
	updateTokenParams
} from "./type/cache";

/**
 * Get list cache service
 */
export const getServiceList = () => {
	return http.get<ICacheListRes>({
		url: "/cache_service/list",
		showLoading: true
	});
};

/**
 * Add cache service
 */
export const addService = (params: AddCacheParams) => {
	return http.put<AddCacheRes>({
		url: "/cache_service/add",
		params
	});
};

/**
 * Get one cache service
 */
export const getServiceById = (params: CacheByIdParams) => {
	return http.put<ICacheListItem>({
		url: "/cache_service/one",
		params
	});
};

/**
 *  获取云厂商和区域列表
 */
export const getCloudProviderList = () => {
	return http.get<ICloudProviderRes<CloudProviderItem>>({
		url: "/region/list"
	});
};

/**
 *  列表访问令牌
 */
export const getAccessToken = (cacheServiceId?: string) => {
	return http.get<ListAccessToken>({
		url: "/engula/cache_service/access_token/list",
		params: { cacheServiceId }
	});
};

// redis://default:70c51cb8867142a8a45b2da7516c9dd1@us1-hip-bonefish-40037.upstash.io:40037

type addTokenRes = { accessToken: string; id: string };

/**
 *  添加访问令牌
 */
export const addAccessToken = (params: addTokenParams) => {
	return http.put<addTokenRes>({
		url: "/engula/cache_service/access_token/add",
		params
	});
};

/**
 * 删除访问令牌
 */
export const deleteAccessToken = (id: string) => {
	return http.delete<addTokenRes>({
		url: `/engula/cache_service/access_token/delete/${id}`
	});
};

/**
 * 更新访问令牌
 */
export const updateAccessTokenMode = (params: updateTokenParams) => {
	return http.request<any>({
		method: "update",
		url: `/engula/cache_service/access_token/mode/update`,
		params
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
