import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex">
      <Sidebar />
      <main className="ml-72 flex-grow flex flex-col min-h-screen">
        <Header />
        <div className="p-8 pb-16 flex-grow bg-surface">
          <Outlet />
        </div>
        <footer className="bg-surface dark:bg-stone-950 flex justify-center items-center w-full mt-auto py-6 border-t border-outline-variant/10">
          <div className="flex flex-col items-center gap-2">
            <p className="font-body text-xs uppercase tracking-widest text-on-surface-variant">
              © 2024 Kerala Police Administration
            </p>
            <div className="flex gap-4">
              <span className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant/70">
                Keralam — God's Own Police
              </span>
              <span className="text-outline-variant opacity-30">|</span>
              <span className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant/70">
                Sovereign Protocol v1.0
              </span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Layout;
