import { Random, mock } from "mockjs";

export const list = mock({
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
});
