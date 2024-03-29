import ApplyButton from '@/app/components/ApplyButton';
import JobCardFt from '@/app/components/JobCardFt';
import authOptions from '@/auth';
import JobData from '@/data'
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react'

const JobDetails = async({params}:{ params:{id:string}}) => {

    const singleJob = JobData.find((job) => job.id.toString() === params.id ); //to find the job id that matches the params id
    const session = await getServerSession(authOptions);

    const first4Job = JobData.slice(0,4);


  return (
    <div className='mt-20 mb-12'>
      <div className='block sm:flex items-center justify-between w-[80%] mx-auto'>
         <div className='flex-[0.7]'>
               <JobCardFt job={singleJob!} />
         </div>
         {session && <ApplyButton />}
         {!session && (
            <Link href="/signup">
                <button className='px-8 py-3 bg-emerald-600 rounded-lg text-white'> 
                 Sign Up To Apply 
                </button>
             </Link>
         )}
      </div>
      <div className='mt-16 w-[80%] mx-auto'>
        <h1 className='text-[20px] font-semibold'>Job Description</h1>
        <p className=' mt-4 text-black text-opacity-70'>
         Are you organized, detail-oriented, and passionate about supporting the smooth operation of a dynamic team? Our company.
         is seeking an Operations Coordinator to join our team. In this role, you will play a pivotal role in coordinating administrative tasks, 
        facilitating communication, and optimizing processes to ensure efficiency and productivity across various departments.
        </p>
        <h1 className='text-[20px]  mt-8 font-semibold'>Responsibilities</h1>
        <p className=' mt-4 text-black text-opacity-70'>
          Your role will be pivotal in ensuring the smooth functioning of our operations. You will be responsible for managing a variety of administrative tasks, 
         including scheduling meetings, handling correspondence, and maintaining documentation. Your communication skills will be essential as you coordinate both
         internal and external communications, ensuring that information is disseminated accurately and in a timely manner. Additionally, you will play a key role in project coordination and tracking, 
         collaborating with team members to ensure that project milestones are met. Your support in HR functions, such as onboarding new hires and organizing training sessions, will contribute to
          the growth and development of our team. 
        </p>
        <h1 className='text-[20px] mt-8 font-semibold'>Skills</h1>
         <ul className='mt-4'>
              <li className='text-black mt-4 text-opacity-70'>Excellent organizational skills and attention to detail</li>
              <li className='text-black mt-4 text-opacity-70'>Strong written and verbal communication skills</li>
              <li className='text-black mt-4 text-opacity-70'>Ability to multitask and prioritize tasks effectively</li>
              <li className='text-black mt-4 text-opacity-70'>Proficiency in Microsoft Office Suite</li>
              <li className='text-black mt-4 text-opacity-70'>Experience with project coordination and tracking</li>
         </ul>
         <h1 className='text-[20px] mt-8 font-semibold'>Related Jobs</h1>
         <div className='mt-4'>
        {
          first4Job.map((job) => {
            return <Link href={`/job/jobdetails/${job.id}`} className='space-y-6' key={job.id}>
                <JobCardFt job={job} />
               </Link>
          })
        }
      </div>
      </div>
    </div>
  )
}

export default JobDetails;