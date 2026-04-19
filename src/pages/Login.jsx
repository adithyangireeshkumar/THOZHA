import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  BadgeCheck, 
  Lock, 
  UserCircle2, 
  ArrowRight,
  Shield
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { signInWithGoogle, user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-container to-secondary opacity-30"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 mb-4 flex items-center justify-center bg-white rounded-full shadow-[0px_12px_32px_rgba(11,42,74,0.06)] p-2">
            <ShieldCheck className="w-10 h-10 text-secondary" />
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-secondary uppercase">THOZHAN</h1>
          <p className="text-on-surface-variant text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Keralam — God's Own Police</p>
        </div>

        <div className="bg-surface-container-lowest rounded-xl shadow-[0px_12px_48px_rgba(11,42,74,0.04)] overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="mb-8 text-center md:text-left">
              <h2 className="text-xl font-bold text-on-surface tracking-tight">Secure Administration Portal</h2>
              <p className="text-on-surface-variant text-xs mt-1 font-medium">Please authenticate to access the sovereign ledger.</p>
            </div>

            <div className="space-y-4">
              <button 
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white border border-outline-variant/30 rounded-xl hover:bg-surface-container-low transition-all duration-200 group"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.65l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.12c-.22-.66-.35-1.36-.35-2.12s.13-1.46.35-2.12V7.04H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.96l3.66-2.84z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.04l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                <span className="text-sm font-bold text-on-surface">Continue with Google</span>
              </button>

              <div className="relative flex items-center justify-center py-4">
                <div className="w-full h-px bg-outline-variant/20"></div>
                <span className="absolute bg-surface-container-lowest px-4 text-[10px] uppercase tracking-widest text-on-surface-variant/40 font-black">OR</span>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-on-surface-variant ml-1">Officer ID</label>
                  <div className="relative group">
                    <UserCircle2 className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40 w-5 h-5 transition-colors group-focus-within:text-secondary" />
                    <input 
                      className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-none focus:ring-1 focus:ring-secondary transition-all rounded-lg text-sm font-bold placeholder:text-on-surface-variant/30 outline-none" 
                      placeholder="UID-XXXX-XXXX" 
                      type="text"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => window.location.href = '/dashboard'}
                  className="w-full py-4 px-6 bg-secondary text-on-secondary rounded-xl font-bold text-sm tracking-widest uppercase shadow-lg shadow-secondary/20 hover:brightness-110 transition-all active:scale-[0.97] flex items-center justify-center gap-2"
                >
                  Verify Identity
                  <BadgeCheck className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low/50 px-8 py-4 flex items-center justify-center gap-2 border-t border-outline-variant/10">
            <Lock className="w-3 h-3 text-secondary" />
            <p className="text-[10px] uppercase tracking-wider font-black text-on-surface-variant/40">End-to-End Encrypted Session</p>
          </div>
        </div>

        <footer className="mt-12 text-center text-on-surface-variant/40">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Security Notice</p>
          <p className="text-xs font-medium leading-relaxed max-w-xs mx-auto">
            Authorized use only. All actions are logged and subject to monitoring under the State IT Protocol.
          </p>
          <div className="mt-8 flex justify-center items-center gap-6">
            <a href="#" className="text-[10px] uppercase tracking-widest hover:text-secondary font-bold transition-colors">Help Desk</a>
            <div className="w-1 h-1 bg-outline-variant rounded-full"></div>
            <a href="#" className="text-[10px] uppercase tracking-widest hover:text-secondary font-bold transition-colors">Privacy Policy</a>
          </div>
          <p className="mt-12 text-[10px] font-bold tracking-widest uppercase opacity-30">© 2024 Kerala Police Administration</p>
        </footer>
      </motion.div>

      <Shield className="fixed -bottom-24 -right-24 opacity-[0.03] w-[400px] h-[400px] pointer-events-none" />
    </div>
  );
};

export default Login;
