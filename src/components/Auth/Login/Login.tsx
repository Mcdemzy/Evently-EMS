import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Left side - Image slider (optional, like the signup) */}
      <div className="hidden md:block w-1/2 relative">
        <img
          src="images/event-login.png"
          alt="Event"
          className="h-full object-cover"
        />
        <div className="absolute bottom-0 p-8 text-white">
          <h2 className="text-[1.5rem] font-semibold text-center">
            Dream big, plan bigger, and make magic happen.
          </h2>
        </div>
        <Link
          to="/signup"
          className="absolute top-4 right-4 text-white bg-opacity-30 bg-black p-2 border border-white border-solid w-20 flex justify-center rounded-3xl z-[10000]"
        >
          Sign up
        </Link>
      </div>

      {/* Right side - Login form */}
      <div className="w-full md:w-1/2 h-fit pt-5 bg-white flex justify-center items-center">
        <div className="w-4/5 lg:w-2/3">
          <div className="mb-8">
            <div className="flex gap-4">
              <img
                src="images/logo.svg"
                width={30}
                height={50}
                alt="Evently Logo"
              />
              <span className="md:text-2xl text-xl font-bold">Evently</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-purple-800 mb-2">
            Welcome back
          </h1>
          <p className="text-gray-600 mb-8">
            Glad to have you back - Login to your account
          </p>
          <form className="space-y-4">
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
            <button
              type="submit"
              className="w-full p-3 bg-gray-400 rounded-md text-white"
            >
              Sign in
            </button>
          </form>
          <div className="mt-4 text-center">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
