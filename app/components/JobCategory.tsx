import React from 'react'
import Heading from './Heading'
import JobCard from './JobCard'



const JobCategory = () => {
  return (
    <div className='pt-20 pb-12'>
        <Heading mainHeading="Popular Job Categories" subHeadings="2024 jobs live- 310 added today."/>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem] items-center'>
            <JobCard image="/images/icon1.png"  category="Finance" openPosition = "23"/>
            <JobCard image="/images/icon2.png"  category="Digital Marketing" openPosition = "15"/>
            <JobCard image="/images/icon3.png"  category="UI/UX Designe" openPosition = "10"/>
            <JobCard image="/images/icon4.png"  category="App Developement" openPosition = "5"/>
            <JobCard image="/images/icon5.png"  category="Human Resources" openPosition = "20"/>
            <JobCard image="/images/icon6.png"  category="Automotive Jobs" openPosition = "8"/>
            <JobCard image="/images/icon7.png"  category="Customer Support" openPosition = "18"/>
            <JobCard image="/images/icon8.png"  category="Health and Care" openPosition = "12"/>
            <JobCard image="/images/icon9.png"  category="Project Management" openPosition = "7"/>
            
        </div>
    </div>
    
  )
}

export default JobCategory