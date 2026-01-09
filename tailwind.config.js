/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#064e3b',
        },
        accent: {
          DEFAULT: '#34d399',
        },
      },
    },
  },
  plugins: [],
};

