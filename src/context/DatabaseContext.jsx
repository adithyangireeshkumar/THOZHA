import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, fetchCases, fetchStations } from '../lib/supabase';
import { demoCases, demoFIRs, demoOfficers, demoStations, demoFollowups, demoNews } from '../lib/demoData';

const DatabaseContext = createContext();

export const DatabaseProvider = ({ children }) => {
  const [cases, setCases] = useState([]);
  const [firs, setFirs] = useState([]);
  const [officers, setOfficers] = useState([]);
  const [stations, setStations] = useState([]);
  const [followups, setFollowups] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshData = async () => {
    setLoading(true);
    try {
      // Try to fetch from Supabase
      const { data: supabaseCases, error: casesError } = await fetchCases();
      const { data: supabaseStations, error: stationsError } = await fetchStations();
      
      // For items not in supabase.js helpers yet, we can add them here or use demo data
      const { data: supabaseFIRs } = await supabase.from('fir').select('*');
      const { data: supabaseOfficers } = await supabase.from('officers').select('*');
      const { data: supabaseFollowups } = await supabase.from('case_followups').select('*');
      const { data: supabaseNews } = await supabase.from('news_articles').select('*');

      if (supabaseCases && supabaseCases.length > 0) {
        setCases(supabaseCases);
        setStations(supabaseStations || demoStations);
        setFirs(supabaseFIRs || demoFIRs);
        setOfficers(supabaseOfficers || demoOfficers);
        setFollowups(supabaseFollowups || demoFollowups);
        setNews(supabaseNews || demoNews);
      } else {
        // Fallback to demo data if Supabase is empty or fails
        console.warn('Supabase returned no data, falling back to demo data');
        setCases(demoCases);
        setFirs(demoFIRs);
        setOfficers(demoOfficers);
        setStations(demoStations);
        setFollowups(demoFollowups);
        setNews(demoNews);
      }
    } catch (err) {
      console.error('Database fetch error:', err);
      setError(err.message);
      // Fallback
      setCases(demoCases);
      setFirs(demoFIRs);
      setOfficers(demoOfficers);
      setStations(demoStations);
      setFollowups(demoFollowups);
      setNews(demoNews);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const value = {
    cases,
    firs,
    officers,
    stations,
    followups,
    news,
    loading,
    error,
    refreshData
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error('useDatabase must be used within a DatabaseProvider');
  }
  return context;
};
