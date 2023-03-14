import { defineStore, createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

export const useGlobalStore = defineStore({
	id: "GlobalState",
	persist: {
		key: "GlobalState",
		storage: localStorage
	},
	state: () => ({}),
	getters: {},
	actions: {}
});

const pinia = createPinia();
// piniaPersist(持久化)
pinia.use(piniaPluginPersistedstate);

export default pinia;
