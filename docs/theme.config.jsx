export default {
  logo: <span style={{ fontSize: '1.125rem', fontWeight: 600 }}>🌱 Hugo Theme Dream</span>,
  project: {
    link: 'https://github.com/g1eny0ung/hugo-theme-dream',
  },
  docsRepositoryBase: 'https://github.com/g1eny0ung/hugo-theme-dream/tree/master/docs',
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Hugo Theme Dream',
    }
  },
  primaryHue: 146,
  primarySaturation: 50,
  head: (
    <>
      <meta name="description" content="Documentation for Hugo Theme Dream" />
    </>
  ),
  footer: {
    text: (
      <span>
        <a style={{ textDecoration: 'underline' }} href="https://github.com/g1eny0ung/hugo-theme-dream" target="_blank">
          🌱 Hugo Theme Dream
        </a>{' '}
        is released under the{' '}
        <a style={{ textDecoration: 'underline' }} href="https://choosealicense.com/licenses/mit/" target="_blank">
          MIT License
        </a>
        .
      </span>
    ),
  },
  banner: {
    key: '3.0-release',
    text: (
      <a href="https://g1en.site/hugo-theme-dream/migrate-to-v3">🎉 Hugo Theme Dream 3.0 is released. Read more →</a>
    ),
  },
}
