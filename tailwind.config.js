/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        guizzle: '#6b46c1',
      },
      backgroundImage: {
        guizzleBg: "url('/profile.jpeg')",
      },
    },
  },
};
