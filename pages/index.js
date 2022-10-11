import Head from 'next/head'

// Sections
import Hero from '../components/Hero';
import Services from '../components/Services';
import Management from '../components/Management';
import TrustUs from '../components/TrustUs';


export default function Home({ hero }) {

  return (
    <>
      <Head>
        <title>Carebridge | Landing Page</title>
      </Head>

      <Hero />
      <Management />
      <Services />
      <TrustUs />
    </>
  )
}
