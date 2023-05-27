/* 获取cookie */
const cookie = {
	get(name: string) {
		let arr,
			reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if ((arr = document.cookie.match(reg))) return arr[2];
		else return null;
	},
	/** 设置cookie
	 * @param c_name cookie 名称
	 * @param value  cookie 值
	 * @param expiredays 有效期(天)
	 */
	set(c_name: string, value: any, expiredays: number) {
		let exdate = new Date();
		exdate.setDate(exdate.getDate() + expiredays);
		document.cookie = c_name + "=" + escape(value) + (expiredays == null ? "" : ";expires=" + exdate.toUTCString());
	},

	/* 删除cookie */
	del(name: string) {
		let exp = new Date();
		exp.setTime(exp.getTime() - 1);
		let cval = cookie.get(name);
		// console.log(cval, name + "=" + cval + ";expires=" + exp.toUTCString());
		if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
	}
};

export default cookie;
