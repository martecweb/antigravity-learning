import React from 'react';
import { motion } from 'framer-motion';

const About = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="legacy" className={`py-40 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-peak-dark' : 'bg-white'}`}>
      {/* Background Decor */}
      <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl z-0 transition-opacity duration-500 ${isDark ? 'from-peak-neon/[0.04]' : 'from-peak-neon/[0.12]'} to-transparent`} />
      
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-20 relative z-10 transition-colors duration-500">
        <div className="md:w-1/2 relative group">
          <div className={`aspect-[4/5] rounded-[40px] overflow-hidden relative shadow-2xl transition-all duration-500 border ${
              isDark 
                ? 'bg-peak-dark border-white/10 shadow-none' 
                : 'bg-slate-100 border-peak-dark/5'
          }`}>
             <img 
               src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1887&auto=format&fit=crop" 
               alt="Peter Zeke - Performance Coach" 
               className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
             />
             <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 transition-colors duration-500 ${isDark ? 'from-peak-dark' : 'from-white'}`} />
             <div className="absolute bottom-0 left-0 p-12 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className={`font-outfit font-extrabold text-5xl uppercase italic mb-2 transition-colors duration-500 ${isDark ? 'text-white' : 'text-peak-dark'}`}>Peter Zeke</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-[2px] bg-peak-neon" />
                  <p className="text-peak-neon font-bold uppercase tracking-[0.2em] text-xs">FOUNDER | ELITE HEAD COACH</p>
                </div>
             </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border border-peak-neon/20 rounded-full animate-pulse -z-10" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-peak-neon/[0.03] blur-3xl rounded-full -z-10" />
        </div>

        <div className="md:w-1/2">
          <span className="text-peak-neon font-bold uppercase tracking-[0.4em] text-xs mb-6 block drop-shadow-sm">The Legacy</span>
          <h2 className={`font-outfit font-extrabold text-6xl md:text-8xl lg:text-[6rem] uppercase italic leading-[0.85] mb-10 tracking-tighter transition-colors duration-500 ${isDark ? 'text-white' : 'text-peak-dark'}`}>
            BORN IN <br />NZ. BUILT <br />FOR <span className="text-peak-neon drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">PEAK.</span>
          </h2>
          <p className={`text-xl font-light leading-relaxed mb-12 max-w-xl transition-colors duration-500 ${isDark ? 'text-peak-meek/60' : 'text-peak-dark/80'}`}>
            Peak from Meek was founded on a simple principle: mediocrity is a choice. We've taken the raw intensity of NZ high-performance culture and mixed it with cutting-edge fitness science to build a system for the absolute elite.
          </p>
          <div className={`flex gap-16 border-t pt-12 items-center transition-colors duration-500 ${isDark ? 'border-white/5' : 'border-peak-dark/10'}`}>
            <div>
              <p className={`font-outfit font-black text-5xl mb-1 transition-colors duration-500 ${isDark ? 'text-white' : 'text-peak-dark'}`}>10K+</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-peak-neon" />
                <p className={`uppercase text-[10px] font-bold tracking-[0.2em] transition-colors duration-500 ${isDark ? 'text-peak-meek/30' : 'text-peak-dark/50'}`}>SESSIONS COACHED</p>
              </div>
            </div>
            <div>
              <p className={`font-outfit font-black text-5xl mb-1 transition-colors duration-500 ${isDark ? 'text-white' : 'text-peak-dark'}`}>98%</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-peak-neon" />
                <p className={`uppercase text-[10px] font-bold tracking-[0.2em] transition-colors duration-500 ${isDark ? 'text-peak-meek/30' : 'text-peak-dark/50'}`}>RECOGNIZED RESULTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
