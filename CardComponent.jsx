// import React from "react";

function CardComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#131313] text-white font-poppins">
      <div className="w-full max-w-md p-8 space-y-6 bg-[#424242] rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Pre-booking Payment</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-white"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-white"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className="mt-1 block w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-white"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="flex space-x-4">
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                className="mt-1 block w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-white"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                className="mt-1 block w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-white"
                placeholder="123"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-700"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default CardComponent;
