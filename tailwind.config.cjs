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
        // Semantic color aliases for consistency
        'primary': '#4a7c59', // pixel-green
        'secondary': '#4a90e2', // pixel-blue
        'accent': '#e91e63', // pixel-pink
        'surface': '#181825', // dark background for surfaces
        'header': '#232336', // header/nav background
        'card': '#232336', // card background
        'text-main': '#fff',
        'text-inverse': '#181825',
        'warning': '#f4d03f', // pixel-yellow
        'danger': '#e74c3c', // pixel-red
        'success': '#4a7c59', // pixel-green
        'info': '#9b59b6', // pixel-purple
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
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        '.pixel-card': {
          border: '4px solid #000',
          backgroundColor: '#fff',
          padding: '1.5rem',
          margin: '1rem',
          boxShadow: '4px 4px 0px #000, inset 2px 2px 0px rgba(255, 255, 255, 0.3)',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
        },
        '.pixel-button': {
          border: '4px solid #000',
          backgroundColor: '#4a7c59',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          fontFamily: 'Press Start 2P, monospace',
          boxShadow: '4px 4px 0px #000, inset 2px 2px 0px rgba(255, 255, 255, 0.3)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.15s',
          cursor: 'pointer',
        },
        '.pixel-border': {
          border: '4px solid #000',
          boxShadow: '4px 4px 0px #000, inset 2px 2px 0px rgba(255, 255, 255, 0.3)',
          position: 'relative',
        },
        '.pixel-text': {
          color: '#000',
          lineHeight: '1.6',
          fontFamily: 'Press Start 2P, monospace',
          textShadow: '1px 1px 0px rgba(0, 0, 0, 0.1)',
        },
        '.pixel-title': {
          fontSize: '1.5rem',
          textAlign: 'center',
          marginBottom: '1.5rem',
          color: '#9b59b6',
          fontFamily: 'Press Start 2P, monospace',
          textShadow: '2px 2px 0px rgba(0, 0, 0, 0.3)',
        },
        '.pixel-subtitle': {
          fontSize: '1.125rem',
          textAlign: 'center',
          marginBottom: '1rem',
          color: '#e67e22',
          fontFamily: 'VT323, monospace',
          textShadow: '1px 1px 0px rgba(0, 0, 0, 0.2)',
        },
        '.bg-pixel-pattern': {
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        },
        '.glow-pink': {
          boxShadow: '0 0 20px rgba(233, 30, 99, 0.5)',
        },
        '.glow-blue': {
          boxShadow: '0 0 20px rgba(74, 144, 226, 0.5)',
        },
        '.glow-green': {
          boxShadow: '0 0 20px rgba(74, 124, 89, 0.5)',
        },
        '.memory-card': {
          aspectRatio: '1',
          borderRadius: '0.5rem',
          border: '2px solid #9b59b6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
        },
        '.memory-card.flipped': {
          backgroundColor: '#e91e63',
          color: '#fff',
        },
        '.memory-card.matched': {
          backgroundColor: '#4a7c59',
          color: '#fff',
        },
        '.memory-card.unflipped': {
          backgroundColor: '#9b59b6',
          color: 'transparent',
        },
        '.memory-card.unflipped:hover': {
          backgroundColor: '#e91e63',
        },
        '.quiz-option': {
          border: '4px solid #000',
          backgroundColor: '#9b59b6',
          color: '#fff',
          padding: '0.75rem',
          width: '100%',
          textAlign: 'left',
          fontFamily: 'Press Start 2P, monospace',
          boxShadow: '4px 4px 0px #000, inset 2px 2px 0px rgba(255, 255, 255, 0.3)',
          transition: 'all 0.2s ease',
          cursor: 'pointer',
        },
        '.quiz-option:hover': {
          backgroundColor: '#e91e63',
          transform: 'translateX(5px)',
        },
        '.language-button': {
          border: '4px solid #000',
          backgroundColor: '#4a7c59',
          color: '#fff',
          padding: '0.25rem 0.5rem',
          fontSize: '0.75rem',
          fontFamily: 'Press Start 2P, monospace',
          boxShadow: '4px 4px 0px #000, inset 2px 2px 0px rgba(255, 255, 255, 0.3)',
          minWidth: '32px',
          cursor: 'pointer',
        },
        '.language-button.active': {
          backgroundColor: '#4a7c59',
          color: '#fff',
        },
        '.language-button.inactive': {
          backgroundColor: '#fff',
          color: '#4a7c59',
        },
        '.music-player-card': {
          border: '4px solid #000',
          backgroundColor: '#fff',
          padding: '1.5rem',
          margin: '1rem',
          boxShadow: '4px 4px 0px #000, inset 2px 2px 0px rgba(255, 255, 255, 0.3)',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #4a7c59 0%, #4a90e2 100%)',
          maxWidth: '400px',
          margin: '0 auto',
        },
        '.music-controls': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
        },
        '.music-button': {
          border: '4px solid #000',
          backgroundColor: '#4a7c59',
          color: '#fff',
          padding: '0.5rem 0.75rem',
          fontFamily: 'Press Start 2P, monospace',
          boxShadow: '4px 4px 0px #000, inset 2px 2px 0px rgba(255, 255, 255, 0.3)',
          minWidth: '44px',
          minHeight: '44px',
          cursor: 'pointer',
        },
      });
    },
  ],
};
