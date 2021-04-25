import { useEffect, useRef } from 'react'
import { node, string, bool } from 'prop-types'

import { useContentsMenuContext } from '../../context/ContentsMenuContext'
import { getTextAndId } from '../../utils/generateHtmlID'
import { assignIDs } from '../../utils/assignID'

import styles from './Wysiwyg.module.css'

const Wysiwyg = ({ children, className, isContentsMenu }) => {
  const wysiwygRef = useRef(null)
  const [contentsMenu, setContentsMenu] = useContentsMenuContext()

  useEffect(() => {
    if (isContentsMenu) {
      const element = wysiwygRef?.current

      if (element) {
        const titles = element.querySelectorAll('h4')
        const contentsMenuData = getTextAndId(titles)

        assignIDs(titles, contentsMenuData)
        setContentsMenu(contentsMenuData)
      }
    }
  }, [wysiwygRef])
  return <div ref={wysiwygRef} className={styles.content} dangerouslySetInnerHTML={{ __html: children }} />
}

export default Wysiwyg
