import { defineStore } from "pinia";
// import { getServiceList } from "@/api/console";
import { getServiceList } from "@/api/cache";
import { ICacheListItem } from "@/api/types/cache";

export interface useDbStore {
	filterList: ICacheListItem[];
	serviceList: ICacheListItem[];
}
export const useDbStore = defineStore({
	id: "useDbStore",
	state: (): useDbStore => ({
		filterList: [],
		serviceList: []
	}),
	getters: {},
	actions: {
		async setServiceList() {
			const res = await getServiceList();
			console.log("getServiceList------- res", res);
			this.serviceList = res.data.list;
			this.filterList = res.data.list;
		},
		filterServiceList(val: string) {
			const data = this.serviceList.filter((item) => item.name.indexOf(val) !== -1);
			this.filterList = val ? data : this.serviceList;
		}
	}
});
