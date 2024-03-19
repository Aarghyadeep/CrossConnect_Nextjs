"use client"

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";


export default function SignIn() {
   
  const handleSubmit = ()=> {
    signIn("google", {
      callbackUrl: "/"
    })
  }

  return (
    <div className="h-screen bg-[#1E1E1E] flex items-center justify-center text-white">
      <div className="md:w-[400px] w-[350px] h-[280px] flex flex-col gap-2 bg-black p-5
      rounded-md">
        <Link href="/" className="flex items-center gap-1 hover:opacity-90 text-center">
            <Image src="/Logo.png" alt="logo" width={35} height={35} />
            <p className="font-bold text-xl">Cross<span className='text-blue-200'>Connect</span></p>          
        </Link>
        <p className="text-xl text-gray-400 font-bold mt-3 ml-2">Welcome aboard!</p>
        <p className="text-gray-400 text-sm ml-2">Unlock the full experience by signing into your
         account and dive into the world of chatting!</p>
         <button className="p-2 bg-white text-black font-bold mt-8 
         hover:bg-gray-200 rounded-md flex items-center gap-2 justify-center"
         onClick={()=> handleSubmit()}
         ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
         <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
         </svg> Sign In with Google</button>
      </div>
    </div>
  )
}
