import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SEO from '../Seo/Seo'

const Layout = ({ children, seo, menus }) => {
  const { headerMenu, footerMenu } = menus
  return (
    <>
      <SEO seo={seo} />
      <Header headerMenu={headerMenu} />
      {children}
      <Footer footerMenu={footerMenu} />
    </>
  )
}

export default Layout
