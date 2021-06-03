import graphql from 'lib/api'
import { GET_ANNUAL_MEETINGS } from 'lib/queries/page'

import Layout from 'components/layout/Layout/Layout'
import Hero from 'components/Hero/Hero'
import Container from 'components/Container/Container'

import styles from 'styles/pages/Arsberetning.module.css'

const Arsmoter = ({ data }) => {
  const {
    page: { title, excerpt, featuredImage, seo },
    arsmoter: { nodes: arsmoter },
    headerMenu,
    footerMenu,
  } = data

  const {
    node: { sourceUrl },
  } = featuredImage

  console.log(arsmoter[0])
  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo}>
      <Hero title={title} subTitle={excerpt} image={sourceUrl} />
      {/* <Container size='medium' className={styles.annualReportContainer}>
        {nodes
          .sort((a, b) => (a.title < b.title ? 1 : -1))
          .map(node => {
            const { arsberetning } = node
            return (
              <a key={arsberetning.name} href={arsberetning.file} target='_blank' className={styles.annualReport}>
                <img src='media/icons/file.icon.svg' alt='PDF-file' />
                <h5>{node.title}</h5>
                <h5>{arsberetning.date}</h5>
                <button>Åpne</button>
              </a>
            )
          })}
      </Container> */}
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await graphql(GET_ANNUAL_MEETINGS)

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}

export default Arsmoter
