"use client"

import { MenuIcon, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from "../data/animationConfig";
import { AnimatePresence, motion } from 'framer-motion'

export default function Header() {
  
  const [menu, setMenu] = useState(false);

  const toggleMenu = ()=> {
    setMenu(!menu);
  }

  return (
    <header className='bg-black items-center text-white flex p-3 justify-between flex-wrap'>
                        {/* logo */}
      <Link className='flex items-center text-white font-bold text-2xl hover:opacity-90' href="/">
      <Image priority src="/Logo.png" alt='logo' width={40} height={40} />
      Cross<span className='text-blue-200'>Connect</span>
      </Link>

                      {/* NavLinks */}
      <nav className='gap-5 md:flex hidden font-medium items-center'>
        <Link className='relative tracking-widest group' href="/">Home
        <div className='absolute bg-white w-full h-0.5 scale-x-0 
        group-hover:scale-x-100 transition-transform'></div></Link>
        <Link className='relative tracking-widest group' href="/root/about">About
        <div className='absolute bg-white w-full h-0.5 scale-x-0 
        group-hover:scale-x-100 transition-transform'></div></Link>
        <Link className='relative tracking-widest group' href="/">FAQ
        <div className='absolute bg-white w-full h-0.5 scale-x-0 
        group-hover:scale-x-100 transition-transform'></div></Link>
        <Link className='relative tracking-widest group' href="/root/contact">Contact
        <div className='absolute bg-white w-full h-0.5 scale-x-0 
        group-hover:scale-x-100 transition-transform'></div></Link>
       </nav>
                        {/* userButton */}
       <div>
       </div>
 

                      {/* mobile menu  */}
       <button onClick={()=> toggleMenu()} className='md:hidden '>
         {!menu ? <MenuIcon className='rotate-180'  /> : <X className='transform origin-center rotate-90 ' />} 
        </button>
        
       <AnimatePresence mode='wait'> 
       {menu && (
          <motion.div 
          layout="position"
          className='flex basis-full flex-col font-medium items-center gap-2 mt-5 mb-2'
          variants={mobileNavContainerVariant}
          initial="hidden"
          animate="show"
          >
        <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
        <Link href="/">Home</Link>
        </motion.div> 
        <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
        <Link href="/about">About</Link> 
        </motion.div> 
        <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
        <Link href="/">FAQ</Link> 
        </motion.div> 
        <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
        <Link href="/contact">Contact</Link> 
        </motion.div>   
          </motion.div>
        )} 
      </AnimatePresence>                   
    </header>
  )
}
