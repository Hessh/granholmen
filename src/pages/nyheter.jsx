import graphql from 'lib/api'
import { GET_NEWS } from 'lib/queries/page'

import Layout from 'components/layout/Layout/Layout'
import Hero from 'components/Hero/Hero'
import Container from 'components/Container/Container'

import styles from 'styles/pages/Misc.module.css'

const personvern = ({ data }) => {
  const {
    page: { title, content, excerpt, featuredImage, seo },
    posts: { nodes: posts },
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
        {posts.map(
          ({
            title,
            content,
            dateGmt,
            categories: { nodes: categories },
            author: {
              node: { name: author },
            },
          }) => {
            const date = new Date(dateGmt.replace('/s/, "T"'))

            const day = date.getDate()
            const month = date.getMonth()
            const year = date.getFullYear()

            const months = [
              'Januar',
              'Februar',
              'Mars',
              'April',
              'Mai',
              'Juni',
              'Juli',
              'August',
              'September',
              'Oktober',
              'November',
              'Desember',
            ]

            const monthName = months[month]

            const dateString = `Publisert: ${day}. ${monthName} ${year}`
            return (
              <div className={styles.post} key={title}>
                <div className={styles.postTop}>
                  <h4>{title}</h4>
                  <p>{dateString}</p>
                </div>
                <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: content }} />
                <div className={styles.postBottom}>
                  {categories.map(({ name }) => {
                    return <h5 key={name}>{name}</h5>
                  })}
                  <h5>{author}</h5>
                </div>
              </div>
            )
          }
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const variables = {
    id: 'nyheter',
  }

  const data = await graphql(GET_NEWS, variables)

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}

export default personvern
