import React from 'react'
import Layout from '../../Layout'
import Count from '../home/pages/count/Count'
import Learnabout from './pages/learnabout/Learnabout'
import Topabout from './topabout/Topabout'
const About = () => {
  return (


    <Layout>
    <Topabout />
    <Learnabout />

    <Count />
   
   
   </Layout>
  )
}

export default About