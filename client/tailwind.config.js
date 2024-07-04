// tailwind.config.js

export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    height: {
      '90vh': '90vh',
    },
    width: {
      '90vw': '90vw',
    },
    colors: {
      textColor: '#1B1E28',
      primaryColor: '#24BAEC',
      primaryColorDarkShade: '#14AAFF',
      actionColor: '#FF7029',
      subTextColor: '#7D848D',
      lightGrayColor: '#F7F7F9',
    },
    fontFamily: {
      sans: ['Roboto'],
    },
  },
};
export const plugins = [];
