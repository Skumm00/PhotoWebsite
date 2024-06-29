/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage:{
        'hero-body':'url(""./public/joshua.jpg")'
      }
    },
  },
  plugins: [],
}

