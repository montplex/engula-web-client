import { Random, mock } from "mockjs";
import { MockMethod } from "vite-plugin-mock";
import { parse, stringify } from "querystring";
export default [
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
	}
] as MockMethod[];
