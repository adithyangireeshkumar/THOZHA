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
import { demoStations } from '../lib/demoData';

const AddFIR = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      navigate('/firs');
    }, 1500);
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
        className="bg-surface-container-lowest shadow-[0px_12px_32px_rgba(11,42,74,0.04)] rounded-xl relative overflow-hidden p-10 kasavu-pattern"
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
              <span className="font-mono font-bold text-secondary tracking-widest uppercase">FIR-{new Date().getFullYear()}-{Math.floor(Math.random() * 10000).toString().padStart(5, '0')}</span>
              <span className="text-[10px] font-bold text-on-surface-variant bg-surface-container-highest px-2 py-1 rounded">AUTO-GENERATED</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Date of Occurrence *</label>
            <div className="relative">
              <input required className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/20 py-3 px-4 focus:border-secondary focus:ring-0 transition-all text-on-surface font-medium" type="date"/>
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Time of Occurrence *</label>
            <div className="relative">
              <input required className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/20 py-3 px-4 focus:border-secondary focus:ring-0 transition-all text-on-surface font-medium" type="time"/>
              <ClockIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Crime Type *</label>
            <select required className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/20 py-3 px-4 focus:border-secondary focus:ring-0 transition-all text-on-surface font-medium appearance-none">
              <option value="">Select Crime Category</option>
              <option value="theft">Theft</option>
              <option value="robbery">Robbery</option>
              <option value="assault">Assault</option>
              <option value="burglary">Burglary</option>
              <option value="fraud">Fraud</option>
              <option value="cybercrime">Cyber Crime</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">IPC Section *</label>
            <input required className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/20 py-3 px-4 focus:border-secondary focus:ring-0 transition-all text-on-surface font-medium placeholder:text-on-surface-variant/30" placeholder="e.g. Section 379" type="text"/>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Police Station Jurisdiction</label>
            <div className="relative">
              <select className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/20 py-3 px-4 focus:border-secondary focus:ring-0 transition-all text-on-surface font-medium appearance-none">
                {demoStations.map(station => (
                  <option key={station.station_id} value={station.station_id}>{station.station_name}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Location of Incident *</label>
            <div className="relative">
              <input required className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/20 py-3 px-4 focus:border-secondary focus:ring-0 transition-all text-on-surface font-medium placeholder:text-on-surface-variant/30" placeholder="Enter landmark or street" type="text"/>
              <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Incident Narrative & Description *</label>
            <textarea required className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/20 py-4 px-4 focus:border-secondary focus:ring-0 transition-all text-on-surface font-medium placeholder:text-on-surface-variant/30 resize-none" placeholder="Provide a detailed account of the reported incident..." rows="6"></textarea>
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
