import bcrypt from "bcryptjs";
import pg from "pg";

const connectionString = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;
const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
const password = process.env.ADMIN_PASSWORD;

if (!connectionString) {
  console.error("Set DATABASE_URL_UNPOOLED or DATABASE_URL before seeding.");
  process.exit(1);
}

if (!email || !password) {
  console.error("Set ADMIN_EMAIL and ADMIN_PASSWORD before seeding.");
  process.exit(1);
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  console.error("ADMIN_EMAIL must be an email address.");
  process.exit(1);
}

if (password.length < 10) {
  console.error("ADMIN_PASSWORD must be at least 10 characters.");
  process.exit(1);
}

const phones = ["+91 8050243330", "+91 8193939819", "+91 9844716214"];
const whatsapp = ["+91-8050243330"];
const addressLines = ["[Office street address]", "Bengaluru, Karnataka, India"];
const social = {
  linkedin: "https://www.linkedin.com/company/ai-lead-vision-pvt-ltd/",
  youtube: null,
  instagram: null,
  facebook: null,
};

const client = new pg.Client({ connectionString });
await client.connect();

const existingAdmin = await client.query("SELECT id FROM admins WHERE email = $1", [email]);
if (existingAdmin.rowCount) {
  console.log("Admin already exists. Password was left unchanged.");
} else {
  const passwordHash = await bcrypt.hash(password, 12);
  await client.query("INSERT INTO admins (email, password_hash) VALUES ($1, $2)", [email, passwordHash]);
  console.log("Created admin.");
}

const existingSettings = await client.query("SELECT id FROM site_settings WHERE id = 1");
if (existingSettings.rowCount) {
  console.log("Site settings already exist. They were left unchanged.");
} else {
  await client.query(
    `INSERT INTO site_settings (id, phones, whatsapp_numbers, address_lines, social)
     VALUES (1, $1::jsonb, $2::jsonb, $3::jsonb, $4::jsonb)`,
    [JSON.stringify(phones), JSON.stringify(whatsapp), JSON.stringify(addressLines), JSON.stringify(social)],
  );
  console.log("Created site settings.");
}

await client.end();
console.log("Seed complete.");
