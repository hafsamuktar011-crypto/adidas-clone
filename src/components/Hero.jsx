import React from 'react'
import coverImg from '../assets/img/Cover Image.png'
import { ArrowRight, Smartphone } from 'lucide-react'
import adidaslogo from '../assets/img/adidas - png.png'


function Hero() {

  return (
    <div id='bgCover' 
    className='h-screen  w-full px-8 flex flex-col justify-center 
    bg-cover bg-center bg-no-repeat max-sm:bg-cover'
    style={{background:`url(${coverImg})`,
           backgroundPosition:"Center",
           backgroundSize:"cover",
           backgroundRepeat:"no-repeat",
          }}>
            <div className='relative'>
                <img src={adidaslogo} alt="Adidas logo"
                className='absolute top-0 left-0 w-32 opacity-40 ' />
            <h1 className=' font-bold text-5xl bg-gradient-to-r from-red-500 to-red-900 bg-clip-text '>
                ADICLUB <br></br>IS SHOWING OFF.
            </h1>
            <p className='mt-4 text-lg text-white'>
                Exclusive releses for our members and more ways 
        <br></br>to unlock those things that you love.</p>
            </div>
      <div className=' absolute  flex flex-col items-left justify-left text-left mt-70 gap-4 text-white '>
        
      <a className='flex gap-2 hover:bg-red-300 cursor-pointer border-amber-50 rounded-2xl p-2'>
        <ArrowRight className='text-white'/>SEE MORE
      </a>
      
      <a href="#" className='flex  gap-2  hover:bg-red-300 cursor-pointer border-amber-50 rounded-2xl p-2 '>
        <ArrowRight className='text-white'/>BUY NOW</a>
      </div>
      
    </div>
  )
}

export default Hero
