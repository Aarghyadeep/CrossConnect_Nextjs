import { CheckIcon } from "lucide-react"
import Link from "next/link"
import CheckoutButton from "./CheckoutButton"

export const tiers = [
    {
        name: "Starter",
        id: null,
        href: "#",
        priceMonthly: null,
        description: "Connect for free with our basic chat features!",
        features: [
            "20 message chat limit in chats.",
            "2 participant limit in chats.",
            "3 chat rooms limit.",
            "Supports 2 languages.",
            "48 hour support response time.",
        ],
    },
    {
        name: "Pro",
        id: "1132",
        href: "#",
        priceMonthly: "₹599",
        description: "Upgrade for enhanced features and a richer chat experience!",
        features: [
            "Unlimited messages in chat.",
            "Unlimited participants in chats.",
            "Unlimited chat rooms.",
            "Support upto 10 languages.",
            "Multimedia support in chat.",
            "1 hour dedicated support response time.",
            "Early access to new features.",
        ],
    },
]

export default function PricingCards({ redirect } : { redirect: boolean }) {
  return (
    <div className="flex md:flex-row flex-col mb-16 items-center justify-center gap-10 mt-20">
      {tiers.map((tier)=> (
        <div className="w-[350px] h-[460px] bg-gradient-to-b from-blue-300 to-slate-300 flex flex-col p-5 gap-2 rounded-md
        shadow-2xl shadow-gray-600" key={tier.id}>
        <p className="text-xs font-semibold text-neutral-950">{tier.name}</p>
        {tier.priceMonthly ? (
        <p className="text-2xl font-bold text-black">{tier.priceMonthly} <span className="text-xs font-semibold">
        /month</span></p>
        ) : (
            <p className="text-2xl font-bold text-black">Free</p>  
        )}
        <p className="text-gray-800 text-sm">{tier.description}</p>
      <ul className="h-full flex gap-3 text-xs flex-col mt-2">
          {tier.features.map((feature)=> (
          <p className="flex items-center gap-2 text-black" key={feature}>
            <CheckIcon className="w-6 h-6 text-indigo-600"
            aria-hidden= "true"
            />{feature}</p>
            ))}  
      </ul>
      {redirect ? (
         <Link href="/subscription" className="bg-black rounded-md p-1 text-white hover:bg-gray-900
         bottom-0 flex justify-center items-center font-semibold">Get Started</Link>
      ) : (
        <CheckoutButton />
      )}
      
    </div>
      ))}
    </div>
  )
}
