<template>
	<div class="py-6" v-if="store.tokenList">
		<div class="flex flex-row-reverse pb-8">
			<el-button type="success" @click="addTokenBtnClick">{{ $t("redis.token.add") }}</el-button>
		</div>
		<div class="rounded-lg border border-gray-200 p-4 sm:px-8 sm:py-4 mb-8" v-for="item in store.tokenList" :key="item.id">
			<div class="flex">
				<svg-icon icon="password" class="!h-8 !w-8 text-gray-600" />
				<ul class="flex flex-1 flex-col pl-7 text-info-8">
					<li class="flex items-center">
						<h3 class="text-base">{{ $t("redis.token.name") }}:</h3>
						<div @click="handleCopyClick(item.accessToken as string)" class="cursor-pointer">
							<span class="pl-2 pr-2 text-gray-600">{{ item.show ? item.accessToken : "**********" }}</span>
							<SvgIcon icon="copy" class="!inline !text-lg text-gray-500 hover:text-blue-600" />
						</div>
					</li>
					<li class="text-info-4 py-1" v-if="lang">Added on {{ dayjs(item.createdDate).format("MMM D, YYYY") }}</li>
					<li class="text-info-4 py-1" v-else>创建日期 {{ dayjs(item.createdDate).format("YYYY年MM月DD日") }}</li>
					<li class="flex items-center">
						<h3 class="text-base">{{ $t("redis.token.mode") }}:</h3>
						<span class="pl-2 text-info-8">{{
							item.mode == "ro" ? $t("redis.token.readOnly") : $t("redis.token.readWrite")
						}}</span>
						<span @click="editBtnClick(item.id, item.mode)">
							<svg-icon icon="edit" class="inline text-lg ml-2 text-info-4 hover:opacity-70 cursor-pointer" />
						</span>
					</li>
				</ul>
				<div class="flex items-center gap-6">
					<el-button type="warning" class="del-btn" @click="deleteToken(item.id)">{{ $t("msg.delete") }}</el-button>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-6 sm:mt-10" v-else>
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

	<el-dialog v-model="addVisible" :title="$t('redis.token.add')" width="520px" style="border-radius: 8px">
		<el-form
			label-position="top"
			label-width="100px"
			ref="addFormRef"
			:model="from"
			:rules="addTokenRules"
			style="max-width: 460px"
		>
			<el-form-item :label="$t('redis.token.mode')" prop="mode">
				<el-select v-model="from.mode" filterable :placeholder="$t('redis.token.select')" class="w-full">
					<el-option :label="$t('redis.token.readOnly')" value="ro" />
					<el-option :label="$t('redis.token.readWrite')" value="rw" />
				</el-select>
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="addVisible = false">{{ $t("msg.cancel") }}</el-button>
				<el-button type="primary" @click="submit(addFormRef, addTokenCallback)"> {{ $t("msg.confirm") }} </el-button>
			</span>
		</template>
	</el-dialog>

	<el-dialog v-model="update" title="Create Database" width="520px" style="border-radius: 8px">
		<el-select v-model="fromUpdate.mode" filterable :placeholder="$t('redis.token.select')" class="w-full">
			<el-option :label="$t('redis.token.readOnly')" value="ro" />
			<el-option :label="$t('redis.token.readWrite')" value="rw" />
		</el-select>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="update = false">{{ $t("msg.cancel") }}</el-button>
				<el-button type="primary" @click="updateMode"> {{ $t("msg.confirm") }} </el-button>
			</span>
		</template>
	</el-dialog>
	<!-- add-dialog End -->
</template>
<script setup lang="ts">
import { ElMessage, ElMessageBox, dayjs } from "element-plus";
import { ref, reactive, computed } from "vue";
import { addToken, updateToken } from "@/api/cache";
import { cacheStore } from "@/stores/cache";
import { resetForm, addTokenRules, submit } from "@/utils/rules";
import type { FormInstance } from "element-plus";
import { useRoute } from "vue-router";
import { handleCopyClick } from "@/utils/util";
import router from "@/router";
import { useI18n } from "vue-i18n";

type TMode = "ro" | "rw";
const { t, locale } = useI18n();

const lang = computed(() => locale.value == "en");

const route = useRoute(),
	store = cacheStore(),
	addVisible = ref(false),
	addFormRef = ref<FormInstance>(),
	update = ref(false);

store.setTokenList(route.query.id as any);

const from = reactive({
	cacheServiceId: route.query.id as string,
	mode: "" as TMode
});

const fromUpdate = reactive({
	id: "" as string | number,
	mode: "" as TMode
});

async function addTokenBtnClick() {
	await store.setCacheList(false);
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
				return ElMessage.success(t("msg.updateSuccess"));
			}
			ElMessage.error(t("msg.updateFail"));
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
		const error = lang.value ? "At least one token is required" : "至少需要保留一个token";
		return ElMessage.error(error);
	}

	const str = lang.value ? "Are you sure you want to delete ?" : "确定要删除吗？";

	ElMessageBox.confirm(str, "", {
		confirmButtonText: t("msg.delete"),
		cancelButtonText: t("msg.cancel"),
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
		color: #dc3545;
		background-color: #f6f8fa;
		border-color: rgb(27 31 36 / 0.15);
		&:hover {
			color: #f6f8fa;
			background-color: #dc3545;
			border-color: #dc3545;
			opacity: 0.9;
		}
	}
}
</style>
