import graphql from 'lib/api'
import { GET_ANNUAL_MEETINGS } from 'lib/queries/arsmoter'

import Layout from 'components/layout/Layout/Layout'
import Hero from 'components/Hero/Hero'
import Container from 'components/Container/Container'

import styles from 'styles/pages/Arsmoter.module.css'
import { useState } from 'react'
import useWindowSize from 'src/utils/windowSize'

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

  const currentYear = new Date().getFullYear()
  const lastYear = currentYear - 1

  const isCurrentYear = arsmoter[0].title == currentYear

  const [selectedYear, setSelectedYear] = useState(isCurrentYear ? currentYear : lastYear)
  const [isOpen, setIsOpen] = useState(false)

  const size = useWindowSize()
  const isMobile = size.width <= 768

  const handleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleYear = event => {
    const clickedYear = event.target.innerHTML
    setSelectedYear(clickedYear)
    isMobile && setIsOpen(false)
  }

  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo}>
      <Hero title={title} subTitle={excerpt} image={sourceUrl} />
      <Container size='medium' className={styles.annualMeetingsContainer}>
        <div className={styles.annualMeetingsSidebar}>
          <div className={styles.sidebarTitle} onClick={isMobile ? handleSidebar : null}>
            <h5>Velg årstall</h5>
            {isMobile && (
              <img
                src={isOpen ? '../media/icons/up.icon.svg' : '../media/icons/down.icon.svg'}
                alt={isOpen ? 'Lukk' : 'Åpne'}
              />
            )}
          </div>
          {!isMobile && (
            <ul className={styles.sidebarList}>
              {arsmoter
                .sort((a, b) => (a.title < b.title ? 1 : -1))
                .map(arsmote => {
                  const isSelectedYear = arsmote.title == selectedYear
                  return (
                    <li className={`${isSelectedYear && styles.selected} ${styles.listItem}`} onClick={handleYear}>
                      <h5>{arsmote.title}</h5>
                      {isSelectedYear && <img src='../media/icons/right.icon.svg' alt='Valgt' />}
                    </li>
                  )
                })}
            </ul>
          )}
          {isMobile && isOpen && (
            <ul className={styles.sidebarList}>
              {arsmoter
                .sort((a, b) => (a.title < b.title ? 1 : -1))
                .map(arsmote => {
                  const isSelectedYear = arsmote.title == selectedYear
                  return (
                    <li className={`${isSelectedYear && styles.selected} ${styles.listItem}`} onClick={handleYear}>
                      <h5>{arsmote.title}</h5>
                      {isSelectedYear && <img src='../media/icons/right.icon.svg' alt='Valgt' />}
                    </li>
                  )
                })}
            </ul>
          )}
        </div>
        <div className={styles.annualMeetings}>
          {arsmoter.map(({ title, ghfArsmote: arsmote }) => {
            if (title == selectedYear) {
              return (
                <>
                  <h4>Dokumenter for {title}</h4>
                  {arsmote.accountingfile != null && (
                    <a className={styles.annualMeeting} href={arsmote.accountingfile.mediaItemUrl} target='_blank'>
                      <img src='../media/icons/file.icon.svg' alt='PDF-file' />
                      <h5>Regnskap</h5>
                      <h5>{arsmote.accountingdate}</h5>
                      <button>Åpne</button>
                    </a>
                  )}
                  {arsmote.annualreportfile != null && (
                    <a className={styles.annualMeeting} href={arsmote.annualreportfile.mediaItemUrl} target='_blank'>
                      <img src='../media/icons/file.icon.svg' alt='PDF-file' />
                      <h5>Årsberetning</h5>
                      <h5>{arsmote.annualreportdate}</h5>
                      <button>Åpne</button>
                    </a>
                  )}
                  {arsmote.incomingcasesfile != null && (
                    <a className={styles.annualMeeting} href={arsmote.incomingcasesfile.mediaItemUrl} target='_blank'>
                      <img src='../media/icons/file.icon.svg' alt='PDF-file' />
                      <h5>Innkommende saker</h5>
                      <h5>{arsmote.incomingcasesdate}</h5>
                      <button>Åpne</button>
                    </a>
                  )}
                  {arsmote.noticefile != null && (
                    <a className={styles.annualMeeting} href={arsmote.noticefile.mediaItemUrl} target='_blank'>
                      <img src='../media/icons/file.icon.svg' alt='PDF-file' />
                      <h5>Innkalling</h5>
                      <h5>{arsmote.noticedate}</h5>
                      <button>Åpne</button>
                    </a>
                  )}
                  {arsmote.reportfile != null && (
                    <a className={styles.annualMeeting} href={arsmote.reportfile.mediaItemUrl} target='_blank'>
                      <img src='../media/icons/file.icon.svg' alt='PDF-file' />
                      <h5>Referat</h5>
                      <h5>{arsmote.reportdate}</h5>
                      <button>Åpne</button>
                    </a>
                  )}
                </>
              )
            } else {
              return null
            }
          })}
        </div>
      </Container>
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
