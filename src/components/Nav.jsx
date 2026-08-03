import React, { useState } from 'react'
import adidaslogo from '../assets/img/adidas - png.png'
import { Search, User, Heart, Briefcase, X, ChevronDown ,Menu} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Nav() {
  const [showAlert, setShowAlerts] = useState(false)
  const [openMenu,setOpenMenu]=useState(false)

  return (

    <div className="sticky top-0 z-50 ">
      

      {!showAlert ? (
        <button
          onClick={() => setShowAlerts(true)}
          className="w-full bg-black text-white py-3 flex items-center justify-center gap-2 text-sm relative  "
        >
          FREE SHIPPING FOR ADICLUB MEMBERS
          <ChevronDown size={16} style={{color:'white'}} />
        </button>
      ) : (
        <div className="w-full bg-white border-b p-6 fixed z-40">
          <button
            onClick={() => setShowAlerts(false)}
            className="absolute top-3 right-3 bg-white"
          >
            <X size={24} />
          </button>

          <div className="px-6 ">
            <p className="font-bold mb-1">Free standard shipping with adiClub</p>
            <p className="text-sm text-gray-600 mb-3">
              Subscribe to adiClub to enjoy free standard shipping and earn points on
              every order.
            </p>
            <a
              href="https://www.adidas.es/account-login"
              className="inline-block bg-black text-white px-4 py-2 text-sm mr-4"
            >
              Join adiClub for Free
            </a>
            <a href="https://www.adidas.es/ayuda/entregas/cual-es-el-plazo-de-entrega-y-el-coste-del-envio"
             className="text-sm underline">More information</a>
          </div>
        </div>
      )}

{openMenu && (
  <div className="relative sm:hidden w-full h-screen bg-white shadow-md flex flex-col">
                <X size={24} onClick={()=>{setOpenMenu(false)}}
                className='absolute top-4 right-4 cursor-pointer border-b' />
                <br />
    <button className="p-4 border-b text-left">WOMAN</button>
    <button className="p-4 border-b text-left">MEN</button>
    <button className="p-4 border-b text-left">KIDS</button>
    <button className="p-4 border-b text-left">NEWS</button>
    <button className="p-4 border-b text-left">SPORTS</button>
    <button className="p-4 text-left">ADIDAS WORLD</button>
  </div>
)}

      <nav className="flex justify-between items-center 
       bg-white px-6 py-3 border-b sticky w-full ">

      
   <div className="sm:hidden">
  <Menu className="cursor-pointer w-6 h-6" 
  onClick={()=>{
       setOpenMenu(!openMenu)
  }}/>


     

      </div>
    
        <img src={adidaslogo} alt="adidas logo" className="h-8" />

        <div className="hidden gap-4 sm:flex">
          <button>WOMAN</button>
          <button>MEN</button>
          <button>KIDS</button>
          <button>NEWS</button>
          <button>SPORTS</button>
          <button>ADIDAS WORLD</button>
        </div>

        <div className="bg-gray-200 rounded flex items-center px-2">
          <input
            type="text"
            placeholder="Forum Mid Player"
            className="bg-transparent outline-none px-2 py-1"
          />
          <Search size={18} className='bg-transparent'/>
        </div>

        <div className="flex justify-end items-center gap-3">
          <User />
          <Heart />
          <Briefcase />
        </div>
      </nav>
    </div>
  )
}

export default Nav
