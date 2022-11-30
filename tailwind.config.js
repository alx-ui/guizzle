const plugin = require('tailwindcss/plugin');

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
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'backdrop-blur': (value) => {
            const cssBackdropFilterValue = [
              'var(--tw-backdrop-blur,)',
              'var(--tw-backdrop-brightness,)',
              'var(--tw-backdrop-contrast,)',
              'var(--tw-backdrop-grayscale,)',
              'var(--tw-backdrop-hue-rotate,)',
              'var(--tw-backdrop-invert,)',
              'var(--tw-backdrop-opacity,)',
              'var(--tw-backdrop-saturate,)',
              'var(--tw-backdrop-sepia,)',
            ].join(' ');

            return {
              '--tw-backdrop-blur': `blur(${value})`,
              '@defaults backdrop-filter': {},
              'backdrop-filter': cssBackdropFilterValue,
            };
          },
        },
        { values: theme('backdropBlur') },
      );
    }),
  ],
};
