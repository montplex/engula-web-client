import { defineStore } from "pinia";
import { getCacheList, getCacheById, getAccessTokenList } from "@/api/cache";
import { ICacheListItem, CloudProviderItem, ItokenItem, CacheByIdParams } from "#/cache";
import { getCloudProviderList } from "@/api/cache";

export interface useDbStore {
	filterList: ICacheListItem[];
	serviceList: ICacheListItem[];
	regionList: CloudProviderItem[];
	oneCache: ICacheListItem;
	tokenList: ItokenItem[];
}
export const useDbStore = defineStore({
	id: "useDbStore",
	state: (): useDbStore => ({
		filterList: [],
		serviceList: [],
		regionList: [],
		oneCache: {} as ICacheListItem,
		tokenList: []
	}),
	getters: {},
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
			const res = await getCacheById(params);
			this.oneCache = res.one;
			return res.one;
		},
		async setTokenList() {
			const res = await getAccessTokenList("14");
			this.tokenList = res.list;
		}
	}
});
