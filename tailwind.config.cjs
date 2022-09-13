/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: ['business'],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
