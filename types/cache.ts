import { Cachestatus } from "#/enum";
import { type } from "os";

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

export type ICacheOneRes = { one: ICacheListItem; host: string };

export type ICacheList = { list: ICacheListItem[] };

export interface ICacheListRes {
	list: ICacheListItem[];
}

export interface AddCacheParams {
	cloudProvider: string; // 云提供商
	des: string; // 描述
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
	show?: boolean;
}

export interface addTokenParams {
	cacheServiceId: number | string;
	mode: Mode;
}

type Tcommand = "set" | "get" | "del" | "keys" | "exists" | "expire" | "ttl";

// get a / set a 100
const Fcommand = (instruct: Tcommand, params: any): string => `${instruct} ${params}`;

export interface CommandParams {
	cacheServiceId: number | string;
	command: string;
}

// fixed: eg. 15s or 1m or 5m
type Tstep = "15s" | "1m" | "5m";

export interface ChartParams {
	cacheServiceId?: number | string;
	start: number;
	end?: number;
	step?: Tstep | string;
}

type TwoArr = Array<Array<string | number>>;
// (number | string)[][]

export interface ChartRes {
	[index: string]: any;
	/**
	 * 内存使用byte
	 */
	memory_used_bytes: TwoArr;
	/**
	 * keys数量
	 */
	db_keys: TwoArr;
	/**
	 * 客户端命令数量
	 */
	client_commands_total: TwoArr; // Throughput (commands per sec)
	/**
	 * 缓存命中率
	 */
	hit_rate: TwoArr;
}
