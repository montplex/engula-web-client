import { createApp } from "vue";
import App from "./App.vue";
import directives from "@/directives/index";
import { setupPlugins } from "@/plugins/index";
import Terminal from "vue-web-terminal";

async function init() {
	const app = createApp(App);
	setupPlugins(app);
	app.mount("#app");
	app.use(directives);
	app.use(Terminal);
}
console.log("init");

init();
