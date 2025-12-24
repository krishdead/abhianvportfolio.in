
import React from 'react';
import { Play, ArrowDown } from 'lucide-react';
import { USER_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse delay-1000"></div>

      <div className="text-center max-w-5xl space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold text-purple-400 uppercase tracking-[0.2em] mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          {USER_DATA.availability}
        </div>
        
        <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-[0.85] md:leading-[0.8]">
          CRAFTING <br />
          <span className="gradient-text">VISUAL</span> <br />
          <span className="text-gray-300">STORIES.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
          {USER_DATA.experienceLevel} focused on turning raw footage into cinematic masterpieces.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-10">
          <button className="group px-10 py-5 bg-white text-black font-bold rounded-2xl flex items-center gap-3 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <Play className="w-5 h-5 fill-current" />
            Watch Showreel
          </button>
          <a href="#work" className="px-10 py-5 glass text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
            View My Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
