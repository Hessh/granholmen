import Link from 'next/Link'

import styles from './Header.module.css'

const HeaderItem = ({ className, slug, text }) => {
  return (
    <li className={className}>
      <Link href={slug}>
        <a>{text}</a>
      </Link>
    </li>
  )
}

export default HeaderItem
