import React from 'react';
import { ArrowLeft, Bell, Lock, Eye, Globe, Moon } from 'lucide-react';

interface SettingsProps {
  onBack: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <div className="p-6 border-b border-slate-800 flex items-center bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
        <button 
          onClick={onBack}
          className="mr-4 p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-bold">Settings</h1>
      </div>

      <div className="p-6 max-w-4xl mx-auto w-full">
        <div className="grid gap-8">
          {/* Section 1 */}
          <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-800 bg-slate-800/30">
              <h2 className="text-lg font-medium text-white">General Preferences</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 bg-slate-800 rounded-lg text-slate-400 mr-4">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-slate-200">Language</h3>
                    <p className="text-sm text-slate-500">Select your preferred interface language</p>
                  </div>
                </div>
                <select className="bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block p-2.5">
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 bg-slate-800 rounded-lg text-slate-400 mr-4">
                    <Moon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-slate-200">Appearance</h3>
                    <p className="text-sm text-slate-500">Toggle dark/light mode theme</p>
                  </div>
                </div>
                <div className="relative inline-block w-11 h-6 transition duration-200 ease-in-out">
                  <input type="checkbox" id="theme-toggle" className="peer sr-only" defaultChecked />
                  <label htmlFor="theme-toggle" className="block h-6 overflow-hidden rounded-full bg-slate-700 cursor-pointer peer-checked:bg-brand-600">
                    <span className="absolute top-0.5 left-0.5 inline-block w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-800 bg-slate-800/30">
              <h2 className="text-lg font-medium text-white">Notifications</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 bg-slate-800 rounded-lg text-slate-400 mr-4">
                    <Bell className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-slate-200">Push Notifications</h3>
                    <p className="text-sm text-slate-500">Receive alerts on your device</p>
                  </div>
                </div>
                <div className="relative inline-block w-11 h-6 transition duration-200 ease-in-out">
                  <input type="checkbox" id="push-toggle" className="peer sr-only" />
                  <label htmlFor="push-toggle" className="block h-6 overflow-hidden rounded-full bg-slate-700 cursor-pointer peer-checked:bg-brand-600">
                    <span className="absolute top-0.5 left-0.5 inline-block w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-800 bg-slate-800/30">
              <h2 className="text-lg font-medium text-white">Privacy & Security</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 bg-slate-800 rounded-lg text-slate-400 mr-4">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-slate-200">Profile Visibility</h3>
                    <p className="text-sm text-slate-500">Manage who can see your profile info</p>
                  </div>
                </div>
                <select className="bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block p-2.5">
                  <option>Public</option>
                  <option>Friends Only</option>
                  <option>Private</option>
                </select>
              </div>
              
               <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 bg-slate-800 rounded-lg text-slate-400 mr-4">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-slate-200">Two-Factor Auth</h3>
                    <p className="text-sm text-slate-500">Add an extra layer of security</p>
                  </div>
                </div>
                <button className="text-brand-400 hover:text-brand-300 text-sm font-medium">
                  Configure
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;