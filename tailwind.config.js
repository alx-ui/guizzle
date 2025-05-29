/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'Noto Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        guizzle: '#0a32a4',
        'guizzle-light': '#6f8be1',
        'sky-light': '#eff6fb',
        'blue-mid': '#b6c8f0',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-guizzle': 'radial-gradient(circle at bottom right, #6f8be1, #071f65)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        bento: '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
