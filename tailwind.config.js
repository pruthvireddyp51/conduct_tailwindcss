
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
        titleBrownLite: '#A37D61',
        titleBrownMedium: '#DBA15F',
        tBlue:'rgba(96, 114, 226, 0.128196)',
        tPink:'rgba(152, 43, 190, 0.128196)',
        tOrange:'rgba(226, 98, 98, 0.128196)',
        tGreen:'rgba(70, 194, 125, 0.128196)',
        tGrey:'rgba(67, 77, 144, 0.128196)',
        tYellow:'rgba(231, 153, 65, 0.128196)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
