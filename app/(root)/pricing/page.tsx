
import Footer from "@/components/Footer";;
import Header from "@/components/Header";
import PricingCards from "@/components/PricingCards";


export default function page() {
  return (
    <div className="h-full bg-[#1E1E1E] text-white">
      <Header />
     
     <p className="md:text-3xl text-2xl text-center font-bold mt-11">Choose the Perfect Plan for Your Messaging Needs</p>
     <p className="mt-2 text-center text-gray-500">Empower Your Conversations: Tailored Plans for Seamless Messaging Experiences</p>
      
     <PricingCards redirect={true} />

     <Footer /> 
    </div>
  )
}
