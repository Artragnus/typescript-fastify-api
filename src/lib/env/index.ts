import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  DB_HOST: z.string(),
  DB_PORT: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.log("Invalid environment variables!", _env.error.format());
  throw new Error("Invalid environment variables.");
}

export const env = _env.data;
