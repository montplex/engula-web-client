import { MockMethod } from "vite-plugin-mock";
export default [
	{
		url: "/engula/upload/image",
		method: "post",
		response: () => {
			return {
				code: 200,
				errno: 0,
				message: "上传成功",
				status: "success",
				data: {
					url: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
				}
			};
		}
	}
] as MockMethod[];
