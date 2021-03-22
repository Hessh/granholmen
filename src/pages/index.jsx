import graphql from 'lib/api'
import { GET_HOMEPAGE } from 'lib/queries/page'

import Layout from 'components/layout/Layout/Layout'
import Hero from 'components/Hero/Hero'
import Container from 'components/Container/Container'
import FactsSection from 'components/FactsSection/FactsSection'
import ContentContainer from 'components/ContentContainer/ContentContainer'

import styles from 'styles/pages/Home.module.css'

const Home = ({ data }) => {
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
        <Container size='large'>
          <FactsSection data={homepageFacts} />
        </Container>
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
  const data = await graphql(GET_HOMEPAGE)

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}

export default Home
