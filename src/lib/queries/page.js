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

export const GET_NEWS = `
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
    posts(first: 200, where: {status: PUBLISH}) {
      nodes {
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        dateGmt
        title
        content
      }
    }
    ${MENU_FRAGMENT}
  }`

export const GET_SONGPAGE = `
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
