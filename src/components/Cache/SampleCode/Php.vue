<template>
	<div key="predis">
		<div class="code-library">
			Library
			<a href="https://github.com/predis/predis">
				predis
				<svg-icon icon="share" />
			</a>
		</div>
		<CodeHight :code="predis" language="php" />
	</div>

	<div key="phpredis">
		<div class="code-library">
			Library
			<a href="https://github.com/phpredis/phpredis">
				phpredis
				<svg-icon icon="share" />
			</a>
		</div>
		<CodeHight :code="phpredis" language="php" />
	</div>
</template>

<script setup lang="ts">
import CodeHight from "@/components/CodeHight/index.vue";
import { computed } from "vue";
import { cacheStore } from "@/stores/cache";
const store = cacheStore();

const predis = computed(() => {
	return `
  $client = new Predis\Client(
    [
      'host'   => '${store.oneCache.host}',
      'password' => **********,
      'port'   => '${store.port}',
      'scheme' => tcp,
    ]
  );

  $client->set("foo", "bar");
  print_r($client->get("foo"));
  `;
});

const phpredis = computed(() => {
	return `
  $redis = new Redis();
  $redis->connect('${store.oneCache.host}', ${store.port});
  $redis->auth('**********');

  $redis->set("foo", "bar");
  print_r($redis->get("foo"));
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
