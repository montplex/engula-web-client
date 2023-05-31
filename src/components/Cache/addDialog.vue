<template>
	<el-dialog
		:modelValue="modelValue"
		:before-close="() => $emit('update:modelValue', false)"
		:title="$t('redis.add.title')"
		width="520px"
		style="border-radius: 8px"
	>
		<el-form
			label-position="top"
			label-width="100px"
			ref="addFormRef"
			:model="addForm"
			style="max-width: 460px"
			:rules="createCacheRules"
		>
			<el-form-item :label="$t('redis.add.name')" prop="name">
				<el-input v-model="addForm.name" :placeholder="$t('redis.pl.name')" />
			</el-form-item>

			<el-form-item :label="$t('redis.add.describes')" prop="des">
				<el-input v-model="addForm.des" :placeholder="$t('redis.pl.describes')" />
			</el-form-item>

			<el-form-item :label="$t('redis.add.cloudProvider')" prop="cloudProvider">
				<el-select
					v-model="addForm.cloudProvider"
					@change="addForm.region = ''"
					clearable
					filterable
					:placeholder="$t('redis.pl.cloudProvider')"
					class="w-full"
				>
					<el-option
						v-for="item in store.regionList"
						:key="item.cloudProvider"
						:label="item.cloudProvider"
						:value="item.cloudProvider"
					/>
				</el-select>
			</el-form-item>

			<el-form-item :label="$t('redis.add.region')" prop="region" v-show="addForm.cloudProvider">
				<el-select
					v-model="addForm.region"
					:placeholder="$t('redis.pl.region')"
					class="w-full"
					@change="addForm.primaryZone = ''"
				>
					<el-option
						v-for="(item, index) in region[addForm.cloudProvider]"
						:key="index"
						:label="(cloud_provider_map as any)?.[item] ?? item"
						:value="item"
					/>
				</el-select>
			</el-form-item>

			<el-form-item :label="$t('redis.add.primaryZone')" prop="primaryZone" v-show="addForm.region">
				<el-select v-model="addForm.primaryZone" :placeholder="$t('redis.pl.primaryZone')" class="w-full" :allow-create="true">
					<el-option v-for="(item, index) in zoneList[addForm.region as any]" :key="index" :label="item" :value="item" />
				</el-select>
			</el-form-item>
		</el-form>

		<template #footer>
			<span class="dialog-footer">
				<el-button @click="$emit('update:modelValue', false)">{{ $t("redis.add.cancel") }}</el-button>
				<el-button :loading="addLoading" type="primary" @click="submit(addFormRef, addCallback)">
					<template #loading>
						<el-icon class="el-icon--left is-loading" size="16">
							<i-ep:loading />
						</el-icon>
					</template>
					{{ $t("redis.add.confirm") }}
				</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { cacheStore } from "@/stores/cache";
import { addCache } from "@/api/cache";
import { AddCacheParams } from "#/cache";
import { createCacheRules, resetForm, submit } from "@/utils/rules";
import { ElMessage, FormInstance } from "element-plus";
import { useIntervalFn } from "@vueuse/core";
import { useI18n } from "vue-i18n";

const cloud_provider_map = {
	"ap-east-1": "Asia Pacific (Hong Kong)",
	"ap-southeast-1": "Asia Pacific (Sydney)",
	"us-east-1": "US East (N. Virginia)"
};

const cloud_provider_list = computed(() => {
	// cloud_provider_map
	return 0;
});

defineProps({ modelValue: { type: Boolean, default: false } });

const addFormRef = ref<FormInstance>(),
	store = cacheStore(),
	counDown = ref(0),
	addLoading = ref(false),
	addForm = ref<AddCacheParams>({
		cloudProvider: "",
		name: "",
		region: "",
		des: "",
		primaryZone: ""
	});

const { t } = useI18n();

const region = computed(() => {
		let regionObj: any = {};
		store.regionList.map((item) => item.regions && (regionObj[item.cloudProvider] = item.regions));
		return regionObj;
	}),
	zoneList = computed(() => store.zoneList);

const { pause, resume } = useIntervalFn(
	async () => {
		if (counDown.value <= 0) pause();
		else {
			counDown.value -= 3;
			await store.setCacheList(false);
			if (store.serviceList.length > 0) {
				const cache = store.serviceList.find((item) => item.name === addForm.value.name);

				if (cache!.status == 1) {
					pause();
					ElMessage.success(t("msg.creationSuccess"));
				}
			}
		}
	},
	3000,
	{ immediate: false }
);

const emits = defineEmits(["update:modelValue"]);

function addCallback() {
	addLoading.value = true;
	addCache(addForm.value)
		.then((res) => {
			if (res.id) {
				ElMessage.success(t("msg.creating"));
				counDown.value = 36;
				store.setCacheList(false);
				resume();
			}
		})
		.catch(() => ElMessage.error(t("msg.err")))
		.finally(() => {
			emits("update:modelValue", false);
			addLoading.value = false;
		});
}

defineExpose({ reset: () => resetForm(addFormRef.value) });
</script>
