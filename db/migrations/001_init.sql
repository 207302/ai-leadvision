CREATE TABLE admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  password_hash text NOT NULL,
  failed_attempts integer NOT NULL DEFAULT 0,
  locked_until timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE site_settings (
  id smallint PRIMARY KEY DEFAULT 1,
  phones jsonb NOT NULL DEFAULT '[]'::jsonb,
  whatsapp_numbers jsonb NOT NULL DEFAULT '[]'::jsonb,
  address_lines jsonb NOT NULL DEFAULT '[]'::jsonb,
  social jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT site_settings_singleton CHECK (id = 1)
);

CREATE TABLE newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  name text,
  is_active boolean NOT NULL DEFAULT true,
  unsubscribed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX newsletter_subscribers_email_key ON newsletter_subscribers (lower(email));

CREATE INDEX newsletter_subscribers_created_at_idx ON newsletter_subscribers (created_at DESC);
