import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  ChevronLeft, 
  ChevronRight,
  Shield,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';

const FIRManagement = () => {
  const navigate = useNavigate();
  const { firs, stations, loading } = useDatabase();
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) return <div className="flex h-64 items-center justify-center">Loading Ledger...</div>;
  
  const stats = [
    { title: 'Total FIRs', value: firs.length, icon: Shield, color: 'text-secondary', trend: '+12% from last month' },
    { title: 'Pending Investigation', value: '42', icon: Clock, color: 'text-primary' },
    { title: 'Resolved (MTD)', value: '156', icon: CheckCircle2, color: 'text-tertiary', trend: '89% Success Rate' },
    { title: 'System Status', value: 'Encrypted', icon: Shield, color: 'text-secondary', sub: 'Last secure sync: 2m ago' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-on-secondary-fixed-variant tracking-tighter uppercase mb-1">FIR Management</h2>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="w-8 h-[2px] bg-primary"></span>
            <p className="text-sm font-medium">Digital Case Ledger & Archives</p>
          </div>
        </div>
        <button 
          onClick={() => navigate('/firs/add')}
          className="bg-secondary text-on-secondary px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-secondary/20 transition-all active:scale-95 group"
        >
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          Add New FIR
        </button>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div 
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-surface-container-lowest p-6 rounded-xl shadow-[0px_12px_32px_rgba(11,42,74,0.04)] border border-outline-variant/5 relative overflow-hidden"
          >
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">{stat.title}</p>
            <h3 className={`text-4xl font-black ${stat.color} tracking-tighter`}>{stat.value}</h3>
            {stat.trend && (
              <div className="mt-4 flex items-center text-tertiary text-xs font-bold">
                <stat.icon className="w-4 h-4 mr-1" />
                {stat.trend}
              </div>
            )}
            {stat.sub && <p className="text-[10px] text-on-surface-variant mt-1">{stat.sub}</p>}
            <div className="absolute -right-4 -bottom-4 opacity-5">
              <stat.icon className="w-20 h-20" />
            </div>
          </motion.div>
        ))}
      </section>

      <div className="bg-surface-container-lowest rounded-xl shadow-[0px_12px_32px_rgba(11,42,74,0.04)] overflow-hidden border border-outline-variant/10">
        <div className="px-8 py-6 border-b border-outline-variant/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h4 className="text-lg font-bold text-secondary">Recent Case Logs</h4>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
              <input 
                type="text" 
                placeholder="Search FIRs..." 
                className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-lg text-sm focus:ring-2 focus:ring-secondary/20 outline-none w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="flex items-center gap-1 text-xs font-bold text-on-surface-variant bg-surface-container-low px-3 py-2 rounded-lg hover:bg-surface-container-high transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-1 text-xs font-bold text-on-surface-variant bg-surface-container-low px-3 py-2 rounded-lg hover:bg-surface-container-high transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-secondary-fixed text-on-secondary-fixed">
                <th className="px-8 py-4 text-xs font-extrabold uppercase tracking-widest">FIR Number</th>
                <th className="px-8 py-4 text-xs font-extrabold uppercase tracking-widest">Date</th>
                <th className="px-8 py-4 text-xs font-extrabold uppercase tracking-widest">Crime Type</th>
                <th className="px-8 py-4 text-xs font-extrabold uppercase tracking-widest">Police Station</th>
                <th className="px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {firs.slice(0, 8).map((fir, idx) => (
                <tr key={fir.fir_id} className={`hover:bg-surface-container-low transition-colors group ${idx % 2 !== 0 ? 'bg-surface-container-low/30' : ''}`}>
                  <td className="px-8 py-5">
                    <p className="font-bold text-on-secondary-fixed-variant">{fir.fir_number}</p>
                    <p className="text-[10px] text-on-surface-variant font-medium mt-1 uppercase">{fir.ipc_section}</p>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-sm font-semibold text-on-surface">{fir.fir_date}</p>
                    <p className="text-[10px] text-on-surface-variant">{fir.fir_time} IST</p>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${fir.crime_type === 'murder' ? 'bg-error' : 'bg-primary'}`}></span>
                      <p className="text-sm font-medium capitalize">{fir.crime_type.replace('_', ' ')}</p>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-sm font-medium">
                      {stations.find(s => s.station_id === fir.station_id)?.station_name || 'Unknown Station'}
                    </p>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <button className="p-2 text-secondary hover:bg-secondary-container rounded-lg transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-8 py-4 bg-surface-container-low flex items-center justify-between">
          <p className="text-xs font-bold text-on-surface-variant">Showing 1-8 of {firs.length} Records</p>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-secondary hover:text-white transition-all">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-3 py-1 rounded-lg bg-secondary text-white text-xs font-bold">1</button>
            <button className="px-3 py-1 rounded-lg bg-surface-container-lowest text-on-surface text-xs font-bold hover:bg-secondary hover:text-white transition-all">2</button>
            <button className="px-3 py-1 rounded-lg bg-surface-container-lowest text-on-surface text-xs font-bold hover:bg-secondary hover:text-white transition-all">3</button>
            <button className="p-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-secondary hover:text-white transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FIRManagement;
