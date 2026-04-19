import React, { useState } from 'react';
import { useDatabase } from '../context/DatabaseContext';
import { motion } from 'framer-motion';
import { 
  FolderOpen, 
  AlertCircle, 
  CheckCircle2, 
  TrendingUp,
  Clock,
  FileText,
  ShieldCheck,
  Plus,
  RefreshCw,
  LayoutDashboard
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, AreaChart, Area
} from 'recharts';
import { supabase } from '../lib/supabase';

const data = [
  { name: 'Aug 01', firs: 12, cases: 10 },
  { name: 'Aug 05', firs: 19, cases: 15 },
  { name: 'Aug 10', firs: 15, cases: 18 },
  { name: 'Aug 15', firs: 22, cases: 20 },
  { name: 'Aug 20', firs: 30, cases: 25 },
  { name: 'Aug 25', firs: 25, cases: 28 },
  { name: 'Aug 30', firs: 18, cases: 22 },
];

const StatsCard = ({ title, value, icon: Icon, trend, color, bgColor }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-surface-container-lowest p-6 rounded-xl shadow-[0px_12px_32px_rgba(11,42,74,0.04)] relative overflow-hidden group ${bgColor || ''}`}
  >
    <div className={`absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity ${color}`}>
      <Icon className="w-24 h-24" />
    </div>
    <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${color === 'text-white' ? 'text-white/70' : 'text-on-surface-variant'}`}>{title}</p>
    <h3 className={`text-4xl font-extrabold tracking-tight ${color}`}>{value}</h3>
    {trend && (
      <div className={`mt-4 flex items-center text-xs font-medium ${color === 'text-white' ? 'text-white/80' : 'text-tertiary'}`}>
        <TrendingUp className="w-4 h-4 mr-1" />
        {trend}
      </div>
    )}
    {!trend && (
      <p className={`mt-4 text-xs ${color === 'text-white' ? 'text-white/80' : 'text-on-surface-variant'}`}>Immediate action required</p>
    )}
  </motion.div>
);

