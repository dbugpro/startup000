import React from 'react';
import { ArrowLeft, Mail, MapPin, Link as LinkIcon, Calendar } from 'lucide-react';

interface ProfileProps {
  onBack: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <div className="relative">
        {/* Cover Image */}
        <div className="h-48 bg-gradient-to-r from-brand-900 to-slate-900 w-full"></div>
        
        <div className="absolute top-4 left-4 z-10">
          <button 
            onClick={onBack}
            className="p-2 bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-full text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-16 sm:-mt-24 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full ring-4 ring-slate-950 bg-slate-800 flex items-center justify-center text-4xl font-bold text-slate-500 overflow-hidden">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden md:block min-w-0 flex-1">
                <h1 className="text-2xl font-bold text-white truncate">Admin User</h1>
                <p className="text-slate-400">System Administrator</p>
              </div>
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button className="inline-flex justify-center px-4 py-2 border border-slate-700 shadow-sm text-sm font-medium rounded-lg text-white bg-slate-800 hover:bg-slate-700 focus:outline-none">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4">About</h3>
              <p className="text-slate-400 text-sm mb-6">
                Experienced system administrator with a passion for building scalable infrastructure and secure applications.
              </p>
              
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-slate-500" />
                  San Francisco, CA
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-slate-500" />
                  admin@startup000.com
                </div>
                <div className="flex items-center">
                  <LinkIcon className="w-4 h-4 mr-2 text-slate-500" />
                  startup000.com
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-slate-500" />
                  Joined March 2024
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4">Activity Log</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex space-x-3 relative">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                        <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-slate-300">Updated system configuration</p>
                        <p className="text-xs text-slate-500">Modified security settings for user group A</p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-slate-500">
                        <time dateTime="2020-09-20">{i}h ago</time>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;