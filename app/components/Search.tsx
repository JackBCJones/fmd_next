'use client'

import React from 'react'
import Link from 'next/link'


export const SearchForm = () => {
//   const { setSearchTerm } = useGlobalContext()
//   const searchValue = React.useRef('');

//   React.useEffect(() => {
//     searchValue.current.focus()
//   }, [])

//   const searchCourse = () => {
//     setSearchTerm(searchValue.current.value.toLowerCase());
//   }

// ref={searchValue} onChange={searchCourse} these go in the input field
  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    // <section className=''>
      <form className='flex align-center justify-center md:w-[500px] md:h-[50px] rounded-3xl overflow-hidden mt-[6rem] mb-[10rem] mx-auto text-[#575756] border-2 border-[#575756] shadow-sm hover:shadow-md w-[400px] h-[40px]' onSubmit={handleSubmit}>
          <input className='md:text-sm w-[80%] h-[100%] border-0 text-md px-0 py-[20px] text-[#575756] rounded-r-none rounded-l-3xl bg-transparent bg-no-repeat cursor-text placeholder:text-[#575756 a(0.8)] placeholder:uppercase placeholder:text-lg placeholder:pl-5' placeholder='Search' type='text' name='freeText' id='freeText' ></input>
          <Link href="/courses">
            <button className='p-[0.5rem] md:p-[0.75rem] hover:bg-[#06356f] hover:shadow-md h-[50px] bg-[#375a84] text-white align-center border-none flex justify-center w-full cursor-pointer md:text-sm text-xs whitespace-nowrap'>
              Find Courses
              </button>
          </Link>
      </form>
    // </section>
  )
}

export default SearchForm;
