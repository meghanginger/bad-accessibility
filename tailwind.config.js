const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        cream: "#F5F5F5",
        light_blue: "#559CAD",
        dark_blue: "#4A5899",
        berry: "#8C5383",
        pink: "#92374D",
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    }
  },
  variants: {
    extend: {
      transitionDuration: ['hover', 'focus'],
    },
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-nested"),
    require("autoprefixer"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/custom-forms"),
  ],
}
