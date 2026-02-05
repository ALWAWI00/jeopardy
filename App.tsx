
import React, { useState } from 'react';
import { BackgroundGrid } from './components/BackgroundGrid';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LeaderboardPanel } from './components/LeaderboardPanel';
import { ImageEditor } from './components/ImageEditor';
import { LandingPage } from './components/LandingPage';
import { AuthPage } from './components/AuthPage';
import { AppView, LeaderboardEntry, UserProfile } from './types';

const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { id: '1', name: 'Dr. Sarah Chen', score: 24500, rank: 1, avatar: 'https://picsum.photos/seed/sarah/100/100' },
  { id: '2', name: 'Alex Rivera', score: 22100, rank: 2, avatar: 'https://picsum.photos/seed/alex/100/100' },
  { id: '3', name: 'Jordan Smyth', score: 19800, rank: 3, avatar: 'https://picsum.photos/seed/jordan/100/100' },
  { id: '4', name: 'Dr. Maya Patel', score: 18500, rank: 4, avatar: 'https://picsum.photos/seed/maya/100/100' },
  { id: '5', name: 'James Kim', score: 17200, rank: 5, avatar: 'https://picsum.photos/seed/james/100/100' },
];

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.LANDING);
  const [user, setUser] = useState<UserProfile>({
    name: 'Guest Resident',
    level: 1,
    avatar: 'https://picsum.photos/seed/me/100/100',
    xp: 0
  });

  const handleStartGame = () => {
    alert("Initiating medical simulation...");
  };

  const handleAuthComplete = (data: { name: string; university: string; universityNumber: string }) => {
    setUser({
      ...user,
      name: data.name,
      university: data.university,
      universityNumber: data.universityNumber
    });
    setCurrentView(AppView.HOME);
  };

  const renderContent = () => {
    switch (currentView) {
      case AppView.LANDING:
        return <LandingPage onEnter={() => setCurrentView(AppView.AUTH)} />;
      case AppView.AUTH:
        return <AuthPage onComplete={handleAuthComplete} onBack={() => setCurrentView(AppView.LANDING)} />;
      case AppView.HOME:
        return <Hero onStart={handleStartGame} onNavigate={setCurrentView} />;
      case AppView.IMAGE_EDITOR:
        return <ImageEditor />;
      case AppView.LEADERBOARD:
        return (
          <div className="relative z-10 max-w-4xl mx-auto py-20 text-center px-6">
            <h2 className="text-4xl font-black text-slate-900 italic uppercase mb-8">Global Rankings</h2>
            <div className="grid grid-cols-1 gap-3">
               {MOCK_LEADERBOARD.map(entry => (
                 <div key={entry.id} className="bg-white p-5 border border-slate-200 rounded-2xl flex items-center justify-between shadow-sm">
                    <div className="flex items-center space-x-4">
                      <span className="font-black text-emerald-600 text-xl italic w-8">#{entry.rank}</span>
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100">
                        <img src={entry.avatar} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-slate-900 font-bold">{entry.name}</span>
                    </div>
                    <span className="text-emerald-700 font-black">{entry.score.toLocaleString()} XP</span>
                 </div>
               ))}
            </div>
            <button onClick={() => setCurrentView(AppView.HOME)} className="mt-12 text-slate-400 font-black uppercase tracking-widest hover:text-emerald-600 transition-colors">
              <i className="fa-solid fa-arrow-left mr-2"></i> Return to Dashboard
            </button>
          </div>
        );
      default:
        return <Hero onStart={handleStartGame} onNavigate={setCurrentView} />;
    }
  };

  const showHeaderAndPanels = currentView !== AppView.LANDING && currentView !== AppView.AUTH;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-500/10 font-sans flex flex-col">
      <BackgroundGrid />
      
      {showHeaderAndPanels && (
        <Header user={user} onNavigate={setCurrentView} />
      )}
      
      <main className="relative z-10 flex-1">
        {renderContent()}
      </main>

      {currentView === AppView.HOME && <LeaderboardPanel entries={MOCK_LEADERBOARD} />}

      {showHeaderAndPanels && (
        <>
          <footer className="fixed bottom-0 left-0 right-0 z-50 p-6 pointer-events-none">
            <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
              <div className="bg-white/90 backdrop-blur-xl border border-slate-200 px-6 py-4 rounded-[24px] flex items-center space-x-8 shadow-xl shadow-slate-200/50">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Active Residents</span>
                  <span className="text-sm font-black text-slate-900">4,281</span>
                </div>
                <div className="w-px h-4 bg-slate-200"></div>
                <div className="flex items-center space-x-3">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Boards Online</span>
                  <span className="text-sm font-black text-emerald-600">124</span>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-xl border border-slate-200 p-2 rounded-[24px] flex items-center space-x-2 shadow-xl shadow-slate-200/50">
                 <button className="w-12 h-12 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all flex items-center justify-center text-slate-400">
                    <i className="fa-solid fa-shield-heart"></i>
                 </button>
                 <button className="w-12 h-12 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all flex items-center justify-center text-slate-400">
                    <i className="fa-solid fa-gear"></i>
                 </button>
              </div>
            </div>
          </footer>
          <footer className="relative z-10 w-full bg-[#333] text-slate-400 py-6 text-center text-[10px] font-black uppercase tracking-[0.2em]">
            developed by ...
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
