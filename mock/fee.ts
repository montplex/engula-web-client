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
						"cacheServiceId": 186,
						"cacheServiceName": "test-211",
						"monthStr": "2023-05",
						"avgMb": 8,
						"fee": 2.05
					},
					{
						"cacheServiceId": 175,
						"cacheServiceName": "test",
						"monthStr": "2023-05",
						"avgMb": 8.29,
						"fee": 3.27
					},
					{
						"cacheServiceId": 176,
						"cacheServiceName": "123",
						"monthStr": "2023-05",
						"avgMb": 8.32,
						"fee": 3.27
					},
					{
						"cacheServiceId": 186,
						"cacheServiceName": "test-211",
						"monthStr": "2023-04",
						"avgMb": 8,
						"fee": 666
					},
					{
						"cacheServiceId": 175,
						"cacheServiceName": "test",
						"monthStr": "2023-04",
						"avgMb": 8.29,
						"fee": 333
					},
					{
						"cacheServiceId": 176,
						"cacheServiceName": "123",
						"monthStr": "2023-04",
						"avgMb": 8.32,
						"fee": 444
					},
					{
						"cacheServiceId": 186,
						"cacheServiceName": "test-211",
						"monthStr": "2023-02",
						"avgMb": 8,
						"fee": 1111
					},
					{
						"cacheServiceId": 175,
						"cacheServiceName": "test",
						"monthStr": "2023-02",
						"avgMb": 8.29,
						"fee": 2222
					},
					{
						"cacheServiceId": 176,
						"cacheServiceName": "123",
						"monthStr": "2023-02",
						"avgMb": 8.32,
						"fee": 3333
					}
				],
				"summaryList": [
					{
						"monthStr": "2023-05",
						"fee": 8.59,
						"isPaid": false
					},
					{
						"monthStr": "2023-04",
						"fee": 8.59,
						"isPaid": false
					},
					{
						"monthStr": "2023-02",
						"fee": 8.59,
						"isPaid": false
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
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-01",
					"fee": 2
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-01",
					"fee": 2
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-01",
					"fee": 6
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-02",
					"fee": 11
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-02",
					"fee": 2
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-02",
					"fee": 19
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-03",
					"fee": 2.05
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-03",
					"fee": 1.88
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-03",
					"fee": 2.56
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-04",
					"fee": 3.67
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-04",
					"fee": 4.56
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-04",
					"fee": 4.53
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-05",
					"fee": 4.67
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-05",
					"fee": 3.21
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-05",
					"fee": 12
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-06",
					"fee": 5.67
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-06",
					"fee": 8
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-06",
					"fee": 16
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-07",
					"fee": 5.2
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-07",
					"fee": 3.2
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-07",
					"fee": 1.1
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-08",
					"fee": 0.9
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-08",
					"fee": 1.2
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-08",
					"fee": 0
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-09",
					"fee": 0.78
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-09",
					"fee": 0.5
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-09",
					"fee": 0.34
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-10",
					"fee": 0
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-10",
					"fee": 0.23
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-10",
					"fee": 0.45
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-11",
					"fee": 0
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-11",
					"fee": 0
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-11",
					"fee": 1.1
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-12",
					"fee": 2.5
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-12",
					"fee": 7.1
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-12",
					"fee": 3.5
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-13",
					"fee": 0.5
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-13",
					"fee": 0.8
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-13",
					"fee": 2
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-14",
					"fee": 2.3
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-14",
					"fee": 12.1
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-14",
					"fee": 22
				},
				{
					"cacheServiceId": 175,
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-15",
					"fee": 0.3
				},
				{
					"cacheServiceId": 176,
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-15",
					"fee": 0.3
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-15",
					"fee": 0
				},
				{
					"cacheServiceId": 175,
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-16",
					"fee": 0.36
				},
				{
					"cacheServiceId": 176,
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-16",
					"fee": 0.36
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-16",
					"fee": 0
				},
				{
					"cacheServiceId": 175,
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-17",
					"fee": 0.36
				},
				{
					"cacheServiceId": 176,
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-17",
					"fee": 0.36
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-17",
					"fee": 0
				},
				{
					"cacheServiceId": 186,
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-18",
					"fee": 0.14
				},
				{
					"cacheServiceId": 175,
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-18",
					"fee": 0.36
				},
				{
					"cacheServiceId": 176,
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-18",
					"fee": 0.36
				},
				{
					"cacheServiceId": 186,
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-19",
					"fee": 0.36
				},
				{
					"cacheServiceId": 175,
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-19",
					"fee": 0.36
				},
				{
					"cacheServiceId": 176,
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-19",
					"fee": 0.36
				},
				{
					"cacheServiceId": 186,
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-20",
					"fee": 0.36
				},
				{
					"cacheServiceId": 175,
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-20",
					"fee": 0.36
				},
				{
					"cacheServiceId": 176,
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-20",
					"fee": 0.36
				},
				{
					"cacheServiceId": 186,
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-21",
					"fee": 0.36
				},
				{
					"cacheServiceId": 175,
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-21",
					"fee": 0.36
				},
				{
					"cacheServiceId": 176,
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-21",
					"fee": 0.36
				},
				{
					"cacheServiceId": 186,
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-22",
					"fee": 0.36
				},
				{
					"cacheServiceId": 175,
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-22",
					"fee": 0.36
				},
				{
					"cacheServiceId": 176,
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-22",
					"fee": 0.36
				},
				{
					"cacheServiceId": 186,
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-23",
					"fee": 0.36
				},
				{
					"cacheServiceId": 175,
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-23",
					"fee": 0.36
				},
				{
					"cacheServiceId": 176,
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-23",
					"fee": 0.36
				},
				{
					"cacheServiceId": 186,
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-24",
					"fee": 0.11
				},
				{
					"cacheServiceId": 175,
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-24",
					"fee": 0.09
				},
				{
					"cacheServiceId": 176,
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-24",
					"fee": 0.09
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-25",
					"fee": 22
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-25",
					"fee": 1
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-25",
					"fee": 3
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-26",
					"fee": 8
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-26",
					"fee": 0
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-26",
					"fee": 4
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-27",
					"fee": 0
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-27",
					"fee": 5
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-27",
					"fee": 0
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-28",
					"fee": 2
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-28",
					"fee": 1
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-28",
					"fee": 0
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-29",
					"fee": 5
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-29",
					"fee": 11
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-29",
					"fee": 0.8
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-30",
					"fee": 0
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-30",
					"fee": 12
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-30",
					"fee": 0
				},
				{
					"cacheServiceId": "186",
					"cacheServiceName": "test-211",
					"monthStr": "2023-05",
					"dayStr": "2023-05-31",
					"fee": 55
				},
				{
					"cacheServiceId": "175",
					"cacheServiceName": "test",
					"monthStr": "2023-05",
					"dayStr": "2023-05-31",
					"fee": 6
				},
				{
					"cacheServiceId": "176",
					"cacheServiceName": "123",
					"monthStr": "2023-05",
					"dayStr": "2023-05-31",
					"fee": 1.9
				}
			];
		}
	}
] as MockMethod[];
