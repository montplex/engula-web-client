import { App } from "vue";
import "@/styles/common.scss";
import "@/assets/fonts/font.scss";
import "element-plus/dist/index.css";

import tailwindCss from "./tailwindcss";

import "virtual:svg-icons-register";
import svgIcon from "@/components/SvgIcon/index.vue";

import setupPinia from "./pinia";
// import setupAuth0 from "./auth0";

import setupHighlight from "./highlight";

import Terminal from "vue-web-terminal";

// import error from "./error";
import directives from "@/directives";

export function setupPlugins(app: App) {
	// app.config.errorHandler = error;
	app.component("SvgIcon", svgIcon);
	setupPinia(app);
	tailwindCss();
	app.use(Terminal);
	setupHighlight(app);
	app.use(directives);

	// setupAuth0(app);
}
