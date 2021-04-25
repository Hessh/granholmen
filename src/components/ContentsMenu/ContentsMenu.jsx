import { useEffect, useState } from 'react'

import { useContentsMenuContext } from '../../context/ContentsMenuContext'
import { scrollToPosition } from '../../utils/scrollToPosition'

import styles from './ContentsMenu.module.css'

const ContentsMenu = ({ className }) => {
  const [contentsMenu] = useContentsMenuContext()
  const [activeID, setActiveID] = useState()

  const handleMenuClick = e => {
    e.preventDefault()
    const current = e.currentTarget
    const id = current.dataset.id
    const scrollElement = document.getElementById(id)
    const elementPosition = scrollElement.offsetTop

    scrollToPosition(elementPosition - 96, 50)
    setActiveID(id)
  }

  useEffect(() => {
    setActiveID(contentsMenu[0]?.id)

    const setActiveMenu = () => {
      contentsMenu.forEach(({ id }, i) => {
        const element = document.getElementById(id)
        const { top = 0 } = element?.getBoundingClientRect() || {}
        const elementTop = window.scrollY + top - 30
        const isActive =
          (window.pageYOffset >= elementTop && window.pageYOffset < elementTop + element.offsetHeight) || {}

        if (isActive) {
          setActiveID(contentsMenu[i]?.id)
        }
      })
    }

    document.addEventListener('load', setActiveMenu)
    document.addEventListener('scroll', setActiveMenu)

    return () => {
      document.removeEventListener('load', setActiveMenu)
      document.removeEventListener('scroll', setActiveMenu)
    }
  }, [contentsMenu])

  return (
    <aside className={`${styles.root} ${className}`}>
      <h5 className={styles.title}>Innholdsfortegnelse</h5>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {contentsMenu.map(({ id, text }) => (
            <li className={styles.item} key={id}>
              <a href={`#${id}`} data-id={id} className={styles.link} onClick={handleMenuClick}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default ContentsMenu
