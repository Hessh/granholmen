export default `
headerMenu: menu(id: "Header Menu", idType: NAME) {
  menuItems(first: 100) {
    nodes {
      label
      path
      id
      parentId
    }
  }
}
footerMenu: menu(id: "Footer Menu", idType: NAME) {
  menuItems(first: 100) {
    nodes {
      label
      path
      id
      parentId
    }
  }
}
`
