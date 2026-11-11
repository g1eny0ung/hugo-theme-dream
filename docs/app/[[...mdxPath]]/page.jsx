import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'
import { docsPath, siteDescription, siteName, socialImage } from '../site'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  const url = docsPath(params.mdxPath)
  const title = url === '/' ? siteName : metadata.title
  const description = metadata.description ?? siteDescription

  return {
    ...metadata,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName, type: 'website', images: [socialImage] },
    twitter: { card: 'summary_large_image', title, description, images: [socialImage] },
  }
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props) {
  const params = await props.params
  const { default: MDXContent, toc, metadata, sourceCode } = await importPage(params.mdxPath)
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
