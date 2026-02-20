/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        peak: {
          neon: "#39FF14", // Pulse-inspired neon green
          accent: "#C084FC", // Purple accent
          dark: "#090E1A", // Original Deep Charcoal
          meek: "#F1F5F9", // Slate-100
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      clipPath: {
        'diagonal-right': 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
        'diagonal-left': 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)',
      }
    },
  },
  plugins: [],
}
