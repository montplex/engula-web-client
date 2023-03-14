import { createApp } from "vue";
import App from "./App.vue";
import directives from "@/directives/index";
import { setupPlugins } from "@/plugins/index";

async function init() {
	const app = createApp(App);
	setupPlugins(app);
	app.mount("#app");
	app.use(directives);
}

init();
