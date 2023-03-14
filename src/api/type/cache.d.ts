export type ICacheList = { list: ICacheListItem[] };

const Cachestatus = {
	created: "0",
	running: "1",
	limited: "20",
	reject: "200",
	stopped: "-1",
	terminated: "-10"
} as const;

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

export interface ICacheListRes {
	code: number;
	data: ICacheList;
}

export interface AddCacheParams {
	cloudProvider: string; // 云提供商
	des?: string; // 加密方式 ？
	name: string; // 自定义名
	region: string; // 区域
}

export interface CacheByIdParams {
	id: number;
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

export type ICloudProviderRes<T> = { list: T[] };

type Mode = "ro" | "rw";

export interface updateTokenParams {
	id: number;
	mode: Mode;
}

/* 查看密钥-默认隐藏 */
export interface ListAccessToken extends updateTokenParams {
	accessToken: string;
	createdDate: number;
}

export interface addTokenParams {
	cacheServiceID: number;
	mode: Mode;
}
