import type { FormInstance, FormRules } from "element-plus";
import { reactive } from "vue";

export const createCacheRules = reactive<FormRules>({
	name: [{ required: true, message: "Please input name", trigger: ["blur", "change"] }],
	cloudProvider: [
		{
			required: true,
			message: "Please select cloud provider",
			trigger: "change"
		}
	],
	des: [{ required: false }],
	region: [{ required: true, message: "Please select region", trigger: "change" }],
	primaryZone: [{ required: true, message: "Please select Primary Zone", trigger: "change" }]
});

export const addTokenRules = reactive<FormRules>({
	cacheServiceId: [{ required: true, message: "Please input cache service", trigger: ["blur", "change"] }],
	mode: [{ required: true, message: "Please select mode", trigger: "change" }]
});

export const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.resetFields();
};

export const submit = async (formEl: FormInstance | undefined, callback: Function) => {
	if (!formEl) return;
	await formEl.validate((valid) => {
		if (!valid) return;
		callback && callback();
	});
};
