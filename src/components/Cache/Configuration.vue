<template>
	<div class="section-connect">
		<div class="col-span-1">
			<h3 class="text-xl font-normal">Configuration</h3>
		</div>
		<div class="overflow-x-auto sm:overflow-hidden">
			<div class="mt-2">
				<div class="flex items-center py-6">
					<div class="mr-4 mt-0.5 flex w-10 justify-center self-start">
						<div class="text-xl">
							<span class="mt-0.5 flex h-3 w-3 rounded-full !bg-green-500"></span>
						</div>
					</div>
					<div class="flex-grow">
						<h4 class="text-base text-info-8">TLS (SSL)</h4>
						<div class="text-gray-500">
							This option encrypts the data traffic
							<svg-icon icon="share" class="is-link inline" />
						</div>
					</div>
					<div class="ml-10"><div></div></div>
				</div>
				<div class="border-b border-gray-200"></div>
				<div class="flex items-center py-6">
					<div class="mr-4 mt-0.5 flex w-10 justify-center self-start">
						<div class="text-xl">
							<span class="mt-0.5 flex h-3 w-3 rounded-full !bg-green-500"></span>
						</div>
					</div>
					<div class="flex-grow">
						<h4 class="text-base text-info-8">Eviction</h4>
						<div class="text-gray-500">
							Enable eviction, to evict keys when your database reaches the max size
							<svg-icon icon="share" class="is-link inline" />
						</div>
					</div>
					<el-button class="!ml-10" plain>Disable</el-button>
				</div>
				<div class="border-b border-gray-200"></div>
				<div class="flex items-center py-6">
					<div class="mr-4 mt-0.5 flex w-10 justify-center self-start">
						<div class="text-xl">
							<span class="mt-0.5 flex h-3 w-3 rounded-full bg-gray-300"></span>
						</div>
					</div>
					<div class="flex-grow">
						<h4 class="text-base text-info-8">Auto Scale</h4>
						<div class="text-gray-500">
							Upgrade to higher plans automatically when it hits quotas
							<svg-icon icon="share" class="is-link inline" />
						</div>
					</div>
					<el-button class="!ml-10" plain>Enable</el-button>
				</div>
				<div class="border-b border-gray-200"></div>
				<div class="flex items-center py-6">
					<div class="mr-4 mt-0.5 flex w-10 justify-center self-start">
						<div class="text-xl">
							<span class="mt-0.5 flex h-3 w-3 rounded-full !bg-green-500"></span>
						</div>
					</div>
					<div class="flex-grow">
						<h4 class="text-base text-info-8">Replication</h4>
						<div class="text-gray-500">
							The data is replicated to multiple instances. Replication provides you high availability and better scalability
							<svg-icon icon="share" class="is-link inline" />
						</div>
					</div>
				</div>
				<div class="border-b border-gray-200"></div>
				<div class="flex items-center py-6">
					<div class="mr-4 mt-0.5 flex w-10 justify-center self-start">
						<div class="text-xl">
							<svg-icon icon="security" class="inline !text-xl !opacity-70" />
						</div>
					</div>
					<div class="flex-grow">
						<h4 class="text-base text-info-8">Security Addons</h4>
						<div class="text-gray-500">
							<div class="mb-4">
								The following are additional security features that are enabled at your request for an additional fee.
								<svg-icon icon="share" class="is-link inline" />
							</div>

							<div class="grid grid-cols-2 gap-2">
								<label class="flex select-none items-center">
									<div class="flex items-center">
										<el-switch :disabled="true" />
										<span class="ml-2">IP Whitelisting</span>
									</div>
								</label>

								<label class="flex select-none items-center">
									<div class="flex items-center">
										<el-switch :disabled="true" />
										<span class="ml-2">VPC Peering</span>
									</div>
								</label>

								<label class="flex select-none items-center">
									<div class="flex items-center">
										<el-switch :disabled="true" />
										<span class="ml-2">Private Link</span>
									</div>
								</label>

								<label class="flex select-none items-center">
									<div class="flex items-center">
										<el-switch :disabled="true" />
										<span class="ml-2">TLS Mutual Auth</span>
									</div>
								</label>
							</div>

							<div class="alert-base info mt-4 px-2 py-6">
								Security addons are only available for the Enterprise database. You can upgrade your database to access these
								addons.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
