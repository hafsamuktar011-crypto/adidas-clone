import React, { useContext, useRef } from "react";
import AdiWeekProduct from "./AdiWeekProduct";
import { ShoeContext } from "./context/Shoecontext";
import { ChevronLeft,ChevronRight } from "lucide-react";
import PromoHighlight from "./PromoHighlight";
import Grace from "./Grace";
import Interesting from "./Interesting";


function Body() {
  const { Shoes } = useContext(ShoeContext);

  const containerRef=useRef(null)
  const scrollLeft=()=>{    
    containerRef.current.scrollBy({
      left:300,
      behavior:"smooth",
    })
  }
  const scrollRight = () => {
  containerRef.current.scrollBy({
    left: -300,
    behavior: "smooth",
  });
};

  return (
    <>
    <div>
      <div className="flex justify-between items-center px-5 py-5">
        <h1 className="text-3x1 font-bold">adiweek</h1>

         <div className="flex gap-3  ">
          <ChevronLeft  
      className='w-5 h-5 cursor-pointer text-black'
      onClick={scrollRight} />
          <ChevronRight 
      className='w-5 h-5 cursor-pointer' 
      onClick={scrollLeft}/>
         </div>
      </div>
      <div 
      ref={containerRef}
      className="flex overflow-x-auto scrollbar-hide"
      >
    {Shoes.map((shoe) => (
        <AdiWeekProduct
          key={shoe.id}
          shoe={shoe}
        />
      ))}
      </div>
      
    </div>
    <PromoHighlight/>

 <div>
      <div className="flex justify-between items-center px-5 py-5">
        <h1 className="text-3x1 font-bold">Do you still like these products?</h1>

         <div className="flex gap-3 ">
          <ChevronLeft  
      className='w-5 h-5 cursor-pointer text-black'
      onClick={scrollRight} />
          <ChevronRight 
      className='w-5 h-5 cursor-pointer' 
      onClick={scrollLeft}/>
         </div>
      </div>
      <div 
      ref={containerRef}
      className="flex overflow-x-auto scrollbar-hide"
      >
    {Shoes.map((shoe) => (
        <AdiWeekProduct
          key={shoe.id}
          shoe={shoe}
        />
      ))}
      </div>
      
    </div>
    
<Grace/>
<Interesting/>
    </>
  );
}

export default Body;