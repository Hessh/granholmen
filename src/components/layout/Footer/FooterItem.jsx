import Link from 'next/Link'

import styles from './Footer.module.css'

const FooterItem = ({ className, slug, text }) => {
  return (
    <li className={className}>
      <Link href={slug}>
        <a>{text}</a>
      </Link>
    </li>
  )
}

export default FooterItem
