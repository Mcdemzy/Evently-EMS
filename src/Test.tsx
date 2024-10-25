import { Link } from "react-router-dom";

const Test = () => {
  return (
    <>
      <main className="h-screen md:w-1/2 bg-gray-200 p-10 flex flex-col gap-[100px]">
        <div className="flex gap-4">
          <img
            src="images/logo.svg"
            width={30}
            height={50}
            alt="Evently Logo"
          />
          <span className="md:text-2xl text-xl font-bold">Evently</span>
        </div>

        {/* Form Section */}

        <section>
          <form className="space-y-4 flex flex-col justify-end h-full">
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-bold text-purple-800 mb-2">
                Welcome back
              </h1>
              <p className="text-gray-600 mb-8">
                Glad to have you back - Login to your account
              </p>
              <input
                type="text"
                placeholder="Username or Email address"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-md"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <Link to="/forgot-password" className="text-blue-600">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-gray-400 rounded-md text-white"
              >
                Sign in
              </button>
              <p className="text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-600">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Test;
