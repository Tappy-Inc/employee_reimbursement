import { Pool, neonConfig } from "@neondatabase/serverless";
import { Kysely, PostgresDialect } from "kysely";
import type { DB } from "../../../kysely-types";
import { env } from "@/lib/env.mjs";

neonConfig.fetchConnectionCache = true;

export async function GET() {
  const pool = new Pool({ connectionString: env.DATABASE_URL });
  const db = new Kysely<DB>({ dialect: new PostgresDialect({ pool }) });

  const query = db
    .selectFrom("request_status")
    .select(["request_status_id", "request_status_name"])
    .orderBy("created_at", "desc");

  const request_status = await query.execute();

  return new Response(JSON.stringify(request_status));
}
