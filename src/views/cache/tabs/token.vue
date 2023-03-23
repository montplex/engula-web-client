<template>
	<div class="py-6">
		<div class="flex flex-row-reverse pb-8">
			<el-button type="success" @click="addTokenBtnClick"> Add AccessToken</el-button>
		</div>
		<div class="rounded-lg border border-gray-200 p-4 sm:px-8 sm:py-4 mb-8" v-for="item in store.tokenList" :key="item.id">
			<div class="flex">
				<svg-icon icon="password" class="!h-8 !w-8 text-gray-600" />
				<ul class="flex flex-1 flex-col pl-7 text-info-8">
					<li class="flex items-center">
						<h3 class="text-base">Access Token:</h3>
						<span class="pl-2 pr-2 text-gray-600">{{ item.show ? item.accessToken : "••••••••••••••••••" }}</span>
						<svgIcon
							:icon="item.show ? 'eye-off' : 'eye'"
							class="text-gray-600 !inline text-xl"
							@click="item.show = !item.show"
						/>
					</li>
					<li class="text-info-8 py-1">Added on {{ dayjs(item.createdDate).format("MMM D, YYYY") }}</li>
					<li class="flex items-center">
						<h3 class="text-base">Mode:</h3>
						<span class="pl-2 text-info-8">{{ item.mode }}</span>
						<span @click="editBtnClick(item.id, item.mode)">
							<svg-icon icon="edit" class="inline text-lg ml-2 text-info-4 hover:opacity-70 cursor-pointer" />
						</span>
					</li>
				</ul>
				<div class="flex items-center gap-6">
					<!-- <el-button type="success">Update</el-button> -->
					<el-button type="warning" class="del-btn" @click="deleteToken(item.id)">Delete</el-button>
				</div>
			</div>
		</div>
	</div>

	<!-- add-dialog Start -->
	<el-dialog v-model="addVisible" title="Create Database" width="520px" style="border-radius: 8px">
		<el-form
			label-position="top"
			label-width="100px"
			ref="addFormRef"
			:model="from"
			:rules="addTokenRules"
			style="max-width: 460px"
		>
			<el-form-item label="CacheService" prop="cacheServiceId">
				<el-select v-model="from.cacheServiceId" filterable placeholder="Select cache Service" class="w-full">
					<el-option v-for="item in store.serviceList" :key="item.id" :label="item.name" :value="item.id" />
				</el-select>
			</el-form-item>
			<!-- <div class="mt-2 text-xs">
					<p class="text-gray-500">Select cache Service</p>
				</div> -->
			<el-form-item label="Mode" prop="mode">
				<el-select v-model="from.mode" filterable placeholder="Select" class="w-full">
					<el-option v-for="item in ['ro', 'rw']" :key="item" :label="item" :value="item" />
				</el-select>
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="addVisible = false">Cancel</el-button>
				<el-button type="primary" @click="submit(addFormRef, addTokenCallback)"> Confirm </el-button>
			</span>
		</template>
	</el-dialog>

	<el-dialog v-model="update" title="Create Database" width="520px" style="border-radius: 8px">
		<el-select v-model="fromUpdate.mode" filterable placeholder="Select" class="w-full">
			<el-option v-for="item in ['ro', 'rw']" :key="item" :label="item" :value="item" />
		</el-select>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="update = false">Cancel</el-button>
				<el-button type="primary" @click="updateMode"> Confirm </el-button>
			</span>
		</template>
	</el-dialog>
	<!-- add-dialog End -->
</template>
<script setup lang="ts">
import { dayjs } from "element-plus";
import { ref, reactive } from "vue";
import { addToken, updateToken, getTokenList } from "@/api/cache";
import { addTokenParams, updateTokenParams, ItokenItem } from "#/cache";
import { useDbStore } from "@/stores/cache";
import { resetForm, addTokenRules, submit } from "@/utils/rules";
import type { FormInstance } from "element-plus";
import { useRoute } from "vue-router";

// store.setOneCache({ id: route.query.id as string });
const route = useRoute(),
	store = useDbStore(),
	addVisible = ref(false),
	addFormRef = ref<FormInstance>(),
	update = ref(false),
	id = route.query.id as any as number;

store.setTokenList(id);

const from = reactive<addTokenParams>({
	cacheServiceId: "",
	mode: "" as "ro" | "rw"
});

const fromUpdate = reactive<updateTokenParams>({
	id: "",
	mode: "" as "ro" | "rw"
});

const addTokenBtnClick = () => {
	addVisible.value = true;
	resetForm(addFormRef.value);
};

const editBtnClick = (id: number, mode: "ro" | "rw") => {
	fromUpdate.mode = mode;
	fromUpdate.id = id;
	update.value = true;
};

const updateMode = () => {
	updateToken(fromUpdate)
		.then((res) => {
			if (res.ok) {
				store.setTokenList(id);
				return ElMessage.success("Update completed");
			}
			ElMessage.error("Update failed");
		})
		.finally(() => {
			update.value = false;
		});
};

const addTokenCallback = () => {
	addToken(from).then((res) => {
		store.setTokenList(id);
		addVisible.value = false;
	});
};

const deleteToken = (id: number) => {
	ElMessageBox.confirm("Are you sure you want to delete ?", "", {
		confirmButtonText: "Delete",
		cancelButtonText: "Cancel",
		confirmButtonClass: "el-button--danger",
		type: "error"
	})
		.then(() => {
			store.deleteTokenList(id);
		})
		.catch(() => {});
};
</script>

<style lang="scss">
.el-button {
	&.del-btn {
		background-color: #f6f8fa;
		border-color: rgba(27, 31, 36, 0.15);
		color: #dc3545;
		&:hover {
			border-color: #dc3545;
			opacity: 0.9;
			background-color: #dc3545;
			color: #f6f8fa;
		}
	}
}
</style>
