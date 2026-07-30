import React from 'react'
import collection from '../source/Collections.png'
import followUs from '../source/Follow Us.png'
import info from '../source/Info.png'
import payment from '../source/Payment.png'
import sport from '../source/Sports.png'
import support from '../source/Support.png'
import vector from '../source/Vector.png'

function Footer() {
  return (
    <div className="bg-black/90 w-full py-6">

      <div className="flex justify-center mb-6">
        <img src={vector} alt="vector" />
      </div>

      <div className="flex justify-around items-end mb-6">
        <img src={info} alt="info" />
        <img src={collection} alt="collection" />
        <img src={sport} alt="sport" />
        <img src={followUs} alt="follow us" />
      </div>

      <div className="flex justify-center">
        <img src={payment} alt="payment" />
      </div>
    </div>
  )
}

export default Footer
