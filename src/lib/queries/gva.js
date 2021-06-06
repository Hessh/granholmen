import MENU_FRAGMENT from '../fragments/menus'
import SEO_FRAGMENT from '../fragments/seo'

export const GET_SEWAGE = `
  query getSewage{
    page(id: "vann-og-avlopslaget", idType: URI) {
      slug
      title
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      ${SEO_FRAGMENT}
    }
    gvaArsmoter(first: 100) {
      nodes {
        title
        gvaArsmote {
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

export const GET_PROVISIONS = `
  query getProvisions{
    page(id: "gva-vedtekter", idType: URI) {
      slug
      title
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      ${SEO_FRAGMENT}
    }
    ${MENU_FRAGMENT}
  }`

export const GET_INSTRUCTIONS = `
  query getProvisions{
    page(id: "brukerinstruks", idType: URI) {
      slug
      title
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      ${SEO_FRAGMENT}
    }
    ${MENU_FRAGMENT}
  }`
