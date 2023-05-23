<template>
	<div class="section-connect">
		<div class="col-span-1">
			<h3 class="text-xl font-normal">Subscription</h3>
			<p class="text-gray-600 text-[14px]">
				You can <button class="is-link">add your credit card</button> to upgrade your database to pay-as-you-go plan.
			</p>
		</div>
		<div class="overflow-x-auto sm:overflow-hidden">
			<div class="min-w-[720px]">
				<div class="mt-2 grid grid-cols-3 gap-y-[1px] bg-gray-200 bg-opacity-80">
					<div class="bg-white px-4 py-2"></div>
					<div class="px-4 py-2 bg-blue-50">
						<h5 class="text-sm">Free Tier</h5>
						<p class="mt-1">
							<span class="whitespace-nowrap rounded-full bg-blue-500 px-2 py-0.5 text-xs text-white">Current Plan</span>
						</p>
					</div>
					<div class="bg-white px-4 py-2">
						<h5 class="text-sm">Pay as you go</h5>
					</div>
					<div class="bg-white px-4 py-2">Max Commands Per Second</div>
					<div class="px-4 py-2 bg-blue-50">1000</div>
					<div class="bg-white px-4 py-2">1K</div>
					<div class="bg-white px-4 py-2">Max Request Size</div>
					<div class="px-4 py-2 bg-blue-50">1MB</div>
					<div class="bg-white px-4 py-2">1MB</div>
					<div class="bg-white px-4 py-2">Max Record Size</div>
					<div class="px-4 py-2 bg-blue-50">100MB</div>
					<div class="bg-white px-4 py-2">100MB</div>
					<div class="bg-white px-4 py-2">Max Memory Storage</div>
					<div class="px-4 py-2 bg-blue-50">64MB</div>
					<div class="bg-white px-4 py-2">1GB</div>
					<div class="bg-white px-4 py-2">Max Data Size</div>
					<div class="px-4 py-2 bg-blue-50">256MB</div>
					<div class="bg-white px-4 py-2">10GB</div>
					<div class="bg-white px-4 py-2">Max Concurrent Connections</div>
					<div class="px-4 py-2 bg-blue-50">100</div>
					<div class="bg-white px-4 py-2">1000</div>
					<div class="bg-white px-4 py-2">Max Daily Bandwidth</div>
					<div class="px-4 py-2 bg-blue-50">50GB</div>
					<div class="bg-white px-4 py-2">50GB</div>
					<div class="px-4 py-2 bg-gray-50">Max Monthly (Cap) Price</div>
					<div class="px-4 py-2 bg-blue-50"><b>Free</b></div>
					<div class="px-4 py-2 bg-gray-50"><b>$160</b></div>
					<div class="px-4 py-2 bg-gray-50">Price</div>
					<div class="px-4 py-2 bg-blue-50"><b>Free</b></div>
					<div class="px-4 py-2 bg-gray-50">
						<p><b>$0.2</b> (per 100k commands)</p>
					</div>
					<div class="bg-white px-4 py-2"></div>
					<div class="px-4 py-2 bg-blue-50"></div>
					<div class="bg-white px-4 py-2">
						<el-button class="!my-1" type="primary">Add your credit card</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>
