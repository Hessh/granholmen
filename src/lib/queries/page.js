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
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      ${SEO_FRAGMENT}
    }
    styremedlemmer(first: 100) {
      nodes {
        styremedlem {
          name
          position
          phone
          mail
          gender
        }
      }
    }
    ${MENU_FRAGMENT}
  }`

export const GET_REPORTS = `
  query getReports{
    page(id: "referat", idType: URI) {
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
    referater(first: 100) {
      nodes {
        title
        referat {
          date
          file
        }
      }
    }
    ${MENU_FRAGMENT}
  }`

export const GET_ANNUAL_REPORTS = `
  query getReports{
    page(id: "arsberetning", idType: URI) {
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
    arsberetninger(first: 100) {
      nodes {
        title
        arsberetning {
          date
          file
        }
      }
    }
    ${MENU_FRAGMENT}
  }`

export const GET_PROVISIONS = `
  query getProvisions{
    page(id: "vedtekter", idType: URI) {
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

export const GET_SEWAGE = `
  query getSewage{
    page(id: "vann-og-avlop", idType: URI) {
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

export const GET_MEMBERSHIP_FEE = `
  query getMembershipFee{
    page(id: "medlemskontigent", idType: URI) {
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

export const GET_MISC = `
  query getMisc($id: ID!){
    page(id: $id, idType: URI) {
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