const Dashboard = () => {
  const { cases, firs, loading: dbLoading, refreshData } = useDatabase();
  const [syncing, setSyncing] = useState(false);
  
  if (dbLoading && firs.length === 0) return <div className="flex h-64 items-center justify-center text-secondary font-bold">Loading Sovereign Data...</div>;

  const activeCasesCount = cases.filter(c => c.case_status !== 'case_closed').length;
  const closedCasesCount = cases.filter(c => c.case_status === 'case_closed').length;
  const casesToday = cases.filter(c => c.start_date === new Date().toISOString().split('T')[0]).length;
  
  const activities = firs.slice(0, 3).map((fir, idx) => ({
    id: fir.fir_id,
    type: 'FIR',
    title: `New FIR Registered: ${fir.fir_number}`,
    time: new Date(fir.created_at || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    desc: `${fir.crime_type?.charAt(0).toUpperCase() + fir.crime_type?.slice(1)} case reported at ${fir.incident_location}.`,
    tags: idx === 0 ? ['High Priority'] : [],
    icon: <FileText className="w-6 h-6" />,
    iconBg: idx === 0 ? 'bg-error-container text-on-error-container' : 'bg-secondary-fixed text-on-secondary-fixed'
  }));

  if (activities.length === 0) {
    activities.push({
      id: 'mock-1',
      type: 'System',
      title: 'Database Synchronized',
      time: 'Just Now',
      desc: 'System successfully synced with Supabase node.',
      tags: ['Verified'],
      icon: <CheckCircle2 className="w-6 h-6" />,
      iconBg: 'bg-tertiary-container text-on-tertiary-container'
    });
  }

  const handleSyncData = async () => {
    if (!confirm('This will sync the current demo state with Supabase. Existing records will be updated or created. Proceed?')) return;
    
    setSyncing(true);
    try {
      const { demoStations, demoOfficers, demoFIRs, demoCases, demoNews } = await import('../lib/demoData');
      
      const { error: sErr } = await supabase.from('police_stations').upsert(demoStations, { onConflict: 'station_id' });
      if (sErr) throw sErr;
      
      const { error: oErr } = await supabase.from('officers').upsert(demoOfficers, { onConflict: 'officer_id' });
      if (oErr) throw oErr;
      
      const { error: fErr } = await supabase.from('fir').upsert(demoFIRs, { onConflict: 'fir_id' });
      if (fErr) throw fErr;
      
      const { error: cErr } = await supabase.from('cases').upsert(demoCases, { onConflict: 'case_id' });
      if (cErr) throw cErr;
      
      const { error: nErr } = await supabase.from('news_articles').upsert(demoNews, { onConflict: 'article_id' });
      if (nErr) throw nErr;

      alert('Database Synchronization Complete.');
      await refreshData();
    } catch (err) {
      console.error('Sync error:', err);
      alert('Sync failed: ' + err.message);
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black text-on-surface tracking-tight">Sovereign Dashboard</h2>
        <p className="text-on-surface-variant mt-1 text-sm uppercase tracking-widest font-bold opacity-60">System Overview & Live Ledger</p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard title="Total Cases" value={cases.length} icon={FolderOpen} trend="+12% from last month" color="text-secondary" />
        <StatsCard title="Active Cases" value={activeCasesCount} icon={AlertCircle} color="text-primary" bgColor="border-l-4 border-primary" />
        <StatsCard title="Closed Cases" value={closedCasesCount} icon={CheckCircle2} trend="84% resolution rate" color="text-tertiary" />
        <StatsCard title="Cases Today" value={casesToday} icon={Clock} color="text-white" bgColor="bg-secondary" />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-bold text-on-surface flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Recent Activity Feed
            </h4>
            <div className="flex gap-2">
               <button 
                onClick={handleSyncData}
                disabled={syncing}
                className="text-[10px] font-black text-secondary hover:underline uppercase tracking-widest flex items-center gap-1.5"
              >
                <RefreshCw className={`w-3 h-3 ${syncing ? 'animate-spin' : ''}`} />
                Sync Ledger
              </button>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_12px_32px_rgba(11,42,74,0.04)]">
            <div className="divide-y divide-outline-variant/10">
              {activities.map((activity) => (
                <div key={activity.id} className="p-6 flex items-start gap-4 hover:bg-surface-container-low transition-colors">
                  <div className={`w-12 h-12 rounded-lg ${activity.iconBg} flex items-center justify-center shrink-0`}>
                    {activity.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h5 className="font-bold text-on-surface">{activity.title}</h5>
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest bg-surface-container-high px-2 py-1 rounded">{activity.time}</span>
                    </div>
                    <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">{activity.desc}</p>
                    <div className="mt-3 flex gap-2">
                      {activity.tags.map(tag => (
                        <span key={tag} className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                          tag === 'High Priority' ? 'bg-error-container text-on-error-container' : 
                          tag === 'Resolved' ? 'bg-tertiary-fixed text-on-tertiary-fixed-variant' : 
                          'bg-surface-container-high text-on-surface-variant'
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0px_12px_32px_rgba(11,42,74,0.04)]">
            <h4 className="text-sm font-bold text-on-surface tracking-widest uppercase mb-6 opacity-60">Crime Trends (Last 30 Days)</h4>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorFirs" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#466083" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#466083" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                  <XAxis dataKey="name" stroke="#888" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888" fontSize={10} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: 'none', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Area type="monotone" dataKey="firs" stroke="#466083" fillOpacity={1} fill="url(#colorFirs)" strokeWidth={2} />
                  <Area type="monotone" dataKey="cases" stroke="#6b5c42" fillOpacity={0} strokeWidth={2} strokeDasharray="5 5" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold text-on-surface flex items-center gap-2">
            <span className="w-2 h-2 bg-secondary rounded-full"></span>
            Station Intel
          </h4>
          
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_12px_32px_rgba(11,42,74,0.04)] border-t-4 border-secondary">
            <h5 className="font-bold text-secondary mb-4 uppercase text-xs tracking-widest">Active Duty Officers</h5>
            <div className="space-y-4">
              {[
                { name: 'SI Ramesh Kumar', role: 'Patrol', status: 'online' },
                { name: 'ASI Meera Nair', role: 'Station', status: 'online' },
                { name: 'Inspector Rahul K.', role: 'Off-Duty', status: 'offline' }
              ].map((officer) => (
                <div key={officer.name} className={`flex items-center justify-between p-3 rounded-lg bg-surface-container-low ${officer.status === 'offline' ? 'opacity-60' : ''}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${officer.status === 'online' ? 'bg-tertiary' : 'bg-outline'}`}></div>
                    <span className="text-sm font-medium">{officer.name}</span>
                  </div>
                  <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter">{officer.role}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary p-6 rounded-xl shadow-[0px_12px_32px_rgba(11,42,74,0.04)] text-white relative overflow-hidden">
            <div className="relative z-10">
              <h5 className="font-bold mb-2 uppercase text-xs tracking-widest opacity-80">Security Bulletin</h5>
              <p className="text-sm leading-relaxed mb-4">Increased vigilance required in Thampanoor area due to local festivities. Night patrol frequency doubled.</p>
              <button className="text-xs font-bold border-b border-white/40 pb-1 hover:border-white transition-all uppercase tracking-widest">Read Full Directive</button>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10">
              <ShieldCheck className="w-24 h-24" />
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg h-48 relative">
            <img 
              alt="District Map" 
              className="w-full h-full object-cover grayscale brightness-50" 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            />
            <div className="absolute inset-0 bg-secondary/20 flex flex-col justify-end p-4">
              <p className="text-white text-xs font-bold uppercase tracking-widest drop-shadow-md">Active Zone: District HQ</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
