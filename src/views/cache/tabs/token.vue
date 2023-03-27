<template>
	<div class="py-6" v-if="isRunning && store.tokenList">
		<div class="flex flex-row-reverse pb-8">
			<el-button type="success" @click="addTokenBtnClick"> Add AccessToken</el-button>
		</div>
		<div class="rounded-lg border border-gray-200 p-4 sm:px-8 sm:py-4 mb-8" v-for="item in store.tokenList" :key="item.id">
			<div class="flex">
				<svg-icon icon="password" class="!h-8 !w-8 text-gray-600" />
				<ul class="flex flex-1 flex-col pl-7 text-info-8">
					<li class="flex items-center">
						<h3 class="text-base">Access Token:</h3>
						<div @click="handleCopyClick(item.accessToken as string)" class="cursor-pointer">
							<span class="pl-2 pr-2 text-gray-600">{{ item.show ? item.accessToken : "**********" }}</span>
							<SvgIcon icon="copy" class="!inline !text-lg text-gray-500 hover:text-blue-600" />
						</div>

						<!-- <svgIcon
							:icon="item.show ? 'eye-off' : 'eye'"
							class="text-gray-600 !inline text-xl"
							@click="item.show = !item.show"
						/> -->
					</li>
					<li class="text-info-4 py-1">Added on {{ dayjs(item.createdDate).format("MMM D, YYYY") }}</li>
					<li class="flex items-center">
						<h3 class="text-base">Mode:</h3>
						<span class="pl-2 text-info-8">{{ item.mode == "ro" ? "readonly" : "readwrite" }}</span>
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

	<div class="mt-6 sm:mt-10" v-else-if="isRunning && !store.tokenList">
		<el-empty class="rounded-lg bg-gray-50 !p-14">
			<template #image>
				<svgIcon icon="wuqx" style="width: 100%; height: 90px" />
			</template>
			<template #description>
				<div class="mx-auto my-4 max-w-screen-sm text-gray-600">
					<h3>The assess token list is empty !</h3>
					<div>
						<p>Please add manually assess token.</p>
					</div>
				</div>
				<el-button type="success" @click="addTokenBtnClick"> Add AccessToken</el-button>
			</template>
		</el-empty>
	</div>

	<div class="mt-6 sm:mt-10" v-else>
		<el-empty class="rounded-lg bg-gray-50 !p-14">
			<template #image>
				<svgIcon icon="wuqx" style="width: 100%; height: 90px" />
			</template>
			<template #description>
				<div class="mx-auto my-4 max-w-screen-sm text-gray-600">
					<h3>The cache service is not running !</h3>
					<div>
						<p>You need to enable cache before operating assess token.</p>
					</div>
				</div>
				<el-button @click="powerCache" type="warning">Return to details page</el-button>
			</template>
		</el-empty>
	</div>
	<!-- add-dialog Start -->
	<el-dialog v-model="addVisible" title="Add Access Token" width="520px" style="border-radius: 8px">
		<el-form
			label-position="top"
			label-width="100px"
			ref="addFormRef"
			:model="from"
			:rules="addTokenRules"
			style="max-width: 460px"
		>
			<!-- <el-form-item label="CacheService" prop="cacheServiceId">
				<el-select v-model="from.cacheServiceId" filterable placeholder="Select cache Service" class="w-full">
					<el-option v-for="item in store.serviceList" :key="item.id" :label="item.name" :value="item.id" />
				</el-select>
			</el-form-item> -->

			<el-form-item label="Mode" prop="mode">
				<el-select v-model="from.mode" filterable placeholder="Select" class="w-full">
					<el-option v-for="item in modeSelect" :key="item.label" :label="item.label" :value="item.value" />
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
			<el-option v-for="item in modeSelect" :key="item.label" :label="item.label" :value="item.value" />
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
import { ref, reactive, computed } from "vue";
import { addToken, updateToken } from "@/api/cache";
import { addTokenParams, updateTokenParams } from "#/cache";
import { cacheStore } from "@/stores/cache";
import { resetForm, addTokenRules, submit } from "@/utils/rules";
import type { FormInstance } from "element-plus";
import { useRoute } from "vue-router";
import { handleCopyClick } from "@/utils/util";
import router from "@/router";

const modeSelect = reactive([
	{ label: "readonly", value: "ro" },
	{ label: "readwrite", value: "rw" }
]);

const isRunning = computed(() => store.oneCache.one.status == 1);

const route = useRoute(),
	store = cacheStore(),
	addVisible = ref(false),
	addFormRef = ref<FormInstance>(),
	update = ref(false);

store.setTokenList(route.query.id as any);

const from = reactive<addTokenParams>({
	cacheServiceId: route.query.id as string,
	mode: "" as "ro" | "rw"
});

const fromUpdate = reactive<updateTokenParams>({
	id: "",
	mode: "" as "ro" | "rw"
});

async function addTokenBtnClick() {
	await store.setCacheList();
	resetForm(addFormRef.value);
	addVisible.value = true;
}

function editBtnClick(id: number, mode: "ro" | "rw") {
	fromUpdate.mode = mode;
	fromUpdate.id = id;
	update.value = true;
}

function updateMode() {
	updateToken(fromUpdate)
		.then((res) => {
			if (res.ok) {
				store.setTokenList(route.query.id as any);
				return ElMessage.success("Update completed");
			}
			ElMessage.error("Update failed");
		})
		.finally(() => {
			update.value = false;
		});
}

function addTokenCallback() {
	addToken(from).then((res) => {
		store.setTokenList(route.query.id as any);
		addVisible.value = false;
	});
}

function deleteToken(id: number) {
	if (store.tokenList.length <= 1) {
		return ElMessage.error("At least one token is required");
	}

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
}

function powerCache() {
	router.go(-1);
}
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
