<template>
	<div class="cloud-message error">
		<span class="flex items-center">
			<i-ep:circle-close-filled class="mr-2" />
			<div>The VAT number is invalid</div>
		</span>
	</div>
	<!-- steps Start-->
	<div class="flex cloud-horizontal-steps">
		<div class="one-step active">
			<span class="step-icon" v-show="false">1</span>
			<i-ic:sharp-check-circle class="inline enable" />
			<span class="step-name">BILLING INFORMATION</span><span class="line"></span>
		</div>
		<div class="one-step">
			<span class="step-icon">2</span>
			<i-ic:sharp-check-circle class="inline enable" v-show="false" />
			<span class="step-name">PAYMENT INFORMATION</span><span class="line"></span>
		</div>
	</div>
	<!-- steps End -->
	<!-- style="max-width: 460px" -->
	<el-form label-position="top" label-width="100px" ref="cardFormRef" :model="cardForm">
		<el-form-item label="Country" prop="cloudProvider">
			<el-select v-model="cardForm.country" clearable filterable placeholder="Select cloud provider" class="w-full">
				<el-option v-for="item in selectCountry" :key="item" :label="item" :value="item" />
			</el-select>
		</el-form-item>

		<el-form-item label="VAT/GST ID" prop="id">
			<el-input v-model="cardForm.cardId" />
		</el-form-item>

		<el-form-item label="Company Name" prop="companyName">
			<el-input v-model="cardForm.name" />
		</el-form-item>

		<el-form-item label="Email" prop="email">
			<el-input v-model="cardForm.email" />
		</el-form-item>

		<el-form-item label="Address" prop="address">
			<el-input v-model="cardForm.address" />
		</el-form-item>
		<el-form-item label="City" prop="city">
			<el-input v-model="cardForm.city" />
		</el-form-item>

		<el-form-item label="State/Province/Region" prop="state">
			<el-input v-model="cardForm.state" />
		</el-form-item>

		<el-form-item label="ZIP or Postal Code" prop="zip">
			<el-input v-model="cardForm.zip" />
		</el-form-item>

		<span class="dialog-footer">
			<el-button>Cancel</el-button>
			<el-button type="primary">Next</el-button>
		</span>
	</el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const selectCountry = reactive([
	"China",
	"USA",
	"Japan",
	"Korea",
	"India",
	"Afghanistan",
	"Australia",
	"Brazil",
	"Canada",
	"France",
	"Germany",
	"Italy",
	"Mexico",
	"Russia",
	"Spain",
	"United Kingdom",
	"United States",
	"Vietnam",
	"Thailand",
	"Singapore",
	"Malaysia",
	"Indonesia",
	"Philippines",
	"Cambodia",
	"Laos",
	"Myanmar",
	"Brunei",
	"Timor-Leste",
	"East Timor",
	"Nepal",
	"Bangladesh",
	"Sri Lanka",
	"Pakistan",
	"Afghanistan",
	"Iran",
	"Iraq",
	"Saudi Arabia",
	"Yemen",
	"Oman",
	"United Arab Emirates",
	"Qatar",
	"Kuwait"
]);

const addLoading = ref(false);
const cardForm = reactive({
	country: "",
	cardId: "",
	name: "",
	email: "",
	address: "",
	city: "",
	state: "",
	zip: ""
});
</script>

<style lang="scss">
.cloud-horizontal-steps {
	.one-step {
		display: flex;
		align-items: center;
		color: rgb(132 133 135 / 1);
		&.active {
			color: unset;
		}
		.step-icon {
			margin-right: 0.5rem;
			width: 20px;
			height: 20px;
			text-align: center;
			color: rgb(255 255 255 / 1);
			background-color: #c7c7c7;
			border-radius: 50%;
			line-height: 20px;

			--tw-text-opacity: 1;
		}
		.enable {
			margin-right: 4px;
			margin-left: -4px;
			font-size: 20px;
			color: var(--el-color-primary);
			cursor: pointer;
		}
		.line {
			margin-right: 0.5rem;
			margin-left: 0.5rem;
			width: 80px;
			height: 1px;
			background-color: #e9eff6;
		}
	}
}
.cloud-message {
	position: relative;
	padding: 10px 16px 10px 36px;
	margin-bottom: 20px;
	border-radius: 8px;
	&.error {
		color: #f16538;
		border: 1px solid #f16538;
	}
}
</style>
