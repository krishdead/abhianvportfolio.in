
import React from 'react';
import { PROJECTS } from '../constants';
import { Play } from 'lucide-react';

const WorkGrid: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">SELECTED WORK</h2>
          <p className="text-gray-400 max-w-md">A glimpse into my creative laboratory. From commercial shorts to high-energy vlogs.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">Commercial</button>
          <button className="px-4 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">Cinematic</button>
          <button className="px-4 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">YouTube</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group relative rounded-2xl overflow-hidden aspect-video cursor-pointer"
          >
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform scale-75 group-hover:scale-100 transition-transform">
                <Play className="w-8 h-8 text-white fill-current" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <span className="text-purple-400 text-xs font-bold uppercase tracking-widest block mb-2">{project.category}</span>
              <h3 className="text-2xl font-bold font-display">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkGrid;
