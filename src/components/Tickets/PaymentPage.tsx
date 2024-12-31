const PaymentPAge = () => {
  return (
    <>
      <main className="pt-[100px] md:pt-[124px]">
        <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
          <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
              Payment
            </h1>
            <p className="bg-blue-100 text-blue-600 p-4 rounded-md mb-6">
              We’ve reserved your tickets. Please complete checkout to secure
              your tickets.
            </p>
            <div className="space-y-4">
              {/* Payment Options */}
              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  name="payment-method"
                  id="paystack"
                  className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="paystack" className="text-gray-800 font-medium">
                  Pay with Card or Bank
                </label>
                <img
                  src="https://via.placeholder.com/100x30?text=Paystack"
                  alt="Paystack"
                  className="ml-auto"
                />
              </div>
              <hr className="my-4" />
              {/* Terms and Conditions */}
              <div className="bg-red-50 text-red-600 p-4 rounded-md mb-4">
                You must accept the Evently Terms and Conditions, Refund Policy,
                and Privacy Policy before completing this purchase.
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="accept-terms"
                    className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="accept-terms" className="text-gray-800">
                    I accept the{" "}
                    <a href="#" className="text-blue-600 underline">
                      Evently Terms and Conditions, Refund Policy, and Privacy
                      Policy
                    </a>
                    .
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="email-updates"
                    className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="email-updates" className="text-gray-800">
                    Send me emails about the best events happening nearby or
                    online.
                  </label>
                </div>
              </div>
            </div>
            {/* Summary Section */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Summary
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span>1 x STANDARD</span>
                  <span>₦5,000</span>
                </div>
                <div className="flex justify-between">
                  <span>1 x VIP</span>
                  <span>₦15,000</span>
                </div>
                <div className="flex justify-between">
                  <span>1 x Table for 5</span>
                  <span>₦80,000</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Fees</span>
                  <span>₦1,500</span>
                </div>
                <hr />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₦101,500</span>
                </div>
                {/* Discount Code */}
                <div className="flex items-center mt-4">
                  <input
                    type="text"
                    placeholder="Discount code"
                    className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                  />
                  <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Apply
                  </button>
                </div>
              </div>
            </div>
            {/* Continue Button */}
            <div className="mt-8">
              <button
                onClick={() => alert("Proceeding to Paystack...")}
                className="w-full bg-purple-700 text-white py-3 rounded-md text-lg font-semibold hover:bg-purple-800"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PaymentPAge;
