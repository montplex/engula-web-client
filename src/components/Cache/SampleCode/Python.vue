<template>
	<div key="redis-py">
		<div class="code-library">
			Library
			<a href="https://github.com/andymccurdy/">
				redis-py
				<svg-icon icon="share" />
			</a>
		</div>
		<CodeHight :code="pyCode" language="python" />
	</div>
</template>

<script setup lang="ts">
import CodeHight from "@/components/CodeHight/index.vue";
import { computed } from "vue";
import { cacheStore } from "@/stores/cache";
const store = cacheStore();

const pyCode = computed(() => {
	return `
  import redis

  r = redis.Redis(
    host= '${store.oneCache.host}',
    port= '${store.port}',
    password= "**********"
  )

  r.set('foo','bar')
  print(r.get('foo'))
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
