import MENU_FRAGMENT from '../fragments/menus'
import SEO_FRAGMENT from '../fragments/seo'

export const GET_HOMEPAGE = `
  query getHomepage{
    page(id: "home", idType: URI) {
      slug
      title
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      homepageFacts {
        title
        text
        image {
          sourceUrl
        }
      }
      ${SEO_FRAGMENT}
    }
    ${MENU_FRAGMENT}
  }`
