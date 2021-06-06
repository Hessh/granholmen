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
          accountingdate
          accountingfile {
            mediaItemUrl
          }
          annualreportdate
          annualreportfile {
            mediaItemUrl
          }
          incomingcasesdate
          incomingcasesfile {
            mediaItemUrl
          }
          noticedate
          noticefile {
            mediaItemUrl
          }
          reportdate
          reportfile {
            mediaItemUrl
          }
        }
      }
    }
    ${MENU_FRAGMENT}
  }`
