# AI Lead Vision

Next.js site for AI Lead Vision Pvt Ltd. The public pages stay as they are. A private admin panel edits the footer and lists newsletter subscribers. Visitors do not get accounts, and the public site does not link to the admin panel.

## Requirements

- Node.js 20 or newer
- A Neon Postgres database. This repo is linked to project `twilight-rice-12508925`, branch `production`.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables and fill in the admin values:

```bash
copy .env.example .env.local
```

`neon link` already writes `DATABASE_URL` and `DATABASE_URL_UNPOOLED` into `.env.local`. Add:

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | Pooled Postgres URL used by the site |
| `DATABASE_URL_UNPOOLED` | Direct Postgres URL used by migrations |
| `AUTH_SECRET` | Random string, at least 32 characters, used to sign the admin session cookie |
| `ADMIN_EMAIL` | Email for the first admin |
| `ADMIN_PASSWORD` | Password for the first admin, at least 10 characters. Stored only as a bcrypt hash |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Existing contact-form mail settings |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Analytics. Leave the placeholder until a real ID is issued |
| `GOOGLE_SITE_VERIFICATION` | Search Console verification |

3. Create the tables and the first admin:

```bash
npm run db:migrate
npm run db:seed
```

The seed inserts the admin from `ADMIN_EMAIL` and `ADMIN_PASSWORD`, and a footer record from the current published phones, WhatsApp number, address placeholder, and LinkedIn URL. Running it again does not overwrite an existing admin or saved footer.

4. Start the site:

```bash
npm run dev
```

Open the public site at [http://localhost:3000](http://localhost:3000).

## Admin

Open [http://localhost:3000/admin/login](http://localhost:3000/admin/login) by typing the address. It is not linked from the public site.

- Footer: [http://localhost:3000/admin/settings](http://localhost:3000/admin/settings)
- Subscribers: [http://localhost:3000/admin/subscribers](http://localhost:3000/admin/subscribers)

Every `/admin` page except the login page redirects to `/admin/login` when the session cookie is missing. Log out from the header of the admin pages.

## What is stored

Postgres tables:

- `admins` — email and bcrypt password hash, plus lockout after repeated failures
- `site_settings` — one row for footer phones, WhatsApp numbers, address lines, and LinkedIn, YouTube, Instagram, and Facebook URLs
- `newsletter_subscribers` — email, optional name, `is_active`, `unsubscribed_at`, and timestamps

The public footer reads `GET /api/site-settings`. A blank social URL is omitted from the footer. The newsletter form posts to `POST /api/newsletter/subscribe`.

Emails in the footer, and the contact page, still come from `lib/content/site.ts`.
