import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import Adsense from './AdSense'
// Required for theme styles, previously was imported under the hood
import 'nextra-theme-docs/style.css'

const siteTitle = '🌱 Hugo Theme Dream'

/** @type {import('next').Metadata} */
export const metadata = {
  metadataBase: new URL('https://hugo-theme-dream.g1en.site'),
  title: {
    default: 'Hugo Theme Dream',
    template: `%s | Hugo Theme Dream`,
  },
}

const banner = (
  <Banner storageKey="zen-mode">
    <a href="https://hugo-theme-dream.g1en.site/zen-mode">{siteTitle} 3.5 introduces Zen mode. Read more →</a>
  </Banner>
)
const navbar = (
  <Navbar
    logo={<span style={{ fontSize: '1.125rem', fontWeight: 600 }}>{siteTitle}</span>}
    projectLink="https://github.com/g1eny0ung/hugo-theme-dream"
  />
)
const footer = (
  <Footer>
    <p>
      <a style={{ textDecoration: 'underline' }} href="https://github.com/g1eny0ung/hugo-theme-dream" target="_blank">
        {siteTitle}
      </a>{' '}
      is released under the{' '}
      <a style={{ textDecoration: 'underline' }} href="https://choosealicense.com/licenses/mit/" target="_blank">
        MIT License
      </a>
      .
    </p>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
        color={{
          hue: 146,
          saturation: 50,
          lightness: 36,
        }}
      >
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🌱</text></svg>"
        />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/g1eny0ung/hugo-theme-dream/tree/master/docs"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          toc={{
            extraContent: <Adsense />,
          }}
          footer={footer}
          // ...Your additional theme config options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
