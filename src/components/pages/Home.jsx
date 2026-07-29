import React from 'react'
import Nav from '../Nav'
import Hero from '../Hero'
import Body from '../../Body'
import { ShoeProvider } from '../../context/Shoecontext'

function Home() {
  return (
    <>
       <Nav/>
        <Hero/>
      <Body/>
     
        
    </>
  )
}

export default Home
