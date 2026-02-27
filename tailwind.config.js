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
        resort: {
          light: '#fdfaf1', 
          stone: '#a68a70', 
          wood: '#1a120b',  
          accent: '#c1854d', 
          leaf: '#1e2b1f',   
          sage: '#7a8a4b'    
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'], 
        sans: ['Inter', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}