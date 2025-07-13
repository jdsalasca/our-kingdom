/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['Press Start 2P', 'monospace'],
        retro: ['VT323', 'monospace'],
      },
      colors: {
        'pixel-green': '#4a7c59',
        'pixel-brown': '#8b4513',
        'pixel-blue': '#4a90e2',
        'pixel-yellow': '#f4d03f',
        'pixel-red': '#e74c3c',
        'pixel-purple': '#9b59b6',
        'pixel-orange': '#e67e22',
        'pixel-pink': '#e91e63',
      },
      animation: {
        'pixel-bounce': 'pixel-bounce 0.6s ease-in-out',
        'pixel-fade': 'pixel-fade 0.5s ease-in-out',
        'pixel-slide': 'pixel-slide 0.3s ease-in-out',
      },
      keyframes: {
        'pixel-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pixel-fade': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pixel-slide': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
