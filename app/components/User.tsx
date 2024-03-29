'use client';

import React from 'react'
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';


interface Props {
    session: Session;
}

const User = ({session}: Props) => {
  return (
    <div onClick={()=> signOut({callbackUrl: `${process.env.NEXT_PUBLIC_URL}/signup`})} className='cursor-pointer'>
        <img src={session.user?.image || 'public/images/user.png'} alt="User" className='w-[50px] h-[50px] rounded-full'/>
    </div>
  )
}

export default User