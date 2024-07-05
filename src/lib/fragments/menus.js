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
  name
  menuItems(first: 100) {
    nodes {
      label
      path
      id
      parentId
    }
  }
}
footerMenuGva: menu(id: "Footer Menu GVA", idType: NAME) {
  name
  menuItems(first: 100) {
    nodes {
      label
      path
      id
      parentId
    }
  }
}
`;
