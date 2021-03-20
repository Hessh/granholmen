import Head from 'next/head'

const SEO = ({ seo }) => {
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name='description' content={seo.metaDesc} />
      <meta
        name='robots'
        content={`${seo.metaRobotsNoindex}, ${seo.metaRobotsNofollow}, max-snippet:-1, max-image-preview:large, max-video-preview:-1`}
      />
      <meta property='og:locale' content='no_NB' />
      {!!seo.opengraphTitle && <meta property='og:title' content={seo.opengraphTitle} />}
      {!!seo.opengraphDescription && <meta property='og:description' content={seo.opengraphDescription} />}
      {!!seo.opengraphModifiedTime && <meta property='article:modified_time' content={seo.opengraphModifiedTime} />}
      {!!seo.opengraphSiteName && <meta property='og:site_name' content={seo.opengraphSiteName} />}
      {!!seo.opengraphType && <meta property='og:type' content={seo.opengraphType} />}
      {!!seo.opengraphImage && <meta property='og:image' content={seo.opengraphImage.sourceUrl} />}
      {!!seo.opengraphImage && <meta property='og:image:width' content={seo.opengraphImage.mediaDetails.width} />}
      {!!seo.opengraphImage && <meta property='og:image:height' content={seo.opengraphImage.mediaDetails.height} />}
    </Head>
  )
}

export default SEO
