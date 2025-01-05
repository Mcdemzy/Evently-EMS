import React, { useState } from "react";
import { FaImage } from "react-icons/fa6";

const Appearance = ({}: { eventId: string | undefined }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setSelectedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="min-h-[140vh] flex flex-col items-center pt-10">
      {/* Header Section */}
      <section className="px-6 md:px-16 lg:px-24 text-center mb-8">
        <h1 className="text-[#25194D] text-2xl font-bold uppercase">
          Theme Customization for Event Page
        </h1>
        <p className="text-[#25194D] font-normal mt-4">
          Upload an image of your event or stick with our default theme
        </p>
      </section>

      {/* Image Upload Section */}
      <section className="w-full px-6 md:px-16 lg:px-24 flex justify-center">
        <div className="bg-[#EDEFFF] w-full max-w-4xl h-[60vh] rounded-tl-[40px] rounded-br-[40px] flex justify-center items-center p-6">
          <div className="bg-white w-full max-w-md h-full max-h-[400px] rounded-[20px] flex flex-col justify-center items-center gap-4 p-4">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Uploaded Preview"
                className="w-full h-full object-cover rounded-[20px]"
              />
            ) : (
              <>
                <FaImage size={40} className="text-[#25194D]" />
                <p className="text-center text-gray-600">
                  Drag an image here or{" "}
                  <label
                    htmlFor="file-upload"
                    className="text-[#FA776C] cursor-pointer"
                  >
                    click to upload
                  </label>
                </p>
              </>
            )}
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>
      </section>

      {/* Save Button */}
      <button
        className="bg-[#FA776C] text-white py-3 px-6 rounded-lg mt-8 hover:bg-[#e8645a] transition-all"
        onClick={() => {
          alert("Image Updated");
        }}
      >
        Save
      </button>
    </main>
  );
};

export default Appearance;
