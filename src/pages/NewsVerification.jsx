import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  XSquare, 
  Search, 
  AlertTriangle, 
  Newspaper, 
  Calendar, 
  Filter, 
  ChevronLeft, 
  ChevronRight,
  ShieldAlert,
  Verified
} from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';

const NewsVerification = () => {
  const { news, loading } = useDatabase();

  if (loading) return <div className="flex h-64 items-center justify-center">Loading News Feed...</div>;
  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-3xl font-extrabold text-secondary tracking-tight">News Verification</h2>
        <p className="text-on-surface-variant mt-1">Review and verify public news articles for accuracy and public order.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard title="Total Pending" value="24" color="text-secondary" />
        <StatsCard title="High Risk" value="08" color="text-error" bgColor="bg-error-container/20" />
        <StatsCard title="Verified Today" value="142" color="text-tertiary" bgColor="bg-tertiary-container/10" />
        <StatsCard title="Queue Priority" value="Critical" color="text-white" bgColor="bg-inverse-surface" />
      </div>

      <div className="flex items-center justify-between bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/10">
        <div className="flex gap-4">
          <select className="border-none bg-surface-container-low rounded-lg text-sm px-4 py-2 focus:ring-1 focus:ring-secondary outline-none">
            <option>All Sources</option>
            <option>Social Media</option>
            <option>Local News</option>
            <option>WhatsApp Reports</option>
          </select>
          <select className="border-none bg-surface-container-low rounded-lg text-sm px-4 py-2 focus:ring-1 focus:ring-secondary outline-none">
            <option>Sort by: Newest First</option>
            <option>Sort by: Risk Level</option>
          </select>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors text-xs font-bold uppercase tracking-widest">
          <Filter className="w-4 h-4" />
          Advanced Filters
        </button>
      </div>

      <div className="space-y-4">
        {news.slice(0, 5).map((article, idx) => (
          <motion.div 
            key={article.article_id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-sm overflow-hidden flex transition-all hover:border-primary-container group"
          >
            <div className="w-48 h-auto overflow-hidden bg-surface-container-low relative shrink-0">
              <img 
                alt={article.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src={`https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80&sig=${idx}`} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <span className={`absolute bottom-2 left-2 text-white text-[10px] font-bold px-2 py-0.5 rounded ${idx === 0 ? 'bg-error' : 'bg-secondary'}`}>
                {idx === 0 ? 'HIGH RISK' : 'MEDIUM RISK'}
              </span>
            </div>
            
            <div className="flex-1 p-6 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-secondary">{article.title}</h4>
                  <div className="flex items-center gap-3 text-on-surface-variant text-xs mt-1">
                    <span className="flex items-center gap-1 font-medium"><Newspaper className="w-3 h-3" /> {article.source}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.publication_date}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="bg-tertiary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:brightness-110 transition-all flex items-center gap-2">
                    <Verified className="w-4 h-4" />
                    Verify
                  </button>
                  <button className="border border-outline-variant/20 text-on-surface-variant px-5 py-2 rounded-lg text-sm font-semibold hover:bg-surface-container-low transition-all flex items-center gap-2">
                    <XSquare className="w-4 h-4" />
                    Discard
                  </button>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm line-clamp-2 mt-2 leading-relaxed">
                Reported activity near the case site. Potential misinformation regarding {article.title.toLowerCase()}. Immediate verification required to prevent public panic.
              </p>
              <div className="mt-auto pt-4 flex gap-3">
                <span className="px-3 py-1 bg-surface-container-low text-on-surface-variant rounded-full text-[10px] font-bold uppercase tracking-wider">Public Order</span>
                <span className="px-3 py-1 bg-surface-container-low text-on-surface-variant rounded-full text-[10px] font-bold uppercase tracking-wider">Social Media</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between border-t border-outline-variant/10 pt-6">
        <p className="text-sm text-on-surface-variant">Showing <span className="font-bold text-on-surface">1-{Math.min(5, news.length)}</span> of <span className="font-bold text-on-surface">{news.length}</span> articles</p>
        <div className="flex gap-2">
          <button className="p-2 border border-outline-variant/20 rounded-lg hover:bg-surface-container-low transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 bg-secondary text-white rounded-lg text-sm font-bold">1</button>
          <button className="px-4 py-2 hover:bg-surface-container-low rounded-lg text-sm font-bold transition-colors">2</button>
          <button className="p-2 border border-outline-variant/20 rounded-lg hover:bg-surface-container-low transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ title, value, color, bgColor = 'bg-surface-container-lowest' }) => (
  <div className={`${bgColor} p-6 rounded-xl border border-outline-variant/10 shadow-sm`}>
    <p className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider">{title}</p>
    <h3 className={`text-3xl font-bold mt-2 ${color}`}>{value}</h3>
  </div>
);

export default NewsVerification;
