import { Cachestatus } from "#/enum";

type StrTest = (typeof Cachestatus)[keyof typeof Cachestatus];
export interface ICacheListItem {
	id: number;
	name: string;
	des: string;
	orgId: number;
	status: StrTest;
	cloudProvider: string;
	region: string;
	createdDate: number;
	updatedDate: number;
}
export type ICacheOneRes = { one: ICacheListItem };

export type ICacheList = { list: ICacheListItem[] };

export interface ICacheListRes {
	list: ICacheListItem[];
}

export interface AddCacheParams {
	cloudProvider: string; // 云提供商
	des?: string; // 加密方式 ？
	name: string; // 自定义名
	region: string; // 区域
}

export interface CacheByIdParams {
	id: string;
	opt?: "stop" | "terminate";
}

export interface AddCacheRes {
	/** 明文，可以直接显示*/
	accessToken: string;
	/** added id*/
	id: number;
}
export interface CloudProviderItem {
	cloudProvider: string;
	regions: string[];
}
export interface RegionListRes {
	list: CloudProviderItem[];
}

type Mode = "ro" | "rw";

export interface updateTokenParams {
	id: string | number;
	mode: Mode;
}

/* 查看密钥-默认隐藏 */
export interface ITokenListRes {
	list: ItokenItem[];
}

export interface ItokenItem {
	id: number;
	cacheServiceId: number;
	accessToken: string;
	mode: Mode;
	createdDate: number;
	updatedDate: number;
}

export interface addTokenParams {
	cacheServiceId: number | string;
	mode: Mode;
}
