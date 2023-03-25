<template>
	<div key="jedis">
		<div class="code-library">
			Library
			<a href="https://github.com/redis/jedis">
				jedis
				<svg-icon icon="share" />
			</a>
		</div>
		<CodeHight :code="javaCode" language="java" />
	</div>
</template>

<script setup lang="ts">
import CodeHight from "@/components/CodeHight/index.vue";
import { computed } from "vue";
import { cacheStore } from "@/stores/cache";
const store = cacheStore();

const javaCode = computed(() => {
	return `
    public static void main(String[] args) {
    Jedis jedis = new Jedis("${store.oneCache.host}", ${store.port});
    jedis.auth("**********");

    jedis.set("foo", "bar");
    String value = jedis.get("foo");
  }
  `;
});
</script>

<style lang="scss">
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
