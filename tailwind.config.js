/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'lightning-main': 'lightning 1.5s ease-in-out infinite',
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
         marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        lightning: {
          '0%': { 
            opacity: '0.3',
            transform: 'scale(0.8)',
            filter: 'brightness(1) drop-shadow(0 0 10px rgba(37, 99, 235, 0.5))'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.2)',
            filter: 'brightness(1.5) drop-shadow(0 0 30px rgba(37, 99, 235, 0.9))'
          },
          '100%': { 
            opacity: '0.3',
            transform: 'scale(0.8)',
            filter: 'brightness(1) drop-shadow(0 0 10px rgba(37, 99, 235, 0.5))'
          }
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 