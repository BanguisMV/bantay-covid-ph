import React, { useEffect, useState, Fragment } from 'react'
import Nav from '../components/Nav';
import { Container, Spinner, Footer } from '../components/styled/root'
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
            url: 'https://covid.banguismv.wtf/free.jpg',
            alt: 'Bantay COVID',
          },
          {
            url: 'https://covid.banguismv.wtf/free.jpg',
            alt: 'Bantay COVID',
          },
          { url: 'https://covid.banguismv.wtf/free.jpg' },
          { url: 'https://covid.banguismv.wtf/free.jpg' },
    ],
      twitter: {
        handle: '@handle',
        site: 'https://covid.banguismv.wtf',
        cardType: 'https://covid.banguismv.wtf/free.jpg',
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
    <Fragment>
     <NextSeo
      title="Bantay COVID"
      description="A simple COVID Tracker APP statically served using NextJS & powered by disease.sh API for Philippine Data."
      openGraph={SEO}
    />
    { loading ? 
          <Spinner><div className='loader'></div></Spinner>  : 
          <Fragment>
            <Nav />

            <Container>
                <Component {...pageProps} /> 
            </Container>

            <Footer  className='footer'>
              <a href="https://github.com/BanguisMV" target='_blank'> &copy;  BanguisMV </a>
            </Footer > 
          </Fragment>
      }
    </Fragment>
  
  )
}

export default MyApp
