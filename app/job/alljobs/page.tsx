import JobData from '@/data'
import React from 'react'
import Link from 'next/link'
import JobCardFt from '@/app/components/JobCardFt'

const Alljobs = () => {
  return (
    <div className='mt-12 w-[80%] mx-auto mb-12'>
      <div  className="mb-[2rem]">
          <h1 className=' font-semibold'>Show result ({JobData.length})</h1>
      </div>
      <div className='space-y-8'>
        {
          JobData.map((job) => {
            return <Link href={`/job/jobdetails/${job.id}`} key={job.id}>
                <JobCardFt job={job} />
               </Link>
          })
        }
      </div>
    </div>
  )
}

export default Alljobs