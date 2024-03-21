import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { tiers } from "@/components/PricingCards";
import { CheckIcon } from "lucide-react";
import CheckoutButton from "@/components/CheckoutButton";


export default async function Subscription() {


  return (
    <div className="h-full bg-[#1E1E1E] text-white">
      <Header />
      <p className="mb-16 mt-10 text-2xl font-bold text-center">
        Let&apos;s handle your subscription !</p>
      {/* Subscription card */}
      <div className="flex items-center justify-center mb-16">
        <div className="bg-gradient-to-b from-blue-300 to-slate-300 w-[380px] h-[400px] text-black p-5 flex flex-col gap-2 rounded-md">
          <p className="text-2xl font-bold text-center">Pro Membership</p>
          <p className="font-medium">Features include :</p>
          {tiers.filter((tier, index) => index === 1).map((paidTier) => (
            <div key={paidTier.id}>
              <ul>{paidTier.features.map((feature) => (
                <p className="flex items-center gap-2 text-grey-700" key={feature}>
                  <CheckIcon className="w-6 h-6 text-indigo-600"
                    aria-hidden="true"
                  />{feature}</p>
              ))}</ul>
              <p className="text-xl font-semibold mt-5 text-center">Price: <span className="font-bold">{paidTier.priceMonthly}/-</span></p>
            </div>
          ))}
          <div className="w-full mt-5">
            <CheckoutButton />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
{/* <PricingCards redirect={false} /> */ }