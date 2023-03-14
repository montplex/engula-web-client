import axios from "axios";
import { defineStore } from "pinia";
import piniaPersistConfig from "@/config/piniaPersist";

const useUserStore = defineStore("user", {
	/* persist: {
	  key: "USER",
	  storage: sessionStorage,
	  paths: ["token"]
	} */
	persist: piniaPersistConfig("user"),
	state: () => ({
		userInfo: {},
		token: ""
	}),
	getters: {
		hello: state => "Hello!" + state.username
	},

	actions: {
		async login(userData) {
			const result = await axios.post("/api/user/login", userData);
			const { data, code } = result.data;
			if (code === 0) {
				this.username = data.username;
				this.token = data.token;
			}
		},
		logout() {
			this.token = "";
			this.username = "";
		}
	}
});

export default useUserStore;
