import { MockMethod } from "vite-plugin-mock";
import { Random, mock } from "mockjs";
export default [
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
	}
] as MockMethod[];
