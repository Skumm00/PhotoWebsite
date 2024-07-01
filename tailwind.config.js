/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arimo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

