import { IoCalendarOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

interface EventHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const EventHeader = ({ activeTab, onTabChange }: EventHeaderProps) => {
  const tabs = ["Details", "Tickets", "Appearance", "Guestlist", "Sales"];
  const isPublished = false; // Simulating the state for now

  return (
    <main className="w-full h-fit bg-[#EDEFFF] pt-[160px]">
      {/* Header Section */}
      <section className="w-full mb-6 py-6 px-4 md:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-6">
          <h1 className="text-3xl font-bold mb-4 sm:mb-0">Hackathon</h1>
          <div className="flex items-center gap-4">
            <span className="text-base font-medium text-gray-700">
              Publish your event
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isPublished}
                className="sr-only peer"
              />
              <div className="w-10 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition"></div>
              <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform"></div>
            </label>
          </div>
        </div>

        {/* Event Info */}
        <div className="flex items-center gap-4 text-lg text-gray-700 mb-4">
          <IoCalendarOutline size={24} />
          <p>Fri, Aug 30 2024 at 11:30 AM - 3:00 PM WAT</p>
        </div>
        <div className="flex items-center gap-4 text-lg text-gray-700">
          <CiLocationOn size={24} />
          <p>Magodo Brookes</p>
        </div>
      </section>

      {/* Navigation Section */}
      <nav className="w-full h-14 bg-white border-b-2 flex gap-6 md:gap-0 justify-around overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`text-base px-2 pb-1 ${
              activeTab === tab
                ? "text-red-500 font-medium border-b-2 border-red-500"
                : "text-gray-500 hover:text-gray-700"
            } transition`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </main>
  );
};

export default EventHeader;
