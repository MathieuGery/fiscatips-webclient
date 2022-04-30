const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: colors.blue,
        test: colors.indigo
      },
    },
  },
  plugins: [],
}
