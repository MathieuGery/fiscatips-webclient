const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:  colors.blue,
        main_bg_color: colors.red,
        caca: colors.red
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
