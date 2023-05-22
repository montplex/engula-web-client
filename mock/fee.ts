import { MockMethod } from "vite-plugin-mock";
export default [
	{
		url: "/engula/fee/list",
		method: "get",
		response: () => {
			return [
				{
					readBytes: 94,
					writeBytes: 58,
					monthStr: "2023-03",
					fee: 57,
					cacheServiceId: 64
				},
				{
					readBytes: 51,
					writeBytes: 79,
					monthStr: "2023-02",
					fee: 89,
					cacheServiceId: 87
				},
				{
					readBytes: 97,
					writeBytes: 24,
					monthStr: "2023-05",
					fee: 96,
					cacheServiceId: 5
				},
				{
					readBytes: 26,
					writeBytes: 72,
					monthStr: "2023-01",
					fee: 35,
					cacheServiceId: 1
				},
				{
					readBytes: 81,
					writeBytes: 69,
					monthStr: "2023-06",
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
			return {
				"detailList": [
					{
						"cacheServiceId": 48,
						"cacheServiceName": "DBTEST-mo",
						"monthStr": "2023-03",
						"avgMb": 50,
						"fee": 67
					},
					{
						"cacheServiceId": 19,
						"cacheServiceName": "DBTEST-LY",
						"monthStr": "2023-04",
						"avgMb": 52,
						"fee": 58
					},
					{
						"cacheServiceId": 26,
						"cacheServiceName": "DBTEST-002",
						"monthStr": "2023-05",
						"avgMb": 93,
						"fee": 80
					}
				],
				"summaryList": [
					{
						"monthStr": "2023-04",
						"fee": 615
					},
					{
						"monthStr": "2023-03",
						"fee": 596
					},
					{
						"monthStr": "2023-01",
						"fee": 596
					}
				]
			};
		}
	},
	{
		url: "/engula/fee/org/detail-list-by-day",
		method: "get",
		response: () => {
			return [
				{
					"cacheServiceId": 48,
					"cacheServiceName": "DBTEST-mo",
					"monthStr": "2023-03",
					"dayStr": "2023-03-01",
					"fee": 67
				},
				{
					"cacheServiceId": 19,
					"cacheServiceName": "DBTEST-LY",
					"monthStr": "2023-03",
					"dayStr": "2023-03-02",
					"fee": 58
				},
				{
					"cacheServiceId": 26,
					"cacheServiceName": "DBTEST-002",
					"monthStr": "2023-03",
					"dayStr": "2023-03-03",
					"fee": 80
				}
			];
		}
	}
] as MockMethod[];
