import copy from "./src/copy";
import debounce from "./src/debounce";
import throttle from "./src/throttle";
// import google from "./src/googleSign";
const directivesList = {
	copy,
	debounce,
	throttle
};

const directives = {
	install: function (app) {
		Object.keys(directivesList).forEach(key => {
			// 注册所有自定义指令
			app.directive(key, directivesList[key]);
		});
	}
};

export default directives;
