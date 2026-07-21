import Script from 'next/script'

// Placeholder — no real campaign ID is set here. Once you have a GA4 (G-XXXXXXX)
// or Google Ads (AW-XXXXXXX) ID, set it as NEXT_PUBLIC_GOOGLE_TAG_ID in the
// deployment's environment variables. Until then this component renders nothing,
// so no gtag/dataLayer script loads at all.
export function GoogleTag() {
  const id = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID
  if (!id) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="google-tag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  )
}
