import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = ({ theme }) => {
  const isDark = theme === 'dark';
  const reviews = [
    { name: "SOPHIA R.", role: "Tech Founder", text: "Peter Zeke didn't just change my body; he changed my capacity for work. Peak from Meek is the real deal." },
    { name: "MARCUS T.", role: "Investment Banker", text: "Fast fitness that actually works with an 80-hour work week. Finally a plan that understands my life." }
  ];

  return (
    <section id="voices" className={`py-40 relative overflow-hidden transition-colors duration-500 border-y ${
        isDark 
            ? 'bg-peak-dark border-white/5' 
            : 'bg-slate-300 border-peak-dark/5'
    }`}>
      {/* Separation Dividers */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-peak-neon to-transparent opacity-50 shadow-[0_0_15px_rgba(57,255,20,0.5)]" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-peak-neon to-transparent opacity-50 shadow-[0_0_15px_rgba(57,255,20,0.5)]" />

      {/* Atmospheric Background with Group Workout (Increased Visibility) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop" 
          alt="Group CrossFit Workout" 
          className={`w-full h-full object-cover transition-opacity duration-500 grayscale contrast-125 mix-blend-overlay ${isDark ? 'opacity-[0.12]' : 'opacity-40'}`} 
        />
        {/* Cinematic Spotlight Gradient with Brand Color */}
        <div className={`absolute inset-0 transition-all duration-500 ${
            isDark 
                ? 'bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,14,26,1)_85%)]' 
                : 'bg-[radial-gradient(circle_at_center,transparent_0%,rgba(203,213,225,1)_85%)]'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 transition-colors duration-500">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-peak-neon font-bold uppercase tracking-[0.4em] text-xs mb-4 block drop-shadow-sm">Proven Performance</span>
          <h2 className={`font-outfit font-black text-5xl md:text-8xl uppercase italic tracking-tighter transition-colors duration-500 ${isDark ? 'text-white' : 'text-peak-dark'}`}>
            VOICES OF <br />
            <span className="text-peak-neon drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">THE PEAK.</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-12 backdrop-blur-md rounded-[40px] text-left relative group transition-all duration-500 border ${
                  isDark 
                    ? 'bg-peak-dark/30 border-white/5 hover:bg-peak-dark/50 shadow-none' 
                    : 'bg-white/80 border-peak-dark/5 shadow-lg'
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-peak-neon/5 via-transparent to-transparent rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <Quote className="text-peak-neon w-10 h-10 mb-8 opacity-40 group-hover:opacity-100 transition-opacity" />
              <p className={`font-inter text-xl mb-10 italic leading-relaxed font-light relative z-10 transition-colors duration-500 ${isDark ? 'text-peak-meek/80' : 'text-peak-dark/95'}`}>"{rev.text}"</p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-1 px-0 bg-peak-neon/30" />
                <div>
                  <p className={`font-outfit font-black uppercase tracking-widest text-sm transition-colors duration-500 ${isDark ? 'text-white' : 'text-peak-dark'}`}>{rev.name}</p>
                  <p className="text-peak-neon/60 text-[10px] uppercase font-bold tracking-[0.2em]">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
