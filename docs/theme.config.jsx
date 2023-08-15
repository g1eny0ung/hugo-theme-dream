export default {
  logo: <span style={{ fontSize: '1.125rem', fontWeight: 600 }}>🌱 Hugo Theme Dream</span>,
  project: {
    link: 'https://github.com/g1eny0ung/hugo-theme-dream',
  },
  docsRepositoryBase: 'https://github.com/g1eny0ung/hugo-theme-dream/blob/master/docs/pages',
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Hugo Theme Dream',
    }
  },
  head: (
    <>
      <meta name="description" content="Documentation for hugo-theme-dream" />
    </>
  ),
}
