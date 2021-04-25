import graphql from 'lib/api'
import { GET_PROVISIONS } from 'lib/queries/page'

import Layout from 'components/layout/Layout/Layout'
import Hero from 'components/Hero/Hero'
import Container from 'components/Container/Container'
import ContentContainer from 'components/ContentContainer/ContentContainer'

import styles from 'styles/pages/Vedtekter.module.css'

const Vedtekter = ({ data }) => {
  const {
    page: { title, content, excerpt, featuredImage, homepageFacts, seo },
    headerMenu,
    footerMenu,
  } = data

  const {
    node: { sourceUrl },
  } = featuredImage

  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo}>
      <Hero title={title} subTitle={excerpt} image={sourceUrl} />
      <Container size='fullWidth'>
        <ContentContainer size='medium' className={styles.contentContainer}>
          <Container size='small' className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Container>
          <div className={styles.tocContainer}>
            <h5>Innholdsfortegnelse</h5>
          </div>
        </ContentContainer>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await graphql(GET_PROVISIONS)

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}

export default Vedtekter
