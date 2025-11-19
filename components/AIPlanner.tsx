import React, { useState } from 'react';
import { generatePhotoShootIdea } from '../services/geminiService';
import { Sparkles, Loader2, Lightbulb } from 'lucide-react';
import { AIPlanResponse } from '../types';

const AIPlanner: React.FC = () => {
  const [mood, setMood] = useState('');
  const [setting, setSetting] = useState('');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<AIPlanResponse | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood || !setting) return;

    setLoading(true);
    const result = await generatePhotoShootIdea(mood, setting);
    setPlan(result);
    setLoading(false);
  };

  return (
    <section id="ai-planner" className="py-20 bg-brand-dark relative overflow-hidden border-y border-gray-900">
      <div className="absolute top-0 right-0 p-20 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20 mb-4">
            <Sparkles size={14} />
            <span className="text-xs font-bold uppercase">Powered by Gemini AI</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">AI Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Planner</span></h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Not sure what to wear or how to pose? Tell our AI assistant your vibe, and we'll generate a concept for your next shoot with Nidhi Studio.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start max-w-5xl mx-auto">
          
          {/* Form */}
          <div className="w-full lg:w-1/3 bg-gray-900/50 p-6 rounded-xl border border-gray-800">
            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Vibe / Mood</label>
                <input
                  type="text"
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  placeholder="e.g., Dark & moody, Joyful summer"
                  className="w-full bg-black border border-gray-700 rounded p-3 text-white focus:border-brand-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Setting / Location</label>
                <input
                  type="text"
                  value={setting}
                  onChange={(e) => setSetting(e.target.value)}
                  placeholder="e.g., Beach at sunset, Urban street"
                  className="w-full bg-black border border-gray-700 rounded p-3 text-white focus:border-brand-gold focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Lightbulb size={18} />}
                Generate Plan
              </button>
            </form>
          </div>

          {/* Result Display */}
          <div className="w-full lg:w-2/3">
            {plan ? (
              <div className="bg-black border border-gray-800 rounded-xl p-8 animate-fade-in relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
                <h3 className="text-2xl font-serif font-bold text-white mb-6">{plan.concept}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 p-4 rounded">
                    <h4 className="text-blue-400 font-bold text-sm uppercase mb-2">Lighting Setup</h4>
                    <p className="text-gray-300 text-sm">{plan.lighting}</p>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded">
                    <h4 className="text-purple-400 font-bold text-sm uppercase mb-2">Wardrobe</h4>
                    <p className="text-gray-300 text-sm">{plan.wardrobe}</p>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded md:col-span-2">
                    <h4 className="text-brand-gold font-bold text-sm uppercase mb-2">Posing Advice</h4>
                    <p className="text-gray-300 text-sm">{plan.pose}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-gray-600 border-2 border-dashed border-gray-800 rounded-xl bg-gray-900/20">
                <Sparkles size={48} className="mb-4 opacity-20" />
                <p>Your creative photo plan will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPlanner;
