import { FaRegEnvelope } from 'react-icons/fa6';
import ImageSlider from '../../shared/ImageSlider/ImageSlider';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <div className="flex w-full h-screen">
      <ImageSlider />
      <div className="flex flex-col w-full h-full">
        <div className="mt-10 mx-10">
          <div className="flex gap-2">
            <img
              src="images/logo.svg"
              width={30}
              height={50}
              alt="Event Image"
            />
            <span className="md:text-2xl text-xl font-bold">Evently</span>
          </div>
        </div>

        <div className="mx-10 flex flex-col justify-center flex-grow">
          <h2 className="text-[#25194D] font-semibold text-4xl leading-10 font-[lora]">
            Forgot password
          </h2>
          <span className="font-medium text-xs leading-3 text-[#25194D] mt-2">
            Please input your email address
          </span>

          <form className="w-full mt-10">
            <div className="relative rounded-md flex items-center mb-4">
              <FaRegEnvelope className="absolute text-gray-400 w-4 h-4 ml-3" />
              <input
                required
                type="text"
                placeholder="Email address"
                className="w-full p-2 pl-9 rounded-md border-[#BDBDBD] border outline-[#292929] outline-1"
              />
            </div>
          </form>
        </div>

        <div className="mx-10">
          <div className=" mx-auto mb-10">
            <button
              type="submit"
              className="w-full p-3 bg-[#DCDCDC] hover:bg-[#6440EB] rounded-md text-white font-bold text-xs leading-4"
            >
              Get code
            </button>
            <div className="mt-4 text-center">
              <p className="font-normal text-sm leading-5">
                Don’t have an account?{' '}
                <Link to="/login" className="text-[#25194D] font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
