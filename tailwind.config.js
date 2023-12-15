/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        guizzle: '#cc2229',
      },
    },
  },
  plugins: [],
};
