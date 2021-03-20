import { useState } from 'react'

import HeaderItem from './HeaderItem'
import Container from 'components/Container/Container'
import IconContainer from 'components/IconContainer/IconContainer'
import DomainLogo from 'components/DomainLogo/DomainLogo'

import styles from './Header.module.css'

const Header = ({ headerMenu }) => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState(false)

  const burgerToggle = () => {
    setShowBurgerMenu(!showBurgerMenu)
  }

  const subMenuToggle = () => {
    setShowSubMenu(!showSubMenu)
  }

  const menuItems = headerMenu.menuItems.nodes

  return (
    <header className={styles.container}>
      <Container size='large' className={styles.siteNav}>
        <div className={styles.siteNavLeft}>
          <DomainLogo className={styles.headerLogo} src='logos/ghf-logo.png' width={90} height={90} />
        </div>
        <div className={styles.siteNavRight}>
          <div className={showBurgerMenu ? styles.show : styles.siteMenuWrapper}>
            <ul className={styles.siteMenu}>
              {menuItems.map(menu => {
                const { label, path } = menu
                return <HeaderItem className={styles.menuItem} slug={path} text={label} key={label} />
              })}
            </ul>
          </div>
          <IconContainer
            className={styles.burgerIcon}
            src={showBurgerMenu ? 'cross.icon.svg' : 'burger.icon.svg'}
            width={30}
            height={30}
            onClick={burgerToggle}
          />
        </div>
      </Container>
    </header>
  )
}

export default Header
