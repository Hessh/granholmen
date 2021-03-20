import Image from 'next/image'

import FooterItem from './FooterItem'
import Container from 'components/Container/Container'

import styles from './Footer.module.css'

const Footer = ({ footerMenu }) => {
  const menuItems = footerMenu.menuItems.nodes

  const subItemsContact = menuItems.filter(item => item.parentId === 'cG9zdDoxMg==')
  const subItemsResources1 = menuItems.filter(item => item.parentId === 'cG9zdDoxMw==')
  const subItemsResources2 = menuItems.filter(item => item.parentId === 'cG9zdDoxNA==')

  const COPYRIGHT = '© 2021 Hess Design'

  return (
    <>
      <Container size='fullWidth' className={styles.footerContainer}>
        <Container size='large' className={styles.containerContent}>
          <div className={styles.footerContent}>
            <h5>KONTAKT OSS</h5>
            <ul className={styles.subMenu}>
              {subItemsContact.map(menu => {
                const { label, path } = menu
                return <FooterItem className={styles.menuItem} slug={path} text={label} key={label} />
              })}
            </ul>
          </div>
          <div className={styles.footerContent}>
            <h5>ANDRE RESSURSER</h5>
            <ul className={styles.subMenu}>
              {subItemsResources1.map(menu => {
                const { label, path } = menu
                return <FooterItem className={styles.menuItem} slug={path} text={label} key={label} />
              })}
            </ul>
          </div>
          <div className={styles.footerContent}>
            <h5>ANDRE RESSURSER</h5>
            <ul className={styles.subMenu}>
              {subItemsResources2.map(menu => {
                const { label, path } = menu
                return <FooterItem className={styles.menuItem} slug={path} text={label} key={label} />
              })}
            </ul>
          </div>
        </Container>
      </Container>
      <Container size='fullWidth' className={styles.bottomContainer}>
        <Container size='large' className={styles.bottomContent}>
          <h5>Denne nettsiden driftes av </h5>
          <div className={styles.bottomLogo}>
            <Image src='/media/logos/logo-long-black.png' layout='fill' />
          </div>
          <h5>{COPYRIGHT}</h5>
        </Container>
      </Container>
    </>
  )
}

export default Footer
