import Image from 'next/image'

const IconContainer = ({ className, src, alt, width, height, onClick }) => {
  return (
    <span className={className}>
      <Image src={`/media/${src}`} alt={alt} width={width} height={height} onClick={onClick} />
    </span>
  )
}

export default IconContainer
