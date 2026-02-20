import React from 'react';
import { motion } from 'framer-motion';

const PainPoints = ({ theme }) => {
  const isDark = theme === 'dark';
  const points = [
    { title: "STAGNANT PROGRESS", desc: "You're training hard but the scale and performance aren't budging." },
    { title: "POOR RECOVERY", desc: "Burnt out before the week even starts. No energy left for life." },
    { title: "GENERIC PLANS", desc: "Cookie-cutter routines that ignore your professional lifestyle." }
  ];

  return (
    <section id="problem" className={`py-32 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-peak-dark' : 'bg-slate-50'}`}>
      {/* Brand-consistent Subtle Gradient */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          isDark 
            ? 'bg-gradient-to-b from-peak-dark via-transparent to-peak-dark' 
            : 'bg-gradient-to-b from-slate-50 via-transparent to-slate-100'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 transition-colors duration-500">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`p-10 border-l-[3px] transition-all group duration-500 rounded-r-2xl ${
                isDark 
                  ? 'border-peak-neon/30 bg-white/[0.02] hover:bg-white/[0.04]' 
                  : 'bg-white border-peak-neon shadow-lg hover:shadow-xl'
              }`}
            >
              <h3 className={`font-outfit font-black text-2xl mb-4 italic uppercase tracking-tighter transition-colors duration-500 ${isDark ? 'text-white' : 'text-peak-dark'}`}>{point.title}</h3>
              <p className={`text-lg leading-relaxed font-light transition-colors duration-500 ${isDark ? 'text-peak-meek/60' : 'text-peak-dark/80'}`}>{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
