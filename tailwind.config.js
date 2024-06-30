/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            p: {
              wordBreak: 'break-word',
            },
            pre: null,
            'pre code': null,
            'pre code::before': null,
            'pre code::after': null,
            code: null,
            'code::before': null,
            'code::after': null,
          },
        },
      },
    },
  },
  safelist: ['dark:border-b'],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['emerald', 'forest'],
    darkTheme: 'forest',
  },
}
