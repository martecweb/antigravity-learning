import React from 'react';
import { motion } from 'framer-motion';

const Process = ({ theme }) => {
  const isDark = theme === 'dark';
  const steps = [
    { num: "01", title: "STRATEGIZE", desc: "Digital audit of your current physical baseline and lifestyle constraints." },
    { num: "02", title: "OPTIMIZE", desc: "Custom-built CrossFit & Fast Fitness protocols that fit your life." },
    { num: "03", title: "EXECUTE", desc: "High-intensity coaching that pushes you past your perceived limits." }
  ];

  return (
    <section id="process" className={`py-40 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-peak-dark' : 'bg-slate-100'}`}>
      {/* Precision Brand Overlay */}
      <div className={`absolute inset-0 transition-all duration-500 z-0 ${
        isDark 
          ? 'bg-gradient-to-b from-peak-dark via-transparent to-peak-dark' 
          : 'bg-gradient-to-b from-slate-100 via-transparent to-slate-100'
      }`} />
      
      {/* Subtle Technical Background */}
      <div className={`absolute inset-x-0 top-0 h-full z-0 grayscale mix-blend-overlay transition-opacity duration-500 ${isDark ? 'opacity-[0.02]' : 'opacity-[0.15]'}`}>
        <img 
          src="https://images.unsplash.com/photo-1590239068512-63200af3971e?q=80&w=1974&auto=format&fit=crop" 
          alt="Gym detail" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 transition-colors duration-500">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <span className="text-peak-neon font-bold uppercase tracking-[0.4em] text-xs mb-4 block">The Methodology</span>
            <h2 className={`font-outfit font-extrabold text-7xl md:text-[8rem] uppercase italic tracking-tighter leading-[0.85] mb-8 transition-colors duration-500 ${isDark ? 'text-white' : 'text-peak-dark'}`}>
              THE <br /><span className="text-peak-neon">BLUEPRINT.</span>
            </h2>
            <p className={`text-xl font-light leading-relaxed max-w-xl transition-colors duration-500 ${isDark ? 'text-peak-meek/60' : 'text-peak-dark/60'}`}>
              We don't guess. We engineer results through a systematic, data-driven approach to human high-performance.
            </p>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-10 group p-8 rounded-[40px] border transition-all duration-500 shadow-sm ${
                    isDark 
                        ? 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] shadow-none' 
                        : 'bg-white border-peak-dark/5 hover:bg-slate-50'
                }`}
              >
                <div className="font-outfit font-black text-6xl md:text-8xl text-outline-neon transition-all group-hover:drop-shadow-[0_0_15px_rgba(57,255,20,0.4)] duration-500">
                  {step.num}
                </div>
                <div>
                  <h4 className={`font-outfit font-black text-3xl mb-2 italic uppercase tracking-tight transition-colors duration-500 ${isDark ? 'text-white' : 'text-peak-dark'}`}>{step.title}</h4>
                  <p className={`text-lg leading-relaxed transition-colors duration-500 ${isDark ? 'text-peak-meek/50' : 'text-peak-dark/80'}`}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .text-outline-neon {
          -webkit-text-stroke: 1px rgba(57, 255, 20, 0.4);
          color: transparent;
        }
        .group:hover .text-outline-neon {
          -webkit-text-stroke: 2px rgba(57, 255, 20, 1);
          color: #39FF14;
        }
      `}} />
    </section>
  );
};

export default Process;
