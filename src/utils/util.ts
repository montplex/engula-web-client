import { ElMessage, dayjs } from "element-plus";

/**
 * @param cloneDeep 深拷贝
 * @param obj 传入的对象
 */
type TObject = Record<string, any>;
export const cloneDeep = (obj: TObject): TObject => {
	let memo: TObject = {};
	if (!(Object.prototype === Object.getPrototypeOf(obj))) {
		return new Error(`传入参数${obj}类型错误`);
	}
	for (let i in obj) {
		memo[i] = Object.prototype === Object.getPrototypeOf(obj[i]) ? cloneDeep(obj[i]) : obj[i];
	}
	return memo;
};

/**
 * @description env 格式化 import.meta.env对象 (字符串布尔值型转换)
 *
 */
export function env() {
	const env = cloneDeep(import.meta.env) as ImportMetaEnv;
	Object.entries(import.meta.env as Record<string, any>).forEach(([key, value]) => {
		if (value == "true" || value == "false") {
			env[key] = value == "true" ? true : false;
		} else if (/^\d+$/.test(value)) env[key] = Number(value);
		else if (value == "null") env[key] = null;
		else if (value == "undefined") env[key] = undefined;
	});
	return env;
}

/**
 * @description 获取localStorage
 * @param {String} key Storage名称
 */
export function localGet(key: string) {
	const value = window.localStorage.getItem(key);
	try {
		return JSON.parse(window!.localStorage!.getItem(key) as any);
	} catch (error) {
		return value;
	}
}

/**
 * @description 存储localStorage
 * @param {String} key Storage名称
 * @param {Any} value Storage值
 */
export function localSet(key: string, value: any) {
	window.localStorage.setItem(key, JSON.stringify(value));
}

/**
 * @description 清除localStorage
 * @param {String} key Storage名称
 */
export function localRemove(key: string) {
	window.localStorage.removeItem(key);
}

/**
 * @description 清除所有localStorage
 */
export function localClear() {
	window.localStorage.clear();
}

/**
 * @description 判断数据类型
 * @param {Any} val 需要判断类型的数据
 */
export function isType(val: any) {
	if (val === null) return "null";
	if (typeof val !== "object") return typeof val;
	else return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();
}

/**
 * @description 获取当前时间
 */
export function getTime(type: number) {
	let myDate = new Date();
	let myYear = myDate.getFullYear();
	let myMonth = myDate.getMonth() + 1;
	let myToday = myDate.getDate();
	let myDay = myDate.getDay();
	let myHour = myDate.getHours();
	let myMinute = myDate.getMinutes();
	let mySecond = myDate.getSeconds();
	let week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
	let nowTime;
	if (type === 1) {
		nowTime = myYear + "年" + fillZero(myMonth) + "月" + fillZero(myToday) + "日";
	} else if (type === 2) {
		nowTime = fillZero(myHour) + ":" + fillZero(myMinute) + ":" + fillZero(mySecond);
	} else if (type === 3) {
		nowTime = week[myDay];
	} else {
		nowTime =
			myYear +
			"年" +
			fillZero(myMonth) +
			"月" +
			fillZero(myToday) +
			"日" +
			" " +
			week[myDay] +
			" " +
			fillZero(myHour) +
			":" +
			fillZero(myMinute) +
			":" +
			fillZero(mySecond) +
			" " +
			"";
	}
	function fillZero(str: any) {
		let realNum;
		if (str < 10) {
			realNum = "0" + str;
		} else {
			realNum = str;
		}
		return realNum;
	}
	return nowTime;
}

/**
 * @description 获取浏览器默认语言
 */
export function getBrowserLang() {
	let browserLang = navigator.language ? navigator.language : (navigator as any).browserLanguage;
	let defaultBrowserLang = "";
	if (browserLang.toLowerCase() === "cn" || browserLang.toLowerCase() === "zh" || browserLang.toLowerCase() === "zh-cn") {
		defaultBrowserLang = "zh";
	} else {
		defaultBrowserLang = "en";
	}
	return defaultBrowserLang;
}

/**
 * @description 递把文件按照二进制方式读取
 * @param {File} file 文件源
 */
export const readFile = (file: File) => {
	return new Promise((resolve) => {
		let reader = new FileReader();
		reader.readAsBinaryString(file);
		reader.onload = (ev) => {
			resolve(ev.target!.result);
		};
	});
};

/* 实现点击复制功能 */
export const handleCopyClick = (e: string) => {
	const input = document.createElement("input");
	console.log("---", e);
	input.value = e;
	document.body.appendChild(input);
	input.select();
	document.execCommand("Copy");
	document.body.removeChild(input);
	ElMessage({
		message: "复制成功",
		type: "success"
	});
};

export function formatChartsData(obj: { [key: string]: any[] | any[][] }) {
	let memo = {} as any;
	for (const [key, value] of Object.entries(obj)) {
		const ch = value.map((item) => dayjs(item[0]).format("YYYY[年]M[月]D[日] HH:mm"));
		const en = value.map((item) => dayjs(item[0]).format("D MMM HH:mm"));
		const y = value.map((item) => (item[1] == "NaN" ? 0 : Number(item[1])));
		memo[key] = {
			x: {
				ch,
				en
			},
			y
		};
	}
	return memo;
}

