import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock as ClockIcon, 
  MapPin, 
  FileText, 
  ShieldCheck, 
  X, 
  ChevronDown,
  Info,
  Shield,
  Eye,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';
import { supabase } from '../lib/supabase';

const AddFIR = () => {
  const navigate = useNavigate();
  const { stations, officers, refreshData } = useDatabase();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fir_number: `FIR-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`,
    fir_date: new Date().toISOString().split('T')[0],
    fir_time: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' }),
    crime_type: '',
    ipc_section: '',
    station_id: '',
    location: '',
    description: '',
    complainant: 'Admin Registry'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // 1. Insert FIR
      const { data: firData, error: firError } = await supabase
        .from('fir')
        .insert([formData])
        .select();

      if (firError) throw firError;

      // 2. Automatically create a case for this FIR
      const { error: caseError } = await supabase
        .from('cases')
        .insert([{
          fir_id: firData[0].fir_id,
          officer_id: officers[0]?.officer_id, // Default to first officer for now
          case_status: 'complaint_registered',
          start_date: formData.fir_date
        }]);

      if (caseError) throw caseError;

      alert('FIR Registered successfully in Sovereignty Ledger');
      await refreshData();
      navigate('/firs');
    } catch (error) {
      console.error('Submission error:', error);
      alert(`System Error: ${error.message}. Ensure you have write permissions.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-end justify-between border-l-4 border-primary pl-6 py-1">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-on-surface">Add New FIR</h2>
          <p className="text-on-surface-variant mt-1 font-medium">First Information Report Ledger</p>
        </div>
        <div className="text-right hidden sm:block">
          <span className="text-xs font-bold uppercase tracking-widest text-primary/60 block">System Status</span>
          <span className="text-sm font-semibold text-tertiary flex items-center justify-end">
            <span className="w-2 h-2 rounded-full bg-tertiary mr-2"></span>
            Secure Connection Active
          </span>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-surface-container-lowest shadow-[0px_12px_32px_rgba(11,42,74,0.04)] rounded-xl relative overflow-hidden p-10"
      >
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-primary font-semibold">
            <FileText className="w-5 h-5" />
            <span>Official Entry Protocol</span>
          </div>
          <span className="text-xs font-medium text-error flex items-center">
            <AlertTriangle className="w-3 h-3 mr-1" />
            All fields marked with * are mandatory for submission
          </span>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="md:col-span-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">FIR Number</label>
            <div className="bg-surface-container-high px-4 py-3 rounded-lg border-b-2 border-outline-variant/20 flex justify-between items-center">
              <span className="font-mono font-bold text-secondary tracking-widest uppercase">{formData.fir_number}</span>
              <span className="text-[10px] font-bold text-on-surface-variant bg-surface-container-highest px-2 py-1 rounded">AUTO-GENERATED</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Date of Occurrence *</label>
            <div className="relative">
              <input 
                required 
                className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/20 py-3 px-4 focus:border-secondary focus:ring-0 transition-all text-on-surface font-medium" 
                type="date"
                value={formData.fir_date}
                onChange={(e) => setFormData({...formData, fir_date: e.target.value})}
              />
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Time of Occurrence *</label>
            <div className="relative">
              <input 
                required 
                className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/20 py-3 px-4 focus:border-secondary focus:ring-0 transition-all text-on-surface font-medium" 
                type="time"
                value={formData.fir_time}
                onChange={(e) => setFormData({...formData, fir_time: e.target.value})}
              />
              <ClockIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Crime Type *</label>
            <select 
              required 
              className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/20 py-3 px-4 focus:border-secondary focus:ring-0 transition-all text-on-surface font-medium appearance-none"
              value={formData.crime_type}
              onChange={(e) => setFormData({...formData, crime_type: e.target.value})}
            >
              <option value="">Select Crime Category</option>
              {['theft', 'robbery', 'assault', 'burglary', 'fraud', 'cybercrime', 'drug_offense', 'murder', 'kidnapping', 'domestic_violence', 'other'].map(t => (
                <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1).replace('_', ' ')}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">IPC Section *</label>
            <input 
              required 
              className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/20 py-3 px-4 focus:border-secondary focus:ring-0 transition-all text-on-surface font-medium placeholder:text-on-surface-variant/30" 
              placeholder="e.g. Section 379" 
              type="text"
              value={formData.ipc_section}
              onChange={(e) => setFormData({...formData, ipc_section: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Police Station Jurisdiction</label>
            <div className="relative">
              <select 
                className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/20 py-3 px-4 focus:border-secondary focus:ring-0 transition-all text-on-surface font-medium appearance-none"
                value={formData.station_id}
                onChange={(e) => setFormData({...formData, station_id: e.target.value})}
                required
              >
                <option value="">Select Station</option>
                {stations?.map(station => (
                  <option key={station.station_id} value={station.station_id}>{station.station_name}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Location of Incident *</label>
            <div className="relative">
              <input 
                required 
                className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/20 py-3 px-4 focus:border-secondary focus:ring-0 transition-all text-on-surface font-medium placeholder:text-on-surface-variant/30" 
                placeholder="Enter landmark or street" 
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
              <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Incident Narrative & Description *</label>
            <textarea 
              required 
              className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/20 py-4 px-4 focus:border-secondary focus:ring-0 transition-all text-on-surface font-medium placeholder:text-on-surface-variant/30 resize-none" 
              placeholder="Provide a detailed account of the reported incident..." 
              rows="6"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            ></textarea>
          </div>

          <div className="md:col-span-2 flex items-center justify-between pt-8 border-t border-outline-variant/10">
            <button 
              type="button"
              onClick={() => navigate('/firs')}
              className="flex items-center space-x-2 text-on-surface-variant hover:text-error transition-colors font-semibold px-6 py-3 rounded-xl hover:bg-error-container/20"
            >
              <X className="w-5 h-5" />
              <span>Discard Entry</span>
            </button>
            <div className="flex items-center space-x-4">
              <button type="button" className="bg-primary-container text-on-primary-container font-bold px-8 py-3 rounded-xl hover:brightness-95 transition-all shadow-sm active:scale-95">
                Save Draft
              </button>
              <button 
                type="submit" 
                disabled={loading}
                className="bg-secondary text-on-secondary font-bold px-10 py-3 rounded-xl flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all active:scale-[0.98] disabled:opacity-70"
              >
                <span>{loading ? 'Processing...' : 'Finalize & Submit FIR'}</span>
                <ShieldCheck className="w-5 h-5" />
              </button>
            </div>
          </div>
        </form>

        <div className="absolute bottom-6 right-6 pointer-events-none opacity-[0.03]">
          <Shield className="w-32 h-32" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-surface-container-lowest rounded-xl shadow-sm border-l-4 border-secondary/30">
          <div className="flex items-center space-x-3 mb-2 text-secondary">
            <Info className="w-4 h-4" />
            <span className="font-bold text-sm tracking-tight">Legal Validity</span>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Ensure all IPC sections are verified against current penal code guidelines before final submission.
          </p>
        </div>
        <div className="p-6 bg-surface-container-lowest rounded-xl shadow-sm border-l-4 border-primary/30">
          <div className="flex items-center space-x-3 mb-2 text-primary">
            <ShieldCheck className="w-4 h-4" />
            <span className="font-bold text-sm tracking-tight">Data Integrity</span>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            This entry will be digitally signed and timestamped under your officer credentials.
          </p>
        </div>
        <div className="p-6 bg-surface-container-lowest rounded-xl shadow-sm border-l-4 border-tertiary/30">
          <div className="flex items-center space-x-3 mb-2 text-tertiary">
            <Eye className="w-4 h-4" />
            <span className="font-bold text-sm tracking-tight">Public Transparency</span>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Non-sensitive details will be automatically mirrored to the citizen portal for public lookup.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddFIR;
