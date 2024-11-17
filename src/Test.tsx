import { useState } from "react";

const Test = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row h-screen">
        {/* Left Section */}
        <section className="h-full w-full md:w-1/2 px-10 flex flex-col justify-center">
          {/* Image Section */}
          <div className="flex items-center gap-2 my-10">
            <img src="images/logo.svg" width={30} alt="Evently logo" />
            <p className="text-2xl font-semibold">Evently</p>
          </div>

          {/* Form Section */}
          <section className="w-full bg-transparent h-fit py-2">
            <div>
              <h1 className="text-primary font-lora text-3xl font-semibold leading-[46px]">
                Get Started
              </h1>
              <p className="text-primary font-medium text-sm leading-4 mb-8">
                Welcome to Evently - Let’s create your account
              </p>
            </div>

            <form className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600"
                  aria-label="First name"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600"
                  aria-label="Last name"
                />
              </div>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600"
                aria-label="Username"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600"
                aria-label="Email"
              />
              <input
                type="password"
                placeholder="Create Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600"
                aria-label="Create Password"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600"
                aria-label="Confirm Password"
              />
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600">
                    Terms and Conditions
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-purple-600 rounded-md text-white hover:bg-purple-700 transition-colors"
              >
                Continue
              </button>
            </form>
          </section>
        </section>

        {/* Right Section */}
        <section className="hidden md:flex w-1/2 bg-purple-50 items-center justify-center">
          {/* Placeholder content */}
          <p className="text-center text-purple-700 text-lg">
            Welcome to Evently!
          </p>
        </section>
      </main>
    </>
  );
};

export default Test;
