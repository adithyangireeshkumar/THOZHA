import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Search, 
  Filter, 
  Download, 
  Edit3, 
  History, 
  ChevronLeft, 
  ChevronRight,
  Shield,
  FileDown
} from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';

const Officers = () => {
  const { officers, stations, loading } = useDatabase();

  const [searchTerm, setSearchTerm] = React.useState('');
  const [stationFilter, setStationFilter] = React.useState('All Stations');
  const [statusFilter, setStatusFilter] = React.useState('All Statuses');

  const filteredOfficers = React.useMemo(() => {
    return (officers || []).filter(off => {
      const matchSearch = off.officer_name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          off.badge_number?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          off.rank?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const offStation = stations?.find(s => s.station_id === off.station_id)?.station_name || 'Unassigned';
      const matchStation = stationFilter === 'All Stations' || offStation === stationFilter;
      
      return matchSearch && matchStation;
    });
  }, [officers, stations, searchTerm, stationFilter]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-secondary tracking-tighter uppercase mb-1">Officer Directory</h2>
          <div className="flex items-center gap-2">
            <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              {filteredOfficers?.length || 0} Records Found
            </span>
            <p className="text-sm font-medium text-on-surface-variant italic">Verified under State Registry</p>
          </div>
        </div>
        <button className="bg-secondary text-on-secondary px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:brightness-110 transition-all active:scale-95">
          <FileDown className="w-5 h-5" />
          Export Registry
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 bg-surface-container-lowest p-6 rounded-xl shadow-[0px_12px_32px_rgba(11,42,74,0.04)] border border-outline-variant/5">
          <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3">Search Personnel</label>
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
            <input 
              className="w-full bg-surface-container-low border-none rounded-lg pl-10 py-3 text-sm focus:ring-1 focus:ring-secondary transition-all outline-none" 
              placeholder="Search by Name, ID or Badge Number..." 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0px_12px_32px_rgba(11,42,74,0.04)] border border-outline-variant/5">
          <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3">Station / Unit</label>
          <select 
            className="w-full bg-surface-container-low border-none rounded-lg py-3 text-sm focus:ring-1 focus:ring-secondary outline-none cursor-pointer"
            value={stationFilter}
            onChange={(e) => setStationFilter(e.target.value)}
          >
            <option>All Stations</option>
            {stations?.map(s => (
              <option key={s.station_id} value={s.station_name}>{s.station_name}</option>
            ))}
          </select>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0px_12px_32px_rgba(11,42,74,0.04)] border border-outline-variant/5">
          <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3">Duty Status</label>
          <select 
            className="w-full bg-surface-container-low border-none rounded-lg py-3 text-sm focus:ring-1 focus:ring-secondary outline-none cursor-pointer"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Statuses</option>
            <option>Active</option>
            <option>On Leave</option>
            <option>Off-duty</option>
          </select>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl shadow-[0px_12px_32px_rgba(11,42,74,0.04)] overflow-hidden border border-outline-variant/10">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-secondary-fixed text-on-secondary-fixed">
                <th className="px-8 py-4 text-xs font-extrabold uppercase tracking-widest">Officer ID</th>
                <th className="px-8 py-4 text-xs font-extrabold uppercase tracking-widest">Name & Rank</th>
                <th className="px-8 py-4 text-xs font-extrabold uppercase tracking-widest">Police Station</th>
                <th className="px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-center">Duty Status</th>
                <th className="px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {filteredOfficers?.map((officer, idx) => (
                <tr key={officer.officer_id} className={`hover:bg-surface-container-low/50 transition-colors ${idx % 2 !== 0 ? 'bg-surface-container-low/30' : ''}`}>
                  <td className="px-8 py-5">
                    <span className="font-mono text-xs font-bold text-on-surface-variant uppercase">{officer.badge_number}</span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                        <img 
                          className="w-full h-full object-cover" 
                          src={`https://i.pravatar.cc/150?u=${officer.officer_id}`}
                          onError={(e) => { e.target.src = "https://i.pravatar.cc/150?u=fallback" }}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface leading-tight">{officer.officer_name}</p>
                        <p className="text-[11px] text-primary font-bold uppercase tracking-widest mt-0.5">{officer.rank}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-sm font-medium text-on-surface-variant">
                      {stations?.find(s => s.station_id === officer.station_id)?.station_name || 'Unassigned'}
                    </p>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container text-[10px] font-black uppercase tracking-wider">
                      Active
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-secondary hover:bg-secondary-container rounded-lg transition-colors">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-secondary hover:bg-secondary-container rounded-lg transition-colors">
                        <History className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-8 py-4 bg-surface-container-low/30 flex items-center justify-between">
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Showing Results</p>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-secondary hover:text-white transition-all">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-3 py-1 rounded-lg bg-secondary text-white text-xs font-bold">1</button>
            <button className="p-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-secondary hover:text-white transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsTile label="On-Duty Personnel" value="942" border="border-primary" />
        <StatsTile label="Specialized Units" value="12" border="border-secondary" />
        <StatsTile label="Certification Rate" value="100%" border="border-tertiary" />
      </div>
    </div>
  );
};

const StatsTile = ({ label, value, border }) => (
  <div className={`bg-surface-container-lowest p-6 rounded-xl shadow-[0px_12px_32px_rgba(11,42,74,0.04)] border-l-4 ${border}`}>
    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">{label}</p>
    <h3 className="text-3xl font-black text-secondary tracking-tight">{value}</h3>
  </div>
);

export default Officers;
