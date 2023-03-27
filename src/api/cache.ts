import { http } from "@/plugins/axios";

import {
	ICacheListRes,
	AddCacheParams,
	AddCacheRes,
	CacheByIdParams,
	RegionListRes,
	ITokenListRes,
	addTokenParams,
	updateTokenParams,
	ICacheOneRes,
	ChartParams,
	ChartRes,
	FeeRes
} from "#/cache";

/**
 * Get Fee list
 */
export const getFeeList = (cacheServiceId: number) => {
	return http.get<FeeRes>({
		url: "/fee/list",
		showLoading: false,
		params: { cacheServiceId }
	});
};

interface FeeOrgList {
	cacheServiceId: number;
	cacheServiceName: string;
	monthStr: string;
	readByte: number;
	writeByte: number;
	fee: number;
}

/**
 * Get Fee Org list
 */
export const getFeeOrgList = () => {
	return http.get<FeeOrgList[]>({
		url: "/fee/org/list",
		showLoading: false
	});
};

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
export const addCache = (data: AddCacheParams) => {
	return http.put<AddCacheRes>({
		url: "/cache_service/add",
		data
	});
};

/**
 * Get one cache service
 * @param id cache service id
 * @param opt 'stop' or 'terminate'  Cache Service
 */
export const cacheOne = (params: CacheByIdParams) => {
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
export const getTokenList = (cacheServiceId?: number) => {
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
export const addToken = (data: addTokenParams) => {
	return http.put<addTokenRes>({
		url: "/cache_service/access_token/add",
		data
	});
};

/**
 * 删除访问令牌
 */
export const deleteToken = (id: number) => {
	return http.delete<any>({
		url: `/cache_service/access_token/delete`,
		params: { id }
	});
};

/**
 * 更新访问令牌
 */
export const updateToken = (params: updateTokenParams) => {
	return http.post<any>({
		url: `/cache_service/access_token/mode/update`,
		params
	});
};

/**
 * query metrics
 */
export const getChart = (params: ChartParams) => {
	return http.get<ChartRes>({
		url: `/metric/query`,
		params
	});
};

export const testPut = () => {
	http.request({
		url: "/engula/cache_service/list",
		method: "put"
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
