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
            sourceUrl
          }
          annualreportdate
          annualreportfile {
            sourceUrl
          }
          incomingcasesdate
          incomingcasesfile {
            sourceUrl
          }
          noticedate
          noticefile {
            sourceUrl
          }
          reportdate
          reportfile {
            sourceUrl
          }
        }
      }
    }
    ${MENU_FRAGMENT}
  }`
