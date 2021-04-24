import graphql from 'lib/api'
import { GET_MEMBERSHIP_FEE } from 'lib/queries/page'

import Layout from 'components/layout/Layout/Layout'
import Hero from 'components/Hero/Hero'
import Container from 'components/Container/Container'
import ContentContainer from 'components/ContentContainer/ContentContainer'

import styles from 'styles/pages/Medlemskontigent.module.css'

const Medlemskontigent = ({ data }) => {
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
      <Container size='medium' className={styles.feeContent}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await graphql(GET_MEMBERSHIP_FEE)

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}

export default Medlemskontigent
