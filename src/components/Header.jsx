import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full h-16 bg-white dark:bg-stone-900 border-b-0 shadow-[0px_12px_32px_rgba(11,42,74,0.04)] flex items-center justify-between px-6 sticky top-0 z-40">
      <div className="flex items-center gap-4 flex-grow">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-4 h-4" />
          <input 
            className="w-full pl-10 pr-4 py-2 bg-stone-50 dark:bg-stone-800 border-none rounded-full text-sm font-sans antialiased text-stone-700 dark:text-stone-300 focus:ring-2 focus:ring-secondary/20 outline-none" 
            placeholder="Search files, officers, cases..." 
            type="text"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4 ml-6">
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors active:scale-95 duration-150">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors active:scale-95 duration-150">
            <Settings className="w-5 h-5" />
          </button>
        </div>
        
        <div className="h-8 w-[1px] bg-stone-200 dark:bg-stone-700"></div>
        
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="font-sans antialiased text-sm tracking-tight font-semibold text-secondary">Welcome, Admin</p>
            <p className="text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-400">Officer Session</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden shadow-sm">
            <img 
              alt="Officer Profile Avatar" 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
