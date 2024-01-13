// tailwind.config.js
import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'yellow-theme': '#FEC100',
        'brown-theme': '#4F464E',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};

export default config;
