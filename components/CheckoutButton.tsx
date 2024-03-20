"use client";

export default function CheckoutButton() {
  
  const createCheckoutSession = async ()=> {

  }

  return (
    <div>
      <button
        onClick={() => createCheckoutSession()}
        className="bg-black font-semibold rounded-md p-1 text-white 
        hover:bg-gray-900 bottom-0 w-full"
      >
        Checkout
      </button>
    </div>
  );
}
