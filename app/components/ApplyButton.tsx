"use client";
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplyButton = () => {
    const notify = () => toast.success("Application Sent Successfully!🎉");

  return (
    <div>
        <button onClick={notify} className='px-10 py-3 rounded-lg bg-blue-600 text-white font-semibold transition-all
         duration-500 hover:bg-blue-500'> 
            Apply Now
        </button>
        <ToastContainer  position='top-center'/>
    </div>
  )
}

export default ApplyButton