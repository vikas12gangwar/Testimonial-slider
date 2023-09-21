import React from 'react'
import {FaQuoteLeft ,FaQuoteRight} from 'react-icons/fa'


export const Card = (props ) => {
    let review= props.reviews;
  return (
    <div className="flex flex-col md:relative ">
        <div className="absolute top-[-7rem] z-[10]  left-10 mx-auto "> 
            <img className="aspect-square rounded-full w-[140px] h-[140px] z-25" src={review.image}></img>
            <div className=" w-[140px] h-[140px] absolute   bg-violet-500 rounded-full top-[-6px]  -right-1 -z-20"></div>
        </div>
        <div  className="text-center mt-7">
            <p className="font-bold text-2xl  capitalize tracking-wider" >{review.name}</p>
            <p className=" text-violet-400 uppercase text-sm">{review.job}</p>
        </div>
        <div className="text-center mt-7">
            
        </div>
        <div className=" text-violet-400 mt-5 mx-auto ">
            <FaQuoteLeft/>
        </div>
        <div className=" text-center mt-4 text-slate-500">
            {review.text}
        </div>
        <div className=" text-violet-400 mt-5 mx-auto ">
            <FaQuoteRight/>
        </div >
        
    </div>
  )
}
