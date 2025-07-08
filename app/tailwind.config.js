/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        truth: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
        },
        dare: {
          50: '#fdf2f8',
          100: '#fce7f3',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
        }
      },
      fontFamily: {
        'game': ['Fredoka One', 'cursive'],
        'card': ['Poppins', 'sans-serif'],
      },
      animation: {
        'card-flip': 'cardFlip 0.6s ease-in-out',
        'card-deal': 'cardDeal 0.8s ease-out',
        'bounce-soft': 'bounceSoft 0.5s ease-in-out',
      },
      keyframes: {
        cardFlip: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(90deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
        cardDeal: {
          '0%': { transform: 'scale(0) rotate(180deg)', opacity: '0' },
          '50%': { transform: 'scale(1.1) rotate(90deg)', opacity: '0.8' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
