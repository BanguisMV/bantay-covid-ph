import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav';
import { Container, Spinner } from '../components/styled/root'
import '../styles/global.css'
import '../styles/bootstrap-grid.min.css'
import { NextSeo } from 'next-seo';

const SEO = {
  type:'website',
  url: 'https://covid.banguismv.wtf/',
  title: 'Bantay COVID',
  site_name: 'Bantay COVID',
  canonical: 'https://covid.banguismv.wtf/',
    images: [
        {
            url: 'https://covid.banguismv.wtf/no-virus.png',
            alt: 'Bantay COVID',
          },
          {
            url: 'https://covid.banguismv.wtf/no-virus.png',
            alt: 'Bantay COVID',
          },
          { url: 'https://covid.banguismv.wtf/no-virus.png' },
          { url: 'https://covid.banguismv.wtf/no-virus.png' },
    ],
      twitter: {
        handle: '@handle',
        site: 'https://covid.banguismv.wtf',
        cardType: 'https://covid.banguismv.wtf/no-virus.png',
  }
}


const MyApp = ({ Component, pageProps }) => {
 const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },800)
  },[])
  return (
    <>
     <NextSeo
      title="Bantay COVID"
      description="My simple Next JS app using chart.js and disease.sh API"
      openGraph={SEO}
    />
      <Nav />
      <Container>
        {loading ? 
          <Spinner><div className='loader'></div></Spinner> 
            : 
          <Component {...pageProps} /> 
        }
      </Container>
    </>
  
  )
}

export default MyApp
