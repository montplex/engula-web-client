import { App } from "vue";
import "@/styles/common.scss";
import "@/assets/fonts/font.scss";
// import "element-plus/dist/index.css";

import { setupTailwindcss } from "./tailwindcss";
import "virtual:svg-icons-register";
import svgIcon from "@/components/SvgIcon/index.vue";

import { createPinia } from "pinia";
import { createRouter } from "@/routers";
import setupAuth0 from "./auth0";
import setupHighlight from "./highlight";
import error from "./error";

export function setupPlugins(app: App) {
	app.config.errorHandler = error;
	app.component("SvgIcon", svgIcon);
	app.use(createRouter(app));
	app.use(createPinia());
	setupTailwindcss();
	setupHighlight(app);
	setupAuth0(app);
}
