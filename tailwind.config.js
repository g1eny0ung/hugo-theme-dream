/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html'],
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['garden', 'forest'],
    darkTheme: "forest",
  }
}
