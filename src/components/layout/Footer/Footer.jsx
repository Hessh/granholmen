import FooterItem from './FooterItem'
import FooterItemExternal from './FooterItemExternal'
import Container from 'components/Container/Container'

import styles from './Footer.module.css'

const Footer = ({ footerMenu }) => {
  const menuItems = footerMenu.menuItems.nodes

  const subItemsContact = menuItems.filter(item => item.parentId === 'cG9zdDoxMg==')
  const subItemsResources1 = menuItems.filter(item => item.parentId === 'cG9zdDoxMw==')
  const subItemsResources2 = menuItems.filter(item => item.parentId === 'cG9zdDoxNA==')

  const year = new Date().getFullYear()
  const COPYRIGHT = '© ' + year + ' Hess Design'

  const FOTOCREDIT = 'Foto: Svein Hansen'

  return (
    <>
      <Container size='fullWidth' className={styles.footerContainer}>
        <Container size='large' className={styles.containerContent}>
          <div className={styles.footerContent}>
            <h5>KONTAKT OSS</h5>
            <ul className={styles.subMenu}>
              <li className={styles.menuItem}>
                <span>Styreleder: {subItemsContact[0].label}</span>
              </li>
              <li className={styles.menuItem}>
                <span>
                  <img src='../media/icons/phone.icon.svg' alt='Tel:' /> {subItemsContact[1].label}
                </span>
              </li>
              <li className={styles.menuItem}>
                <span>
                  <img src='../media/icons/mail.icon.svg' alt='Mail:' /> {subItemsContact[2].label}
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.footerContent}>
            <h5>ANDRE RESSURSER</h5>
            <ul className={styles.subMenu}>
              {subItemsResources1.map(menu => {
                const { label, path } = menu
                return (
                  <FooterItemExternal
                    className={styles.menuItem}
                    slug={path}
                    text={label}
                    key={label}
                    target='_blank'
                  />
                )
              })}
            </ul>
          </div>
          <div className={styles.footerContent}>
            <h5>ANDRE RESSURSER</h5>
            <ul className={styles.subMenu}>
              {subItemsResources2.map(menu => {
                const { label, path } = menu
                return (
                  <FooterItemExternal
                    className={styles.menuItem}
                    slug={path}
                    text={label}
                    key={label}
                    target='_blank'
                  />
                )
              })}
            </ul>
          </div>
        </Container>
      </Container>
      <Container size='fullWidth' className={styles.bottomContainer}>
        <Container size='large' className={styles.bottomContent}>
          <ul className={styles.bottomLeft}>
            <FooterItem className={styles.menuItem} slug='/personvern' text='Personvern' />
            <FooterItem className={styles.menuItem} slug='/informasjonskapsler' text='Informasjonskapsler' />
          </ul>
          <div className={styles.bottomRight}>
            <h5>{FOTOCREDIT}</h5>
            <h5>{COPYRIGHT}</h5>
          </div>
        </Container>
      </Container>
    </>
  )
}

export default Footer
