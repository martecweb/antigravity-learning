import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const Hero = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section className={`relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-peak-dark' : 'bg-slate-300'}`}>
      {/* Robust Background Layering */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym context" 
          className={`w-full h-full object-cover grayscale transition-opacity duration-500 ${isDark ? 'opacity-40' : 'opacity-60'}`}
        />
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          isDark 
            ? 'bg-gradient-to-b from-peak-dark/80 via-peak-dark/40 to-peak-dark' 
            : 'bg-gradient-to-b from-slate-300/50 via-transparent to-slate-400/60'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 transition-colors duration-500">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="font-outfit font-bold text-peak-neon text-sm uppercase tracking-[0.4em] mb-6 block drop-shadow-sm">
            Peter Zeke | CrossFit & Fast Fitness | Powered by GitHub MCP
          </span>
          <h1 className={`font-outfit font-extrabold text-7xl md:text-9xl lg:text-[10rem] leading-[0.85] tracking-tighter mb-8 italic uppercase transition-colors duration-500 ${isDark ? 'text-white' : 'text-peak-dark'}`}>
            FROM MEEK <br />
            <span className="text-peak-neon drop-shadow-[0_0_20px_rgba(57,255,20,0.5)]">TO PEAK</span>
          </h1>
          <p className={`font-inter text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light transition-colors duration-500 ${isDark ? 'text-peak-meek/70' : 'text-peak-dark'}`}>
            Engineered CrossFit coaching and ultra-efficient nutrition <br className="hidden md:block" /> 
            for professionals who demand nothing less than <span className={`font-bold transition-colors ${isDark ? 'text-white' : 'text-peak-dark'}`}>The Summit.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button className="bg-peak-neon text-peak-dark font-black px-14 py-6 text-xl hover:scale-105 transition-transform">
              Start Free Trial
            </Button>
            <Button 
                primary={false} 
                theme={theme}
                className="px-14 py-6 text-xl transition-all font-black"
            >
              OUR PROGRAMME
            </Button>
          </div>
        </motion.div>
      </div>

      {/* High-Performance Floating Stats Indicator */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-1/4 right-[5%] lg:right-[10%] p-6 backdrop-blur-2xl border rounded-2xl hidden lg:block z-20 transition-all duration-500 ${
            isDark 
                ? 'bg-white/[0.03] border-white/10' 
                : 'bg-white/60 border-peak-dark/10 shadow-2xl'
        }`}
      >
        <div className="flex items-center gap-4 mb-2">
          <div className="w-3 h-3 rounded-full bg-peak-neon animate-pulse" />
          <span className="text-peak-neon font-outfit font-bold text-xs uppercase tracking-widest">Live Performance</span>
        </div>
        <div className={`font-outfit font-black text-4xl mb-1 transition-colors ${isDark ? 'text-white' : 'text-peak-dark'}`}>98%</div>
        <div className={`text-[10px] uppercase font-bold tracking-tighter italic transition-colors ${isDark ? 'text-peak-meek/40' : 'text-peak-dark/60'}`}>Summit Success Rate</div>
      </motion.div>
    </section>
  );
};

export default Hero;
