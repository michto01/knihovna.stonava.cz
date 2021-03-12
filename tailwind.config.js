const colors = require('tailwindcss/colors');


module.exports = {
  darkMode: 'class',
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.vue',
    ],
    options: {
      whitelistPatterns: [/^swiper-/],
      whitelistPatternsChildren: [/^swiper-/],
      safelist: {
        deep: [/^swiper-/]
      }
    }
  },
  theme: {
    extend: {
      colors: {
        navy: colors.blueGray,
        coal: colors.gray,
        teal: colors.teal,
      },
      fontFamily: {
        'sans': ['Nunito', "ui-sans-serif", 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      },
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
