import { App } from "vue";
import "@/styles/common.scss";
import "element-plus/dist/index.css";

import tailwindCss from "./tailwind";

import "virtual:svg-icons-register";
import svgIcon from "@/components/SvgIcon/index.vue";

import setupPinia from "./pinia";

import Terminal from "vue-web-terminal";

import i18n from "@/locales";

// import error from "./error";
import directives from "@/directives";

export function setupPlugins(app: App) {
	// app.config.errorHandler = error;
	app.component("SvgIcon", svgIcon);
	setupPinia(app);
	tailwindCss();
	app.use(i18n);
	app.use(Terminal);
	app.use(directives);
}
