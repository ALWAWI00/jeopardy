
import React from 'react';

interface HeroProps {
  onStart: () => void;
  onNavigate: (view: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart, onNavigate }) => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center pt-16 pb-12 px-4">
      <div className="mb-8 inline-flex items-center space-x-4 px-5 py-2 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-xs font-bold uppercase tracking-widest">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
        </span>
        <span>Next Live Session: <span className="font-black">05:12</span></span>
      </div>

      <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic leading-none text-slate-900">
        Ready for the <span className="text-emerald-600">Grand Rounds?</span>
      </h1>
      
      <p className="text-slate-500 max-w-xl mx-auto mb-10 font-medium tracking-wide">
        Pick your specialty board and start competing. High-fidelity cases updated for the 2024 curriculum.
      </p>

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <button 
          onClick={onStart}
          className="px-10 py-5 bg-emerald-600 text-white rounded-2xl font-black text-lg tracking-tighter uppercase italic shadow-lg shadow-emerald-600/20 hover:scale-105 active:scale-95 transition-all"
        >
          <i className="fa-solid fa-play mr-2"></i>
          Start Match
        </button>

        <button 
          onClick={() => onNavigate('LEADERBOARD')}
          className="px-8 py-5 bg-white border border-slate-200 text-slate-700 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-slate-50 transition-all flex items-center"
        >
          <i className="fa-solid fa-ranking-star mr-2 text-emerald-600"></i>
          Live Rankings
        </button>
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl w-full">
        {[
          { icon: 'fa-user-doctor', label: 'Internal Med', count: 12 },
          { icon: 'fa-baby', label: 'Pediatrics', count: 8 },
          { icon: 'fa-scalpel', label: 'Surgery', count: 15 },
          { icon: 'fa-dna', label: 'Genetics', count: 4 }
        ].map((cat, i) => (
          <div key={i} className="p-6 bg-white border border-slate-200 rounded-3xl hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-600/5 transition-all cursor-pointer group">
            <div className="w-12 h-12 mb-4 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <i className={`fa-solid ${cat.icon} text-xl`}></i>
            </div>
            <h3 className="text-slate-900 font-black uppercase tracking-tight text-sm mb-1">{cat.label}</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{cat.count} Active Boards</p>
          </div>
        ))}
      </div>
    </div>
  );
};
