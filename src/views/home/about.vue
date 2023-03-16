<template>
	<div class="section-page mx-auto py-20">
		<div class="flex lg:flex-row-reverse flex-col lg:w-8/10 mx-auto">
			<img class="lg:w-25r lg:h-25r w-48 h-48" src="@/assets/images/about-logo.png" alt="" />
			<div>
				<h1>Mont<span class="text-[#832dfe]">plex</span></h1>
				<h2 class="mt-8">
					Montplex is a powerful multi-model database, built for the cloud, and designed to improve the development process of
					traditional and modern applications. Montplex’s premise is that developers should be able to build secure, modern,
					collaborative applications without needing to build complicated backend APIs and database layers, and without being
					forced into using a single data model or cloud platform.
				</h2>
			</div>
		</div>

		<div class="team-card">
			<h1 class="text-center">Team</h1>
			<h2 class="w-4/6 text-center mx-auto text-w-80 pt-6 flex-1">
				We have led and delivered large-scale software and design projects in multiple startups and high-growth environments.
			</h2>

			<!-- display: flex; -->
			<!-- flex-direction: column; -->
			<div class="card-group mt-24 flex flex-col lg:flex-row lg:flex-wrap lg:justify-between">
				<div class="card-item lg:w-46/100">
					<div class="header">
						<img src="@/assets/images/user.png" alt="" />
						<div class="ml-8">
							<div class="name text-w-80">Xuhui Bai</div>
							<div class="text-w-60">CEO</div>
						</div>
					</div>
					<div class="text-w-60 user-mate pt-8">
						<ul>
							<li>University of Oxford, Software Engineering, MSc.</li>
							<li>
								Distinction Masters Thesis focused on highly-performant key-value data stores for use within graph databases and
								SurrealDB.
							</li>
							<li>
								15 years’ experience as a full-stack engineer architecting, and developing, advanced cloud applications with a
								focus on distributed databases and highly-available architectures.
							</li>
						</ul>
					</div>
				</div>

				<div class="card-item lg:w-46/100">
					<div class="header">
						<img src="@/assets/images/user.png" alt="" />
						<div class="ml-8">
							<div class="name text-w-80">Xuhui Bai</div>
							<div class="text-w-60">CEO</div>
						</div>
					</div>
					<div class="text-w-60 user-mate pt-8">
						<ul>
							<li>University of Oxford, Software Engineering, MSc.</li>
							<li>
								Distinction Masters Thesis focused on highly-performant key-value data stores for use within graph databases and
								SurrealDB.
							</li>
							<li>
								15 years’ experience as a full-stack engineer architecting, and developing, advanced cloud applications with a
								focus on distributed databases and highly-available architectures.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.team-card {
	margin-top: 4rem;
	.card-group {
		.card-item {
			z-index: 66;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			padding: 2.25rem;
			margin-bottom: 2rem;
			background: rgb(160 178 242 / 5%);
			border-radius: 0.5rem;
		}
		.header {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			img {
				width: 6rem;
				height: 6rem;
				border-radius: 50%;
			}
		}
		.name {
			font-size: 2.25rem;
			font-weight: 800;
			line-height: 3.5rem;
		}
		.user-mate {
			ul > li {
				font-size: 16px;
				line-height: 2rem;
			}
		}
	}
}
</style>
