
import React from 'react';
import { UserProfile } from '../types';

interface HeaderProps {
  user: UserProfile;
  onNavigate: (view: any) => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onNavigate }) => {
  return (
    <header className="relative z-50 flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="flex items-center space-x-4">
        <div 
          onClick={() => onNavigate('HOME')}
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/20 group-hover:bg-emerald-700 transition-all">
            <span className="text-white font-bold text-xl uppercase italic">Y</span>
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-900 uppercase italic">
            Jeopardy <span className="text-emerald-600">Yarmouk</span>
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-8 text-[11px] font-black tracking-widest uppercase text-slate-500">
        <button onClick={() => onNavigate('HOME')} className="hover:text-emerald-600 transition-colors">Dashboard</button>
        <button className="hover:text-emerald-600 transition-colors">Courses</button>
        <button className="hover:text-emerald-600 transition-colors">Sessions</button>
        <button onClick={() => onNavigate('IMAGE_EDITOR')} className="text-emerald-700 hover:text-emerald-800 transition-colors flex items-center space-x-2">
          <i className="fa-solid fa-wand-sparkles"></i>
          <span>Avatar Lab</span>
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden lg:flex flex-col items-end">
          <span className="text-sm font-black text-slate-900 leading-none">{user.name}</span>
          <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Lvl {user.level} Resident</span>
        </div>
        <div className="relative group">
          <div className="w-12 h-12 rounded-2xl border-2 border-slate-100 p-0.5 overflow-hidden shadow-sm group-hover:border-emerald-200 transition-all cursor-pointer bg-slate-50">
            <img 
              src={user.avatar} 
              alt="Profile" 
              className="w-full h-full object-cover rounded-[14px]"
            />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
        </div>
      </div>
    </header>
  );
};
