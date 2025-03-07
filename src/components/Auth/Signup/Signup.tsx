import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import ImageSlider from "../../shared/ImageSlider/ImageSlider";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react"; // Import useEffect

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePassword = (password: string) => {
    // Password must be at least 8 characters long, contain a number, and a special character
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { firstName, lastName, username, email, password, confirmPassword } =
      formData;

    // Validate all fields
    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError("All fields are required.");
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Validate password strength
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long, contain a number, and a special character."
      );
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          firstName,
          lastName,
          username,
          email,
          password,
        }
      );

      if (response.status === 201) {
        setSuccess("Account Created Successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        // Redirect to login page after 2 seconds
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err: any) {
      if (err.response) {
        setError(
          err.response.data.message || "An error occurred during registration."
        );
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Left side - Signup form */}
      <main className="pt-8 min-h-screen w-full md:w-1/2 px-4 md:px-10">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.svg" width={28} alt="logo" />
          <p className="text-3xl font-bold">Evently</p>
        </div>

        {/* Get Started Heading */}
        <div className="mt-[40px] mb-[40px]">
          <h1 className="text-4xl font-semibold mb-3">Get Started</h1>
          <p className="text-lg text-gray-600">
            Welcome to Evently - Let’s create your account
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit}>
          {/* Error and Success Messages */}
          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
          {success && (
            <div className="mb-4 text-green-500 text-sm">{success}</div>
          )}

          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-x-2 mb-6">
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              <FaUser className="absolute left-4 top-5 text-gray-500" />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="border w-full p-4 pl-10 rounded-md"
              />
            </div>
            <div className="relative w-full md:w-1/2">
              <FaUser className="absolute left-4 top-5 text-gray-500" />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="border w-full p-4 pl-10 rounded-md"
              />
            </div>
          </div>

          {/* Username Field */}
          <div className="relative mb-4">
            <FaUser className="absolute left-4 top-5 text-gray-500" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="border w-full p-4 pl-10 rounded-md"
            />
          </div>

          {/* Email Field */}
          <div className="relative mb-4">
            <FaEnvelope className="absolute left-4 top-5 text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="border w-full p-4 pl-10 rounded-md"
            />
          </div>

          {/* Password Field */}
          <div className="relative mb-4">
            <FaLock className="absolute left-4 top-5 text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              className="border w-full p-4 pl-10 pr-10 rounded-md"
            />
            {showPassword ? (
              <FaRegEyeSlash
                className="absolute right-4 top-5 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaRegEye
                className="absolute right-4 top-5 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="relative mb-4">
            <FaLock className="absolute left-4 top-5 text-gray-500" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border w-full p-4 pl-10 pr-10 rounded-md"
            />
            {showConfirmPassword ? (
              <FaRegEyeSlash
                className="absolute right-4 top-5 text-gray-500 cursor-pointer"
                onClick={() => setShowConfirmPassword(false)}
              />
            ) : (
              <FaRegEye
                className="absolute right-4 top-5 text-gray-500 cursor-pointer"
                onClick={() => setShowConfirmPassword(true)}
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Registering..." : "Continue"}
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white text-gray-500">OR</span>
            </div>
          </div>

          {/* Google Auth */}
          <div className="relative w-full border rounded-md flex items-center justify-center py-3 cursor-pointer hover:bg-gray-200 mb-6">
            <FcGoogle className="mr-2 text-xl" />
            <p className="text-gray-700">Continue with Google</p>
          </div>

          {/* Sign-in Link */}
          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 cursor-pointer">
              Sign in
            </Link>
          </p>
        </form>
      </main>
      {/* Right side - Image slider */}
      <ImageSlider />
    </div>
  );
};

export default Signup;
