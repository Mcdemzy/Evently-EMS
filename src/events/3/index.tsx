/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate, useParams } from "react-router-dom";
import Progress from "./Progress";
import { useState } from "react";
import { Loader } from "lucide-react";
import { Toaster, toast } from "sonner";
import axios from "axios";
// import { BASE_URL } from "@/config/config";
export default function Event3() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const uploadImage = async () => {
    if (!selectedFile) {
      toast.error("Please select an image first!");
      return;
    }
    setIsLoading(true);

    const formData = new FormData();
    formData.append("eventImage", selectedFile);

    try {
      const response = await axios.put(
        // `${BASE_URL}/events/update-image/${eventId}`,
        `http://localhost:5000/api/events/update-image/${eventId}`, // deoployed be doesnt work

        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      setIsLoading(false);
      toast.success("Image uploaded successfully!", response?.data?.message);
      setTimeout(() => {
        navigate("/events/all");
      }, 2000);
    } catch (error: any) {
      console.error("Upload failed:", error);
      toast.error(
        `Error: ${error.response?.data?.message || "Failed to upload image."}`
      );
    }
  };

  return (
    <>
      <Toaster richColors position="top-right" />
      <main className="overflow-hidden dark:bg-black w-full">
        <h2 className="dark:text-[#EDEFFF] text-[#25194D] font-semibold text-4xl text-center mt-14">
          CREATE EVENT
        </h2>
        <p className="dark:text-[#EDEFFF] text-center mt-2 text-[#25194D]">
          Begin your journey to an unforgettable experience.
        </p>
        <Progress />
        <div className="mt-10 w-[80%] m-auto">
          <h2 className="dark:text-[#EDEFFF] text-[#25194D] text-2xl font-semibold">
            Event Appearance
          </h2>
          <p className="dark:text-[#EDEFFF]">
            Upload an image of your event or stick with our default theme
          </p>
        </div>
        <section className="mt-4 mb-10 dark:bg-[#1F1F1F] bg-[#EDEFFF] space-y-4 flex flex-col items-center justify-center w-[80%] m-auto h-[600px] rounded-md">
          <div className="flex items-center justify-center w-[50%]">
            {!imagePreview ? (
              <label
                htmlFor="dropzone-file"
                className="dark:bg-[#000000] flex flex-col items-center justify-center w-full md:h-[304px] rounded-lg cursor-pointer bg-[#FFFFFF] hover:bg-gray-100 dark:border-gray-600"
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
                    className="dark:text-white lucide lucide-image text-[#25194D]"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                  <p className="text-center md:text-start mt-6 mb-2 text-sm md:text-lg text-[#FA776C]">
                    <span className="dark:text-white text-[#25194D]">
                      Drag an image here
                    </span>{" "}
                    or click to upload
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  required
                />
              </label>
            ) : (
              <div className="w-full flex justify-center">
                <img
                  src={imagePreview}
                  alt="Uploaded Preview"
                  className="rounded-md max-h-[300px] object-cover cursor-pointer"
                  onClick={() =>
                    document.getElementById("dropzone-file")?.click()
                  }
                />
              </div>
            )}
          </div>
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
            to={`/events/preview/${eventId}`}
            className="dark:border flex justify-center items-center shaodw-md w-[240px] h-[48px] rounded-md dark:text-[#DFE1FF] text-primary text-md dark:bg-black bg-[#624CF50D]"
          >
            Receed
          </Link>
          <button
            onClick={uploadImage}
            className="flex justify-center items-center w-[240px] h-[48px] rounded-md text-white text-md bg-[#624CF5]"
          >
            {isLoading ? (
              <Loader className="animate-spin mx-auto" size={24} />
            ) : (
              "Create Event"
            )}
          </button>
        </section>
      </main>
    </>
  );
}
