
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import AIBrainstormer from './components/AIBrainstormer';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { USER_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-purple-500/30 selection:text-purple-200 bg-[#050505]">
      <Navbar />
      <main>
        <Hero />
        
        {/* About Summary */}
        <section id="about" className="py-24 px-6 flex justify-center">
          <div className="max-w-4xl relative">
            <div className="absolute -top-10 -left-10 text-[12rem] font-black text-white/5 select-none pointer-events-none font-display">
              "
            </div>
            <div className="glass p-10 md:p-20 rounded-[3rem] text-center border-white/5 shadow-inner">
              <h3 className="text-purple-500 uppercase tracking-[0.4em] text-[10px] font-black mb-10">Briefing</h3>
              <p className="text-2xl md:text-4xl font-medium text-gray-200 leading-[1.3] md:leading-[1.4] tracking-tight italic">
                {USER_DATA.bio}
              </p>
              <div className="mt-12 flex flex-col items-center">
                <div className="w-12 h-[1px] bg-white/20 mb-4"></div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{USER_DATA.fullName}</span>
              </div>
            </div>
          </div>
        </section>

        <WorkGrid />
        <Skills />
        
        <section className="py-20 flex justify-center px-6">
          <div className="w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>

        <AIBrainstormer />
      </main>
      <Footer />
    </div>
  );
};

export default App;
