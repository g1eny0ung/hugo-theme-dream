import { useEffect } from 'react'
import Script from 'next/script'

export default function AdSense() {
  useEffect(() => {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])

  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2097283051393565"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2097283051393565"
        data-ad-slot="4533331907"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </>
  )
}
