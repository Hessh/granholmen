import Link from 'next/Link'

import styles from './Footer.module.css'

const FooterItem = ({ className, slug, text, target }) => {
  return (
    <li className={className}>
      <a href={slug} target={target}>
        {text}
      </a>
    </li>
  )
}

export default FooterItem
