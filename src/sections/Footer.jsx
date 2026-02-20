import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <footer className={`py-24 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-peak-dark' : 'bg-slate-50'}`}>
      <div className={`absolute top-0 left-0 w-full h-[1px] transition-colors duration-500 ${isDark ? 'bg-white/5' : 'bg-peak-dark/5'}`} />
      <div className="max-w-7xl mx-auto px-4 relative z-10 transition-colors duration-500">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-xs">
            <h2 className={`font-outfit font-extrabold text-3xl uppercase italic tracking-tighter mb-4 transition-colors duration-500 ${isDark ? 'text-white' : 'text-peak-dark'}`}>
              PEAK FROM <span className="text-peak-neon">MEEK.</span>
            </h2>
            <p className={`text-sm leading-relaxed mb-8 transition-colors duration-500 ${isDark ? 'text-peak-meek/30' : 'text-peak-dark/60'}`}>
              Engineered high-performance CrossFit and nutrition systems for ultra-successful professionals. Built for dominance, not mediocrity.
            </p>
            <div className="flex gap-6">
              <a href="#" className={`transition-all hover:scale-110 hover:text-peak-neon ${isDark ? 'text-peak-meek/20' : 'text-peak-dark/40'}`}><Instagram size={24} /></a>
              <a href="#" className={`transition-all hover:scale-110 hover:text-peak-neon ${isDark ? 'text-peak-meek/20' : 'text-peak-dark/40'}`}><Twitter size={24} /></a>
              <a href="#" className={`transition-all hover:scale-110 hover:text-peak-neon ${isDark ? 'text-peak-meek/20' : 'text-peak-dark/40'}`}><Facebook size={24} /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
            <div>
              <h4 className={`font-outfit font-black text-xs uppercase tracking-[0.3em] mb-6 transition-colors duration-500 ${isDark ? 'text-white' : 'text-peak-dark'}`}>Program</h4>
              <ul className={`space-y-4 text-xs font-bold uppercase tracking-widest transition-colors duration-500 ${isDark ? 'text-peak-meek/30' : 'text-peak-dark/50'}`}>
                <li><a href="#" className="hover:text-peak-neon transition-colors">CrossFit Elite</a></li>
                <li><a href="#" className="hover:text-peak-neon transition-colors">Fast Nutrition</a></li>
                <li><a href="#" className="hover:text-peak-neon transition-colors">Digital Audit</a></li>
              </ul>
            </div>
            <div>
              <h4 className={`font-outfit font-black text-xs uppercase tracking-[0.3em] mb-6 transition-colors duration-500 ${isDark ? 'text-white' : 'text-peak-dark'}`}>Company</h4>
              <ul className={`space-y-4 text-xs font-bold uppercase tracking-widest transition-colors duration-500 ${isDark ? 'text-peak-meek/30' : 'text-peak-dark/50'}`}>
                <li><a href="#" className="hover:text-peak-neon transition-colors">The Legacy</a></li>
                <li><a href="#" className="hover:text-peak-neon transition-colors">Voices</a></li>
                <li><a href="#" className="hover:text-peak-neon transition-colors">Contacts</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className={`font-outfit font-black text-xs uppercase tracking-[0.3em] mb-6 transition-colors duration-500 ${isDark ? 'text-white' : 'text-peak-dark'}`}>Legal</h4>
              <ul className={`space-y-4 text-xs font-bold uppercase tracking-widest transition-colors duration-500 ${isDark ? 'text-peak-meek/30' : 'text-peak-dark/50'}`}>
                <li><a href="#" className="hover:text-peak-neon transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-peak-neon transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-500 ${isDark ? 'border-white/5' : 'border-peak-dark/5'}`}>
          <p className={`text-[10px] uppercase font-bold tracking-[0.2em] transition-colors duration-500 ${isDark ? 'text-peak-meek/20' : 'text-peak-dark/20'}`}>© 2024 PETER ZEKE NZ. ALL RIGHTS RESERVED.</p>
          <p className={`text-[10px] uppercase font-bold tracking-[0.2em] transition-colors duration-500 ${isDark ? 'text-peak-meek/20' : 'text-peak-dark/20'}`}>BUILT FOR DOMINANCE.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
