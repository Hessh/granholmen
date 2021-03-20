import Link from 'next/Link'

import styles from './Footer.module.css'

const FooterItem = ({ className, slug, text, prefix, href, target }) => {
  return (
    <li className={className}>
      <span>
        {prefix}
        <a href={(href, slug)} target={target}>
          {text}
        </a>
      </span>
    </li>
  )
}

export default FooterItem
