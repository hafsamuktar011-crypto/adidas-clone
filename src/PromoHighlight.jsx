import React from 'react'
import cutie from "./source/unsplash__vk_Hq7Sg4A.png"
import { MoveRight, MoveDown } from 'lucide-react'

function PromoHighlight() {
  return (
    <div className="max-w-5/6 mx-auto h-[500px] bg-black/88 relative flex rounded-3xl overflow-hidden">
      
      <div className="w-1/2">
        <img src={cutie} alt="" 
        className="h-full w-full object-cover rounded-l-3xl " />
      </div>

      <div className="absolute  top-24 inset-0 flex flex-col items-center">
        <p className="text-5xl font-semibold text-white">OUTFITS FOR</p>
        <p className="text-5xl font-semibold text-yellow-400">BENEFITS</p>
      </div>

      <div className="flex flex-col justify-center w-1/2 px-3 space-y-4 ml-auto">
        <p className="text-yellow-400 ">
          60% OFF + free shipping: <span className="text-white">only for adiClub members</span>
        </p>
        <p>
          Check your account and start buying for benefits <span className="text-yellow-400">on adiWeek.</span>
        </p>  
        <div className="flex justify-between items-center mt-6">
          <span className="text-white font-bold flex items-center gap-2">
            <MoveRight /> BUY NOW
          </span>
          <span className="text-white font-bold flex items-center gap-2">
            <MoveDown /> WHAT IS ADIDAS?
          </span>
        </div>
      </div>
    </div>
  )
}

export default PromoHighlight
