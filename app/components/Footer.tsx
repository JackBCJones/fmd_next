'use client'

import React from 'react'
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin} from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {

  return (
    <footer className='relative w-full mt-auto bg-grey-9 box-border min-h-100px flex flex-col justify-center items-center'>
      <ul className='relative flex align-items-center justify-center m-10,0 flex-wrap'>
        <li className='list-none'><a className='text-xl text-primary-1 inline-block mt-5 mx-5 transition-all duration-0.3s linear cursor-pointer hover:text-primary-2' href='https://www.instagram.com' target="_blank" rel="noreferrer"><BsInstagram/></a></li>
        <li className='list-none'><a className='text-xl text-primary-1 inline-block mt-5 mx-5 transition-all duration-0.3s linear cursor-pointer hover:text-primary-2' href='https://www.facebook.com' target="_blank" rel="noreferrer"><BsFacebook/></a></li>
        <li className='list-none'><a className='text-xl text-primary-1 inline-block mt-5 mx-5 transition-all duration-0.3s linear cursor-pointer hover:text-primary-2' href='https://twitter.com' target="_blank" rel="noreferrer"><BsTwitter/></a></li>
        <li className='list-none'><a className='text-xl text-primary-1 inline-block mt-5 mx-5 transition-all duration-0.3s linear cursor-pointer hover:text-primary-2' rel="noreferrer" href="http://www.linkedin.com/in/jack-calburn-jones" target="_blank"  ><BsLinkedin/></a></li>
      </ul>
      <ul className='relative flex items-center justify-center my-10 mx-0 flex-wrap'>
        <li className='list-none'><Link className='text-lg text-primary-1 my-0 mx-5 transition-all duration-0.3s linear decoration-0 opacity-0.75 hover:opacity-1' href='/'>Home</Link></li>
        <li className='list-none'><Link className='text-lg text-primary-1 my-0 mx-5 transition-all duration-0.3s linear decoration-0 opacity-0.75 hover:opacity-1' href='/courses'>Courses</Link></li>
        <li className='list-none'><Link className='text-lg text-primary-1 my-0 mx-5 transition-all duration-0.3s linear decoration-0 opacity-0.75 hover:opacity-1' href='/favourites'>Favourites</Link></li>
      </ul>
      <p className='text-primary-1 text-center mt-15 mb-1 text-md'>@2023 Jack Calburn-Jones | All Rights Reserved</p>
      {/* <Image 
      src="/logodark.png" 
      width={150}
      height={150}
      alt="logo"/> */}
    </footer>
  )
}

export default Footer