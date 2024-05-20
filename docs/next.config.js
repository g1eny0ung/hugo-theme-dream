const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

module.exports = withNextra({
  output: 'export',
  ...(process.env.NODE_ENV === 'production' &&
    process.env.IN_NETLIFY !== 'true' && {
      basePath: '/hugo-theme-dream',
    }),
  images: {
    unoptimized: true,
  },
})

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
