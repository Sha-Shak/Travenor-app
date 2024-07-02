/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'height/90': '90vh',
      },
      width: {
        'width/90': '90vw',
      },
    },
  },
  plugins: [],
};
