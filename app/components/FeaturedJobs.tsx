import React from 'react'
import Heading from './Heading'
import JobData from '@/data'
import Link from 'next/link'
import JobCardFt from './JobCardFt'

const FeaturedJobs = () => {
  return (
    <div className='pt-20 pb-12'>
        <Heading
         mainHeading='Featured Jobs' 
         subHeadings='Know your worth and find the job that qualify your life'/>
        <div className='mt-12 w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {JobData.map((job)=>{
            return <Link href={`/job/jobdetails/${job.id}`} key={job.id}>
                   <JobCardFt job={job} />
                   </Link>
          })}
        </div> 
        <Link href="/job/alljobs">
            <div className='text-center mt-[3rem]'>
               <button className=' px-8 py-2 font-semibold hover:bg-blue-900 transition-all duration-300
                bg-blue-700 rounded-lg text-white'> 
                View All Jobs </button>
            </div>
         </Link>
    </div>
  )
}

export default FeaturedJobs