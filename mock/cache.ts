import { Random, mock } from "mockjs";
import { MockMethod } from "vite-plugin-mock";

export default [
	{
		url: "/engula/text",
		method: "post",
		rawResponse: async (req, res) => {
			console.log("res", res, req);
			let reqbody = "";
			await new Promise((resolve) => {
				req.on("data", (chunk) => {
					reqbody += chunk;
				});
				req.on("end", () => resolve(undefined));
			});
			res.setHeader("Content-Type", "text/plain");
			res.statusCode = 200;
			res.end(`hello, ${reqbody}`);
		}
	},
	{
		url: "/engula/cache_service/list",
		method: "get",
		response: () => {
			return {
				code: 200,
				message: "请示成功",
				status: "success",
				data: mock({
					"list|4-8": [
						{
							"name|1": ["TEST_DB-01", "TEST_DB-03", "TEST_DB-23", "TEST_DB-0234", "DB-04"],
							"orgId|333-1007": 55,
							"cloudProvider|1": ["ASW", "Alibaba", "Tencent"],
							region: "@region()",
							"status|1": ["0", "-1", "-10", "20", "100", "1"],
							updatedDate: "@datetime",
							createdDate: "@datetime",
							"id|+1": 50,
							"des|1": ["AMD", "CMD", "UMD"]
						}
					]
				})
			};
		}
	},
	{
		url: "/engula/cache_service/add",
		method: "put",
		rawResponse: async (req, res) => {
			console.log("--------add", req, res);
			return {
				id: 13,
				accessToken: "et ut fugiat ipsum Lorem"
			};
		}
	},
	{
		url: "/engula/cache_service/one",
		method: "put",
		response: () => {
			return {
				code: 200,
				message: "请求成功",
				status: "success",
				data: {
					name: "DBDATR+E",
					orgId: 46,
					cloudProvider: "45",
					region: "officia",
					id: 5,
					updatedDate: 19920813,
					des: "amet nisi adipisicing reprehenderit",
					status: 9,
					createdDate: 20070709
				}
			};
		}
	}
] as MockMethod[];
