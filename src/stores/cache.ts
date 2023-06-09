import { defineStore } from "pinia";
import { getCacheList, cacheOne, getTokenList, deleteToken } from "@/api/cache";
import i18n from "@/locales";

import {
	ICacheOneRes,
	ICacheListItem,
	CloudProviderItem,
	ItokenItem,
	CacheByIdParams
} from "#/cache";
import { getCloudProviderList } from "@/api/cache";
import { ElMessage } from "element-plus";

interface IcacheStore {
	filterList: ICacheListItem[];
	serviceList: ICacheListItem[];
	regionList: CloudProviderItem[];
	zoneList: string[];
	oneCache: ICacheOneRes;
	tokenList: ItokenItem[];
	port: string;
}

const { t } = i18n.global;

export const cacheStore = defineStore({
	id: "cacheStore",
	state: (): IcacheStore => ({
		filterList: [],
		serviceList: [],
		regionList: [],
		oneCache: {} as ICacheOneRes,
		tokenList: [],
		zoneList: [] as string[],
		port: "8125"
	}),
	actions: {
		async setCacheList(loadding: boolean) {
			const res = await getCacheList(loadding);
			this.serviceList = res.list;
			this.filterList = res.list.filter(
				(item) => item.status != "-1" && item.status != "-10"
			);
			return res.list;
		},
		filterCacheList(e: string, selected: any) {
			const data = this.filterList.filter(
				(item) => item.name.indexOf(e) !== -1
			);

			// this.serviceList.filter((item) => ["-1", "-10"].includes(selected == 1 ? !item.status : (item.status as any)));
			const list = this.serviceList.filter((item) =>
				selected == 1
					? item.status != "-1" && item.status != "-10"
					: ["-1", "-10"].includes(item.status as any)
			);

			this.filterList = e ? data : list;
		},
		async setCloudProviderList() {
			const res = await getCloudProviderList();
			this.regionList = res.list;
			this.zoneList = res.zonesByRegion;
		},
		filterRegions(cloudProvider: string) {
			let regionObj: any = {};
			this.regionList.map(
				(item) => item.regions && (regionObj[cloudProvider] = item.regions)
			);
			console.log("regionObj", regionObj);
			return regionObj;
		},
		async setOneCache(params: CacheByIdParams) {
			const res = await cacheOne(params);
			this.oneCache = res;
			return res;
		},
		updateOneCache(data: ICacheOneRes) {
			this.oneCache = data;
		},
		async setTokenList(id: number) {
			const res = await getTokenList(id);
			const list: ItokenItem[] = res.list.map((v) => ({ ...v, show: false }));
			this.tokenList = list;
		},
		deleteTokenList(id: number) {
			this.tokenList = this.tokenList.filter((item) => item.id !== id);
			deleteToken(id).then((res) => {
				res.ok
					? ElMessage.success(t("msg.delSuccess"))
					: ElMessage.error(t("msg.delFail"));
			});
		},
		getTokenByid(id: number) {
			const item = this.tokenList.find((item) => item.id === id)?.accessToken;
			const spare = this.tokenList[0]?.accessToken;
			return item ? item : spare;
		}
	}
});
