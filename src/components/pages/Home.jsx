import React from 'react'
import Nav from '../Nav'
import Hero from '../Hero'
import Body from '../../Body'
import { ShoeProvider } from '../../context/Shoecontext'
import Footer from '../Footer'

function Home() {
  return (
    <>
       <Nav/>
        <Hero/>
      <Body/>
     <Footer/>
        
    </>
  )
}

export default Home
