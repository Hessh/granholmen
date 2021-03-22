import graphql from 'lib/api'
import { GET_ANNUAL_REPORTS } from 'lib/queries/page'

import Layout from 'components/layout/Layout/Layout'
import Hero from 'components/Hero/Hero'
import Container from 'components/Container/Container'

import styles from 'styles/pages/Årsberetning.module.css'

const Arsberetning = ({ data }) => {
  const {
    page: { title, excerpt, featuredImage, seo },
    arsberetninger: { nodes },
    headerMenu,
    footerMenu,
  } = data

  const {
    node: { sourceUrl },
  } = featuredImage
  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo}>
      <Hero title={title} subTitle={excerpt} image={sourceUrl} />
      <Container size='medium' className={styles.annualReportContainer}>
        {nodes.map(node => {
          const { arsberetning } = node
          return (
            <a
              key={arsberetning.name}
              href={arsberetning.file.sourceUrl}
              target='_blank'
              className={styles.annualReport}
            >
              <h5>{arsberetning.name}</h5>
              <h5>{arsberetning.date}</h5>
              <button>Åpne</button>
            </a>
          )
        })}
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await graphql(GET_ANNUAL_REPORTS)

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}

export default Arsberetning
