import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

export default withNextra({
  output: 'export',
  // ...(process.env.NODE_ENV === 'production' &&
  //   process.env.IN_NETLIFY !== 'true' && {
  //     basePath: '/hugo-theme-dream',
  //   }),
  images: {
    unoptimized: true,
  },
})

// If you have other Next.js configurations, you can pass them as the parameter:
// export default withNextra({ /* other next.js config */ })
