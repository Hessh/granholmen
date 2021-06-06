import graphql from 'lib/api'
import { GET_SONGPAGE } from 'lib/queries/page'

import Layout from 'components/layout/Layout/Layout'
import Hero from 'components/Hero/Hero'
import Container from 'components/Container/Container'
import ContentContainer from 'components/ContentContainer/ContentContainer'
import Wysiwyg from 'components/Wysiwyg/Wysiwyg'

import styles from 'styles/pages/Sangen.module.css'

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
          <Wysiwyg isContentsMenu={false} className={styles.content}>
            {content}
          </Wysiwyg>
        </ContentContainer>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const variables = {
    id: 'granholmen-sangen',
  }

  const data = await graphql(GET_SONGPAGE, variables)

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}

export default Vedtekter
