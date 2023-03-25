<template>
	<div key="ioredis">
		<div class="code-library">
			Library
			<a href="https://github.com/luin/ioredis">
				ioredis
				<svg-icon icon="share" />
			</a>
		</div>
		<CodeHight :code="ioredis" language="javascript" />
	</div>
	<div key="node-redis">
		<div class="code-library">
			Library
			<a href="https://github.com/redis/node-redis">
				node-redis
				<svg-icon icon="share" />
			</a>
		</div>
		<CodeHight :code="nodeRedis" language="javascript" />
	</div>
</template>

<script setup lang="ts">
import CodeHight from "@/components/CodeHight/index.vue";
import { computed, ref } from "vue";
import { cacheStore } from "@/stores/cache";

const store = cacheStore();

const ioredis = computed(() => {
	return `
  const Redis = require("ioredis");
  let client = new Redis("redis://default:**********@${store.oneCache.host}:${store.port}");
  client.set('foo', 'bar');
  `;
});

const nodeRedis = computed(() => {
	return `
  const redis = require("redis");

  let client = redis.createClient ({
    url : '${store.oneCache.host}',
    port : '${store.port}',
    password: '**********'
  });

  client.on("error", function(err) {
    throw err;
  });

  client.set('foo','bar');
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
