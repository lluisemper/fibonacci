const keys = require("./keys");

const redis = require("redis");

const redisCLient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
