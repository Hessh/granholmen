import styles from './Footer.module.css'

const FooterItem = ({ className, slug, text, target }) => {
  return (
    <li className={className}>
      <a href={slug} target={slug === '/granholmen-sangen/' ? null : target}>
        {text}
      </a>
    </li>
  )
}

export default FooterItem
