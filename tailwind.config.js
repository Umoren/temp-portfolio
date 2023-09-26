/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sp': '360px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        inter: ['Inter', "sans-serif"]
      },
      colors: {
        "layout": '#F4EEE0',
        "projects": '#363333',
        "letter": '#F4EEE0'
      },
      padding: {
        '40': '25px'
      }
    },
  },
  plugins: [],
}