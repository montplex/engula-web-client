import { MockMethod } from "vite-plugin-mock";
import { parse, stringify } from "querystring";
export default [
	{
		url: "/engula/auth0/user",
		method: "get",
		response: () => {
			return {
				id: 13,
				nickname: "liaoyi",
				roles: ["irure", "dolore Excepteur", "irure", "consectetur sed nostrud", "quis consequat"],
				picture: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
				lastLoginTime: 1597001997524
			};
		}
	},
	{
		url: "/engula/fee/list",
		method: "get",
		response: () => {
			return [
				{
					readBytes: 94,
					writeBytes: 58,
					monthStr: "amet quis anim",
					fee: 57,
					cacheServiceId: 64
				},
				{
					readBytes: 51,
					writeBytes: 79,
					monthStr: "eu",
					fee: 89,
					cacheServiceId: 87
				},
				{
					readBytes: 97,
					writeBytes: 24,
					monthStr: "enim laboris",
					fee: 96,
					cacheServiceId: 5
				},
				{
					readBytes: 26,
					writeBytes: 72,
					monthStr: "elit in incididunt consequat",
					fee: 35,
					cacheServiceId: 1
				},
				{
					readBytes: 81,
					writeBytes: 69,
					monthStr: "Duis amet",
					fee: 54,
					cacheServiceId: 37
				}
			];
		}
	},
	{
		url: "/engula/fee/org/list",
		method: "get",
		response: () => {
			return [
				{
					cacheServiceId: 48,
					cacheServiceName: "DBTEST-mo",
					monthStr: "2023-03",
					readByte: 141,
					writeByte: 116,
					fee: 23
				},
				{
					cacheServiceId: 48,
					cacheServiceName: "DBTEST-test",
					monthStr: "2023-03",
					readByte: 141,
					writeByte: 116,
					fee: 66
				}
			];
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
						status: "-10",
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
		response: () => {
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
					status: "-1",
					cloudProvider: "aws",
					region: "ap-northeast-1",
					createdDate: 1678695891000,
					updatedDate: 1678695891000
				},
				host: "mdawmdiwmda0oq.engula-aws-ap-northeast-1.montplex.com"
			};
		}
	},
	{
		url: "/engula/cache_service/rename",
		method: "post",
		response: () => {
			return {
				id: 70,
				name: "DBTEST-004"
			};
		}
	},
	{
		url: "/engula/command/exe",
		method: "get",
		response: () => {
			return {
				ok: 100
			};
		}
	}
] as MockMethod[];
