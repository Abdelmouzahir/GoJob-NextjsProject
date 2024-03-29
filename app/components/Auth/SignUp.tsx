'use client'
import React from 'react';
import ImageUrl from '@/public/images/chair.jpg';
import Image from 'next/image';
import { signIn } from 'next-auth/react';


const SignUp = () => {
  return (
    <div className='overflow-hidden h-[84vh] flex flex-col items-center justify-center'>
      <Image
        src={ImageUrl}
        alt="Chair"
        width={400}
        height={400}
      />
      <button 
      onClick={() => {signIn('google', {callbackUrl :process.env.NEXT_PUBLIC_URL, redirect: false})}}
      className=' px-12 py-3 mt-[2rem] bg-purple-700 hover:bg-purple-900 transition-all 
       duration-300 rounded-lg text-white'>
        Sign Up Now
      </button>
    </div>
  )
}

export default SignUp;