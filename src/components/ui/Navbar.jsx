import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Twitter, Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'THE PROBLEM', href: '#problem' },
    { name: 'THE LEAD', href: '#benefits' },
    { name: 'THE BLUEPRINT', href: '#process' },
    { name: 'VOICES', href: '#voices' },
    { name: 'THE LEGACY', href: '#legacy' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? `py-4 backdrop-blur-xl border-b transition-colors duration-500 ${
              isDark 
                ? 'bg-peak-dark/80 border-white/5 shadow-2xl' 
                : 'bg-white/80 border-peak-dark/5 shadow-lg'
            }` 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="group">
          <h2 className={`font-outfit font-extrabold text-2xl uppercase italic tracking-tighter leading-none transition-colors duration-500 ${isDark ? 'text-white' : 'text-peak-dark'}`}>
            PEAK FROM <span className="text-peak-neon group-hover:drop-shadow-[0_0_10px_rgba(57,255,20,0.6)] transition-all">MEEK</span>
          </h2>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <div className={`flex gap-8 items-center border-r pr-8 transition-colors duration-500 ${isDark ? 'border-white/10' : 'border-peak-dark/10'}`}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-outfit font-black text-[10px] uppercase tracking-[0.3em] transition-colors duration-500 hover:text-peak-neon ${
                  isDark ? 'text-white/60' : 'text-peak-dark/80'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4 items-center mr-4">
              <a href="#" className={`transition-all hover:scale-110 hover:text-peak-neon ${isDark ? 'text-white/40' : 'text-peak-dark/40'}`}><Instagram size={18} /></a>
              <a href="#" className={`transition-all hover:scale-110 hover:text-peak-neon ${isDark ? 'text-white/40' : 'text-peak-dark/40'}`}><Twitter size={18} /></a>
            </div>

            {/* Modern Subtle Switcher */}
            <button 
              onClick={toggleTheme}
              className={`relative w-14 h-7 rounded-full p-1 transition-all duration-500 ${
                isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-peak-dark/5 hover:bg-peak-dark/10'
              }`}
            >
              <div 
                className={`absolute top-1 left-1 w-5 h-5 rounded-full shadow-md transition-transform duration-500 flex items-center justify-center ${
                  isDark ? 'translate-x-7 bg-peak-dark' : 'translate-x-0 bg-white'
                }`}
              >
                {isDark ? (
                  <Moon size={12} className="text-peak-neon" fill="currentColor" />
                ) : (
                  <Sun size={12} className="text-peak-neon" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className={`w-10 h-10 flex items-center justify-center rounded-full text-peak-neon transition-colors duration-500 ${
              isDark ? 'bg-white/10' : 'bg-peak-dark/5'
            }`}
          >
            {isDark ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 transition-colors duration-500 ${isDark ? 'text-white' : 'text-peak-dark'}`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-b overflow-hidden transition-colors duration-500 ${
              isDark ? 'bg-peak-dark border-white/10' : 'bg-white border-peak-dark/10'
            }`}
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-outfit font-black text-xl uppercase tracking-widest hover:text-peak-neon transition-colors duration-500 ${
                    isDark ? 'text-white' : 'text-peak-dark'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className={`flex gap-8 pt-6 border-t transition-colors duration-500 ${isDark ? 'border-white/5' : 'border-peak-dark/5'}`}>
                <a href="#" className={`hover:text-peak-neon transition-colors ${isDark ? 'text-white/40' : 'text-peak-dark/40'}`}><Instagram size={24} /></a>
                <a href="#" className={`hover:text-peak-neon transition-colors ${isDark ? 'text-white/40' : 'text-peak-dark/40'}`}><Twitter size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
