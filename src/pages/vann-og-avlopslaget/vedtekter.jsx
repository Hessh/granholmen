import graphql from 'lib/api'
import { GET_PROVISIONS } from 'lib/queries/gva'

import Layout from 'components/layout/Layout/Layout'
import Hero from 'components/Hero/Hero'
import Container from 'components/Container/Container'
import ContentContainer from 'components/ContentContainer/ContentContainer'
import { ContentsMenuStateProvider } from 'src/context/ContentsMenuContext'
import Wysiwyg from 'components/Wysiwyg/Wysiwyg'
import ContentsMenu from 'components/ContentsMenu/ContentsMenu'

import styles from 'styles/pages/Vedtekter.module.css'

const Vedtekter = ({ data }) => {
  const {
    page: { title, content, excerpt, featuredImage, seo },
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
        <ContentsMenuStateProvider>
          <ContentContainer size='medium' className={styles.contentContainer}>
            <Wysiwyg isContentsMenu={true} className={styles.content}>
              {content}
            </Wysiwyg>
            <ContentsMenu className={styles.sidebarRight} />
          </ContentContainer>
        </ContentsMenuStateProvider>
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
