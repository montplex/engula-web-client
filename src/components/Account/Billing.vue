<template>
	<div class="mt-6 sm:mt-8 w-full">
		<el-empty class="rounded-lg bg-gray-50 !p-14">
			<template #image>
				<svgIcon icon="empty-cache" style="width: 100%; height: 90px" />
			</template>
			<template #description>
				<div class="mx-auto my-4 max-w-screen-sm text-gray-600">
					<h3>No credit card added yet</h3>
					<div>
						<p>
							When you add a credit card,you will be able to create databases with pay-as-you-go plan. We work with
							<a class="text-[#67c23a] hover:underline cursor-pointer" href="https://stripe.com/" target="_blank">Stripe</a>
							for payment processing and never keep your credit card information in our database.
						</p>
					</div>
				</div>
				<el-button @click="addCardhandle" type="success">Add new card</el-button>
			</template>
		</el-empty>
	</div>

	<div class="container mx-auto !max-w-screen-xl py-10 bg-white">
		<el-table :data="tableData" v-bind="tabStyle">
			<el-table-column prop="date" label="Date" />
			<el-table-column prop="const" label="Const">
				<template #default="scope"> ${{ scope.row.const }}</template>
			</el-table-column>
			<el-table-column prop="status" label="Status">
				<template #default="scope">
					<el-tag type="warning">
						{{ scope.row.status }}
					</el-tag>
				</template>
			</el-table-column>
		</el-table>
		<div class="flex justify-end mb-4 mt-6">
			<el-pagination background :hide-on-single-page="false" :total="100" layout="prev, pager, next" />
		</div>
	</div>
</template>

<script setup lang="ts">
const tabStyle: any = {
	style: {
		width: "100%",
		textAlign: "start",
		borderRadius: "8px 8px 0 0",
		borderCollapse: "separate",
		borderSpacing: 0
	},
	tableLayout: "fixed",
	headerCellStyle: {
		color: "rgba(0, 0, 0, 0.88)",
		fontWeight: 600,
		textAlign: "start",
		background: "#fafafa",
		padding: "12px 8px",
		borderBottom: "1px solid #f0f0f0"
	},
	cellStyle: {
		padding: "12px 8px",
		borderBottom: "1px solid #f0f0f0"
	}
};

const tableData = [
	{
		date: "2016-05-03",
		const: "68",
		status: "SCHEDULED"
	},
	{
		date: "2016-05-01",
		const: "12",
		status: "SCHEDULED"
	},
	{
		date: "2016-04-27",
		const: "34.8",
		status: "SCHEDULED"
	},
	{
		date: "2016-04-11",
		const: "2.9",
		status: "SCHEDULED"
	},
	{
		date: "2016-03-03",
		const: "11",
		status: "SCHEDULED"
	}
];

const addCardhandle = () => {
	console.log("addCardhandle");
};
</script>

<style lang="scss">
.el-pagination.is-background .el-pager li {
	background-color: transparent;
	border: 1px solid #d9d9d9;
	border-radius: 8px;
	&:hover {
		border: 1px solid var(--el-color-primary);
	}
}
.el-pagination.is-background .el-pager li.is-active {
	font-weight: 600;
	color: var(--el-color-primary);
	background-color: transparent;
	border: 1px solid var(--el-color-primary);
	border-radius: 8px;
}
.el-pagination.is-background button {
	background-color: transparent !important;
	border: 1px solid #d9d9d9;
	border-radius: 8px;
	.el-icon {
		font-size: 16px;
		font-weight: 600;
		svg {
			display: inline;
			font-size: 18px;
			font-weight: 700;
		}
	}
}
</style>
