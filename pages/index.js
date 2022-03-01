import Head from 'next/head'
import Container from '../components/Container'

export default function Index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>Hello world</h1>
      </Container>
   </>
  )
}
