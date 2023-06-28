<template>
	<div class="py-6 shadow border-b-0 bg-[#fafafa]" style="position: sticky; top: 0; z-index: 99" v-if="cache">
		<div class="container mx-auto !max-w-screen-xl px-4">
			<div class="flex items-center">
				<button type="button" class="flex h-10 w-8 items-center mr-4" @click="$router.push('/')">
					<el-tooltip effect="dark" content="Back" placement="top-start">
						<el-icon size="26" color="#d1d5db" class="hover:text-[#67c23a]">
							<i-ep:arrow-left-bold />
						</el-icon>
					</el-tooltip>
				</button>
				<div>
					<h1 class="m-0 flex items-center text-2xl leading-none">
						<span>{{ cache.name }}</span>
						<el-tooltip effect="dark" :content="$t('redis.renameTips')" placement="bottom">
							<button type="button" @click="editName(cache.name)" class="ml-3 inline-flex h-auto items-center !p-0">
								<svgIcon icon="edit" style="color: #d1d5db" />
							</button>
						</el-tooltip>
					</h1>
					<div class="mt-2 mr-20">
						<div class="inline-flex flex-wrap items-center gap-1 text-sm">
							<span> {{ cache.des }}</span>
						</div>
					</div>
				</div>

				<!-- <div class="ml-auto">
					<el-tooltip effect="dark" content="Help" placement="top-start">
						<el-button
							plain
							class="w-[32px] shrink-0 items-center justify-center !py-0 text-gray-400 sm:flex hover:bg-transparent"
							@click="helpVisible = true"
						>
							<el-icon :size="22" color="#717179">
								<svgIcon icon="error" />
							</el-icon>
						</el-button>
					</el-tooltip>
				</div> -->
			</div>
		</div>
	</div>

	<el-dialog v-model="editVisible" :title="$t('redis.editName.title')" width="520px" style="border-radius: 8px">
		<label class="dialog-label my-3">{{ $t("redis.editName.name") }}</label>
		<el-input v-model="cacheNewName" @input="nameInput" />
		<div class="alert-base info !mt-6">{{ $t("redis.editName.info") }}</div>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="editVisible = false">{{ $t("msg.cancel") }}</el-button>
				<el-button :disabled="hasSumbit" :type="hasSumbit ? '' : 'primary'" @click="confirmName(cache.name)">
					{{ $t("msg.edit") }}
				</el-button>
			</span>
		</template>
	</el-dialog>

	<el-dialog v-model="helpVisible" width="520px" style="border-radius: 8px">
		<div class="p-6 pt-0 text-center">
			<div class="space-y-4">
				<h5>Database ID</h5>
				<div class="mt-2 inline-flex items-center rounded-md bg-gray-100 py-2 px-4 text-base">
					bb6a0604-b244-4530-b70d-70a8926ae6bb
					<svgIcon icon="copy" class="mr-1" />
				</div>
			</div>
		</div>
		<div class="help-icons">
			<div class="box">
				<a class="item" href="mailto:support@montplex.com" target="_blank" rel="noopener noreferrer">
					<svgIcon icon="emailat" class="inline text-xl" />
					<span class="mt-1">Contact Us</span></a
				>

				<a class="item" href="https://dev.montplex.com/docs/docs/contact/" target="_blank">
					<svgIcon icon="bug-report" class="inline text-2xl" />
					<span>Report a Bug</span></a
				>
				<a class="item" href="https://discord.gg/Z7AeCwVn" target="_blank">
					<svgIcon icon="discord" class="inline text-xl" />
					<span class="mt-1">Discord</span></a
				>
			</div>
		</div>
	</el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ICacheListItem } from "#/cache";
import { cacheRename } from "@/api/cache";
import { useRoute } from "vue-router";
import { ElMessage } from "element-plus";

const props = defineProps({
	cache: {
		type: Object as () => ICacheListItem,
		default: () => ({})
	}
});
const emits = defineEmits(["update"]);

const editVisible = ref(false),
	cacheNewName = ref(""),
	route = useRoute(),
	hasSumbit = ref(true),
	helpVisible = ref(false);

function editName(name: string) {
	editVisible.value = true;
	cacheNewName.value = name;
}
function nameInput(e: string) {
	hasSumbit.value = e === props.cache.name;
}

async function confirmName(name: string) {
	if (cacheNewName.value && cacheNewName.value !== name) {
		const body = { id: route.params.id as any, name: cacheNewName.value };
		const res = await cacheRename(body);
		if (res.id) {
			ElMessage.success("Rename success");
			editVisible.value = false;
			emits("update", res.name);
		} else {
			ElMessage.error("Rename failed");
		}
	}
}
</script>

<style lang="scss">
.el-dialog__body {
	padding-top: 0;
}
.help-icons {
	@apply -mx-5 -mb-7 rounded-b-lg bg-gray-100 p-6 text-center;
	.box {
		@apply grid grid-cols-3 gap-4;
		.item {
			@apply grid h-auto place-items-center rounded-lg  py-4 text-gray-600 shadow;

			color: #4b5563;
			background-color: #ffffff;
			&:hover {
				color: #2563eb !important;
				background-color: #eff6ff;
				border-color: #bfdbfe;
			}
		}
	}
}
</style>
