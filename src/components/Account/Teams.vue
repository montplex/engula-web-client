<template>
	<div class="container mx-auto !max-w-screen-lg px-4 pt-8 pb-20">
		<!-- 未选择团队 -->
		<div>
			<div class="mb-6 flex items-center justify-end space-x-2">
				<el-button type="primary">Create New Team</el-button>
			</div>
			<div class="grid grid-cols-3 gap-6">
				<div class="rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm">
					<h5>laioyi</h5>
					<p>owner</p>
					<el-button type="primary">Switch</el-button>
				</div>
				<div class="rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm">
					<h5>liaoyi</h5>
					<p>owner</p>
					<el-button type="primary">Switch</el-button>
				</div>
				<div class="rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm">
					<h5>myteam</h5>
					<p>owner</p>
					<el-button type="primary">Switch</el-button>
				</div>
			</div>
		</div>

		<!-- 选择团队后的视图 -->
		<div>
			<div class="mb-6 flex items-center gap-2">
				<!-- 选择团队下拉筛选框 -->
				<el-select v-model="teamName" clearable filterable style="width: 160px">
					<el-option label="Personal" value="personal" />
					<el-option label="Montplex" value="montplex" />
					<el-option label="Erma" value="erma" />
					<el-option label="Teat2023" value="test" />
					<el-option label="Liaoyi" value="liaoyi" />
				</el-select>

				<div class="ml-auto">
					<ElButton type="primary">Add member</ElButton>
				</div>
			</div>
			<div>
				<!-- TODO  Add Team member table  -->
			</div>
			<!-- delete Button Start -->
			<div class="grid grid-cols-3 gap-8 rounded-lg border-1 border-red-200 mt-10 py-7 px-8 bg-red-50">
				<div class="row-span-2">
					<h4 class="text-lg font-semibold">Delete this team: <b>laioyi</b></h4>
					<div class="text-gray-600"><p>Once you delete a team, there is no going back.</p></div>
				</div>
				<div class="overflow-x-auto sm:overflow-hidden">
					<div class="flex h-full items-center justify-end">
						<el-button type="danger" :loading="teamDelLoading">
							<template #loading>
								<el-icon class="el-icon--left is-loading" size="16">
									<i-ep:loading />
								</el-icon>
							</template>
							{{ $t("msg.delete") }}
						</el-button>
					</div>
				</div>
			</div>
			<!-- delete end -->
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const teamName = ref("");
const teamDelLoading = ref(false);
</script>

<style lang="scss"></style>
