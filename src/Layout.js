import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/navbar.js/Header'

const Layout = ({children}) => {
  return (
<>
<Header />
{children}
<Footer />
</>
  )
}

export default Layout