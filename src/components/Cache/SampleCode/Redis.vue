<template>
	<div key="redis-cli">
		<CodeHight :code="code" language="shell" />
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
import { computed, ref } from "vue";
import { cacheStore } from "@/stores/cache";

const store = cacheStore();
const code = computed(() => {
	return `redis-cli -u redis://default:**********@${store.oneCache.host}:${store.port}`;
});
</script>

<style lang="scss">
.info-warning {
	padding: 8px 12px;
	font-size: 14px;
	line-height: 1.6rem;
	color: rgb(0 0 0 / 88%);
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
</style>
