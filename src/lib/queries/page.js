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

export const GET_BOARD_MEMBERS = `
  query getBoardMembers{
    page(id: "styret", idType: URI) {
      slug
      title
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      styrePage {
        medlemmer {
          medlem {
            ... on Styremedlem {
              styremedlem {
                name
                position
                phone
                mail
                gender
              }
            }
          }
        }
      }
      ${SEO_FRAGMENT}
    }
    ${MENU_FRAGMENT}
  }`

export const GET_REPORTS = `
  query getReports{
    page(id: "referat", idType: URI) {
      slug
      title
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      referatPage {
        referater {
          referat {
            ... on Referat {
              referat {
                name
                date
                file {
                  sourceUrl
                }
              }
            }
          }
        }
      }
      ${SEO_FRAGMENT}
    }
    ${MENU_FRAGMENT}
  }`

export const GET_ANNUAL_REPORTS = `
  query getReports{
    page(id: "årsberetning", idType: URI) {
      slug
      title
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      arsberetningPage {
        arsberetninger {
          arsberetning {
            ... on Arsberetning {
              id
              arsberetning {
                name
                date
                file {
                  sourceUrl
                }
              }
            }
          }
        }
      }
      ${SEO_FRAGMENT}
    }
    ${MENU_FRAGMENT}
  }`
