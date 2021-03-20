import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/media/logos/boat.png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
