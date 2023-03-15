import { MockMethod } from "vite-plugin-mock";
import { parse, stringify } from "querystring";
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
	},
	{
		url: "/engula/text",
		method: "post",
		response: (res: any) => {
			const params = parse(stringify(res.query));
			console.log(params.name, params.age);
		}
	},
	{
		url: "/engula/cache_service/list",
		method: "get",
		response: () => {
			return {
				list: [
					{
						id: 12,
						orgId: 2,
						name: "DBTEST-001-by-liaoyi",
						des: "desc",
						status: 1,
						cloudProvider: "aws",
						region: "ap-northeast-1",
						createdDate: 1678695874000,
						updatedDate: 1678695875000
					},
					{
						id: 13,
						orgId: 2,
						name: "DBTEST-002-by-mock",
						des: "desc",
						status: 1,
						cloudProvider: "aws",
						region: "ap-northeast-1",
						createdDate: 1678695886000,
						updatedDate: 1678695886000
					},
					{
						id: 14,
						orgId: 2,
						name: "DBTEST-004",
						des: "desc",
						status: 1,
						cloudProvider: "aws",
						region: "ap-northeast-1",
						createdDate: 1678695891000,
						updatedDate: 1678695891000
					},
					{
						id: 15,
						orgId: 2,
						name: "DBTEST-005",
						des: "desc",
						status: 1,
						cloudProvider: "aws",
						region: "ap-northeast-1",
						createdDate: 1678695897000,
						updatedDate: 1678695898000
					},
					{
						id: 16,
						orgId: 2,
						name: "DBTEST-008",
						des: "desc",
						status: 1,
						cloudProvider: "aws",
						region: "ap-northeast-1",
						createdDate: 1678695901000,
						updatedDate: 1678695902000
					}
				]
			};
		}
	},
	{
		url: "/engula/region/list",
		method: "get",
		response: () => {
			return {
				list: [
					{
						cloudProvider: "aws",
						regions: [
							"ap-northeast-1",
							"ap-northeast-2",
							"ap-northeast-3",
							"ap-south-1",
							"ap-southeast-1",
							"ap-southeast-2",
							"ca-central-1",
							"eu-central-1",
							"eu-north-1",
							"eu-west-1",
							"eu-west-2",
							"eu-west-3",
							"sa-east-1",
							"us-east-1",
							"us-east-2",
							"us-west-1",
							"us-west-2"
						]
					},
					{
						cloudProvider: "Alibaba",
						regions: [
							"ch-east-1",
							"ch-west-1",
							"cn-beijing",
							"cn-chengdu",
							"cn-hangzhou",
							"cn-hongkong",
							"cn-huhehaote",
							"cn-qingdao",
							"cn-shanghai",
							"cn-shenzhen",
							"cn-zhangjiakou",
							"eu-central-1",
							"eu-west-1",
							"me-east-1",
							"us-east-1",
							"us-west-1"
						]
					},
					{
						cloudProvider: "OPPO",
						regions: [
							"oppo-cn-1",
							"oppo-cn-2",
							"oppo-zh-congqing",
							"oppo-zh-hangzhou",
							"oppo-zh-hongkong",
							"oppo-zh-shanghai",
							"oppo-zh-shenzhen",
							"oppo-zh-wuhan",
							"oppo-zh-xian",
							"oppo-zh-zhengzhou"
						]
					},
					{
						cloudProvider: "Xioami",
						regions: [
							"xm-cn-1",
							"xm-zh-beijing",
							"xm-zh-chengdu",
							"xm-zh-hangzhou",
							"xm-zh-hongkong",
							"xm-zh-shanghai",
							"xm-zh-shenzhen",
							"xm-zh-wuhan",
							"xm-zh-xian",
							"xm-zh-zhengzhou"
						]
					}
				]
			};
		}
	},
	{
		url: "/engula/cache_service/add",
		method: "put",
		rawResponse: async (req, res) => {
			return {
				id: 13,
				accessToken: "et ut fugiat ipsum Lorem"
			};
		}
	},
	{
		url: "/engula/cache_service/one",
		method: "get",
		response: () => {
			return {
				one: {
					id: 21,
					orgId: 2,
					name: "DBTEST-004",
					des: "desc",
					status: 1,
					cloudProvider: "aws",
					region: "ap-northeast-1",
					createdDate: 1678695891000,
					updatedDate: 1678695891000
				}
			};
		}
	},
	{
		url: "/engula/metric/query",
		method: "get",
		response: () => {
			// return {	: []};
			return {
				jvm_threads_current: [
					[1678087128, "37"],
					[1678087143, "38"],
					[1678087158, "38"],
					[1678087173, "38"],
					[1678087188, "37"],
					[1678087203, "38"],
					[1678087218, "38"],
					[1678087233, "38"],
					[1678087248, "38"],
					[1678087263, "38"],
					[1678087278, "37"],
					[1678087293, "38"],
					[1678087308, "37"],
					[1678087323, "38"],
					[1678087338, "37"],
					[1678087353, "38"],
					[1678087368, "37"],
					[1678087383, "38"],
					[1678087398, "38"],
					[1678087413, "38"],
					[1678087428, "38"]
				],
				memory_used_bytes: [
					[1678087128, "37"],
					[1678087143, "38"],
					[1678087158, "38"],
					[1678087173, "38"],
					[1678087188, "37"],
					[1678087203, "38"],
					[1678087218, "38"],
					[1678087233, "38"],
					[1678087248, "38"],
					[1678087263, "38"],
					[1678087278, "37"],
					[1678087293, "38"],
					[1678087308, "37"],
					[1678087323, "38"],
					[1678087338, "37"],
					[1678087353, "38"],
					[1678087368, "37"],
					[1678087383, "38"],
					[1678087398, "38"],
					[1678087413, "38"],
					[1678087428, "38"]
				]
			};
		}
	}
] as MockMethod[];
