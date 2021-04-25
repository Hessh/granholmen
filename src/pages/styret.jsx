import graphql from 'lib/api'
import { GET_BOARD_MEMBERS } from 'lib/queries/page'

import Layout from 'components/layout/Layout/Layout'
import Hero from 'components/Hero/Hero'
import Container from 'components/Container/Container'

import styles from 'styles/pages/Styret.module.css'

const Styret = ({ data }) => {
  const {
    page: { title, excerpt, featuredImage, seo },
    styremedlemmer: { nodes },
    headerMenu,
    footerMenu,
  } = data

  const {
    node: { sourceUrl },
  } = featuredImage
  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo}>
      <Hero title={title} subTitle={excerpt} image={sourceUrl} />
      <Container size='large' className={styles.container}>
        <div className={styles.membersContainer}>
          {nodes.map(node => {
            const { styremedlem } = node
            return (
              <div key={styremedlem.name} className={styles.member}>
                <img src={`/media/img/avatar-${styremedlem.gender}.svg`} />
                <h5>{styremedlem.name}</h5>
                <p>{styremedlem.position}</p>
                {styremedlem.phone && (
                  <p>
                    <img src='media/icons/phone.icon.svg' alt='Tel:' /> +47 {styremedlem.phone}
                  </p>
                )}
                {styremedlem.mail && (
                  <p>
                    <img src='media/icons/mail.icon.svg' alt='Mail:' /> {styremedlem.mail}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await graphql(GET_BOARD_MEMBERS)

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}

export default Styret
