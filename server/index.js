const keys = require("./keys");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const { Pool } = require("pg");
const pgClient = require({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});

pgClient.on("error", () => console.log("Lost PG connection"));

pgClient
  .query("CREATE TABLE IF NOT EXISTS values (number INT)")
  .catch((err) => console.log("Error in pg", err));

const redis = require("redis");
const redisCLient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});

const redisPublisher = redisClient.duplicate();
