import { http } from "@/plugins/axios";

import {
	ICacheListRes,
	AddCacheParams,
	AddCacheRes,
	ICacheListItem,
	CacheByIdParams,
	RegionListRes,
	ITokenListRes,
	addTokenParams,
	updateTokenParams,
	ICacheOneRes
} from "#/cache";

/**
 * Get list cache service
 */
export const getCacheList = () => {
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
export const getCacheById = (params: CacheByIdParams) => {
	return http.get<ICacheOneRes>({
		url: "/cache_service/one",
		params
	});
};

/**
 *  获取云厂商和区域列表
 */
export const getCloudProviderList = () => {
	return http.get<RegionListRes>({
		url: "/region/list"
	});
};

/**
 *  列表访问令牌
 */
export const getAccessTokenList = (cacheServiceId?: string) => {
	return http.get<ITokenListRes>({
		url: "/cache_service/access_token/list",
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
		url: "/cache_service/access_token/add",
		params
	});
};

/**
 * 删除访问令牌
 */
export const deleteAccessToken = (id: string | number) => {
	return http.delete<any>({
		url: `/cache_service/access_token/delete`,
		params: { id }
	});
};

/**
 * 更新访问令牌
 */
export const updateAccessTokenMode = (params: updateTokenParams) => {
	return http.post<any>({
		url: `/cache_service/access_token/mode/update`,
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
