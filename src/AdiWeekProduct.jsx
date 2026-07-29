import React, { useState } from 'react'

import heart from './source/Lista de Desejos.png'

function AdiWeekProduct({shoe}) {

const [selectedColor, setSelectedColor] = useState("beige");
    


    return (
    <div className='w-4/5 px-5 h-full relative'>
      
      <div className='bg-gray-300 p-3 w-2xs rounded-3xl relative'>
       <img src={shoe.icon} alt='favorite' 
       className='w-6 h-6 absolute top-3 right-3 '/>
     <img
        src={shoe.images[selectedColor]}
        alt={shoe.name}
        className='mx-auto '
      />
     <p className='mt-4 font-bold'>{shoe.price}</p>
    <small>free shipping</small>

<div className='flex flex-col justify-end items-end gap-1'>
    <button className='rounded-full h-4 w-4 bg-amber-100 absolute bottom-3 left-53' 
    onClick={()=>{
        setSelectedColor("beige")
    }}> </button>
    <button className='rounded-full h-4 w-4 bg-green-600 absolute bottom-3 left-66'
    onClick={()=>{
       setSelectedColor("green")
    }}> </button>
     <button className='rounded-full h-4 w-4 bg-black absolute bottom-3 left-60 text-white'
     onClick={()=>{
        setSelectedColor("black")
    }}></button>
</div>
   

      </div>

      <h3 className='font-bold'>{shoe.name}</h3>
      <p>Sneaker Style</p>
    </div>
  )
}

export default AdiWeekProduct
