import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  FolderSearch, 
  History, 
  ShieldCheck, 
  CheckCircle, 
  BarChart3, 
  LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'FIR Management', path: '/firs', icon: <FileText className="w-5 h-5" /> },
    { name: 'Case Management', path: '/cases', icon: <FolderSearch className="w-5 h-5" /> },
    { name: 'Follow-ups', path: '/follow-ups', icon: <History className="w-5 h-5" /> },
    { name: 'Officers', path: '/officers', icon: <ShieldCheck className="w-5 h-5" /> },
    { name: 'News Verification', path: '/news', icon: <CheckCircle className="w-5 h-5" /> },
    { name: 'Reports', path: '/reports', icon: <BarChart3 className="w-5 h-5" /> },
  ];

  const navigate = useNavigate();

  return (
    <aside className="h-screen w-72 fixed left-0 top-0 overflow-y-auto bg-primary-container dark:bg-primary flex flex-col py-8 px-4 gap-y-2 shadow-xl z-50">
      <div className="px-2 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-widest text-on-surface leading-none">THOZHAN</h1>
            <p className="font-sans text-sm font-medium tracking-wide text-on-surface opacity-70">Sovereign Custodian</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-grow space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `rounded-lg px-4 py-3 flex items-center gap-3 transition-all duration-200 active:scale-[0.98] ${
                isActive 
                  ? 'bg-secondary text-white shadow-inner' 
                  : 'text-on-surface hover:bg-on-surface/10 hover:translate-x-1'
              }`
            }
          >
            {item.icon}
            <span className="font-sans text-sm font-medium tracking-wide">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t border-black/5">
        <button 
          onClick={() => navigate('/login')}
          className="w-full text-on-surface hover:bg-on-surface/10 hover:translate-x-1 rounded-lg px-4 py-3 flex items-center gap-3 transition-all duration-200 active:scale-[0.98]"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-sans text-sm font-medium tracking-wide">Logout</span>
        </button>
      </div>
    </aside>
  );
};


export default Sidebar;
