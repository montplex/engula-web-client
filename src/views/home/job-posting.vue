<template>
	<main class="bg-white pt-24">
		<div class="w-full max-w-[1000px] mb-0 mx-auto pb-24 px-28 text-[#1a1a1a]" style="font-family: Airbnbcereal, sans-serif">
			<h1 class="max-w-[790px] text-center mx-auto text-[40px] font-bold leading-[1.2]">Product Marketing Manager</h1>
			<a href="https://forms.gle/roCJo6Fq1GAjvKF1A" class="main-button-job-page w-button" target="_blank">Apply Now</a>

			<div v-html="JobData[$route.params.jobName as keyof typeof JobData]" class="w-richtext"></div>
			<a href="https://forms.gle/roCJo6Fq1GAjvKF1A" class="main-button-job-page w-button" target="_blank">Apply Now</a>
		</div>
	</main>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

onMounted(() => {
	document.title = `Montplex | ${JobName.value}`;
});

const JobName = computed(() => {
	return route.params.jobName ? (route.params.jobName as string).replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) : "";
});

const JobData = {
	"product-marketing-manager": `
				<p><strong>About the company</strong></p>

				<p class="info">
					We are a fast-growing database startup that is revolutionizing the way businesses store and manage their data. Our
					product is a cloud-based database that is easy to use, scalable, and secure. We are looking for a talented Product
					Marketing Manager to join our team and help us bring our product to market.&nbsp;
				</p>
				<p>‍</p>

				<p><strong>Responsibilities</strong></p>
				<ul role="list">
					<li>Define and execute the product marketing strategy for our database product.</li>

					<li>Work closely with product, engineering, and sales teams to define the product roadmap and messaging.</li>
					<li>Create and execute marketing campaigns to generate awareness and demand for our product.</li>
					<li>Write product marketing materials, such as white papers, case studies, and blog posts.</li>
					<li>Track and analyze marketing performance to identify opportunities for improvement.</li>
				</ul>
				<p>‍</p>

				<!-- Qualifications -->
				<p><strong>Experience Required</strong></p>
				<p class="info">
					You should have experience selling software or engineering services to corporate and enterprise clients. In general,
					we’re looking for someone with:
				</p>
				<ul role="list">
					<li>3+ years of experience in product marketing, preferably in the database industry.</li>
					<li>Strong understanding of the database market and customer needs.</li>
					<li>Excellent writing and communication skills.</li>
					<li>Ability to work independently and as part of a team.</li>
					<li>Passion for technology and innovation.</li>
				</ul>
				<p>‍</p>

				<p><strong>Benefits</strong></p>

				<ul role="list">
					<li>Competitive salary and benefits package.</li>
					<li>Opportunity to work on a cutting-edge product that is changing the way businesses store and manage their data.</li>
					<li>Work with a talented team of people who are passionate about building great products.</li>
					<li>Make a real impact on the company and help us grow.</li>
				</ul>
				<p>‍</p>
	`
};
</script>

<style lang="scss" scoped>
.main-button-job-page {
	width: 210px;
	height: 68px;
	color: #fff;
	text-align: center;
	background-image: linear-gradient(90deg, #f926e1, #2ab5fb);
	border-radius: 200px;
	justify-content: center;
	align-items: center;
	margin: 60px auto 38px;
	padding: 22px 57px;
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
	display: block;
	&:hover {
		background-image: linear-gradient(135deg, #f926e1, #0af 76%);
	}
	&.w-button {
		cursor: pointer;
		background-color: #3898ec;
		border: 0;
		text-decoration: none;
	}
}

.w-richtext {
	margin-top: 80px;
	color: #626262;
	line-height: 26px;
	font-size: 14px;
	font-family: Airbnbcereal book, sans-serif;
	:deep(p) {
		font-size: 14px;
		strong {
			font-family: Airbnbcereal, sans-serif !important;
			font-size: 16px !important;
			font-weight: 700 !important;
		}
	}

	:deep(ul) {
		margin-top: 12px;
		margin-bottom: 12px;
		padding-left: 40px;

		font-weight: 500;
		list-style-type: disc;
		li {
			margin-bottom: 10px;
		}
	}
	:deep(.info) {
		margin-top: 8px;
	}
}
</style>
