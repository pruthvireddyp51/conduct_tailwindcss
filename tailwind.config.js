
module.exports = {
  purge: ["src/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['"Inter"', 'sans-serif'],
        'libre': ['"Libre Caslon Text"', 'serif']
      },
      colors:{
        brandLight: '#FFF7F1',
        brand: '#DB3700',
        darkBlue: '#1A0D3F',
        titleBrown: '#681E05',
        titleBrownLite: '#A37D61'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
