import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import UserButton from './UserButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth'
import MobileMenu from './MobileMenu'
import { MessagesSquareIcon } from 'lucide-react'


export default async function Header() {

  const session = await getServerSession(authOptions);

  
  return (
    <header className='bg-black items-center flex p-3 justify-between flex-wrap'>
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
        <Link className='relative tracking-widest group' href="/about">About
        <div className='absolute bg-white w-full h-0.5 scale-x-0 
        group-hover:scale-x-100 transition-transform'></div></Link>
        <Link className='relative tracking-widest group' href="/pricing">Pricing
        <div className='absolute bg-white w-full h-0.5 scale-x-0 
        group-hover:scale-x-100 transition-transform'></div></Link>
        <Link className='relative tracking-widest group' href="/contact">Contact
        <div className='absolute bg-white w-full h-0.5 scale-x-0 
        group-hover:scale-x-100 transition-transform'></div></Link>
       </nav>

         {session && (
          <>
           <Link href="/chat" prefetch={false}>
             <MessagesSquareIcon />
           </Link>
          </>
         )}

              {/* userButton */}
       <div>
        <UserButton />
       </div>

              {/* mobile menu  */}
          <MobileMenu />                
    </header>
  )
}
