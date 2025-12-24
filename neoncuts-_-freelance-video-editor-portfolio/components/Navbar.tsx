
import React from 'react';
import { NAV_LINKS, USER_DATA } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-center">
      <div className="glass px-8 py-3 rounded-[2rem] flex items-center gap-10 border border-white/10 shadow-2xl backdrop-blur-xl">
        <a href="#" className="text-xl font-black font-display tracking-tighter hover:scale-105 transition-transform">
          {USER_DATA.name}<span className="text-purple-500">{USER_DATA.lastName}</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a 
          href="#contact" 
          className="hidden sm:block bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-purple-900/20"
        >
          Work with me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
