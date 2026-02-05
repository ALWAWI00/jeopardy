
import React from 'react';

interface LandingPageProps {
  onEnter: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center">
      <div className="flex-1 flex flex-col items-center pt-24 px-6 pb-20">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100 border border-emerald-200 rounded-full text-emerald-700 text-sm font-bold uppercase tracking-widest animate-fade-in">
            <i className="fa-solid fa-graduation-cap"></i>
            <span>Welcome to Future Medicine</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Jeopardy <span className="text-emerald-600">Yarmouk</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            The ultimate medical trivia platform designed for Yarmouk University residents and students. 
            Challenge your knowledge, climb the ranks, and master the art of medicine.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {[
              { icon: 'fa-user-plus', title: 'Join a Session', desc: 'Connect to live clinical arenas hosted by instructors.' },
              { icon: 'fa-bolt', title: 'Quick Recall', desc: 'Answer complex medical cases against the clock.' },
              { icon: 'fa-trophy', title: 'Earn Prestige', desc: 'Accumulate XP to unlock higher resident tiers.' }
            ].map((rule, i) => (
              <div key={i} className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm flex flex-col items-center text-center space-y-4 hover:border-emerald-300 transition-colors group">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <i className={`fa-solid ${rule.icon}`}></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{rule.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-12 space-y-6">
            <button 
              onClick={onEnter}
              className="px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-xl uppercase italic tracking-tighter shadow-xl shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95 flex items-center mx-auto space-x-3"
            >
              <i className="fa-solid fa-right-to-bracket"></i>
              <span>Log In</span>
            </button>
            <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <span className="flex items-center"><i className="fa-solid fa-circle-check text-emerald-500 mr-2"></i> Free for Students</span>
              <span className="flex items-center"><i className="fa-solid fa-circle-check text-emerald-500 mr-2"></i> Real-time Sync</span>
              <span className="flex items-center"><i className="fa-solid fa-circle-check text-emerald-500 mr-2"></i> Validated Content</span>
            </div>
          </div>
        </div>

        <div className="mt-24 p-12 max-w-5xl w-full border-t border-slate-200 bg-white/50 rounded-[40px] backdrop-blur-sm">
          <h2 className="text-center text-2xl font-black text-slate-900 uppercase italic mb-12">Official Rules</h2>
          <div className="grid md:grid-cols-2 gap-12 text-slate-600 text-sm leading-relaxed">
            <div className="space-y-4">
              <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs flex items-center">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mr-3 font-bold">1</span>
                Matchmaking & Rooms
              </h4>
              <p className="pl-9">Students must join rooms using a unique code provided by their professor. Ensure you have a stable connection as sessions are high-speed and real-time.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs flex items-center">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mr-3 font-bold">2</span>
                Scoring Mechanics
              </h4>
              <p className="pl-9">Points are awarded based on accuracy and speed. Clinical vignettes are weighted more heavily than basic terminology questions.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs flex items-center">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mr-3 font-bold">3</span>
                Academic Integrity
              </h4>
              <p className="pl-9">The platform is designed for learning. External resource usage during a live session is tracked and may disqualify you from the global leaderboard.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs flex items-center">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mr-3 font-bold">4</span>
                Avatar Customization
              </h4>
              <p className="pl-9">Use the "Avatar Lab" to generate a professional resident profile. AI tools are available to help you create a medical-themed identifier.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dark Footer Strip */}
      <footer className="w-full bg-[#333] text-slate-400 py-6 text-center text-[10px] font-black uppercase tracking-[0.2em]">
        developed by ...
      </footer>
    </div>
  );
};
