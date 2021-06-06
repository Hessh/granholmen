import { useEffect, useRef, useState } from 'react'

import HeaderItem from './HeaderItem'
import Container from 'components/Container/Container'
import IconContainer from 'components/IconContainer/IconContainer'
import DomainLogo from 'components/DomainLogo/DomainLogo'

import styles from './Header.module.css'

const Header = ({ headerMenu }) => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState(false)

  const menuItems = headerMenu.menuItems.nodes
  const parentItems = menuItems.filter(item => item.parentId === null && item.id != 'cG9zdDozMjc=')
  const subItems = menuItems.filter(item => item.parentId != null)

  const burgerToggle = () => {
    setShowBurgerMenu(!showBurgerMenu)
  }

  const subMenuToggle = () => {
    setShowSubMenu(!showSubMenu)
  }

  let menuRef = useRef()

  useEffect(() => {
    document.addEventListener('click', event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowSubMenu(false)
      }
    })
  }, [])

  return (
    <header className={styles.container}>
      <Container size='large' className={styles.siteNav}>
        <div className={styles.siteNavLeft}>
          <DomainLogo className={styles.headerLogo} src='logos/ghf-logo.png' width={90} height={90} />
        </div>
        <div className={styles.siteNavRight}>
          <div className={showBurgerMenu ? styles.show : styles.siteMenuWrapper}>
            <ul className={styles.siteMenu}>
              {parentItems.map(menu => {
                const { label, path } = menu
                return <HeaderItem className={styles.menuItem} slug={path} text={label} key={label} />
              })}
              <li ref={menuRef} className={`${styles.menuItem} ${styles.dropdownItem}`} onClick={subMenuToggle}>
                VANN- OG AVLØPSLAGET{' '}
                <img src={showSubMenu ? `../media/icons/up.icon.svg` : `../media/icons/down.icon.svg`} alt='' />
              </li>
              {showSubMenu && (
                <div className={styles.subMenu}>
                  {subItems.map(menu => {
                    const { label, path } = menu
                    const isRoot = label === 'ÅRSMØTER'
                    return (
                      <HeaderItem
                        className={`${styles.menuItem} ${styles.subMenuItem}`}
                        slug={isRoot ? path : `/vann-og-avlopslaget${path}`}
                        text={label}
                        key={label}
                      />
                    )
                  })}
                </div>
              )}
            </ul>
          </div>
          <IconContainer
            className={styles.burgerIcon}
            src={showBurgerMenu ? 'icons/cross.icon.svg' : 'icons/burger.icon.svg'}
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
