import React from 'react'
import Layout from '../../Layout'
import Count from './pages/count/Count'
import Popular from './pages/popular/Popular'
import Green from './pages/green.cards/Green.cards'
import ImageCard from './pages/image.card/ImageCard'
import Learning from './pages/learning/Learning'
import Scard from './pages/short-card/Scard'
import TopSection from './pages/top-section/TopSection'

const Home = () => {
  return (   <Layout>
<TopSection />
<Learning />
<Count />
<Green />
<Scard />
<Popular />
<ImageCard />
  </Layout>
 )
}

export default Home