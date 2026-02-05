
import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern"></div>
      {/* Floating Medical Icons in subtle green */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-emerald-500/10 rounded-3xl animate-float opacity-30 rotate-12 flex items-center justify-center text-emerald-600 text-4xl">
        <i className="fa-solid fa-stethoscope"></i>
      </div>
      <div className="absolute bottom-1/4 right-20 w-40 h-40 border border-emerald-500/10 rounded-3xl animate-float opacity-30 -rotate-12 delay-700 flex items-center justify-center text-emerald-600 text-5xl">
        <i className="fa-solid fa-brain"></i>
      </div>
      <div className="absolute top-2/3 left-1/4 w-24 h-24 border border-emerald-500/10 rounded-3xl animate-float opacity-20 rotate-45 delay-1000 flex items-center justify-center text-emerald-600 text-3xl">
        <i className="fa-solid fa-notes-medical"></i>
      </div>
    </div>
  );
};
