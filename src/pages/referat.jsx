import graphql from 'lib/api'
import { GET_REPORTS } from 'lib/queries/page'

import Layout from 'components/layout/Layout/Layout'
import Hero from 'components/Hero/Hero'
import Container from 'components/Container/Container'

import styles from 'styles/pages/Referat.module.css'

const Referat = ({ data }) => {
  const {
    page: { title, excerpt, featuredImage, seo },
    referater: { nodes },
    headerMenu,
    footerMenu,
  } = data

  const {
    node: { sourceUrl },
  } = featuredImage
  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo}>
      <Hero title={title} subTitle={excerpt} image={sourceUrl} />
      <Container size='medium' className={styles.reportContainer}>
        {nodes.map(node => {
          const { referat } = node
          return (
            <a key={referat.name} href={referat.file.sourceUrl} target='_blank' className={styles.report}>
              <h5>{referat.name}</h5>
              <h5>{referat.date}</h5>
              <button>Åpne</button>
            </a>
          )
        })}
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await graphql(GET_REPORTS)

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}

export default Referat
