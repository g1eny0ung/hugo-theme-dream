import nextra from 'nextra'
import path from 'path'

const withNextra = nextra({})

export default withNextra({
  turbopack: {
    root: path.resolve('./'),
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
})
