import React from 'react';
import { motion } from 'framer-motion';
import { 
  FolderOpen, 
  Clock, 
  AlertTriangle, 
  CheckSquare, 
  Filter, 
  Plus, 
  UserPlus, 
  RefreshCw, 
  Eye, 
  ChevronLeft, 
  ChevronRight,
  Shield,
  Gavel,
  ArrowRight
} from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';

const CaseManagement = () => {
  const { cases, firs, officers, loading } = useDatabase();

  if (loading) return <div className="flex h-64 items-center justify-center">Loading Investigation Log...</div>;

  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredCases = React.useMemo(() => {
    return cases.filter(c => {
      const fir = firs.find(f => f.fir_id === c.fir_id);
      const officer = officers.find(o => o.officer_id === c.officer_id);
      const searchStr = `${c.case_id} ${fir?.fir_number || ''} ${officer?.officer_name || ''} ${c.case_status}`.toLowerCase();
      return searchStr.includes(searchTerm.toLowerCase());
    });
  }, [cases, firs, officers, searchTerm]);

  const stats = [
    { title: 'Active Investigations', value: cases.filter(c => c.case_status !== 'case_closed').length, icon: FolderOpen, color: 'text-secondary', trend: '+12% from last month' },
    { title: 'Pending Approval', value: cases.filter(c => c.case_status === 'complaint_registered').length, icon: AlertTriangle, color: 'text-primary' },
    { title: 'Closed Cases', value: cases.filter(c => c.case_status === 'case_closed').length, icon: CheckSquare, color: 'text-tertiary', progress: Math.round((cases.filter(c => c.case_status === 'case_closed').length / cases.length) * 100) || 0 },
    { title: 'Total Ledger', value: cases.length, icon: Shield, color: 'text-secondary', sub: 'Last sync: Just now' },
  ];

  const enrichedCases = filteredCases.slice(0, 8).map(c => {
    const fir = firs.find(f => f.fir_id === c.fir_id);
    const officer = officers.find(o => o.officer_id === c.officer_id);
    return { ...c, fir, officer };
  });

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black text-on-secondary-fixed-variant tracking-tighter uppercase mb-1">Case Management</h2>
        <div className="flex items-center gap-2 text-on-surface-variant">
          <span className="w-8 h-[2px] bg-primary"></span>
          <p className="text-sm font-medium">Sovereign Investigation Ledger</p>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div 
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-surface-container-lowest p-6 rounded-xl shadow-[0px_12px_32px_rgba(11,42,74,0.04)] relative overflow-hidden"
          >
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1">{stat.title}</p>
            <h3 className={`text-3xl font-black ${stat.color} tracking-tighter`}>{stat.value}</h3>
            {stat.trend && (
              <div className="mt-4 flex items-center text-tertiary text-xs font-bold">
                <stat.icon className="w-4 h-4 mr-1" />
                {stat.trend}
              </div>
            )}
            {stat.sub && (
              <div className="mt-4 flex items-center text-on-surface-variant text-xs font-bold">
                <Shield className="w-4 h-4 mr-1" />
                {stat.sub}
              </div>
            )}
            {stat.progress !== undefined && (
              <div className="mt-4">
                <div className="flex justify-between text-[10px] font-bold uppercase mb-1">
                  <span>Efficiency</span>
                  <span>{stat.progress}%</span>
                </div>
                <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full transition-all duration-500" style={{ width: `${stat.progress}%` }}></div>
                </div>
              </div>
            )}
            <div className="absolute -right-4 -bottom-4 opacity-5">
              <stat.icon className="w-20 h-20" />
            </div>
          </motion.div>
        ))}
      </section>

      <section className="bg-surface-container-lowest rounded-xl shadow-[0px_12px_32px_rgba(11,42,74,0.04)] overflow-hidden">
        <div className="p-6 border-b border-outline-variant/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-low/30">
          <div>
            <h4 className="text-lg font-bold text-on-secondary-fixed tracking-tight">Case Records Ledger</h4>
            <p className="text-sm text-on-surface-variant">Centralized investigation tracking system</p>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
              <input 
                type="text" 
                placeholder="Search Cases..." 
                className="pl-10 pr-4 py-2 bg-white border border-outline-variant/20 rounded-xl text-sm focus:ring-2 focus:ring-secondary/20 outline-none w-64 shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-container text-on-primary-container text-xs font-bold hover:brightness-95 transition-all">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button onClick={() => navigate('/firs/add')} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-on-secondary text-xs font-bold hover:bg-on-secondary-container transition-all shadow-lg active:scale-95">
              <Plus className="w-4 h-4" />
              New Case
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-secondary-fixed text-on-secondary-fixed text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Case ID</th>
                <th className="px-6 py-4">FIR Number</th>
                <th className="px-6 py-4">Assigned Officer</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Start Date</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {enrichedCases.map((c, idx) => (
                <tr key={c.case_id} className={`hover:bg-surface-container-low/50 transition-colors ${idx % 2 !== 0 ? 'bg-surface-container-low/30' : ''}`}>
                  <td className="px-6 py-4 font-mono text-sm text-secondary font-bold uppercase">{c.case_id.replace('case-', 'CAS-')}</td>
                  <td className="px-6 py-4 text-sm font-medium">{c.fir?.fir_number || 'N/A'}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                        <img 
                          className="w-full h-full object-cover" 
                          src={`https://i.pravatar.cc/150?u=${c.officer_id}`} 
                          alt={c.officer?.officer_name}
                          onError={(e) => { e.target.src = "https://i.pravatar.cc/150?u=fallback" }}
                        />
                      </div>
                      <span className="text-sm font-medium">{c.officer?.officer_name || 'Unassigned'}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                      c.case_status === 'case_closed' ? 'bg-surface-container-highest text-on-surface-variant' :
                      c.case_status === 'complaint_registered' ? 'bg-error-container text-on-error-container' :
                      'bg-tertiary-container text-on-tertiary-container'
                    }`}>
                      {c.case_status.replace(/_/g, ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-on-surface-variant">{c.start_date}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button className="p-2 rounded-lg text-secondary hover:bg-secondary/10 transition-colors" title="Assign">
                        <UserPlus className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg text-secondary hover:bg-secondary/10 transition-colors" title="Update Status">
                        <RefreshCw className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg bg-secondary text-on-secondary hover:brightness-110 transition-colors" title="View Details">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-surface-container-low/30 flex items-center justify-between border-t border-outline-variant/10">
          <p className="text-xs text-on-surface-variant uppercase tracking-widest font-medium">Showing 1-5 of 142 records</p>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg border border-outline-variant/20 hover:bg-surface-container-high transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg border border-outline-variant/20 bg-secondary text-on-secondary w-8 h-8 flex items-center justify-center">
              <span className="text-xs font-bold">1</span>
            </button>
            <button className="p-2 rounded-lg border border-outline-variant/20 hover:bg-surface-container-high transition-colors w-8 h-8 flex items-center justify-center">
              <span className="text-xs font-bold">2</span>
            </button>
            <button className="p-2 rounded-lg border border-outline-variant/20 hover:bg-surface-container-high transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-xl shadow-[0px_12px_32px_rgba(11,42,74,0.04)]">
          <h4 className="text-sm font-bold text-secondary uppercase tracking-widest mb-6">Case Resolution Timeline</h4>
          <div className="space-y-6">
            {[
              { title: 'Evidence Collection', status: 'Completed', color: 'text-tertiary', dot: 'bg-primary', desc: 'Forensic reports uploaded for CAS-2024-0081' },
              { title: 'Interrogation Phase', status: 'In Progress', color: 'text-primary', dot: 'bg-secondary animate-pulse', desc: 'Suspect questioning scheduled for tomorrow, 10:00 AM' },
              { title: 'Charge Sheet Filing', status: 'Scheduled', color: 'text-on-surface-variant', dot: 'bg-outline-variant opacity-50', desc: 'Pending legal advisor clearance' }
            ].map((step, i) => (
              <div key={step.title} className={`relative pl-8 border-l-2 ${i === 2 ? 'border-transparent' : 'border-primary/20'}`}>
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-surface ${step.dot}`}></div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold">{step.title}</span>
                  <span className={`text-xs font-medium ${step.color}`}>{step.status}</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-inverse-surface text-on-secondary-fixed rounded-xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Shield className="w-20 h-20" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Quick Protocols</h4>
          <div className="space-y-3">
            {[
              { label: 'Issue Summon Order', icon: <ArrowRight className="w-4 h-4" /> },
              { label: 'Request Warrant', icon: <ArrowRight className="w-4 h-4" /> },
              { label: 'Escalate High Profile Case', icon: <Gavel className="w-4 h-4" />, primary: true }
            ].map((action) => (
              <button 
                key={action.label} 
                className={`w-full text-left px-4 py-3 rounded-xl flex items-center justify-between group transition-all ${
                  action.primary ? 'bg-primary text-white hover:bg-primary/80' : 'bg-white/10 border border-white/10 hover:bg-white/20'
                }`}
              >
                <span className={`text-sm ${action.primary ? 'font-bold' : 'font-medium'}`}>{action.label}</span>
                <span className="transition-transform group-hover:translate-x-1">{action.icon}</span>
              </button>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-[10px] uppercase tracking-tighter opacity-60 mb-2">Internal Policy</p>
            <p className="text-xs leading-relaxed italic opacity-80">
              "Ensure all case diaries are updated within 24 hours of investigation milestones as per State Police manual."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseManagement;
