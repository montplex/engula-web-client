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

import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

export function setupPlugins(app: App) {
	// app.config.errorHandler = error;
	app.component("SvgIcon", svgIcon);
	setupPinia(app);
	tailwindCss();
	app.use(i18n);
	app.use(Terminal);
	app.use(directives);
	//自定义一个代码高亮指令
	app.directive("highlight", function (el) {
		const blocks = el.querySelectorAll("code");
		blocks.forEach((block: any) => {
			hljs.highlightBlock(block);
		});
	});
}
