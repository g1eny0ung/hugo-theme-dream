/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              color: "var(--tw-prose-body)",
              fontWeight: 'normal',
              fontStyle: 'normal',
            },
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
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  darkMode: ['selector'],
  daisyui: {
    themes: ['emerald', 'forest'],
    darkTheme: 'forest',
  },
}
