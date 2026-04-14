-- ============================================
-- THUNA — Row Level Security Policies
-- Public read access, restricted write access
-- ============================================

-- Enable RLS on all tables
ALTER TABLE police_stations ENABLE ROW LEVEL SECURITY;
ALTER TABLE officers ENABLE ROW LEVEL SECURITY;
ALTER TABLE fir ENABLE ROW LEVEL SECURITY;
ALTER TABLE cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_followups ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;

-- ============================================
-- PUBLIC READ POLICIES
-- Anyone can read all data (transparency portal)
-- ============================================

CREATE POLICY "Public read access on police_stations"
  ON police_stations FOR SELECT
  USING (true);

CREATE POLICY "Public read access on officers"
  ON officers FOR SELECT
  USING (true);

CREATE POLICY "Public read access on fir"
  ON fir FOR SELECT
  USING (true);

CREATE POLICY "Public read access on cases"
  ON cases FOR SELECT
  USING (true);

CREATE POLICY "Public read access on case_followups"
  ON case_followups FOR SELECT
  USING (true);

CREATE POLICY "Public read access on news_articles"
  ON news_articles FOR SELECT
  USING (true);

-- ============================================
-- WRITE POLICIES (for service role / admin only)
-- Regular users cannot modify data
-- ============================================

-- Note: Write operations should be performed using
-- the service_role key from the admin application.
-- The anon key will only have read access.
