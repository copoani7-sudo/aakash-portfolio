
import React, { useState } from 'react';
import { Project } from '../types';

interface BentoCardProps {
  project: Project;
}

const BentoCard: React.FC<BentoCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const sizeClasses = {
    landscape: 'md:col-span-3 md:row-span-2 aspect-video h-auto',
    large: 'md:col-span-2 md:row-span-2 h-[400px] md:h-full',
    small: 'col-span-1 row-span-1 h-[200px] md:h-[250px]',
    wide: 'md:col-span-2 row-span-1 h-[200px] md:h-[250px]',
    tall: 'col-span-1 md:row-span-2 h-[400px] md:h-full',
  };

  const handlePlayClick = (e: React.MouseEvent) => {
    if (project.videoUrl) {
      e.stopPropagation();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={`relative group overflow-hidden rounded-[2.2rem] glass cursor-pointer transition-all duration-500 hover:neon-shadow-rust border border-themeCream/10 ${sizeClasses[project.size]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isPlaying && project.videoUrl ? (
        <div className="absolute inset-0 z-20 bg-themeBg">
          <iframe
            src={project.videoUrl.includes('autoplay=') ? project.videoUrl : `${project.videoUrl}&autoplay=true&muted=true`}
            frameBorder="0"
            width="100%"
            height="100%"
            allowFullScreen
            className="w-full h-full"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          ></iframe>
          <button 
            onClick={(e) => { e.stopPropagation(); setIsPlaying(false); }}
            className="absolute top-4 right-4 z-30 bg-themeBg/80 hover:bg-themeRust p-2 rounded-full text-themeCream transition-colors border border-themeCream/10 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      ) : (
        <>
          <img
            src={project.imageUrl}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-[0.85] group-hover:brightness-100 ${isHovered ? 'animate-glitch' : ''}`}
          />
          
          {/* FHD Indicator */}
          {project.size === 'landscape' && (
            <div className="absolute top-4 left-4 bg-themeBg/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-themeCream tracking-[0.2em] border border-themeCream/20 z-10">
              FHD 1080P
            </div>
          )}

          {/* Overlay - Updated with theme colors */}
          <div className={`absolute inset-0 bg-gradient-to-t from-themeBg via-transparent to-transparent flex flex-col justify-end p-8 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-90'}`}>
            <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
              <span className="inline-block bg-themeOrange text-themeBg px-2 py-0.5 rounded-sm font-black text-[10px] uppercase tracking-wider mb-2">{project.category}</span>
              <h3 className="text-themeCream text-2xl md:text-3xl font-black font-sans leading-tight">
                {project.title}
              </h3>
            </div>
            
            <button 
              onClick={handlePlayClick}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-themeCream/10 backdrop-blur-xl border border-themeCream/30 text-themeCream p-6 rounded-full shadow-2xl transition-all duration-300 ${isHovered ? 'scale-110 opacity-100' : 'scale-90 opacity-0 md:opacity-100'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </button>
          </div>

          {/* Decorative Glitch Layers in Theme Colors */}
          {isHovered && (
            <>
              <div className="absolute inset-0 bg-themeRust/10 mix-blend-screen animate-glitch opacity-30 pointer-events-none" />
              <div className="absolute inset-0 bg-themeOrange/5 mix-blend-multiply animate-glitch delay-75 pointer-events-none" />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BentoCard;
