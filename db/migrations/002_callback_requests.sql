CREATE TABLE callback_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT callback_requests_name_len CHECK (char_length(name) BETWEEN 2 AND 60),
  CONSTRAINT callback_requests_email_len CHECK (char_length(email) BETWEEN 6 AND 254),
  CONSTRAINT callback_requests_phone_len CHECK (char_length(phone) BETWEEN 10 AND 16),
  CONSTRAINT callback_requests_status_check CHECK (status IN ('new', 'contacted', 'closed'))
);

CREATE INDEX callback_requests_created_at_idx ON callback_requests (created_at DESC);
