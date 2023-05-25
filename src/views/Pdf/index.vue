<template>
	<el-table :data="tableData" style="width: 100%">
		<el-table-column type="expand" :width="48">
			<template #default="props">
				<div class="pl-[50px]">
					<el-table :data="props.row.family" class-name="children-table">
						<el-table-column label="Name" prop="name" />
						<el-table-column label="Zip" prop="zip" />
					</el-table>
				</div>
			</template>
		</el-table-column>
		<el-table-column label="Month" prop="date" />
		<el-table-column label="Fee" prop="name" />
	</el-table>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const parentBorder = ref(false);
const childBorder = ref(false);
const tableData = [
	{
		date: "2016-05-03",
		name: "Tom",
		state: "California",
		city: "San Francisco",
		address: "3650 21st St, San Francisco",
		zip: "CA 94114",
		family: [
			{
				name: "Jerry",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			},
			{
				name: "Spike",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			},
			{
				name: "Tyke",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			}
		]
	},
	{
		date: "2016-05-02",
		name: "Tom",
		state: "California",
		city: "San Francisco",
		address: "3650 21st St, San Francisco",
		zip: "CA 94114",
		family: [
			{
				name: "Jerry",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			},
			{
				name: "Spike",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			},
			{
				name: "Tyke",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			}
		]
	},
	{
		date: "2016-05-04",
		name: "Tom",
		state: "California",
		city: "San Francisco",
		address: "3650 21st St, San Francisco",
		zip: "CA 94114",
		family: [
			{
				name: "Jerry",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			},
			{
				name: "Spike",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			},
			{
				name: "Tyke",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			}
		]
	},
	{
		date: "2016-05-01",
		name: "Tom",
		state: "California",
		city: "San Francisco",
		address: "3650 21st St, San Francisco",
		zip: "CA 94114",
		family: [
			{
				name: "Jerry",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			},
			{
				name: "Spike",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			},
			{
				name: "Tyke",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			}
		]
	},
	{
		date: "2016-05-08",
		name: "Tom",
		state: "California",
		city: "San Francisco",
		address: "3650 21st St, San Francisco",
		zip: "CA 94114",
		family: [
			{
				name: "Jerry",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			},
			{
				name: "Spike",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			},
			{
				name: "Tyke",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			}
		]
	},
	{
		date: "2016-05-06",
		name: "Tom",
		state: "California",
		city: "San Francisco",
		address: "3650 21st St, San Francisco",
		zip: "CA 94114",
		family: [
			{
				name: "Jerry",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			},
			{
				name: "Spike",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			},
			{
				name: "Tyke",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			}
		]
	},
	{
		date: "2016-05-07",
		name: "Tom",
		state: "California",
		city: "San Francisco",
		address: "3650 21st St, San Francisco",
		zip: "CA 94114",
		family: [
			{
				name: "Jerry",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			},
			{
				name: "Spike",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			},
			{
				name: "Tyke",
				state: "California",
				city: "San Francisco",
				address: "3650 21st St, San Francisco",
				zip: "CA 94114"
			}
		]
	}
];
</script>

<style lang="scss" scoped>
:deep(.cell) {
	display: flex;
	align-items: center;
	.el-table__expand-icon {
		justify-content: center;
		align-items: center;
		color: var(--color-primary);
		cursor: pointer;
		transition: color 0.3s;
		width: 20px !important;
		line-height: 20px !important;
		height: 20px !important;
		display: inline-flex;
		background: #fff;
		border-color: #f0f0f0;
		border-style: solid;
		border-width: 1px;
		border-radius: 4px;

		i svg path {
			d: path("M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z");
		}

		&:hover,
		&:focus {
			color: var(--el-color-primary);
			border-color: var(--el-color-primary);
		}
	}

	.el-table__expand-icon--expanded {
		transform: rotate(0deg);
		i svg path {
			d: path("M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z");
		}
	}
}

// .el-table__header > thead > tr > th:first-child
:deep(.el-table__row > td:first-child) {
	border-right: var(--el-table-border) !important;
}

.children-table .el-table__row > td:first-child {
	border-right: none !important;
}
</style>
