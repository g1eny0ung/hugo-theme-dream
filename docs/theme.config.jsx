export default {
  logo: <span style={{ fontSize: '1.125rem', fontWeight: 600 }}>🌱 Hugo Theme Dream</span>,
  project: {
    link: 'https://github.com/g1eny0ung/hugo-theme-dream',
  },
  docsRepositoryBase: 'https://github.com/g1eny0ung/hugo-theme-dream/blob/master/docs',
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Hugo Theme Dream',
    }
  },
  primaryHue: 146,
  primarySaturation: 50,
  head: (
    <>
      <meta name="description" content="Documentation for hugo-theme-dream" />
    </>
  ),
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/g1eny0ung/hugo-theme-dream" target="_blank">
          🌱 Hugo Theme Dream
        </a>
        .
      </span>
    ),
  },
}
