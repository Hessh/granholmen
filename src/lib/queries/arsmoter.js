import MENU_FRAGMENT from '../fragments/menus'
import SEO_FRAGMENT from '../fragments/seo'

export const GET_ANNUAL_MEETINGS = `
  query getReports{
    page(id: "arsmoter", idType: URI) {
      slug
      title
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      ${SEO_FRAGMENT}
    }
    arsmoter(first: 100) {
      nodes {
        title
        ghfArsmote {
          documents {
            title
            date
            file {
              mediaItemUrl
            }
          }
        }
      }
    }
    ${MENU_FRAGMENT}
  }`
