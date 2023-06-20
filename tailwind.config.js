/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        capcomBlue: '#2A5DAA',
        capcomRed: '#B3251F',
        capcomGreen: '#366E24',
        capcomBlack: '#090002',
        capcomYellow: '#FFCB08',
        capcomGray: '#D9D9D9',
        capcomWhite: '#FFFFFF',
      },
      grayscale: {
        50: '50%',
        60: '60%',
        70: '70%',
        80: '80%',
        90: '90%',
      },
    },
  },
  plugins: [],
}
