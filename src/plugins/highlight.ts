import { App } from "vue";
import "highlight.js/styles/atom-one-dark.css";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default function setupHighlight(app: App) {
	// 引入代码高亮，并进行全局注册
	app.use(hljsVuePlugin);
}
