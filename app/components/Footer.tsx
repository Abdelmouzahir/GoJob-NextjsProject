import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-[#111111]'>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 *
          gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10'>
          {/* footer section 1*/}
          <div>
            <h1 className='text-[24px] text-white mb-[1rem] font-bold uppercase'> GoJob </h1>
            <p className=' text-[14px] text-white text-opacity-70' >
             The world’s first and largest specialized talent solutions website,
             connects opportunities at great companies with highly skilled job seekers.
            </p>
            {/* social media icons*/}
            <div className='flex items-center space-x-3 mt-[1.5rem]'>
              <div className='w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center
               justify-center flex-col'>
                <FaFacebook  className='text-white'/>
               </div>
               <div className='w-[2.4rem] h-[2.4rem] bg-sky-400 rounded-full flex items-center
               justify-center flex-col'>
                <FaTwitter className='text-white'/>
               </div>
               <div className='w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center
               justify-center flex-col'>
                <FaYoutube  className='text-white'/>
               </div>
               <div className='w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex items-center
               justify-center flex-col'>
                <FaInstagram  className='text-white'/>
               </div>  
            </div>
            {/* 2nd part of footer*/}
          </div>
        </div>

    </div>
  )
}

export default Footer