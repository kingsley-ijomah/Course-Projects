module.exports = {
  content: ['./public/**/*.{html,js,css}'],
  theme: {
    extend: {
      colors: {
        dark: '#071310',
        white: '#ffffff',
        gray20: '#f2f3f7',
        gray40: '#e2e4ed',
        gray60: '#797878',
        primary20: '#ecf8f5',
        primary40: '#a3dfd0',
        primary60: '#47bea1',
        primary80: '#2f846f',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        montserrat100: ['Montserrat100'],
        montserrat200: ['Montserrat200'],
        montserrat300: ['Montserrat300'],
        montserrat400: ['Montserrat400'],
        inter: ['Inter'],
        inter100: ['Inter100'],
        inter200: ['Inter200'],
        inter300: ['Inter300'],
        inter400: ['Inter400'],
      },
    },
  },
  plugins: [],
};
