<template>
	<main class="h-full" style="font-family: Airbnbcereal, sans-serif">
		<section class="pt-40 pb-24 text-center">
			<div class="px-8 m-inline-auto 3xl:max-w-4xl max-w-3xl text-white flex gap-8 flex-col">
				<h1 class="3xl:text-6xl text-5xl font-bold" style="line-height: 128%">
					We are looking for super powered
					<span class="text-block">problem solvers</span>
				</h1>

				<div class="text-xl text-w-80">
					<p>Come join our super team.</p>
				</div>
			</div>
		</section>

		<section class="container mx-auto text-center bg-[#050505] px-6 pb-20 md:px-20">
			<div class="w-full flex justify-center items-center overflow-hidden text-white">
				<div class="max-w-full flex-1">
					<div class="rounded-lg px-11 text-sm">
						<div class="gap-y-24 gap-x-24 items-center py-6 flex text-base font-medium">
							<div class="w-full text-left">
								<div>POSITION</div>
							</div>
							<div class="w-full text-left">
								<div>TEAM</div>
							</div>
							<div class="w-full text-left"></div>
						</div>
					</div>
					<div class="w-dyn-list">
						<div role="list" class="w-dyn-items flex flex-col">
							<div class="collection-item group" v-for="(job, idx) in jobsList" :key="idx">
								<router-link :to="{ name: 'Jobs', params: { jobName: job.path } }" class="job_herf cursor-pointer"
									><div class="lf fill">
										<div>{{ job.team }}</div>
									</div>
									<div class="lf fill">
										<div>{{ job.position }}</div>
									</div>
									<div class="dl">
										<svgIcon icon="right45-write" class="!w-6 group-hover:hidden" />
										<svgIcon icon="right45" class="hidden !w-6 group-hover:block" /></div
								></router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="container mx-auto flex justify-center items-center mt-32 mb-10 md:px-20">
			<div class="flex-1 flex flex-col justify-start items-center text-white">
				<h1 class="text-block mb-3 text-sm">WHY JOIN US?</h1>
				<div class="text-center">
					<h2 class="text-[36px] leading-tight tracking-h2 font-bold">Perks and Benefits</h2>
				</div>
				<div class="perks-grid">
					<div class="perk" v-for="(num, index) in benefits" :key="index">
						<div class="text-block">0{{ index + 1 }}</div>
						<div class="perk-title">{{ num.title }}</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
const jobsList = [
	{ team: "Product Marketing Manager", position: "Engineering", path: "product-marketing-manager" },
	{ team: "Operations Engineer", position: "Engineering", path: "operations-engineer" }
	// { team: "Sales Specialist", position: "Sales", path: "sales-specialist" },
	// { team: "Account Executive", position: "Sales", path: "account-executive" }
];

const benefits = [
	{ title: "Work from anywhere", description: "We are a remote first company. Work from anywhere in the world." },
	{ title: "Whole Set Of Social Benefits", description: "We offer a whole set of social benefits." },
	{ title: "Home Office Stipend", description: "We offer a home office stipend." }
	/* { title: "Unlimited PTO", description: "We offer unlimited PTO." },
	{ title: "Free Lunch Fridays", description: "We offer free lunch on Fridays." },
	{ title: "Tickets to NG-Conf", description: "We offer tickets to NG-Conf." } */
];

function handleJobClick(job: any) {
	console.log("clicked", job);
}
</script>

<style lang="scss" scoped>
.collection-item {
	@apply rounded-lg px-11;
	&:hover {
		background-color: rgba(255, 255, 255, 0.08);
		box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);

		.fill {
			-webkit-text-fill-color: transparent;
			background-color: #fff;
			background-image: linear-gradient(90deg, #f926e1, #2ab5fb 19%, #2ab5fb 54%, #f926e1 94%, #2ab5fb 96%);
			-webkit-background-clip: text;
			background-clip: text;
		}
	}
	.job_herf {
		// grid-column-gap: 100px;
		// grid-row-gap: 100px;
		width: 100%;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		align-items: center;
		padding-top: 25px;
		padding-bottom: 25px;
		display: flex;
		> div {
			width: 100%;
		}
		.lf {
			@apply text-xl text-left;
		}
		.dl {
			@apply text-lg;
			display: flex;
			flex-direction: row-reverse;
		}
	}
}
.perks-grid {
	@apply w-full grid gap-x-10 gap-y-6 grid-cols-1 md:grid-cols-3 grid-rows-auto auto-cols-fr md:px-12 pt-12 md:pb-20 px-8;
	margin-top: 16px;
	// padding: 50px 50px 80px;
	.perk {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		border-radius: 14px;
		padding-top: 30px;
		padding-bottom: 34px;
		padding-left: 28px;
		text-align: left;
		backdrop-filter: blur(500px px);
		background-color: rgba(255, 255, 255, 0.05);
	}

	.perk-title {
		color: #fff;
		text-align: left;
		margin-top: 8px;
		font-size: 20px;
		font-weight: 300;
		line-height: 21px;
	}
}
</style>
