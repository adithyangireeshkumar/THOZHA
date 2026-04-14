-- ============================================
-- THUNA — Crime Transparency Portal
-- Database Schema v1.0
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- ENUMS
-- ============================================

CREATE TYPE crime_type AS ENUM (
  'theft',
  'robbery',
  'assault',
  'burglary',
  'fraud',
  'cybercrime',
  'drug_offense',
  'murder',
  'kidnapping',
  'domestic_violence',
  'traffic_violation',
  'other'
);

CREATE TYPE case_status AS ENUM (
  'complaint_registered',
  'investigation_started',
  'evidence_collected',
  'arrest_made',
  'chargesheet_filed',
  'case_closed'
);

-- ============================================
-- TABLE: police_stations
-- ============================================

CREATE TABLE police_stations (
  station_id    UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  station_name  VARCHAR(150) NOT NULL,
  district      VARCHAR(100) NOT NULL DEFAULT 'Ernakulam',
  address       TEXT,
  phone         VARCHAR(20),
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TABLE: officers
-- ============================================

CREATE TABLE officers (
  officer_id    UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  officer_name  VARCHAR(150) NOT NULL,
  rank          VARCHAR(80) NOT NULL,
  badge_number  VARCHAR(20),
  station_id    UUID NOT NULL REFERENCES police_stations(station_id) ON DELETE CASCADE,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TABLE: fir
-- ============================================

CREATE TABLE fir (
  fir_id        UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  fir_number    VARCHAR(30) NOT NULL UNIQUE,
  fir_date      DATE NOT NULL,
  fir_time      TIME NOT NULL,
  crime_type    crime_type NOT NULL,
  ipc_section   VARCHAR(50) NOT NULL,
  location      TEXT NOT NULL,
  description   TEXT NOT NULL,
  complainant   VARCHAR(150),
  station_id    UUID NOT NULL REFERENCES police_stations(station_id) ON DELETE CASCADE,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TABLE: cases
-- ============================================

CREATE TABLE cases (
  case_id       UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  fir_id        UUID NOT NULL UNIQUE REFERENCES fir(fir_id) ON DELETE CASCADE,
  officer_id    UUID NOT NULL REFERENCES officers(officer_id) ON DELETE SET NULL,
  case_status   case_status NOT NULL DEFAULT 'complaint_registered',
  start_date    DATE NOT NULL,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TABLE: case_followups
-- ============================================

CREATE TABLE case_followups (
  followup_id   UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  case_id       UUID NOT NULL REFERENCES cases(case_id) ON DELETE CASCADE,
  followup_date DATE NOT NULL,
  status        case_status NOT NULL,
  remarks       TEXT,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TABLE: news_articles
-- ============================================

CREATE TABLE news_articles (
  article_id       UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  case_id          UUID NOT NULL REFERENCES cases(case_id) ON DELETE CASCADE,
  title            VARCHAR(300) NOT NULL,
  source           VARCHAR(150) NOT NULL,
  publication_date DATE NOT NULL,
  article_url      TEXT NOT NULL,
  verified         BOOLEAN DEFAULT FALSE,
  created_at       TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INDEXES for performance
-- ============================================

CREATE INDEX idx_fir_station    ON fir(station_id);
CREATE INDEX idx_fir_crime_type ON fir(crime_type);
CREATE INDEX idx_fir_date       ON fir(fir_date);
CREATE INDEX idx_fir_number     ON fir(fir_number);
CREATE INDEX idx_cases_status   ON cases(case_status);
CREATE INDEX idx_cases_officer  ON cases(officer_id);
CREATE INDEX idx_followups_case ON case_followups(case_id);
CREATE INDEX idx_news_case      ON news_articles(case_id);
