import React from 'react'

import ThemeToggler from '../ThemeToggler'

import {logo} from '../../assets'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <header className='w-full flex justify-between items-center
    bg-white  dark:bg-gradient-to-b from-navy/80  to-navy/60 sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
      <Link to='/'>
        <img src={logo} alt='logo'  className='ml-2 w-36 object-contain scale-125'/>
      </Link>

      <Link to='/create-post' className='font-inter font-medium bg-orange-200 dark:bg-pink-400 text-white px-4 py-2 rounded-md' >Create</Link>
      <ThemeToggler/>
    </header>

  )
}

export default NavBar