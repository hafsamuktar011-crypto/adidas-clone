import React from 'react'
import coverImg from '../assets/img/Cover Image.png'
import { ArrowRight } from 'lucide-react'
import adidaslogo from '../assets/img/adidas - png.png'


function Hero() {

  return (
    <div className='h-screen  w-screen px-8 flex flex-col justify-center '
    style={{background:`url(${coverImg})`,
           backgroundPosition:"Center",
           backgroundSize:"cover",
           backgroundRepeat:"no-repeat"}}>
            <div className='relative'>
                <img src={adidaslogo} alt="Adidas logo"
                className='absolute top-0 left-0 w-32 opacity-30' />
            <h1 className=' font-bold text-5xl bg-gradient-to-r from-red-500 to-red-900 bg-clip-text '>
                ADICLUB <br></br>IS SHOWING OFF.
            </h1>
            <p className='mt-4 text-lg text-white'>
                Exclusive releses for our members and more ways 
        <br></br>to unlock those things that you love.</p>
            </div>
      <div className='  mt-8 flex flex-col items-center gap-4 text-white '>
        
      <button className='flex gap-2 '>
        <ArrowRight className='text-white'/>SEE MORE
      </button>
      
      <a href="#" className='flex  gap-2  '>
        <ArrowRight className='text-white'/>BUY NOW</a>
      </div>
      
    </div>
  )
}

export default Hero
