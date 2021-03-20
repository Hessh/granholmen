import Link from 'next/Link'
import IconContainer from 'components/IconContainer/IconContainer'

const DomainLogo = ({ className, src, width, height }) => {
  return (
    <div className={className}>
      <Link href={'/'}>
        <a>
          <IconContainer src={src} width={width} height={height} />
        </a>
      </Link>
    </div>
  )
}

export default DomainLogo
