import nextra from 'nextra'

const withNextra = nextra({})

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
