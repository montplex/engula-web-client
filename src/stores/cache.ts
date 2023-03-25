import { defineStore } from "pinia";
import { getCacheList, cacheOne, getTokenList, deleteToken } from "@/api/cache";
import { ICacheOneRes, ICacheListItem, CloudProviderItem, ItokenItem, CacheByIdParams } from "#/cache";
import { getCloudProviderList } from "@/api/cache";

interface IcacheStore {
	filterList: ICacheListItem[];
	serviceList: ICacheListItem[];
	regionList: CloudProviderItem[];
	oneCache: ICacheOneRes;
	tokenList: ItokenItem[];
	port: string;
}
export const cacheStore = defineStore({
	id: "cacheStore",
	state: (): IcacheStore => ({
		filterList: [],
		serviceList: [],
		regionList: [],
		oneCache: {} as ICacheOneRes,
		tokenList: [],
		port: "8125"
	}),
	actions: {
		async setCacheList() {
			const res = await getCacheList();
			this.serviceList = res.list;
			this.filterList = res.list;
			return res.list;
		},
		filterCacheList(val: string) {
			const data = this.serviceList.filter((item) => item.name.indexOf(val) !== -1);
			this.filterList = val ? data : this.serviceList;
		},
		async setCloudProviderList() {
			const res = await getCloudProviderList();
			this.regionList = res.list;
		},
		filterRegions(cloudProvider: string) {
			let regionObj: any = {};
			this.regionList.map((item) => item.regions && (regionObj[cloudProvider] = item.regions));
			console.log("regionObj", regionObj);
			return regionObj;
		},
		async setOneCache(params: CacheByIdParams) {
			const res = await cacheOne(params);
			this.oneCache = res;
			return res;
		},
		async setTokenList(id: number) {
			const res = await getTokenList(id);
			const list: ItokenItem[] = res.list.map((v) => ({ ...v, show: false }));
			this.tokenList = list;
		},
		deleteTokenList(id: number) {
			this.tokenList = this.tokenList.filter((item) => item.id !== id);
			deleteToken(id).then((res) => {
				res.ok ? ElMessage.success("Delete completed") : ElMessage.error("Delete failed");
				// this.setTokenList(id);
			});
		},
		getTokenByid(id: number) {
			const item = this.tokenList.find((item) => item.id === id)?.accessToken;
			const spare = this.tokenList[0]?.accessToken;
			return item ? item : spare;
		}
	}
});
