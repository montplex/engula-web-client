import { createI18n } from "vue-i18n";
// element-plus 的ui框架国际化语言配置
import zhCnLocale from "element-plus/lib/locale/lang/zh-cn";
import enLocale from "element-plus/lib/locale/lang/en";

import local from "./lang/index";

// 定义语言国际化内容 zh-cn en
const messages = {
	[zhCnLocale.name]: {
		...zhCnLocale,
		...local.zh
	},
	[enLocale.name]: {
		...enLocale,
		...local.en
	}
};

const i18n = createI18n({
	legacy: false,
	silentTranslationWarn: true,
	missingWarn: false,
	silentFallbackWarn: true,
	fallbackWarn: false,
	locale: "en", // 采用全局参数配置初始化语言 项目中有`zh-cn`、`en`两种
	fallbackLocale: zhCnLocale.name,
	messages
});

export default i18n;
