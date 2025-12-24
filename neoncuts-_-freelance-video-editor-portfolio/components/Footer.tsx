
import React from 'react';
import { SOCIALS } from '../constants';
import { Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-tight">
              LET'S CREATE <br />
              <span className="text-purple-500">TOGETHER.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-md">
              Available for projects, collaborations, or just a quick chat about cinema.
            </p>
            <div className="flex items-center gap-6">
              {SOCIALS.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-3xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">Name</label>
                  <input type="text" className="w-full bg-white/5 border-b border-white/10 p-3 focus:outline-none focus:border-purple-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                  <input type="email" className="w-full bg-white/5 border-b border-white/10 p-3 focus:outline-none focus:border-purple-500 transition-colors" placeholder="hello@world.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
                <textarea className="w-full bg-white/5 border-b border-white/10 p-3 focus:outline-none focus:border-purple-500 transition-colors min-h-[100px]" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors group">
                Send Message
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm gap-4">
          <p>© {new Date().getFullYear()} NeonCuts. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made for creators by <span className="text-white font-bold">NeonCuts</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
