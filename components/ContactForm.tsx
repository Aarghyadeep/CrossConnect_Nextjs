"use client"


import React, { FormEvent, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function ContactForm() {
  
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  })

  const ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  }
  
  const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  
  const handleValidation = ()=> {
    const { email, message } = values;
    if(email === ""){
        toast.error("Email cannot be empty", {
          position: "top-right",
          autoClose: 3000,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        })
     return false;   
    }
    if(message === ""){
      toast.error("Message cannot be empty", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      })
   return false;   
  }
  return true;
  }

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
     e.preventDefault();
    if(handleValidation()){
      toast.success("Your response sent successfully", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    });
    const resetForm = e.target as HTMLFormElement;
    resetForm.reset();
  }
}  

  return (
    <form
      id='myForm'
      onSubmit={(e)=> {
        handleSubmit(e)
       }}
      className="mb-10 flex gap-10 flex-col md:w-[60%] w-[80%] text-white">
        <div className="gap-2 flex flex-col">
        <label className="text-xl font-semibold">User Name</label> 
       <input 
       name='name'
       onChange={(e)=>handleChange(e)}
       className="w-full p-4 bg-black rounded-md outline-none" type="text" placeholder="John Wick" />
        </div>
       <div className="gap-2 flex flex-col">
       <label className="text-xl font-semibold">Email <i className="text-red-500">*</i></label> 
       <input
       onChange={(e)=>handleChange(e)}
       name='email'
       className="w-full p-4 bg-black rounded-md outline-none" type="email" 
       placeholder="example@gmail.com" />
       </div>
       <div className="gap-2 flex flex-col">
       <label className="text-xl font-semibold">Message <i className="text-red-500">*</i></label> 
       <textarea
       onChange={(e)=>handleChange(e)}
       name='message'
       className="w-full p-4 bg-black h-52 rounded-md outline-none" 
       placeholder="Message goes here..." />
       </div>
       <button
       type="submit"
       className="bg-white text-black p-2 w-20 rounded-md font-bold hover:bg-gray-200">Submit</button>
      </form>
  )
}
