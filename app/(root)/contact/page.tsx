import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function Contact() {
  return (
    <div className="h-full bg-[#1E1E1E]">
      <Header />
      <p className="text-3xl font-bold text-white text-center mb-10 mt-5">Contact Us</p>
      <div className="flex items-center justify-center">
      <form className="mb-10 flex gap-10 flex-col md:w-[60%] w-[80%] text-white">
        <div className="gap-2 flex flex-col">
        <label className="text-xl font-semibold">User Name</label> 
       <input className="w-full p-4 bg-black rounded-md outline-none" type="text" placeholder="John Wick" />
        </div>
       <div className="gap-2 flex flex-col">
       <label className="text-xl font-semibold">Email</label> 
       <input className="w-full p-4 bg-black rounded-md outline-none" type="email" placeholder="john007wick@gmail.com" />
       </div>
       <div className="gap-2 flex flex-col">
       <label className="text-xl font-semibold">Message</label> 
       <textarea className="w-full p-4 bg-black h-52 rounded-md outline-none" placeholder="Message goes here..." />
       </div>
       <button className="bg-white text-black p-2 w-20 rounded-md font-bold hover:bg-gray-100">Submit</button>
      </form>
      </div>
      <Footer />
    </div>
  )
}
