<template>
	<div key="redis-cli">
		<CodeHight :code="code" language="javascript" />
		<!-- footer tips -->
		<div class="info-warning mt-6 code-library">
			redis-cli supports TLS starting with version 6. If you are using version 5 or earlier, you should use
			<a href="https://www.stunnel.org/">
				Stunnel
				<svg-icon icon="share" />
			</a>
			to establish a secure connection to the TLS enabled cache service.
			<a
				href="https://www.digitalocean.com/community/tutorials/how-to-connect-to-managed-redis-over-tls-with-stunnel-and-redis-cli"
			>
				<svg-icon icon="share" />
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">
import CodeHight from "@/components/CodeHight/index.vue";
import { computed, onMounted } from "vue";
import { cacheStore } from "@/stores/cache";

onMounted(() => {
	// 更改code的样式让其可以换行
	const code = document.querySelector("code") as HTMLElement;
	code.style.display = "flex";
	code.style.flexWrap = "wrap";
	code.style.whiteSpace = "break-spaces";
});
const store = cacheStore();
const code = computed(() => {
	return `docker run -it redis:alpine redis-cli -h ${store.oneCache.host} -p ${store.port} -a **********`;
});
</script>

<style lang="scss" scoped>
.info-warning {
	padding: 8px 12px;
	font-size: 14px;
	line-height: 1.6rem;
	color: rgb(0 0 0 / 0.88);
	background-color: #fffbe6;
	border: 1px solid #ffe58f;
	border-radius: 8px;
}
.code-library {
	a {
		display: inline;
		align-items: center;
		color: #1677ff;
		&:hover {
			opacity: 0.6;
		}
		svg {
			display: inline;
		}
	}
}
code {
	display: flex ！important;
	flex-wrap: wrap ！important;
}
:v-deep(.hljs) {
	display: flex !important;
	flex-wrap: wrap !important;
}
</style>
