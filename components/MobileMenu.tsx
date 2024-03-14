"use client"

import { mobileNavContainerVariant, mobileNavExitProps, mobileNavListVariant } from "@/data/animationConfig";
import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


export default function MobileMenu() {

    const [menu, setMenu] = useState(false);


    const toggleMenu = ()=> {
      setMenu(!menu);
    }
     
  return (
    <>
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
        <Link href="/pricing">Pricing</Link> 
        </motion.div> 
        <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
        <Link href="/contact">Contact</Link> 
        </motion.div>   
          </motion.div>
        )} 
      </AnimatePresence>
    </>
  )
}
