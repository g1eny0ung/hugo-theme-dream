'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

export default function AdSense() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current.offsetWidth) return

    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
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
