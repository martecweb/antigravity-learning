import React, { useState, useEffect } from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './sections/Hero';
import PainPoints from './sections/PainPoints';
import Benefits from './sections/Benefits';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import About from './sections/About';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={theme}>
      <div className="min-h-screen bg-white transition-colors duration-500 dark:bg-peak-dark text-peak-dark dark:text-white">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="overflow-hidden">
          <Hero theme={theme} />
          <PainPoints theme={theme} />
          <Benefits theme={theme} />
          <Process theme={theme} />
          <Testimonials theme={theme} />
          <About theme={theme} />
          <FinalCTA theme={theme} />
          <Footer theme={theme} />
        </main>
      </div>
    </div>
  );
}

export default App;
