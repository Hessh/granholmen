import graphql from 'lib/api'
import { GET_MISC } from 'lib/queries/page'

import Layout from 'components/layout/Layout/Layout'
import Hero from 'components/Hero/Hero'
import Container from 'components/Container/Container'

import styles from 'styles/pages/Misc.module.css'

const informasjonskapsler = ({ data }) => {
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
      <Container size='medium' className={styles.miscContent}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const variables = {
    id: 'informasjonskapsler',
  }

  const data = await graphql(GET_MISC, variables)

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}

export default informasjonskapsler
