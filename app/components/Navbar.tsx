'use client'
import Link from "next/link";
import Image from "next/image";

import React, {useState, useEffect, useRef} from 'react'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

    const nav_links = [
        {
            id: 1, 
            url: '/',
            text: 'Home',
        },
        {
            id: 3, 
            url: '/courses',
            text: 'Courses',
        },
        {
            id: 5, 
            url: '/favourites',
            text: 'Favourites',
        },
    ]

  const [open, setOpen] = useState(false);

  return (
    <nav className={`shadow-lg p-4 ${open ? "top-20" : "top-[-490]"}`}>
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <a href='/'>
          <Image 
          src="/logodark.png" 
          width={120} 
          height={120}
          alt="logo"
          />
          </a>
          <button onClick={() => setOpen(!open)} name={open ? 'close' : 'menu'} className="text-3xl cursor-pointer mx-2 md:hidden block" >
            <FaBars className="text-primary-5"/>
          </button>
        </div>
          <ul className={`md:flex md:items-center md:pb-0 
          pb-12 absolute md:static md:z-auto z-[-1]
          left-0 w-full md:w-auto md:pl-0 transition-all 
          duration-500 ease-in ${open ? 'top-20 opacity-100': 'top-[-490px]'} md:opacity-100 opacity-0 `}
          >
            {nav_links.map((link) => {
              const {id, url, text} = link;
              return <li 
              className="mx-4 my-6 md:my-0"
              key={id}
              >
                <Link 
                href={url}
                className="text-xl text-primary-3 hover:text-primary-7 duration-500"
                >{text}</Link>
              </li>
            })}
          </ul>
        {/* <ul className='social-icons'>
            {socials.map((social) => {
              const {id, url, icon} = social;
              return <li key={id}>
                <Link to={url}>{icon}</Link>
              </li>
            })}
        </ul> */}
      </div>
    </nav>
  )
}

export default Navbar