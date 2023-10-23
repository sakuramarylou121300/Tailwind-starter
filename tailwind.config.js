/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      // THIS IS MY CUSTOMIZE DESIGN
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
      }
    },
  },
  plugins: [],
}
