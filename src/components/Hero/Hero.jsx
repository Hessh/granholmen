import Image from 'next/image'
import Container from 'components/Container/Container'

import styles from './Hero.module.css'

const Hero = ({ title, subTitle, image }) => {
  return (
    <>
      <Container size='fullWidth' className={styles.heroImage}>
        <Image src={image} layout='fill' />
      </Container>
      <Container size='large' className={styles.heroText}>
        <h1>{title}</h1>
        <h4 dangerouslySetInnerHTML={{ __html: subTitle }}></h4>
      </Container>
    </>
  )
}

export default Hero
