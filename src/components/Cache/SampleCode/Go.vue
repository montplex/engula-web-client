<template>
	<div key="go-redis">
		<div class="code-library">
			Library
			<a href="https://github.com/redis/go-redis">
				go-redis
				<svg-icon icon="share" />
			</a>
		</div>
		<CodeHight :code="goCode" language="go" />
	</div>
</template>

<script setup lang="ts">
import CodeHight from "@/components/CodeHight/index.vue";
import { computed } from "vue";
import { cacheStore } from "@/stores/cache";
const store = cacheStore();

const goCode = computed(() => {
	return `
  var ctx = context.Background()
  func main() {
    opt, _ := redis.ParseURL("redis://default:**********@${store.oneCache.host}:${store.port}")
    client := redis.NewClient(opt)

    client.Set(ctx, "foo", "bar", 0)
    val := client.Get(ctx, "foo").Val()
    print(val)
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
