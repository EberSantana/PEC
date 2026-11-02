/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'if-green': '#2F9E41',
        'if-red': '#CD191E',
        'if-dark': '#1e293b',
      }
    },
  },
  plugins: [],
}