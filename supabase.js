import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://pyrcokjbkwmnzhryhwiq.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5cmNva2pia3dtbnpocnlod2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwMDU2NjYsImV4cCI6MjA5MTU4MTY2Nn0.oHzR-uW3bi_P1x9s5ryu7ZJYRbUbASxBTCK8pFRUTYo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Helper: Check if Supabase is properly configured
 */
export const isSupabaseConfigured = () => {
  return supabaseUrl !== 'https://your-project.supabase.co' && 
         supabaseAnonKey !== 'your-anon-key';
};

/**
 * Fetch all cases with joined FIR and Officer data
 */
export const fetchCases = async (filters = {}) => {
  if (!isSupabaseConfigured()) return { data: null, error: 'Supabase not configured' };

  let query = supabase
    .from('cases')
    .select(`
      *,
      fir (*),
      officers (officer_name, rank, badge_number)
    `);

  if (filters.status) query = query.eq('case_status', filters.status);
  
  const { data, error } = await query.order('created_at', { ascending: false });
  return { data, error };
};

/**
 * Fetch a single case by ID with all details
 */
export const fetchCaseById = async (caseId) => {
  if (!isSupabaseConfigured()) return { data: null, error: 'Supabase not configured' };

  const { data, error } = await supabase
    .from('cases')
    .select(`
      *,
      fir (*, police_stations(*)),
      officers (*, police_stations(*)),
      case_followups (*),
      news_articles (*)
    `)
    .eq('case_id', caseId)
    .single();

  return { data, error };
};

/**
 * Fetch all police stations
 */
export const fetchStations = async () => {
  if (!isSupabaseConfigured()) return { data: null, error: 'Supabase not configured' };
  const { data, error } = await supabase.from('police_stations').select('*').order('station_name');
  return { data, error };
};

/**
 * Helper: Submit a public report/complaint
 */
export const submitReport = async (reportData) => {
  if (!isSupabaseConfigured()) {
    console.warn('Supabase not configured. Simulating submission...');
    return { data: { tracking_id: `T-${Math.floor(100000 + Math.random() * 900000)}` }, error: null };
  }

  const trackingId = `T-${Math.floor(100000 + Math.random() * 900000)}`;
  
  const { data, error } = await supabase
    .from('public_reports')
    .insert([
      {
        ...reportData,
        tracking_id: trackingId,
        status: 'pending',
      }
    ])
    .select();

  return { data: data?.[0], error };
};
