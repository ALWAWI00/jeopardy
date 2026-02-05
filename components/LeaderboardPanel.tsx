
import React from 'react';
import { LeaderboardEntry } from '../types';

interface LeaderboardPanelProps {
  entries: LeaderboardEntry[];
}

export const LeaderboardPanel: React.FC<LeaderboardPanelProps> = ({ entries }) => {
  return (
    <div className="fixed right-8 top-28 bottom-24 w-72 hidden xl:flex flex-col z-20">
      <div className="bg-white border border-slate-200 rounded-[32px] h-full flex flex-col overflow-hidden shadow-xl shadow-slate-200/50">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-black tracking-widest uppercase italic text-slate-900">
            Top <span className="text-emerald-600">Residents</span>
          </h2>
          <i className="fa-solid fa-medal text-emerald-500"></i>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {entries.map((entry) => (
            <div 
              key={entry.id} 
              className="flex items-center p-3 rounded-2xl bg-slate-50 border border-transparent hover:border-emerald-100 hover:bg-white transition-all group cursor-pointer"
            >
              <span className={`w-5 text-[10px] font-black italic ${entry.rank === 1 ? 'text-emerald-600' : 'text-slate-400'}`}>
                #{entry.rank}
              </span>
              <div className="w-9 h-9 rounded-xl border border-white overflow-hidden mx-3 shadow-sm">
                <img src={entry.avatar} alt={entry.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-slate-900 truncate">{entry.name}</p>
                <p className="text-[8px] text-slate-400 uppercase font-black">Lvl {entry.rank + 2}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-black text-emerald-600">{entry.score.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="m-4 py-4 bg-slate-900 hover:bg-slate-800 rounded-2xl text-[10px] font-black tracking-widest uppercase text-white transition-all">
          Global Rankings
        </button>
      </div>
    </div>
  );
};
