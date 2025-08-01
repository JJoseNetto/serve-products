import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import env from "../env";
import { schema } from "./schema/index";

export const sql = postgres(env.DATABASE_URL)

export const db = drizzle(sql, {
    schema,
    casing: "snake_case",
})