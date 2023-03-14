import { MockMethod } from "vite-plugin-mock";
export default [
	{
		url: "/engula/auth0/user",
		method: "get",
		response: () => {
			return {
				code: 200,
				message: "请求成功",
				status: "success",
				data: {
					id: 13,
					nickname: "liaoyi",
					roles: ["irure", "dolore Excepteur", "irure", "consectetur sed nostrud", "quis consequat"],
					picture: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
					lastLoginTime: 1597001997524
				}
			};
		}
	}
] as MockMethod[];
