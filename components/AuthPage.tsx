
import React, { useState } from 'react';

interface AuthPageProps {
  onComplete: (data: { name: string; university: string; universityNumber: string }) => void;
  onBack: () => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onComplete, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    university: '',
    universityNumber: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.university && formData.universityNumber && formData.password) {
      onComplete({
        name: formData.name,
        university: formData.university,
        universityNumber: formData.universityNumber
      });
    }
  };

  return (
    <div className="relative z-10 min-h-[80vh] flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-[40px] p-10 shadow-2xl shadow-slate-200/50">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/20 mx-auto mb-6">
            <i className="fa-solid fa-user-shield text-white text-2xl"></i>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">
            Resident <span className="text-emerald-600">Access</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">Verify your academic credentials to enter.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Full Name</label>
            <div className="relative">
              <i className="fa-solid fa-user absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-xs"></i>
              <input 
                type="text"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 transition-all"
                placeholder="Dr. John Doe"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">University Name</label>
            <div className="relative">
              <i className="fa-solid fa-university absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-xs"></i>
              <input 
                type="text"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 transition-all"
                placeholder="e.g. Yarmouk University"
                value={formData.university}
                onChange={e => setFormData({...formData, university: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">University Number</label>
            <div className="relative">
              <i className="fa-solid fa-id-card absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-xs"></i>
              <input 
                type="text"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 transition-all"
                placeholder="2021XXXXX"
                value={formData.universityNumber}
                onChange={e => setFormData({...formData, universityNumber: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Access Password</label>
            <div className="relative">
              <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-xs"></i>
              <input 
                type="password"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 transition-all"
                placeholder="••••••••"
                value={formData.password}
                onChange={e => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-lg tracking-tighter uppercase italic shadow-xl shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-2 mt-4"
          >
            <span>Initialize Session</span>
            <i className="fa-solid fa-chevron-right text-xs"></i>
          </button>

          <button 
            type="button"
            onClick={onBack}
            className="w-full py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-colors"
          >
            Back to Rules
          </button>
        </form>
      </div>
    </div>
  );
};
