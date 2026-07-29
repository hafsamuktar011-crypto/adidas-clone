import React from 'react'
import niga from './source/unsplash_5RATwbCzYK4 (1).png'

function Grace() {
  return (
    
   <div className='relative min-h-screen'>
    <img
  src={niga}
  alt=""
  className="w-full inset-0 h-full absolute bg-cover bg-center "
/>
      <div className="relative z-10 text-white px-10 py-16 space-y-6 ">
        <h1 className="text-6xl font-bold text-center"
        >HISTORY AND GRACE</h1>

      <div  className='relative flex   '>
     <p >At adidas, we believe that sports have the power to transform lives. It's not just about keeping your body and 
        mind fit; it's about bringing people together
         and creating a community of individuals who share 
         the same passion for excellence. </p>

         <p>We draw inspiration from the athletes who push themselves 
            to their limits every day, 
            and from the technology we develop to help them achieve their goals.</p>
      </div>
      
<div className='relative flex' >
     <p>Whether you're a runner, a basketball player, 
            a soccer player, or someone who loves to train,
             you'll find a home with us. Our products are designed to meet your needs, 
         no matter what your preferred form of exercise may be.</p>
         <p>We're not just present on the playing field, either. Y
            ou'll find the three stripes at music festivals, 
            on stages, and in the city streets.</p>
</div>
        

            <span className='font-semibold flex justify-center top-40'>To improve performances. Improve lives and change the world.</span>
    </div>
    </div>
  )
}

export default Grace
