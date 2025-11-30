import React from 'react';
import { ArrowLeft, BarChart2, PieChart, LineChart } from 'lucide-react';

interface AnalyticsProps {
  onBack: () => void;
}

const Analytics: React.FC<AnalyticsProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <div className="p-6 border-b border-slate-800 flex items-center bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
        <button 
          onClick={onBack}
          className="mr-4 p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-bold">Analytics</h1>
      </div>

      <div className="p-6 max-w-6xl mx-auto w-full">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 mb-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Traffic Overview</h2>
          <p className="text-slate-400 mb-8">Real-time data processing from your application</p>
          
          <div className="h-64 flex items-end justify-center gap-2 sm:gap-4 px-4 pb-4">
            {[35, 45, 30, 60, 75, 50, 65, 80, 55, 70, 45, 60].map((h, i) => (
              <div key={i} className="w-full max-w-[40px] group relative">
                <div 
                  className="bg-brand-500/20 group-hover:bg-brand-500 transition-all duration-300 rounded-t-sm" 
                  style={{ height: `${h}%` }}
                ></div>
                <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-xs py-1 px-2 rounded border border-slate-700 pointer-events-none transition-opacity">
                  {h * 10}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-slate-500 pt-4 border-t border-slate-800">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>23:59</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center mb-6">
              <PieChart className="w-5 h-5 text-purple-500 mr-3" />
              <h3 className="text-lg font-bold text-white">Device Distribution</h3>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Desktop', value: '55%', color: 'bg-blue-500' },
                { label: 'Mobile', value: '35%', color: 'bg-brand-500' },
                { label: 'Tablet', value: '10%', color: 'bg-purple-500' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">{item.label}</span>
                    <span className="text-slate-400">{item.value}</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color}`} style={{ width: item.value }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center mb-6">
              <LineChart className="w-5 h-5 text-emerald-500 mr-3" />
              <h3 className="text-lg font-bold text-white">Top Sources</h3>
            </div>
            <ul className="space-y-3">
              {[
                { name: 'Google Search', visits: '12,402' },
                { name: 'Direct', visits: '8,394' },
                { name: 'Twitter / X', visits: '4,102' },
                { name: 'LinkedIn', visits: '2,045' },
                { name: 'Newsletter', visits: '1,563' },
              ].map((source, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
                  <span className="text-sm font-medium text-slate-300">{source.name}</span>
                  <span className="text-sm text-slate-500">{source.visits}</span>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;