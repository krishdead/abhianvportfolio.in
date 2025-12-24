
import React from 'react';
import { SKILLS } from '../constants';
import * as LucideIcons from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">TECHNICAL ARSENAL</h2>
        <p className="text-gray-400">Industry standard tools I use to bring vision to life.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skill) => {
          const Icon = (LucideIcons as any)[skill.icon];
          return (
            <div key={skill.name} className="glass p-6 rounded-2xl hover:border-purple-500/30 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-600/10 rounded-xl group-hover:bg-purple-600/20 transition-colors">
                  <Icon className="w-6 h-6 text-purple-500" />
                </div>
                <span className="text-sm font-mono text-gray-500">{skill.level}%</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
