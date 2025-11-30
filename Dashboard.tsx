import React from 'react';
import { ArrowLeft, Users, DollarSign, Activity, TrendingUp } from 'lucide-react';

interface DashboardProps {
  onBack: () => void;
}

const StatCard = ({ title, value, change, icon: Icon, color }: any) => (
  <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
        <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
      </div>
      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
        change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
      }`}>
        {change}
      </span>
    </div>
    <h3 className="text-slate-400 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold text-white mt-1">{value}</p>
  </div>
);

const Dashboard: React.FC<DashboardProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <div className="p-6 border-b border-slate-800 flex items-center bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
        <button 
          onClick={onBack}
          className="mr-4 p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </div>

      <div className="p-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Users" 
            value="12,345" 
            change="+12%" 
            icon={Users} 
            color="bg-blue-500" 
          />
          <StatCard 
            title="Revenue" 
            value="$45,231" 
            change="+8%" 
            icon={DollarSign} 
            color="bg-emerald-500" 
          />
          <StatCard 
            title="Active Sessions" 
            value="1,203" 
            change="+24%" 
            icon={Activity} 
            color="bg-brand-500" 
          />
          <StatCard 
            title="Conversion Rate" 
            value="3.2%" 
            change="-2%" 
            icon={TrendingUp} 
            color="bg-purple-500" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-6">Recent Activity</h3>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-brand-500 mr-4"></div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-200">New user registration <span className="text-slate-500">#USER-{1000+i}</span></p>
                    <p className="text-xs text-slate-500">{i * 15} minutes ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-6">System Status</h3>
            <div className="space-y-4">
              {['API Uptime', 'Database', 'Storage', 'CDN'].map((item) => (
                <div key={item} className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">{item}</span>
                  <div className="flex items-center">
                    <div className="h-1.5 w-24 bg-slate-800 rounded-full overflow-hidden mr-3">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                    <span className="text-emerald-500 text-xs font-medium">99.9%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;