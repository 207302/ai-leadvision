const googleAdsId = "AW-18357447279";

/**
 * Google Ads tag, rendered in the document head from the root layout
 * so it is present on every page.
 */
export function GoogleAds() {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${googleAdsId}');`,
        }}
      />
    </>
  );
}
