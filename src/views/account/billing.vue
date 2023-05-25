<template>
	<!-- <div class="mt-6 sm:mt-8 w-full">
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
				<el-button @click="showDialog" type="success">Add new card</el-button>
			</template>
		</el-empty>
	</div> -->

	<div class="container mx-auto !max-w-screen-xl py-10 bg-white">
		<el-table :data="tableListData" v-bind="tableStyle">
			<el-table-column prop="date" :label="$t('redis.pay.table.date')">
				<template #default="{ row }"> {{ dayjs(row.monthStr).format("YYYY MMM") }}</template>
			</el-table-column>
			<el-table-column prop="fee" :label="$t('redis.pay.table.fee')">
				<template #default="scope"> $ {{ scope.row.fee }}</template>
			</el-table-column>

			<el-table-column prop="isPaid" :label="$t('redis.pay.table.isPaid')">
				<template #default="{ row }">
					<el-button v-if="row.isPaid && row.fee >= 0" type="success" text>
						{{ $t("redis.pay.table.success") }}
					</el-button>
					<el-button v-if="row.fee == 0" type="info" text> No Fee </el-button>
					<el-button v-if="!row.isPaid && row.fee > 0" type="warning" text @click="handlePayFor(row)">
						{{ $t("redis.pay.table.paid") }}
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- 分页 -->
		<!-- <div class="flex justify-end mb-4 mt-6">
			<el-pagination background :hide-on-single-page="false" :total="100" layout="prev, pager, next" />
		</div> -->
	</div>

	<!-- <CardDialog v-model="addVisible" :pk="key" :client-secret="clientSecret" @confirm="addCardhandle" ref="addCardRef" /> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { dayjs } from "element-plus";
import { tableStyle } from "#/consts";
import { FeeOrg } from "#/cache";
import { getFeeOrgList } from "@/api/fee";
import { striptPk, getClientSecret } from "@/api/stript";

const addVisible = ref(false);
const tableListData = ref();
const pk = ref("");
const addCardRef = ref();

getFeeOrgList().then((res) => {
	tableListData.value = res.summaryList;
});
striptPk().then((res) => (pk.value = res.pk));

function handlePayFor(row: FeeOrg) {
	const { cacheServiceId, monthStr, fee, isPaid } = row;
	getClientSecret({ cacheServiceId, monthStr }).then((res) => {});
}

function showDialog() {
	addCardRef.value.initStripe();
	addVisible.value = true;
}

// publishable API key
const key = "pk_test_51MdVvdKtlgGSFCEP8CGyhnrD0ve2sxuVjdF7AMrmYdoJxXDGwEdHbXqlJY2IkKWy21xsEDdr9ZSiIrVDZHvjSkDt000ZkK5hih";
const clientSecret = "pi_3MrF95KtlgGSFCEP02yKPSIs_secret_Gltf2AZjucRdxr5CICLNB15Tz";
</script>

<style lang="scss">
.el-table__inner-wrapper::before {
	background-color: #ebeef521;
}

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
