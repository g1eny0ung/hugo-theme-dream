import { generateStaticParamsFor } from 'nextra/pages'
import { docsPath, siteUrl } from './site'

export const dynamic = 'force-static'

const generateDocsParams = generateStaticParamsFor('mdxPath')

export default async function sitemap() {
  const routes = await generateDocsParams()
  return routes.map(({ mdxPath }) => ({ url: new URL(docsPath(mdxPath), siteUrl).href }))
}
