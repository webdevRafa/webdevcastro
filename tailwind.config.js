/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#0445DA',
      'offwhite': '#E4E4E4',
      'midnight': '#070709',
      'dark-blue': '#30345D',
      'med-dark': '#17171E',
      'misty': '#adb5bd',
      'golden': '#f9ca24',
      'arctic': '#4db6ac',
      'white': '#ffffff',
      'gray': '#262628',
      'med-gray': '#454547',
      'light-gray': '#646465'
    },
    extend: {
      fontFamily: {
        'Bebas': ['Bebas'],
        'Madimi': ['Madimi'],
        'Josefin': ['Josefin'],
      },
    },
  },
  plugins: [],
}

