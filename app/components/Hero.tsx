'use client';

import React from 'react'
import HeroImg from "@/public/images/hero.svg"
import Image from 'next/image';


const Hero = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
       <div className='w-[100%] h-[60vh] flex flex-col items-center justify-center'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[2rem]'>
               <div>
                 {/* content*/}
                <h1 className='text-[28px] sm:text-[35px] lg:text-[45px] xl:text-[60px] text-[#05264e] leading-[3rem] lg:leading-[4rem] font-extrabold'>
                    The <span className='text-blue-500'> Easiest Way</span> <br/> to Find Your Next Job`&rsquo;`
                </h1>
                <p className='text-[#4f5e64] text-[16px] md:text-[18px] mt-[1rem]'>
                Our website connects you with a world of bite-sized gigs that fit your schedule and skillset`&rsquo;`
                Need a quick win? Get matched with local micro-tasks that pay cash`&rsquo;` Its flexible work on your schedule`&rsquo;`
                </p>
                {/* searchBox*/}
                <div className='mt-[1.5rem]'>
                    <input type="text" placeholder='Search Job' className='w-[60%] md:w-[70%] lg:w-[75%]  px-5 py-4 rounded-l-md outline-none bg-gray-200'/>
                    <button className='bg-blue-500 text-white px-5 py-4 rounded-r-md'>Search</button>
                </div>
               </div>
                <div className='hidden lg:block'>
                     <Image src={HeroImg} alt="Hero"width={500} height={500}/>
                </div>
        </div>
       </div>
    </div>
  )
}

export default Hero;