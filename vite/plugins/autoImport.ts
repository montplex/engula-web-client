import { PluginOption } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconResolver from "unplugin-icons/resolver";
import { resolve } from "path";

export default function autoImport(plugins: PluginOption[]) {
	plugins.push(
		AutoImport({
			resolvers: [ElementPlusResolver({ importStyle: "sass" })]
			// 自动导入vue方法(无需手动导入 ref、computed、生命周期钩子等) 和 vue-router方法 无需手动导入
			// imports: ["vue", "vue-router", "@vueuse/core"],
			// 自动生成声明文件的位置
			// dts: "types/auto-imports.d.ts"
		}),
		Components({
			// 导入element-plus，Icons 组件
			resolvers: [ElementPlusResolver(), IconResolver()]
			// 自动导入本地组件  components 文件夹下组件无需手动引入
			// dirs: ["src/components"],
			//组件名称包含目录，防止同名组件冲突
			// directoryAsNamespace: true,
			//指定类型声明文件，为true时在项目根目录创建
			// dts: "types/components.d.ts"
		}),
		//  使用 icones 中下载的图标：  <i-ep:arrow-down-bold />
		Icons({ autoInstall: true }),
		// svg-icon 本地和在线svg自动导入
		createSvgIconsPlugin({
			iconDirs: [resolve(process.cwd(), "src/assets/svg")],
			symbolId: "icon-[name]"
		})
	);
}