export function formatBytes(bytes: number): string {
	const _f3 = (num: number) =>
		num.toLocaleString("en-US", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		});
	const _m = (num: number) => Math.pow(1024, num);

	if (!bytes || bytes == 0) return "0";
	if (bytes < 1024) {
		return `${bytes} B`;
	} else if (bytes < _m(2)) {
		return `${_f3(bytes / 1024)} KB`;
	} else if (bytes < _m(3)) {
		return `${_f3(bytes / _m(2))} MB`;
	} else if (bytes < _m(4)) {
		return `${_f3(bytes / _m(3))} GB`;
	} else {
		// (bytes < _m(5))
		return `${_f3(bytes / _m(4))} TB`;
	}
}

/**
 * 10000 => "10,000"
 * @param {number} num
 */
export function toThousandFilter(date: number | string) {
	const num = date ? Number(date) : 0;
	// 判断是否为整数
	const isInteger = parseInt(num.toString()) == parseFloat(num.toString());
	// .replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","));
	const filterStr = (str: string) => str.replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, "$&,");
	return isInteger ? filterStr(num.toString()) : filterStr(num.toFixed(2));
}

/**
 * 平滑滚动
 * @param {string} 元素id
 */
export function scrollToAnchor(anchorName: string) {
	if (!anchorName) return;
	// 找到锚点
	const anchorElement = document.getElementById(anchorName);
	// 如果对应id的锚点存在，就跳转到锚点
	if (!anchorElement) return;
	anchorElement.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * 当前缓存月视图折线图
 * @param {string} 元素id
 */
export function curren_month_option({ x, y }: any) {
	let option = {
		grid: {
			top: "30px",
			bottom: "20px",
			left: "10px",
			right: "20px",
			containLabel: true
		},
		tooltip: {
			trigger: "axis",

			axisPointer: {
				type: "shadow",
				shadowStyle: {
					color: {
						type: "linear",
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: "rgba(128, 255, 165,0.2)"
							},
							{
								offset: 1,
								color: "rgba(128, 255, 165,0.4)"
							}
						],
						global: false
					}
				}
			}
		},
		xAxis: [
			{
				data: x,
				axisLabel: {
					show: true,
					margin: 10,
					color: "#1e324f",
					// 格式化时间显示
					formatter: function (value: string) {
						return dayjs(value).format("DD");
					}
				},
				axisLine: {
					// show:false
					lineStyle: {
						color: "rgba(39, 76, 129, 0.11)",
						width: 0.5
					}
				},
				splitLine: {
					show: false
				},
				axisTick: { show: false } // 刻度格子线
			}
		],
		yAxis: [
			{
				axisLine: {
					show: false //隐藏y轴线
				},
				axisTick: {
					show: false //隐藏刻度线
				},
				axisLabel: {
					show: false //隐藏刻度值
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: "rgba(39, 76, 129, 0.11)",
						type: "dashed",
						width: 0.5
					}
				}
			}
		],
		series: [
			{
				name: "Fee",
				type: "line",
				data: y,
				smooth: true, // 曲线或直线
				symbol: "circle", //数值点设定为实心点
				symbolSize: 6, // 折线的点的大小
				animation: true,
				areaStyle: {
					color: "rgba(128, 255, 165,0.2)"
				},
				/* lineStyle: {
				color: "#04dbfc", //线的颜色
				width: 3, // 折线图线条粗细设置
				type: "dashed"
			}, */
				itemStyle: {
					color: "#67c23a" //线的颜色
				}
			}
		]
	};

	return option;
}

/* 当月缓存每日总计 折线图 */
export function get_chart_data(arr: any) {
	let meno: any = {};
	let c_array = [];
	arr.forEach((item: any) => {
		if (!meno[item.dayStr]) {
			meno[item.dayStr] = [];
		}
		meno[item.dayStr].push({ dayStr: item.dayStr, fee: item.fee });
	});
	for (const [key, value] of Object.entries(meno)) {
		// @ts-expect-error
		const fee_list = (value as any).sort((a, b) => new Date(a.dayStr) - new Date(b.dayStr));
		c_array.push({
			data: key,
			sum: fee_list
				.map((_v: any) => _v.fee)
				.reduce((a: number, b: number) => a + b)
				.toFixed(2)
		});
	}
	return {
		x: c_array.map((i) => i.data),
		y: c_array.map((i) => i.sum)
	};
}

/* 堆叠折线图 */
export function get_stacked_chart_data(arr: any) {
	let meno: any = {};
	let series = [];
	const x = Array.from(new Set(arr.map((v: any) => v.dayStr)));
	arr.forEach((item: any) => {
		if (!meno[item.cacheServiceName]) {
			meno[item.cacheServiceName] = [];
		}
		meno[item.cacheServiceName].push({ dayStr: item.dayStr, fee: item.fee });
	});
	for (const [key, value] of Object.entries(meno)) {
		// @ts-expect-error
		const fee_list = value.sort((a, b) => new Date(a.dayStr) - new Date(b.dayStr));
		series.push({
			name: key,
			type: "line",
			stack: "Total",
			symbol: "circle", //数值点设定为实心点
			symbolSize: 6, // 折线的点的大小
			animation: true,
			data: fee_list.map((_v: any) => _v.fee.toFixed(2))
		});
	}
	return {
		x,
		legend: Object.keys(meno),
		series
	};
}
