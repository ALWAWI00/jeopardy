
import React, { useState, useRef } from 'react';
import { geminiService } from '../services/geminiService';

export const ImageEditor: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!image || !prompt) return;
    setLoading(true);
    try {
      const editedImage = await geminiService.editImage(image, prompt);
      if (editedImage) {
        setResult(editedImage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative z-10 max-w-4xl mx-auto py-12 px-4">
      <div className="bg-white border border-slate-200 rounded-[40px] p-10 shadow-2xl shadow-slate-200/50">
        <div className="flex flex-col md:flex-row items-start justify-between mb-10">
          <div>
            <h2 className="text-3xl font-black tracking-tighter uppercase italic text-slate-900 mb-2">
              Resident <span className="text-emerald-600">Profile Lab</span>
            </h2>
            <p className="text-slate-500 max-w-md text-sm font-medium">
              Create a custom professional avatar for your academic ID. Use AI to add medical stylings.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-100">
              Gemini 2.5 Active
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="relative aspect-square rounded-[32px] bg-slate-50 border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden group">
              {result ? (
                <img src={result} alt="Edited" className="w-full h-full object-cover" />
              ) : image ? (
                <img src={image} alt="Original" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center p-8">
                  <i className="fa-solid fa-user-doctor text-5xl text-slate-200 mb-4"></i>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Select Professional Portrait</p>
                </div>
              )}
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-0 bg-emerald-600/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-black text-sm uppercase tracking-widest italic"
              >
                Upload Photo
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setPrompt("Stylize as a professional medical ID photo with soft clinical studio lighting and an emerald green background")}
                className="py-3 px-4 bg-slate-50 hover:bg-emerald-50 border border-slate-100 text-[10px] font-black text-slate-500 uppercase tracking-widest transition-all rounded-2xl"
              >
                Clinical Studio
              </button>
              <button 
                onClick={() => setPrompt("Add a clean medical white lab coat and a stethoscope around the neck")}
                className="py-3 px-4 bg-slate-50 hover:bg-emerald-50 border border-slate-100 text-[10px] font-black text-slate-500 uppercase tracking-widest transition-all rounded-2xl"
              >
                Add Lab Coat
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="flex-1">
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Custom Instructions</label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your desired look (e.g., Make background a medical blueprint...)"
                className="w-full h-48 bg-slate-50 border border-slate-200 rounded-2xl p-5 text-slate-700 placeholder-slate-300 focus:outline-none focus:border-emerald-500/50 transition-all resize-none text-sm font-medium"
              />
            </div>

            <button 
              onClick={handleEdit}
              disabled={loading || !image || !prompt}
              className={`w-full py-5 rounded-2xl font-black text-lg tracking-tighter uppercase italic shadow-xl transition-all flex items-center justify-center space-x-3
                ${loading || !image || !prompt 
                  ? 'bg-slate-100 text-slate-300 cursor-not-allowed' 
                  : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-600/20'
                }`}
            >
              {loading ? (
                <>
                  <i className="fa-solid fa-dna animate-spin"></i>
                  <span>Analyzing Cells...</span>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-wand-magic-sparkles"></i>
                  <span>Synthesize Avatar</span>
                </>
              )}
            </button>
            
            {result && (
              <button 
                className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest transition-all hover:bg-slate-800"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = result;
                  link.download = 'resident-profile.png';
                  link.click();
                }}
              >
                Download Identifier
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
