/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    '*.html',
    '_layouts/**/*.html',
    '_includes/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          800: '#0f0f0f',
        },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

