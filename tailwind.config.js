/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      listStyleType: {
        square: 'square'
      },
      backgroundImage: {
        'position': "url('/assets/imgs/position.svg')",

      },
      colors:{
        'footer': "#04102a",
        'footerText': "#8A99B4"
      }
    },
  },
  plugins: [],
}

