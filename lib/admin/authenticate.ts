import { getPool } from "@/lib/db/pool";
import { hashPassword, verifyPassword } from "@/lib/admin/password";

const lockAfter = 5;
const lockMinutes = 15;
let dummyHash: Promise<string> | null = null;

type AdminRow = {
  id: string;
  email: string;
  password_hash: string;
  locked_until: Date | null;
};

export async function authenticateAdmin(email: string, password: string) {
  const normalized = email.trim().toLowerCase();
  const result = await getPool().query<AdminRow>(
    "SELECT id, email, password_hash, locked_until FROM admins WHERE email = $1",
    [normalized],
  );
  const admin = result.rows[0];

  if (!admin) {
    dummyHash ??= hashPassword("not-an-admin-password");
    await verifyPassword(password, await dummyHash);
    return { ok: false as const, error: "Email or password is incorrect." };
  }

  if (admin.locked_until && admin.locked_until.getTime() > Date.now()) {
    return { ok: false as const, error: "Too many attempts. Try again in a few minutes." };
  }

  const matches = await verifyPassword(password, admin.password_hash);
  if (!matches) {
    const failed = await getPool().query<{ failed_attempts: number }>(
      "UPDATE admins SET failed_attempts = failed_attempts + 1 WHERE id = $1 RETURNING failed_attempts",
      [admin.id],
    );
    if ((failed.rows[0]?.failed_attempts ?? 0) >= lockAfter) {
      await getPool().query(
        "UPDATE admins SET failed_attempts = 0, locked_until = now() + make_interval(mins => $2) WHERE id = $1",
        [admin.id, lockMinutes],
      );
    }
    return { ok: false as const, error: "Email or password is incorrect." };
  }

  await getPool().query("UPDATE admins SET failed_attempts = 0, locked_until = NULL WHERE id = $1", [admin.id]);
  return { ok: true as const, admin: { id: admin.id, email: admin.email } };
}
