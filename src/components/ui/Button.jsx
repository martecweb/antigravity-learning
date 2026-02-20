import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, primary = true, className = "", theme = "dark", ...props }) => {
  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-8 py-4 rounded-full font-outfit font-extrabold text-sm uppercase tracking-tighter transition-all
        ${primary 
          ? 'bg-peak-neon text-peak-dark shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)]' 
          : `bg-transparent border-2 hover:bg-opacity-10 transition-all ${
              isDark 
                ? 'border-white text-white hover:bg-white/10' 
                : 'border-peak-dark text-peak-dark hover:bg-peak-dark/10'
            }`}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
