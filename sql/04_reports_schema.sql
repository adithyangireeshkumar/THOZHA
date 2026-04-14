-- ============================================
-- THUNA — Public Reports & Action Schema
-- ============================================

CREATE TYPE report_status AS ENUM (
  'pending',
  'reviewed',
  'converted_to_fir',
  'rejected'
);

-- ============================================
-- TABLE: public_reports
-- ============================================

CREATE TABLE public_reports (
  report_id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tracking_id       VARCHAR(20) UNIQUE NOT NULL, -- Human readable ID e.g. T-123456
  reporter_name     VARCHAR(150) NOT NULL,
  reporter_contact  VARCHAR(20) NOT NULL,
  reporter_id       UUID REFERENCES auth.users(id), -- Optional: Link to Auth user
  incident_type     crime_type NOT NULL,
  location          TEXT NOT NULL,
  incident_date     DATE NOT NULL,
  description       TEXT NOT NULL,
  evidence_urls     TEXT[], -- Array of URLs (if using Supabase Storage)
  status            report_status NOT NULL DEFAULT 'pending',
  officer_remarks   TEXT,
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- RLS POLICIES
-- ============================================

ALTER TABLE public_reports ENABLE ROW LEVEL SECURITY;

-- Reporters can view their own reports (if logged in)
CREATE POLICY "Users can view their own reports"
  ON public_reports FOR SELECT
  USING (auth.uid() = reporter_id);

-- Anyone can submit a report (Guest or Logged in)
CREATE POLICY "Anyone can submit a report"
  ON public_reports FOR INSERT
  WITH CHECK (true);

-- Officers can view and update all reports
-- Note: Assuming auth.users metadata or a roles table exists for officers
-- For now, allowing all authenticated users to read (in a real app, check for officer role)
CREATE POLICY "Authorized users can view all reports"
  ON public_reports FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authorized users can update reports"
  ON public_reports FOR UPDATE
  USING (auth.role() = 'authenticated');

-- ============================================
-- INDEXES
-- ============================================

CREATE INDEX idx_reports_tracking ON public_reports(tracking_id);
CREATE INDEX idx_reports_status   ON public_reports(status);
CREATE INDEX idx_reports_reporter ON public_reports(reporter_id);
