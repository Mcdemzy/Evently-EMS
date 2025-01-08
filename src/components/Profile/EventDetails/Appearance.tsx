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
    <main className="min-h-[140vh] pt-6 py-6 px-4 md:px-8">
      {/* Header Section */}
      <section>
        <h1 className="text-[#25194D] text-2xl font-bold uppercase">
          Theme Customization for Event Page
        </h1>
        <p className="text-[#25194D] font-normal my-4">
          Upload an image of your event or stick with our default theme
        </p>
      </section>

      {/* Image Upload Section */}
      <section className="w-full">
        <div className="bg-[#EDEFFF] w-full h-[60vh] md:h-[90vh] rounded-tl-[40px] rounded-br-[40px] flex justify-center items-center p-4 md:p-6">
          <div className="bg-white w-full max-w-sm h-full max-h-[350px] md:max-h-[400px] rounded-[20px] flex flex-col justify-center items-center gap-4 p-4 md:p-6">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Uploaded Preview"
                className="w-full h-full object-cover rounded-[20px]"
              />
            ) : (
              <>
                <FaImage size={40} className="text-[#25194D]" />
                <p className="text-center text-gray-600 text-sm md:text-base">
                  Drag an image here or{" "}
                  <label
                    htmlFor="file-upload"
                    className="text-[#FA776C] cursor-pointer font-medium"
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
      <div className="flex justify-center items-center">
        <button
          className="bg-[#FA776C] text-white rounded-lg hover:bg-[#e8645a] transition-all py-3 px-6 mt-8"
          onClick={() => {
            alert("Image Updated");
          }}
        >
          Save
        </button>
      </div>
    </main>
  );
};

export default Appearance;
