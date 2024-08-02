module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable dark mode support
  theme: {
    extend: {
      fontFamily: {
        'fira': "Fira Sans, sans-serif",
        'metal': "Metal Mania, system-ui",
        'merienda': "Merienda, cursive",
      },
      container: {
        center: true,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
