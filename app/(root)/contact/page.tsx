import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";


export default function Contact() {
   
  return (
    <div className="h-full bg-[#1E1E1E]">
      <Header />
      <p className="text-3xl font-bold text-white text-center mb-10 mt-5">Contact Us</p>
      <div className="flex items-center justify-center">
      <ContactForm />
      </div>
      <ToastContainer />
      <Footer />
    </div>
  )
}