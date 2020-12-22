const colors = require('tailwindcss/colors');


module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: colors.blueGray,
        coal: colors.gray,
        teal: colors.teal,
      }
    },
  },
  variants: {
    extend: {
      ringColor: ['hover'],
      ringWidth: ['hover']
    },
    transition: [ 'motion-safe'],
    transform: ['motion-safe']
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
