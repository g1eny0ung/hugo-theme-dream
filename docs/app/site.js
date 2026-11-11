export const siteName = 'Hugo Theme Dream'
export const siteUrl = 'https://hugo-theme-dream.g1en.site'
export const siteDescription = '🌱 A Hugo theme named Dream.'
export const socialImage = {
  url: '/images/share-card.png',
  width: 1200,
  height: 630,
  alt: 'Hugo Theme Dream documentation',
}

export function docsPath(mdxPath = []) {
  return '/' + mdxPath.map(encodeURIComponent).join('/')
}
