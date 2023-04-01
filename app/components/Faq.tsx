'use client'

import React from 'react'
import FAQCard from './FaqCard'

const FAQ = () => {

    var questions = [
    
        {
            id: 1,
            q: "how do i calculate my APS score?",
            answer: "APS is calculated by taking 6 of your best subjects (excluding Life Orientaion) The percentage of each subject determines your points. The total number of points is your APS. The Minimum APS for a Bachelor's Degree is 21"
        },
        {
            id: 2,
            q: "How will I know if I meet all the requirements?",
            answer: "The best way to assure that you meet the requirements is to carefully read what is needed on FindMyDegree.co.za and the course description information on the university’s website and submit everything that is listed. You can find a link to the university's course information by searching for the course and then clicking 'Show more' in the search result. You'll find a link to the course description page. You can also find a link on your application page."
        },
        {
            id: 3,
            q: "what if i can't get into my desired university?",
            answer: "There are lots of opportunities elsewhere, understandably it is disappointing to find out that you have not been accepted, however there are still many other universities or colleges that are available to you."
        },
        {
            id: 4,
            q: "what if i failed a matric subject?",
            answer: "you can retake matric subject examinations later in the year, it might mean however that you currently cannot get into a bachelor degree course if you do not have a bachelor pass in matric. "
        },
    ]

    
  return (
    <section className='lg:w-960 lg:ml-auto lg:mr-auto lg:bg-background-1  '>
        <div className='mt-[5rem] align-center md:m-0 md:justify-center'>
            <h2 className='justify-center bg-primary-9 padding-[1rem] shadow-sm'>Frequently asked questions</h2>
            <div className='sm:grid-cols-1 md:m-[1rem] grid bg-background-1 grid-cols-{25rem} justify-center gap-x-[2rem] mt-[5rem] mb-[10rem] '>
            {questions?.map((question) => {
                 return <FAQCard {...question}/>
            })}
            
        </div>
        </div>
        
    </section>
  )
}

export default FAQ