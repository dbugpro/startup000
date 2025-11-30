import React from 'react';
import { ArrowLeft, ShieldCheck, Lock } from 'lucide-react';
import Login from './Login';

interface AdminProps {
  onBack: () => void;
  isAuthenticated: boolean;
  onLogin: () => void;
}

const Admin: React.FC<AdminProps> = ({ onBack, isAuthenticated, onLogin }) => {
  if (!isAuthenticated) {
    return <Login onLogin={onLogin} onBack={onBack} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <div className="p-6">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center -mt-20 text-center px-4">
        <div className="p-4 bg-emerald-500/10 rounded-full mb-6">
          <ShieldCheck className="w-16 h-16 text-emerald-500" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Admin Area</h1>
        <p className="text-slate-400 max-w-md mx-auto mb-8">
          You are securely logged in. Access administrative features from the menu or dashboard.
        </p>
        
        <div className="inline-flex items-center px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-300">
          <Lock className="w-4 h-4 mr-2 text-emerald-500" />
          Secure Session Active
        </div>
      </div>
    </div>
  );
};

export default Admin;