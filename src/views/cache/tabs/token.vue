<template>
	<div class="py-6">
		<div class="flex flex-row-reverse pb-8">
			<el-button type="success" @click="addVisible = true"> Add AccessToken</el-button>
		</div>
		<div class="rounded-lg border border-gray-200 p-4 sm:px-8 sm:py-4 mb-8" v-for="item in store.tokenList" :key="item.id">
			<div class="flex">
				<svg-icon icon="password" class="!h-8 !w-8 text-gray-600" />
				<ul class="flex flex-1 flex-col pl-7 text-info-8">
					<li class="flex items-center">
						<h3 class="text-base">Access Token:</h3>
						<span class="pl-2 text-info-8">{{ item.accessToken }}</span>
					</li>
					<li class="text-info-8 py-1">Added on {{ dayjs(item.createdDate).format("MMM D, YYYY") }}</li>
					<li class="flex items-center">
						<h3 class="text-base">Mode:</h3>
						<span class="pl-2 text-info-8">{{ item.mode }}</span>
						<span @click="updateClick(item.id, item.mode)">
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
	<el-dialog v-model="addVisible" title="Create Database" width="520px" style="border-radius: 8px" :lock-scroll="false">
		<el-form label-position="top" label-width="100px" :model="from" style="max-width: 460px">
			<el-form-item label="CacheService">
				<el-select v-model="from.cacheServiceId" filterable placeholder="Select cache Service" class="w-full">
					<el-option v-for="item in store.serviceList" :key="item.id" :label="item.name" :value="item.id" />
				</el-select>
				<div class="mt-2 text-xs">
					<p class="text-gray-500">Select cache Service</p>
				</div>
			</el-form-item>

			<el-form-item label="Mode">
				<el-select v-model="from.mode" filterable placeholder="Select" class="w-full">
					<el-option v-for="item in ['ro', 'rw']" :key="item" :label="item" :value="item" />
				</el-select>
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="addVisible = false">Cancel</el-button>
				<el-button type="primary" @click="submit"> Confirm </el-button>
			</span>
		</template>
	</el-dialog>

	<el-dialog v-model="update" title="Create Database" width="520px" style="border-radius: 8px" :lock-scroll="false">
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
import { computed, ref, reactive } from "vue";
import { addAccessToken, deleteAccessToken, updateAccessTokenMode } from "@/api/cache";
import { addTokenParams, updateTokenParams } from "#/cache";
import { useDbStore } from "@/stores/modules/cache";

const store = useDbStore();
store.setTokenList();

const addVisible = ref(false);

const from = reactive<addTokenParams>({
	cacheServiceId: "",
	mode: "" as "ro" | "rw"
});

const update = ref(false);

const fromUpdate = reactive<updateTokenParams>({
	id: "",
	mode: "" as "ro" | "rw"
});

function updateClick(id: number, mode: "ro" | "rw") {
	fromUpdate.mode = mode;
	fromUpdate.id = id;
	update.value = true;
	console.log(fromUpdate);
}

function updateMode() {
	updateAccessTokenMode(fromUpdate)
		.then((res) => {
			if (res.ok) {
				// store.setTokenList();
				return ElMessage({
					type: "success",
					message: "Delete completed"
				});
			}
			ElMessage({
				type: "error",
				message: "Delete canceled"
			});
		})
		.finally(() => {
			update.value = false;
		});
}

function submit() {
	if (!from.cacheServiceId) {
		return ElMessage({
			message: "Please select cache service",
			type: "error",
			duration: 2000
		});
	}

	if (!from.mode) {
		return ElMessage({
			message: "Please select mode",
			type: "error",
			duration: 2000
		});
	}
	addAccessToken(from).then((res) => {
		console.log(res);
		// store.setTokenList();
		addVisible.value = false;
	});
}

function deleteToken(id: number) {
	ElMessageBox.confirm("Are you sure you want to delete ?", "", {
		confirmButtonText: "Delete",
		cancelButtonText: "Cancel",
		confirmButtonClass: "el-button--danger",
		type: "error"
	})
		.then(() => {
			deleteAccessToken(id).then((res) => {
				if (res.ok) {
					return ElMessage({
						type: "success",
						message: "Delete completed"
					});
				}
				ElMessage({
					type: "error",
					message: "Delete canceled"
				});
			});
		})
		.catch(() => {});
}

const day = computed(() => dayjs().format("MMM D, YYYY"));

// eslint-disable-next-line vue/require-prop-types
const props = defineProps(["id"]);
console.log(props.id);
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
