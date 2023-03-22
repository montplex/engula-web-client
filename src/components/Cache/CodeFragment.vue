<template>
	<div class="space-y-6">
		<div v-if="codeObject[type].code">
			<CodeHight :code="codeObject[type].code" />
			<!-- footer tips -->
			<div class="info-warning mt-6" v-show="codeObject[type].tips">
				redis-cli supports TLS starting with version 6. If you are using version 5 or earlier, you should use
				<a class="inline text-[#1677ff]" href="https://www.stunnel.org/" role="link" target="_blank" rel="noopener noreferrer">
					Stunnel
					<svg-icon icon="share" class="hover:opacity-80 inline" />
				</a>
				to establish a secure connection to the TLS enabled database
				<a
					href="https://www.digitalocean.com/community/tutorials/how-to-connect-to-managed-redis-over-tls-with-stunnel-and-redis-cli"
					target="_blank"
					rel="database"
				>
					<svg-icon icon="share" class="text-[#1677ff] hover:opacity-80 inline" />
				</a>
			</div>
		</div>
		<div v-else>
			<div v-for="(_lib, _ix) in codeObject[type].library" :key="_ix">
				<div class="title">
					Library
					<a class="inline text-[#1677ff]" :href="_lib.url" role="link" target="_blank" :rel="_lib.name">
						{{ _lib.name }}
						<svg-icon icon="share" class="hover:opacity-80 inline" />
					</a>
				</div>
				<CodeHight :code="_lib.code" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import CodeHight from "@/components/CodeHight/index.vue";

interface IProps {
	type?: string;
	password?: string;
}

withDefaults(defineProps<IProps>(), {
	type: "redis",
	password: "==================="
});

const codeObject: any = {
	redis: {
		code: `"redis-cli -u redis://default:**********@us1-hip-bonefish-40037.upstash.io:40037"`,
		tips: true
	},
	node: {
		library: [
			{
				name: "ioredis",
				url: "https://github.com/luin/ioredis",
				code: `
  const Redis = require("ioredis");
  let client = new Redis("redis://default:**********@us1-hip-bonefish-40037.upstash.io:40037");
  client.set('foo', 'bar');`
			},
			{
				name: "node-redis",
				url: "https://github.com/redis/node-redis",
				code: `
  const redis = require("redis");
        
  let client = redis.createClient ({
    url : 'us1-hip-bonefish-40037.upstash.io',
    port : '40037',
    password: '**********'
  });

  client.on("error", function(err) {
    throw err;
  });

  client.set('foo','bar');
        `
			}
		]
	},
	php: {
		library: [
			{
				name: "predis",
				url: "https://github.com/predis/predis",
				code: `
  $client = new Predis\Client(
    [
      'host'   => 'us1-hip-bonefish-40037.upstash.io',
      'password' => **********,
      'port'   => 40037,
      'scheme' => tcp,
    ]
  );

  $client->set("foo", "bar");
  print_r($client->get("foo"));
        `
			},
			{
				name: "phpredis",
				url: "https://github.com/phpredis/phpredis",
				code: `
  $redis = new Redis();
  $redis->connect('us1-hip-bonefish-40037.upstash.io', 40037);
  $redis->auth('**********');

  $redis->set("foo", "bar");
  print_r($redis->get("foo"));`
			}
		]
	},
	python: {
		library: [
			{
				name: "redis-py",
				url: "https://github.com/andymccurdy/",
				code: `
  import redis

  r = redis.Redis(
    host= 'us1-hip-bonefish-40037.upstash.io',
    port= '40037',
    password= "**********"
  )

  r.set('foo','bar')
  print(r.get('foo'))`
			}
		]
	},
	java: {
		library: [
			{
				name: "jedis",
				url: "https://github.com/redis/jedis",
				code: `
    public static void main(String[] args) {
    Jedis jedis = new Jedis("us1-hip-bonefish-40037.upstash.io", 40037);
    jedis.auth("**********");

    jedis.set("foo", "bar");
    String value = jedis.get("foo");
  }`
			}
		]
	},
	go: {
		library: [
			{
				name: "go-redis",
				url: "https://github.com/redis/go-redis",
				code: `
  var ctx = context.Background()
  func main() {
    opt, _ := redis.ParseURL("redis://default:**********@us1-hip-bonefish-40037.upstash.io:40037")
    client := redis.NewClient(opt)

    client.Set(ctx, "foo", "bar", 0)
    val := client.Get(ctx, "foo").Val()
    print(val)
  }`
			}
		]
	},
	docker: {
		code: `docker run -it redis:alpine redis-cli -u redis://default:**********@us1-hip-bonefish-40037.upstash.io:40037`,
		tips: true
	}
};
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
</style>
