import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import pg from "pg";

const connectionString = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;

if (!connectionString) {
  console.error("Set DATABASE_URL_UNPOOLED or DATABASE_URL before migrating.");
  process.exit(1);
}

const client = new pg.Client({ connectionString });
await client.connect();

await client.query(`
  CREATE TABLE IF NOT EXISTS schema_migrations (
    id text PRIMARY KEY,
    applied_at timestamptz NOT NULL DEFAULT now()
  )
`);

const directory = path.join(process.cwd(), "db", "migrations");
const files = (await readdir(directory)).filter((file) => file.endsWith(".sql")).sort();

for (const file of files) {
  const applied = await client.query("SELECT 1 FROM schema_migrations WHERE id = $1", [file]);
  if (applied.rowCount) {
    console.log(`Already applied ${file}`);
    continue;
  }

  const sql = await readFile(path.join(directory, file), "utf8");
  const statements = sql
    .split(";")
    .map((statement) => statement.trim())
    .filter(Boolean);

  await client.query("BEGIN");
  try {
    for (const statement of statements) {
      await client.query(statement);
    }
    await client.query("INSERT INTO schema_migrations (id) VALUES ($1)", [file]);
    await client.query("COMMIT");
    console.log(`Applied ${file}`);
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  }
}

await client.end();
console.log("Migrations complete.");
