import React from 'react'
import nba from './source/unsplash_2wqXZvKJkEQ.png'
import kk from './source/unsplash_bNSdIkCBJOs (1).png'
import ll from './source/unsplash_uc0oMfwLmLs (1).png'
import oo from './source/unsplash_7irKimCkk6g (1).png'

function Interesting() {
  return (
    <div className="w-full h-screen px-6 py-6 ">

      <h1 className="text-4xl font-bold mb-6 ">MOST INTERESTING</h1>

      <div className="flex gap-6  w-full">
        <img src={nba} alt="nba" className="w-64 h-64 object-cover rounded-lg" />
        <img src={kk} alt="kk" className="w-64 h-64 object-cover rounded-lg" />
        <img src={ll} alt="ll" className="w-64 h-64 object-cover rounded-lg" />
        <img src={oo} alt="oo" className="w-64 h-64 object-cover rounded-lg" />
      </div>
    </div>
  )
}

export default Interesting
