import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, Target } from 'lucide-react';

const Benefits = ({ theme }) => {
  const isDark = theme === 'dark';
  const benefits = [
    { icon: <Zap className="w-8 h-8" />, title: "Explosive Energy", desc: "Optimized nutrition protocols for high-performance CrossFit." },
    { icon: <Target className="w-8 h-8" />, title: "Precision Training", desc: "Coaching that adapts to your schedule and goals." },
    { icon: <Rocket className="w-8 h-8" />, title: "Peak Results", desc: "The shortest path to the strongest version of you." }
  ];

  return (
    <section id="benefits" className={`py-40 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-peak-dark' : 'bg-slate-200'}`}>
      {/* Brand-consistent Subtle Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
          alt="Performance culture" 
          className={`w-full h-full object-cover grayscale transition-opacity duration-500 ${isDark ? 'opacity-[0.08]' : 'opacity-50'}`}
        />
        <div className={`absolute inset-0 transition-all duration-500 ${
          isDark 
            ? 'bg-gradient-to-b from-peak-dark via-transparent to-peak-dark' 
            : 'bg-gradient-to-tr from-peak-neon/[0.12] via-slate-200/90 to-peak-accent/[0.12]'
        }`} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 transition-colors duration-500">
        <div className="mb-24 text-center md:text-left">
          <span className="text-peak-neon font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Engineered for Success</span>
          <h2 className={`font-outfit font-extrabold text-6xl md:text-8xl uppercase italic tracking-tighter leading-none transition-colors duration-500 ${isDark ? 'text-white' : 'text-peak-dark'}`}>
            WHY WE LEAD <br />
            <span className={`whitespace-nowrap transition-colors duration-500 ${isDark ? 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]' : 'text-peak-dark'}`}>THE PACK.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`backdrop-blur-md border transition-all duration-500 p-12 rounded-[32px] relative group shadow-sm ${
                isDark 
                  ? 'bg-white/[0.03] border-white/10 hover:bg-white/[0.05] shadow-none' 
                  : 'bg-white/80 border-peak-dark/5 hover:bg-white shadow-md'
              }`}
            >
              <div className="text-peak-neon mb-8 transform transition-transform group-hover:scale-110 duration-500 bg-peak-neon/10 w-20 h-20 flex items-center justify-center rounded-2xl">
                {benefit.icon}
              </div>
              <h4 className={`font-outfit font-black text-3xl mb-4 italic uppercase tracking-tight transition-colors duration-500 ${isDark ? 'text-white' : 'text-peak-dark'}`}>{benefit.title}</h4>
              <p className={`text-lg leading-relaxed font-light transition-colors duration-500 ${isDark ? 'text-peak-meek/60' : 'text-peak-dark/80'}`}>{benefit.desc}</p>
              <div className={`absolute top-8 right-10 font-outfit font-black text-8xl transition-all duration-500 ${isDark ? 'text-white opacity-[0.03] group-hover:opacity-[0.08]' : 'text-peak-dark opacity-[0.05] group-hover:opacity-[0.1]'}`}>
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
