
import React, { useEffect, useState } from 'react';
import { PROJECTS, SKILLS } from './constants';
import BentoCard from './components/BentoCard';
import FloatingElement from './components/FloatingElement';
import { Play, Film, Send, Mail, MoveRight, Monitor, ArrowUpRight, TrendingUp, Users, Target, Zap, Smartphone, BookOpen, Youtube, Instagram, User, Globe, Clock, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToVideo = () => {
    const element = document.getElementById('showcase-video');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-themeOrange selection:text-themeBg relative text-themeCream bg-themeBg">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-4 shadow-2xl' : 'py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter group cursor-pointer flex items-center gap-2">
             <div className="w-6 h-6 bg-themeRust rounded-sm rotate-45 group-hover:rotate-90 transition-transform"></div>
             <span>AAKASH</span>
          </div>
          <button 
            onClick={scrollToVideo}
            className="px-6 py-2 bg-themeRust text-themeCream rounded-full font-black text-xs uppercase tracking-widest hover:bg-themeOrange transition-all flex items-center gap-2 group shadow-lg"
          >
            START NOW
            <div className="w-4 h-4 bg-themeCream text-themeRust rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={8} fill="currentColor" />
            </div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-12 px-6 overflow-hidden flex flex-col justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[2px] pointer-events-none select-none">
          <span className="font-chunky text-[40rem] leading-none text-themeRust select-none">A</span>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl">
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] mb-4 uppercase">
              AAKASH<br />
              <span className="text-themeOrange">RAJBHAR</span>
            </h1>
            <p className="text-3xl md:text-6xl font-black text-themeRust uppercase tracking-[0.05em] mb-12 italic">
              Video Editor
            </p>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-16">
              <p className="text-themeRose/60 text-lg md:text-xl max-w-md font-medium leading-relaxed">
                I've scaled channels to <span className="text-themeOrange font-bold">50M+ views</span>. High-retention storytelling for professionals ready to dominate their niche.
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

      {/* Philosophy Section */}
      <section id="showcase-video" className="pt-12 pb-32 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-themeRust/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="font-chunky text-3xl md:text-5xl mb-6 text-themeCream leading-tight">
            STORY SCALES.<br />
            <span className="cookie-text-yellow">NOISE DOESN'T.</span>
          </h2>
          <p className="text-themeRose/50 text-lg md:text-xl font-medium leading-relaxed mb-12">
            I've edited thousands of minutes of content to understand exactly what the algorithm actually wants. No guesswork, just proven editing strategies that deliver real growth.
          </p>
          
          <div className="relative group aspect-video rounded-[3rem] overflow-hidden border border-themeCream/10 shadow-3xl glass bg-black">
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=djeosp9cf&public_id=Port-_xptldp&autoplay=true&muted=true"
              className="w-full h-full"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-16">
            <button 
              onClick={scrollToContact}
              className="px-10 py-5 bg-themeRust text-themeCream rounded-full font-black text-sm uppercase tracking-widest hover:bg-themeOrange transition-all flex items-center gap-4 mx-auto shadow-2xl group"
            >
              START YOUR PROJECT
              <div className="w-6 h-6 bg-themeCream text-themeRust rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={10} fill="currentColor" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Viral Shorts Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-black/10">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-themeOrange/5 blur-[120px] rounded-full"></div>
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
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="flex flex-col">
                  <span className="text-4xl font-black">98%</span>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Avg. Completion</span>
                </div>
                <div className="w-px h-12 bg-themeCream/10"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black">300%</span>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Engagement Boost</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[3rem] overflow-hidden border-8 border-themeBg shadow-[0_40px_80px_rgba(0,0,0,0.6)] glass group bg-black">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=djeosp9cf&public_id=Main_ywomcb&autoplay=true&muted=true"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-themeRust/30 rounded-full blur-[40px] pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Explainer Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-black/5">
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-themeRust/5 blur-[100px] rounded-full"></div>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <div className="lg:w-1/2 flex justify-center lg:order-2">
              <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[3rem] overflow-hidden border-8 border-themeBg shadow-[0_40px_80px_rgba(0,0,0,0.6)] glass group bg-black">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=djeosp9cf&public_id=IF_YOU_STING_BY_A_BEE_rz0qxn&autoplay=true&muted=true"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-themeOrange/20 rounded-full blur-[40px] pointer-events-none"></div>
              </div>
            </div>
            
            <div className="lg:w-1/2 text-center lg:text-left lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-themeOrange/20 rounded-full border border-themeOrange/30 text-themeOrange mb-8">
                <BookOpen size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Informational Edits</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                EDUCATIONAL<br />
                <span className="text-themeRust italic">EXPLAINERS</span>
              </h2>
              <p className="text-themeRose/50 text-xl font-medium mb-10 max-w-lg mx-auto lg:mx-0">
                Turning complex information into digestible, engaging content. I use motion graphics and precise pacing to maintain authority while keeping the viewer hooked.
              </p>
              <div className="flex flex-col gap-6 items-center lg:items-start">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-themeRust"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">100% Custom Motion Graphics</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-themeOrange"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Optimized for Retention</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Style Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-themeBg">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-themeRust/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto">
          <div className="glass rounded-[4rem] p-12 md:p-24 border-themeCream/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Sparkles size={200} className="text-themeOrange" />
            </div>
            
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-1 bg-themeRust"></div>
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-themeRust">THE ARTIST</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                  MY <br />
                  <span className="text-themeOrange">JOURNEY</span>
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-black/40 rounded-3xl border border-themeCream/5">
                    <div className="text-themeOrange mb-2"><Clock size={24} /></div>
                    <p className="text-2xl font-black leading-none">2 YRS</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mt-1">Experience</p>
                  </div>
                  <div className="p-6 bg-black/40 rounded-3xl border border-themeCream/5">
                    <div className="text-themeRust mb-2"><Globe size={24} /></div>
                    <p className="text-2xl font-black leading-none">GLOBAL</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mt-1">Clients</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3 space-y-8">
                <p className="text-2xl md:text-4xl font-medium leading-relaxed text-themeCream/90">
                  My name is <span className="text-themeOrange font-black">Aakash Rajbhar</span> and I have 2 years of experience working with many <span className="text-themeRust italic">Indian and foreign clients</span> both.
                </p>
                <div className="h-px w-full bg-gradient-to-r from-themeRust/50 to-transparent"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-themeRose/60 leading-relaxed font-medium">
                  <p>
                    I am using <span className="text-themeCream font-bold">Premiere Pro</span> for sound design and little motion graphics, and <span className="text-themeCream font-bold">After Effects</span> to create 3D animation and high-end VFX visuals.
                  </p>
                  <p>
                    My hobbies include making things <span className="text-themeOrange font-bold">engaging</span> with my skills and crafting <span className="text-themeRust font-bold">cool titles</span> in Photoshop. I believe every frame should serve a purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Updated SKILLS I HAVE */}
      <section className="py-32 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              SKILLS I HAVE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "PREMIERE PRO", 
                desc: "Motion Graphics, Sound Design", 
                icon: <img src={SKILLS[0].icon} className="w-10 h-10 object-contain" alt="Premiere Pro" />, 
                color: "bg-themeOrange",
                isLight: true
              },
              { 
                title: "AFTER EFFECTS", 
                desc: "Motion Graphics, 3D Animation, VFX", 
                icon: <img src={SKILLS[1].icon} className="w-10 h-10 object-contain" alt="After Effects" />, 
                color: "bg-themeRose",
                isLight: true
              },
              { 
                title: "FULL CONTENT CREATION", 
                desc: "I am making content for my youtube channel", 
                icon: <Film className="text-themeCream" />, 
                color: "bg-themeBg border border-themeCream/20",
                isLight: false
              },
              { 
                title: "PHOTOSHOP", 
                desc: "Graphics design and title making", 
                icon: <img src={SKILLS[2].icon} className="w-10 h-10 object-contain" alt="Photoshop" />, 
                color: "bg-themeRust",
                isLight: false
              },
            ].map((service, idx) => (
              <div key={idx} className={`p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[320px] shadow-xl hover:-translate-y-2 transition-transform ${service.color}`}>
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-8">
                    {service.icon}
                  </div>
                  <h3 className={`text-2xl font-black mb-4 leading-none ${service.isLight ? 'text-themeBg' : 'text-themeCream'}`}>
                    {service.title}
                  </h3>
                </div>
                <p className={`text-sm font-medium ${service.isLight ? 'text-themeBg/70' : 'text-themeRose/40'}`}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Contact Section */}
      <section id="contact" className="py-32 px-6 bg-themeBg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-themeRust/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto max-6xl relative z-10">
          <div className="glass rounded-[4rem] p-12 md:p-20 border-themeCream/10 shadow-3xl">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              
              <div className="lg:w-1/2">
                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                  LET'S <br />
                  <span className="text-themeRust italic">CONNECT</span>
                </h2>
                <p className="text-themeRose/40 text-lg font-medium max-w-md mb-12">
                  Have a project in mind? Reach out and let's create something extraordinary together.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-themeRust/20 rounded-2xl flex items-center justify-center text-themeRust group-hover:bg-themeRust group-hover:text-themeCream transition-all">
                      <User size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Full Name</span>
                      <p className="text-xl font-bold">Aakash Rajbhar</p>
                    </div>
                  </div>
                  
                  <a href="mailto:aakashguru849@gmail.com" className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-themeOrange/20 rounded-2xl flex items-center justify-center text-themeOrange group-hover:bg-themeOrange group-hover:text-themeBg transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Email Address</span>
                      <p className="text-xl font-bold break-all group-hover:text-themeOrange transition-colors">aakashguru849@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a 
                  href="https://www.youtube.com/@aakashbasant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black/40 border border-themeCream/5 p-10 rounded-[3rem] hover:border-themeRust/50 transition-all group flex flex-col justify-between aspect-square sm:aspect-auto sm:h-[300px]"
                >
                  <div className="w-16 h-16 bg-red-600/10 rounded-3xl flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                    <Youtube size={32} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2 uppercase">YouTube</h3>
                    <p className="text-xs text-themeRose/40 font-bold uppercase tracking-widest">@aakashbasant</p>
                  </div>
                </a>

                <a 
                  href="https://www.instagram.com/aakash_rajbhar_b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black/40 border border-themeCream/5 p-10 rounded-[3rem] hover:border-themeOrange/50 transition-all group flex flex-col justify-between aspect-square sm:aspect-auto sm:h-[300px]"
                >
                  <div className="w-16 h-16 bg-pink-600/10 rounded-3xl flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform">
                    <Instagram size={32} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2 uppercase">Instagram</h3>
                    <p className="text-xs text-themeRose/40 font-bold uppercase tracking-widest">@aakash_rajbhar_b</p>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-themeCream/5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 bg-themeRust/20 rounded-lg border border-themeRust/40"></div>
             <span className="text-xl font-black tracking-tighter text-themeCream">AAKASH <span className="text-themeRose/20">RAJBHAR</span></span>
          </div>
          <p className="text-themeRose/20 font-medium text-sm">© 2026 Crafted for Scale. High Retention Guaranteed.</p>
          <div className="flex gap-10 font-black text-[10px] tracking-[0.3em] uppercase opacity-40 hover:opacity-100 transition-opacity">
            <a href="#" className="hover:text-themeOrange">Privacy</a>
            <a href="#" className="hover:text-themeOrange">Dribbble</a>
            <a href="#" className="hover:text-themeOrange">Behance</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
