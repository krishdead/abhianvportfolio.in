
import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { geminiService } from '../services/geminiService';

const AIBrainstormer: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleBrainstorm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    setResult(null);
    try {
      const suggestion = await geminiService.brainstormConcept(input);
      setResult(suggestion);
    } catch (err) {
      setResult("Oops! The creative juices are stuck. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai" className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 shadow-inner border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Sparkles className="w-24 h-24 text-purple-500" />
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">AI CREATIVE ASSISTANT</h2>
          <p className="text-gray-400">Got a raw idea? Let's turn it into a storyboard concept instantly.</p>
        </div>

        <form onSubmit={handleBrainstorm} className="space-y-6 relative z-10">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="E.g. I want a 30-second fitness reel with dark moody lighting and fast cuts..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 min-h-[120px] transition-all"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="absolute bottom-4 right-4 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all shadow-lg neon-glow"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </div>
        </form>

        {result && (
          <div className="mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
              <div className="flex items-center gap-2 text-purple-400 font-bold mb-4">
                <Sparkles className="w-5 h-5" />
                CONCEPT DRAFT
              </div>
              <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed whitespace-pre-line">
                {result}
              </div>
              <div className="mt-6 flex justify-end">
                <button 
                  onClick={() => {
                    window.location.href = `#contact?subject=Concept Inquiry&body=${encodeURIComponent(input)}`;
                  }}
                  className="text-sm font-bold text-white hover:text-purple-400 transition-colors"
                >
                  Let's edit this idea →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIBrainstormer;
