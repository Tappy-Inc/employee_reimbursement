import { Pool, neonConfig } from "@neondatabase/serverless";
import { Kysely, PostgresDialect } from "kysely";
import { env } from "@/lib/env.mjs";
import { DB } from "@/kysely-types";

neonConfig.fetchConnectionCache = true;

export async function GET() {
  const pool = new Pool({ connectionString: env.DATABASE_URL });
  const db = new Kysely<DB>({ dialect: new PostgresDialect({ pool }) });

  const query = db
    .selectFrom("expense_types")
    .select(["expense_type_id", "expense_type_name"])
    .orderBy("created_at", "desc");

  const expense_types = await query.execute();

  return new Response(JSON.stringify(expense_types));
}
