import React from 'react';
import { motion } from 'framer-motion';
import { 
  History, 
  Download, 
  Filter, 
  PlusCircle, 
  Save, 
  Info, 
  Gavel, 
  ChevronRight,
  Shield,
  Search
} from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';

const FollowUps = () => {
  const { followups, cases, loading } = useDatabase();

  if (loading) return <div className="flex h-64 items-center justify-center">Loading Procedural Log...</div>;

  const displayFollowups = followups.slice(0, 5);

  return (
    <div className="space-y-8">
      <header>
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black text-secondary tracking-tighter uppercase">Case Follow-ups</h1>
            <p className="text-on-surface-variant mt-1">Track ongoing investigations, hearings, and procedural actions.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white border border-outline-variant/20 text-on-surface px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-surface-container-low transition-colors shadow-sm">
              <Filter className="w-4 h-4" />
              Filter Log
            </button>
            <button className="bg-secondary text-on-secondary px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:brightness-110 transition-colors shadow-lg active:scale-95">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <section className="xl:col-span-8 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
          <div className="px-6 py-4 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low/30">
            <h2 className="font-bold text-secondary flex items-center gap-2">
              <History className="w-5 h-5" />
              Active Follow-up Log
            </h2>
            <span className="text-[10px] font-extrabold px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full uppercase tracking-widest">
              {followups.length} Total Records
            </span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50 text-[10px] uppercase tracking-widest text-on-surface-variant font-extrabold">
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Case ID</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Remarks</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10 text-sm">
                {displayFollowups.map((fu, idx) => (
                  <tr key={fu.followup_id} className="hover:bg-surface-container-low/40 transition-colors group">
                    <td className="px-6 py-4 text-on-surface-variant whitespace-nowrap">{fu.followup_date}</td>
                    <td className="px-6 py-4 font-bold text-secondary whitespace-nowrap uppercase">{fu.case_id.replace('case-', 'CAS-')}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        fu.status === 'case_closed' ? 'bg-surface-container-highest text-on-surface-variant' :
                        fu.status === 'investigation_started' ? 'bg-blue-100 text-blue-800' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {fu.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant max-w-[200px] truncate">{fu.remarks}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-secondary hover:underline font-bold text-xs uppercase tracking-widest">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-surface-container-low/30 border-t border-outline-variant/10 text-center">
            <button className="text-[10px] font-extrabold text-secondary hover:underline tracking-widest uppercase">Load More Entries</button>
          </div>
        </section>

        <section className="xl:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-variant/10 bg-secondary">
              <h2 className="font-bold text-primary-fixed-dim flex items-center gap-2 uppercase tracking-widest text-xs">
                <PlusCircle className="w-5 h-5" />
                Add New Follow-up Update
              </h2>
            </div>
            <form className="p-6 space-y-4">
              <div>
                <label className="block text-[10px] font-extrabold text-on-surface-variant uppercase tracking-widest mb-1.5">Case ID</label>
                <select className="w-full bg-surface-container-low border-none rounded-xl text-sm focus:ring-1 focus:ring-secondary py-2 px-3 outline-none">
                  <option>Select Active Case...</option>
                  {cases.slice(0, 10).map(c => (
                    <option key={c.case_id} value={c.case_id}>{c.case_id.toUpperCase()}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-extrabold text-on-surface-variant uppercase tracking-widest mb-1.5">Date</label>
                  <input className="w-full bg-surface-container-low border-none rounded-xl text-sm focus:ring-1 focus:ring-secondary py-2 px-3 outline-none" type="date" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold text-on-surface-variant uppercase tracking-widest mb-1.5">Status</label>
                  <select className="w-full bg-surface-container-low border-none rounded-xl text-sm focus:ring-1 focus:ring-secondary py-2 px-3 outline-none">
                    <option>Investigation</option>
                    <option>Court Hearing</option>
                    <option>Evidence Logged</option>
                    <option>Arrest Made</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-extrabold text-on-surface-variant uppercase tracking-widest mb-1.5">Remarks</label>
                <textarea className="w-full bg-surface-container-low border-none rounded-xl text-sm focus:ring-1 focus:ring-secondary py-2 px-3 outline-none resize-none" placeholder="Enter session updates..." rows="3"></textarea>
              </div>
              <div className="pt-2">
                <button className="w-full bg-secondary text-on-secondary py-3 rounded-xl font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95" type="submit">
                  <Save className="w-4 h-4" />
                  Update Case Log
                </button>
              </div>
            </form>
          </div>

          <div className="bg-secondary/5 border border-primary-container/30 rounded-xl p-6 relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-secondary font-extrabold mb-2 flex items-center gap-2 uppercase tracking-widest text-xs">
                <Info className="w-4 h-4" />
                Procedural Note
              </h3>
              <p className="text-on-surface-variant text-[11px] leading-relaxed font-medium">
                All follow-up entries are timestamped and linked to the officer's digital signature. Ensure all remarks are factual and compliant with standards.
              </p>
            </div>
            <Gavel className="absolute -right-4 -bottom-4 text-secondary/10 w-24 h-24 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
          </div>

          <div className="h-40 rounded-xl overflow-hidden relative group shadow-lg">
            <img 
              alt="Law Enforcement" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-50" 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex flex-col justify-end p-4">
              <span className="text-primary-fixed-dim text-3xl font-black">12</span>
              <span className="text-white text-[10px] font-bold uppercase tracking-widest">Active Hearings This Week</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FollowUps;
