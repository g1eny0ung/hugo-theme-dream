import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Adsense from './AdSense'

const siteTitle = '🌱 Hugo Theme Dream'
function titleTemplate(title, siteTitle = siteTitle) {
  return title ? `${title} | ${siteTitle}` : siteTitle
}

export default {
  logo: <span style={{ fontSize: '1.125rem', fontWeight: 600 }}>{siteTitle}</span>,
  project: {
    link: 'https://github.com/g1eny0ung/hugo-theme-dream',
  },
  docsRepositoryBase: 'https://github.com/g1eny0ung/hugo-theme-dream/tree/master/docs',
  color: {
    hue: 146,
    saturation: 50,
    lightness: 36,
  },
  head() {
    const { pathname } = useRouter()
    const { title, frontMatter } = useConfig()
    const _title = titleTemplate(title, 'Hugo Theme Dream')
    const description = frontMatter.description || 'Documentation for Hugo Theme Dream'

    return (
      <>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🌱</text></svg>"
        ></link>
        <title>{_title}</title>
        <meta name="description" content={description} />
        <meta property="og:url" content={`https://hugo-theme-dream.g1en.site${pathname}`} />
        <meta property="og:title" content={_title} />
        <meta property="og:description" content={description} />
      </>
    )
  },
  toc: {
    extraContent: <Adsense />,
  },
  footer: {
    content: (
      <>
        <p>
          <a
            style={{ textDecoration: 'underline' }}
            href="https://github.com/g1eny0ung/hugo-theme-dream"
            target="_blank"
          >
            {siteTitle}
          </a>{' '}
          is released under the{' '}
          <a style={{ textDecoration: 'underline' }} href="https://choosealicense.com/licenses/mit/" target="_blank">
            MIT License
          </a>
          .
        </p>
      </>
    ),
  },
  banner: {
    key: 'zen-mode',
    content: <a href="https://g1en.site/hugo-theme-dream/zen-mode">{siteTitle} 3.5 introduces Zen mode. Read more →</a>,
  },
}
