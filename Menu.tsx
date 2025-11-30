import React from 'react';
import { ArrowLeft, Home, Settings, User, LogOut, LayoutDashboard, Users, BarChart2, Shield } from 'lucide-react';

interface MenuProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Menu: React.FC<MenuProps> = ({ onBack, onNavigate, isAuthenticated, onLogout }) => {
  
  const handleItemClick = (page: string) => {
    if (page === 'logout') {
      onLogout();
    } else {
      onNavigate(page);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-brand-500 selection:text-white">
      {/* Header Bar */}
      <div className="p-6 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <button 
          onClick={() => onNavigate('admin')}
          className="text-slate-400 hover:text-white transition-colors font-medium flex items-center"
        >
          {isAuthenticated ? <Shield className="w-4 h-4 mr-2 text-emerald-500" /> : null}
          ADMIN
        </button>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center -mt-20">
        <h1 className="text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500 mb-8">
          MENU
        </h1>
        
        <div className="w-full max-w-md space-y-4 px-4">
          {[
            { id: 'dashboard', label: 'Admin Dashboard', icon: LayoutDashboard },
            { id: 'users', label: 'User Management', icon: Users },
            { id: 'analytics', label: 'Analytics', icon: BarChart2 },
            { id: 'profile', label: 'Profile', icon: User },
            { id: 'settings', label: 'Settings', icon: Settings },
            { id: isAuthenticated ? 'logout' : 'login', label: isAuthenticated ? 'Logout' : 'Login', icon: LogOut },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
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