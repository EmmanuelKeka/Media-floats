/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg': {'max': '1100px'},
      'lm': {'max': '860px'}
    },
    extend: {
    },
    minWidth: {
      '40rem': '50%',
    }
  },
  plugins: [],
}
