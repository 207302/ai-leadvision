import { Pool, type PoolConfig } from "pg";
import { parseIntoClientConfig } from "pg-connection-string";

const globalForPg = globalThis as typeof globalThis & { pgPool?: Pool };

function poolConfig(): PoolConfig {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set.");
  }

  // Neon rejects a plaintext connection with "connection is insecure".
  // Hostinger can drop `sslmode=require` from the saved URL, and passing the
  // URL through lets that parsed value override an explicit ssl option.
  const url = new URL(connectionString);
  url.searchParams.delete("channel_binding");
  url.searchParams.delete("sslmode");
  url.searchParams.delete("uselibpqcompat");

  return {
    ...parseIntoClientConfig(url.toString()),
    ssl: { rejectUnauthorized: false },
    max: 5,
  };
}

export function getPool() {
  if (!globalForPg.pgPool) {
    globalForPg.pgPool = new Pool(poolConfig());
  }

  return globalForPg.pgPool;
}
