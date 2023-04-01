'use client'

// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion';

const Header = () => {


  return (
    <header className="bg-background-1 sm:w-960 mx-0 mb-[5rem] pt-2 md:pt-10 flex flex-col pl-188 ml-6 lg:justify-center lg:w-[960px]">
      <div 
      className='lg:pl-10 md:pl-5 sm:pl-0 sm:m-0 max-w-700 items-left'
      // whileInView={{x: [-100, 0], opacity: [0, 1]}}
      // transition={{duration: 1}}
      > 
        <h1 className='max-w-300 text-5xl font-popp not-italic font-bold lg:text-7xl capitalize text-primary-2'>find universities <br/> & courses <br/>throughout<br/> south africa</h1>
        {/* <h4 className='header-right'>- Get Information Quickly -</h4> */}
      </div>
      <div className='md:ml-5 lg:pl-10 max-w-450 ml-0'>
        <h2 className='
        leading-loose
        m-0 
        p-0 
        md:text-2xl 
        font-popp 
        not-italic 
        font-bold 
        text-sm 
        capitalize 
        text-[#000000]'>The #1 place to find all the information you need </h2>
      </div>
      {/* <div 
      className="set-up"
      // whileInView={{y: [100, 0], opacity: [0, 1]}}
      // transition={{duration: 1}}
      >
        <h2>How To use Find My Degree</h2>
        <h4>
          This Site was designed to help students quickly and easily<br/>
          find and understand the requirments needed for university <br/>
          courses and degrees in south africa for free. <br/>
          <br/>
          we have aimed at giving you the information you need instatnly <br/>
          and in a straigt forward, easy to understand approach that <br/>
          saves you time and quite a lot of confusion. 
          <br/>
          <br/>
          By Clicking any of the courses shown on this site, you will be <br/>
          taken driectly to the respective University course for a much <br/> 
          more detailed breakdown of the course. 
          <br/>
          <br/>
          There is also the option of comparing various courses against <br/>
          different schools across the country, showing you a detailed view <br/>
          of pricing, academic requiremnts and other aspects. <br/>
          <br/>
          click below or scroll down to get started
         </h4>
         <p> Please be aware that some Schools do not easily <br/> 
         share or make available their course information <br/>
         and requirements and thus are not available at <br/> 
         the moment as they require further digging.</p>
         <div className='btn-container'>
            <Link to='/universities'>
              <span className='btn'>Universities</span>
            </Link>
          <Link to="/courses">
            <span className='btn'>Courses</span>
          </Link>
          
          
            
          
         </div>
      </div> */}
    </header>
    
  )
}

export default Header