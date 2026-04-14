import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  PieChart as PieChartIcon, 
  TrendingUp, 
  Download, 
  Calendar, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Verified,
  Monitor,
  LayoutDashboard,
  ArrowUpRight,
  TrendingDown
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const data = [
  { name: 'Jan', current: 4000, previous: 2400 },
  { name: 'Feb', current: 3000, previous: 1398 },
  { name: 'Mar', current: 2000, previous: 9800 },
  { name: 'Apr', current: 2780, previous: 3908 },
  { name: 'May', current: 1890, previous: 4800 },
  { name: 'Jun', current: 2390, previous: 3800 },
];

const pieData = [
  { name: 'Resolved', value: 73, color: '#1B5E20' },
  { name: 'Ongoing', value: 15, color: '#C62828' },
  { name: 'Cold Case', value: 12, color: '#C3B091' },
];

const Reports = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-secondary tracking-tight">Departmental Analytics</h2>
          <p className="text-on-surface-variant font-medium">Real-time performance metrics and crime statistics for the Kerala Police Department.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-outline-variant/20 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold text-on-surface hover:bg-surface-container-low shadow-sm transition-all">
            <Calendar className="w-4 h-4" />
            Last 30 Days
          </button>
          <button className="bg-secondary text-on-secondary px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold shadow-md hover:brightness-110 transition-all">
            <Download className="w-4 h-4" />
            Export PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard icon={<FileText className="w-5 h-5" />} label="Total Cases" value="12,482" trend="+4.2%" color="border-primary" />
        <StatsCard icon={<CheckCircle className="w-5 h-5" />} label="Resolved" value="9,105" trend="73% Rate" color="border-tertiary" />
        <StatsCard icon={<AlertCircle className="w-5 h-5" />} label="Pending" value="3,377" trend="128 Urgent" color="border-error" />
        <StatsCard icon={<Verified className="w-5 h-5" />} label="News Verified" value="856" trend="98% Score" color="border-primary-container" />
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-secondary flex items-center gap-2">
              <Monitor className="w-5 h-5" />
              Monthly FIR Trends
            </h3>
            <div className="flex gap-4 text-xs font-bold uppercase tracking-tighter">
              <span className="flex items-center gap-1 text-secondary"><span className="w-3 h-3 bg-secondary rounded-full"></span> 2024</span>
              <span className="flex items-center gap-1 text-on-surface-variant/40"><span className="w-3 h-3 bg-outline-variant/40 rounded-full"></span> 2023</span>
            </div>
          </div>
          <div className="h-64 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E2E2" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700 }} />
                <YAxis hide />
                <Tooltip cursor={{ fill: '#f1f1f1' }} />
                <Bar dataKey="previous" stackId="a" fill="#E2E2E2" radius={[4, 4, 0, 0]} />
                <Bar dataKey="current" stackId="a" fill="#466083" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col">
          <h3 className="font-bold text-secondary mb-6 flex items-center gap-2">
            <PieChartIcon className="w-5 h-5" />
            Case Status
          </h3>
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full space-y-2 mt-4">
              {pieData.map(item => (
                <div key={item.name} className="flex justify-between items-center text-xs font-bold">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span> 
                    {item.name}
                  </span>
                  <span className="text-on-surface-variant">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-5 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
          <h3 className="font-bold text-secondary mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Crime Categorization
          </h3>
          <div className="space-y-6">
            {[
              { label: 'Cyber Fraud', value: 2410, total: 3000 },
              { label: 'Theft & Larceny', value: 1825, total: 3000 },
              { label: 'Physical Assault', value: 942, total: 3000 },
              { label: 'Narcotics', value: 615, total: 3000 },
              { label: 'Others', value: 312, total: 3000 }
            ].map(crime => (
              <div key={crime.label} className="space-y-1">
                <div className="flex justify-between text-xs font-bold text-on-surface-variant">
                  <span>{crime.label}</span>
                  <span>{crime.value}</span>
                </div>
                <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(crime.value / crime.total) * 100}%` }}
                    className="bg-secondary h-full rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-secondary flex items-center gap-2">
              <LayoutDashboard className="w-5 h-5" />
              Station Performance
            </h3>
            <button className="text-xs font-bold text-secondary hover:underline">View All Stations</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 border-b border-outline-variant/10">
                  <th className="pb-3 px-2">Station Name</th>
                  <th className="pb-3 px-2">Assigned</th>
                  <th className="pb-3 px-2">Closed</th>
                  <th className="pb-3 px-2">Efficiency</th>
                  <th className="pb-3 px-2 text-right">Trend</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium text-on-surface">
                {[
                  { name: 'Trivandrum Central', assigned: '1,204', closed: '1,150', eff: '95.5%', trend: 'up' },
                  { name: 'Kochi East', assigned: '958', closed: '742', eff: '77.4%', trend: 'flat' },
                  { name: 'Kozhikode North', assigned: '822', closed: '510', eff: '62.0%', trend: 'down' },
                  { name: 'Thrissur West', assigned: '645', closed: '590', eff: '91.4%', trend: 'up' }
                ].map((station, i) => (
                  <tr key={i} className="border-b border-outline-variant/5 hover:bg-surface-container-low/20 transition-colors">
                    <td className="py-4 px-2">{station.name}</td>
                    <td className="py-4 px-2">{station.assigned}</td>
                    <td className="py-4 px-2">{station.closed}</td>
                    <td className="py-4 px-2">
                      <span className={`px-2 py-1 text-[10px] font-bold rounded-full ${
                        parseFloat(station.eff) > 90 ? 'bg-tertiary-container/20 text-tertiary' : 
                        parseFloat(station.eff) > 70 ? 'bg-primary-container/20 text-primary' : 
                        'bg-error-container/20 text-error'
                      }`}>
                        {station.eff}
                      </span>
                    </td>
                    <td className="py-4 px-2 text-right">
                      {station.trend === 'up' ? <ArrowUpRight className="w-4 h-4 text-tertiary ml-auto" /> : 
                       station.trend === 'down' ? <TrendingDown className="w-4 h-4 text-error ml-auto" /> : 
                       <TrendingUp className="w-4 h-4 text-on-surface-variant/40 ml-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ icon, label, value, trend, color }) => (
  <div className={`bg-surface-container-lowest p-6 rounded-xl border-l-4 ${color} shadow-sm hover:shadow-md transition-shadow`}>
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-secondary/10 text-secondary rounded-lg">
        {icon}
      </div>
      <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">{label}</span>
    </div>
    <div className="text-3xl font-black text-on-surface">{value}</div>
    <div className={`mt-2 text-xs font-bold flex items-center gap-1 ${trend.includes('+') || trend.includes('Rate') || trend.includes('Score') ? 'text-tertiary' : 'text-error'}`}>
      {trend}
    </div>
  </div>
);

export default Reports;
