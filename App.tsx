
import React, { useEffect, useState } from 'react';
import { PROJECTS, SKILLS } from './constants';
import { portfolioData } from './data';
import BentoCard from './components/BentoCard';
import { Play, Film, Mail, Smartphone, BookOpen, Youtube, Instagram, User, Globe, Clock, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  // Strictly for UI behavior (sticky nav), NO data fetching or metadata useEffect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const nameParts = portfolioData.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts[1];
  const initial = firstName.charAt(0);

  return (
    <div className="min-h-screen font-sans selection:bg-themeOrange selection:text-themeBg relative text-themeCream bg-themeBg">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-4 shadow-2xl' : 'py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter group cursor-pointer flex items-center gap-2">
             <div className="w-6 h-6 bg-themeRust rounded-sm rotate-45 group-hover:rotate-90 transition-transform"></div>
             <span className="uppercase">{firstName}</span>
          </div>
          <button 
            onClick={() => scrollToSection('showcase-video')}
            className="px-6 py-2 bg-themeRust text-themeCream rounded-full font-black text-xs uppercase tracking-widest hover:bg-themeOrange transition-all flex items-center gap-2 group shadow-lg"
          >
            WATCH REEL
            <div className="w-4 h-4 bg-themeCream text-themeRust rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={8} fill="currentColor" />
            </div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-12 px-6 overflow-hidden flex flex-col justify-center min-h-[90vh]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[2px] pointer-events-none select-none">
          <span className="font-chunky text-[30rem] md:text-[45rem] leading-none text-themeRust select-none">{initial}</span>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl">
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] mb-4 uppercase">
              {firstName}<br />
              <span className="text-themeOrange">{lastName}</span>
            </h1>
            <p className="text-3xl md:text-6xl font-black text-themeRust uppercase tracking-[0.05em] mb-12 italic">
              {portfolioData.role}
            </p>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-16">
              <p className="text-themeRose/60 text-lg md:text-xl max-w-md font-medium leading-relaxed">
                I've scaled channels to <span className="text-themeOrange font-bold">{portfolioData.stats.views} views</span>. {portfolioData.description}
              </p>
              <div className="flex gap-4">
                 <div className="w-12 h-1 bg-themeRust"></div>
                 <div className="w-12 h-1 bg-themeOrange"></div>
                 <div className="w-12 h-1 bg-themeRose/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase-video" className="pt-12 pb-32 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-themeRust/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="font-chunky text-3xl md:text-5xl mb-6 text-themeCream leading-tight">
            STORY SCALES.<br />
            <span className="cookie-text-yellow">NOISE DOESN'T.</span>
          </h2>
          
          <div className="relative group aspect-video rounded-[3rem] overflow-hidden border border-themeCream/10 shadow-3xl glass bg-black mt-12">
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=djeosp9cf&public_id=Port-_xptldp&autoplay=true&muted=true"
              className="w-full h-full"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-10 py-5 bg-themeRust text-themeCream rounded-full font-black text-sm uppercase tracking-widest hover:bg-themeOrange transition-all flex items-center gap-4 shadow-2xl group"
            >
              START YOUR PROJECT
              <div className="w-6 h-6 bg-themeCream text-themeRust rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={10} fill="currentColor" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Grid Projects Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-min">
            {PROJECTS.map((project) => (
              <BentoCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Viral Shorts Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-black/10">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-themeRust/20 rounded-full border border-themeRust/30 text-themeRust mb-8">
                <Smartphone size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Vertical Storytelling</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                VIRAL<br />
                <span className="text-themeOrange italic">SHORTS & REELS</span>
              </h2>
              <p className="text-themeRose/50 text-xl font-medium max-w-lg mb-10">
                In a scroll-fast world, you have 3 seconds to hook your audience. I specialize in split-second pacing and high-retention hooks that stop the scroll.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-12">
                <div className="flex flex-col">
                  <span className="text-5xl font-black">{portfolioData.stats.engagement}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40 mt-2">Avg. Growth</span>
                </div>
                <div className="w-px h-16 bg-themeCream/10 hidden md:block"></div>
                <div className="flex flex-col">
                  <span className="text-5xl font-black">{portfolioData.stats.retention}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40 mt-2">Retention Score</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[3rem] overflow-hidden border-8 border-themeBg shadow-2xl glass bg-black">
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=djeosp9cf&public_id=Main_ywomcb&autoplay=true&muted=true"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-themeBg">
        <div className="container mx-auto">
          <div className="glass rounded-[4rem] p-12 md:p-24 border-themeCream/5 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/3">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                  THE <br />
                  <span className="text-themeOrange">ARTIST</span>
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-black/40 rounded-3xl border border-themeCream/5">
                    <Clock className="text-themeOrange mb-4" />
                    <p className="text-2xl font-black">{portfolioData.stats.experience}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mt-1">Experience</p>
                  </div>
                  <div className="p-6 bg-black/40 rounded-3xl border border-themeCream/5">
                    <Globe className="text-themeRust mb-4" />
                    <p className="text-2xl font-black">GLOBAL</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mt-1">Clients</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3 space-y-8">
                <p className="text-2xl md:text-4xl font-medium leading-relaxed text-themeCream/90">
                  My name is <span className="text-themeOrange font-black">{portfolioData.name}</span>. I've spent thousands of hours mastering the craft of visual storytelling.
                </p>
                <div className="h-px w-full bg-gradient-to-r from-themeRust/50 to-transparent"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-themeRose/60 leading-relaxed font-medium">
                  <p>
                    Expert in <span className="text-themeCream font-bold">Premiere Pro</span> for surgical sound design and <span className="text-themeCream font-bold">After Effects</span> for high-end motion graphics and 3D visuals.
                  </p>
                  <p>
                    I believe every frame must serve the audience's attention. My goal is simple: make your content <span className="text-themeOrange font-bold">impossible to ignore</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              TECH STACK
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className={`p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[280px] shadow-xl hover:-translate-y-2 transition-transform bg-themeBg border border-themeCream/5 hover:border-themeRust/30`}>
                <div className="w-12 h-12 mb-4">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0" />
                </div>
                <h3 className="text-2xl font-black uppercase leading-none text-themeCream">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-themeBg relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="glass rounded-[4rem] p-12 md:p-20 border-themeCream/10 shadow-3xl">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              
              <div className="lg:w-1/2">
                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                  GET IN <br />
                  <span className="text-themeRust italic">TOUCH</span>
                </h2>
                
                <div className="space-y-8 mt-12">
                  <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 bg-themeOrange/20 rounded-2xl flex items-center justify-center text-themeOrange group-hover:bg-themeOrange group-hover:text-themeBg transition-all">
                      <Mail size={28} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Email Address</span>
                      <p className="text-xl font-bold break-all group-hover:text-themeOrange transition-colors">{portfolioData.contact.email}</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a 
                  href={portfolioData.contact.youtube}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black/40 border border-themeCream/5 p-10 rounded-[3rem] hover:border-themeRust/50 transition-all group flex flex-col justify-between h-[280px]"
                >
                  <Youtube className="text-red-600 group-hover:scale-110 transition-transform" size={40} />
                  <div>
                    <h3 className="text-2xl font-black uppercase">YouTube</h3>
                    <p className="text-xs text-themeRose/40 font-bold uppercase tracking-widest mt-1">@aakashbasant</p>
                  </div>
                </a>

                <a 
                  href={portfolioData.contact.instagram}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black/40 border border-themeCream/5 p-10 rounded-[3rem] hover:border-themeOrange/50 transition-all group flex flex-col justify-between h-[280px]"
                >
                  <Instagram className="text-pink-600 group-hover:scale-110 transition-transform" size={40} />
                  <div>
                    <h3 className="text-2xl font-black uppercase">Instagram</h3>
                    <p className="text-xs text-themeRose/40 font-bold uppercase tracking-widest mt-1">@aakash_rajbhar_b</p>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-themeCream/5 text-center">
        <div className="container mx-auto">
          <p className="text-themeRose/20 font-medium text-sm">© 2026 {portfolioData.name}. Built for high-retention impact.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
