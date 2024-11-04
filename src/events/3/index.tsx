/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import Progress from "./Progress";
import Footer from "../../components/shared/Footer";
import { useState } from "react";
export default function Event3() {;
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl: any = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };
  const handleImageClick = () => {
    document.getElementById("dropzone-file")?.click();
  };

  return (
    <main className="w-full">
      <h2 className="text-[#25194D] font-semibold text-4xl text-center mt-14">
        CREATE EVENT
      </h2>
      <p className="text-center mt-2 text-[#25194D]">
        Begin your journey to an unforgettable experience.
      </p>
      <Progress />
      <div className="mt-10 w-[80%] m-auto">
        <h2 className=" text-[#25194D] text-2xl font-semibold">
          Event Appearance
        </h2>
        <p>Upload an image of your event or stick with our default theme</p>
      </div>
      <section className="mt-4 mb-10 bg-[#EDEFFF] space-y-4 flex flex-col items-center justify-center w-[80%] m-auto h-[600px] rounded-md">
        <div className="flex items-center justify-center w-[50%]">
          {/* Conditionally render the upload label or the image preview */}
          {!imagePreview ? (
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full md:h-[304px] rounded-lg cursor-pointer bg-[#FFFFFF] hover:bg-gray-100 dark:border-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-image text-[#25194D]"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                <p className="text-center md:text-start mt-6 mb-2 text-sm md:text-lg text-[#FA776C] dark:text-gray-400">
                  <span className="text-[#25194D]">Drag an image here</span> or
                  click to upload
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          ) : (
            // Display the image preview and make it clickable to change the image
            <div className="w-full flex justify-center">
              <img
                src={imagePreview}
                alt="Uploaded Preview"
                className="rounded-md max-h-[300px] object-cover cursor-pointer"
                onClick={handleImageClick}
              />
            </div>
          )}
        </div>
        {/* Hidden file input for selecting the image */}
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </section>

      <section className="mt-20 my-6 mb-10 w-full flex flex-row justify-center gap-x-8 items-center">
        <Link
          to="/events/create/2"
          className="flex justify-center items-center shaodw-md w-[240px] h-[48px] rounded-md text-primary text-md bg-[#624CF50D]"
        >
          Receed
        </Link>
        <Link
          to="/"
          className="flex justify-center items-center w-[240px] h-[48px] rounded-md text-white text-md bg-[#624CF5]"
        >
          Create Event
        </Link>
      </section>
      <Footer />
    </main>
  );
}
