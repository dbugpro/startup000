import React from 'react';
import { ArrowLeft, Home, Settings, User, LogOut } from 'lucide-react';

interface MenuProps {
  onBack: () => void;
}

const Menu: React.FC<MenuProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-brand-500 selection:text-white">
      <div className="p-6">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center -mt-20">
        <h1 className="text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500 mb-8">
          MENU
        </h1>
        
        <div className="w-full max-w-md space-y-4 px-4">
          {[
            { label: 'Dashboard', icon: Home },
            { label: 'Profile', icon: User },
            { label: 'Settings', icon: Settings },
            { label: 'Logout', icon: LogOut },
          ].map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 hover:border-brand-500/30 transition-all duration-200 group"
            >
              <div className="p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-brand-400 group-hover:bg-brand-900/20 transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="ml-4 text-lg font-medium text-slate-300 group-hover:text-white">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;