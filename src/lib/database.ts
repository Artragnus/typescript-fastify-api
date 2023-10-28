import { knex as knexSetup, Knex } from "knex";
import { env } from "../env";

const port: number = Number(env.DB_PORT);

export const config: Knex.Config = {
  client: "pg",
  connection: {
    host: env.DB_HOST,
    port,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
};

export const knex = knexSetup(config);
