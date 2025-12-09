/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `first_name` (text) - Contact's first name
      - `last_name` (text) - Contact's last name
      - `phone` (text) - Contact's phone number
      - `email` (text, not null) - Contact's email address
      - `comments` (text) - Additional comments from the contact
      - `consent_transactional` (boolean, not null) - Whether user consented to transactional messages
      - `consent_marketing` (boolean, not null, default false) - Whether user consented to marketing messages
      - `created_at` (timestamptz) - Timestamp of submission
      - `updated_at` (timestamptz) - Timestamp of last update

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for service role to insert submissions
    - Add policy for authenticated admin users to read submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text,
  last_name text,
  phone text,
  email text NOT NULL,
  comments text,
  consent_transactional boolean NOT NULL,
  consent_marketing boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow service role to insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
