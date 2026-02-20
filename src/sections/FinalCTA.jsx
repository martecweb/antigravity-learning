import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const FinalCTA = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="cta" className={`py-40 relative overflow-hidden flex items-center justify-center transition-colors duration-500 ${isDark ? 'bg-peak-dark' : 'bg-slate-300'}`}>
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
          alt="Mountain Summit" 
          className={`w-full h-full object-cover transition-opacity duration-500 grayscale ${isDark ? 'opacity-20 brightness-[0.4]' : 'opacity-40 brightness-[0.8]'}`}
        />
        {/* Cinematic Spotlight Gradient */}
        <div className={`absolute inset-0 transition-all duration-500 ${
            isDark 
                ? 'bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,14,26,1)_90%)]' 
                : 'bg-[radial-gradient(circle_at_center,transparent_0%,rgba(203,213,225,1)_90%)]'
        }`} />
      </div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`font-outfit font-black text-7xl md:text-[10rem] uppercase italic tracking-tighter mb-12 leading-[0.85] transition-colors duration-500 ${isDark ? 'text-white' : 'text-peak-dark'}`}>
            READY TO <br />OWN THE <span className="text-peak-neon drop-shadow-[0_0_30px_rgba(57,255,20,0.6)]">SUMMIT?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-peak-neon text-peak-dark py-8 px-20 text-2xl font-black hover:scale-105 transition-transform shadow-[0_0_50px_rgba(57,255,20,0.4)]">
              Claim Your Free Trial
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Modern geometric accents - Polished & Subtle */}
      <div className={`absolute inset-x-0 bottom-0 h-64 transition-all duration-500 z-10 ${isDark ? 'bg-gradient-to-t from-peak-dark/95 to-transparent' : 'bg-gradient-to-t from-slate-300/95 to-transparent'}`} />

      {/* Decorative lines */}
      {[...Array(5)].map((_, i) => (
        <div 
           key={i}
           className="absolute w-full h-px bg-peak-dark/5 dark:bg-white/5 transform -rotate-12 transition-colors" 
           style={{ top: `${i * 20}%` }}
        />
      ))}
    </section>
  );
};

export default FinalCTA;
