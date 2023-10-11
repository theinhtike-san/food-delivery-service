/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,css,js}",
    "index.html",
    "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      'agdasima': ['Agdasima', 'sans- serif'],
      'freehand': ['Freehand', 'cursive'],
      'roboto': ['Roboto', 'sans - serif'],
    },

    extend: {
      colors: {
        primary: {
          100: "#f7d3d3",
          200: "#efa7a7",
          300: "#e77b7b",
          400: "#df4f4f",
          500: "#d72323",
          600: "#ac1c1c",
          700: "#811515",
          800: "#560e0e",
          900: "#2b0707"
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

