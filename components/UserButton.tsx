"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import UserAvatar from "./UserAvatar"
import { Session } from "next-auth"
import { signIn, signOut } from "next-auth/react"
  

export default function UserButton({ session } : { session: Session | null }) {

  if(!session){
    return (
      <button onClick={()=> signIn()}
       className="bg-transparent rounded-2xl text-white
     border-2 border-white md:px-4 px-3 md:py-2 py-1 hover:bg-white hover:text-black font-semibold">
      Sign In
      </button>
    )
  }

  return session && (
    <DropdownMenu>
  <DropdownMenuTrigger>
    <UserAvatar 
    name={session.user?.name} 
    image={session.user?.image} />    
  </DropdownMenuTrigger>
  <DropdownMenuContent className="bg-[#1E1E1E] text-white">
    <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={()=> signOut()}>Sign Out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  )
}
