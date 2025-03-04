'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function AdSense() {
  useEffect(() => {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])

  return (
    <div style={{ width: '100%' }}>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2097283051393565"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'flex', justifyContent: 'left' }}
        data-ad-client="ca-pub-2097283051393565"
        data-ad-slot="4533331907"
        data-ad-format="rectangle"
        data-full-width-responsive="true"
      />
    </div>
  )
}
