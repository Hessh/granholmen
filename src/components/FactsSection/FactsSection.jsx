import Image from 'next/image'

import Container from 'components/Container/Container'

import styles from './FactsSection.module.css'

const FactsSection = ({ data }) => {
  console.log(data)
  const {
    title,
    text,
    image: { sourceUrl },
  } = data
  return (
    <Container size='large' className={styles.factContainer}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
      <div className={styles.image}>
        <Image src={sourceUrl} layout='fill' />
      </div>
    </Container>
  )
}

export default FactsSection
