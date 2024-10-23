import React from 'react';
import { CardProps } from '../../../types';
import { IoCalendarOutline, IoLocationSharp } from 'react-icons/io5';

interface CardComponentProps extends CardProps {
  darkMode: boolean;
}

const Card: React.FC<CardComponentProps> = ({
  title,
  price,
  description,
  date,
  time,
  organizer,
  imageUrl,
  darkMode,
}) => {
  return (
    <div
      className={`card group relative shadow-lg rounded-xl p-4 w-80 mx-4 border cursor-pointer transition-colors duration-500 ${
        darkMode ? 'border-gray-700 border-opacity-45' : 'bg-white border-gray-200'
      }`}
    >
      <div className="absolute inset-0 flex items-start pt-32 justify-center bg-black bg-opacity-0 text-white transition-opacity duration-300 opacity-0 group-hover:bg-opacity-50 group-hover:opacity-100 rounded-xl">
        <span className="text-2xl font-bold">Get Tickets</span>
      </div>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg shadow-md"
      />
      <div className="p-4">
        <h2
          className={`text-2xl font-semibold transition-colors duration-500 ${
            darkMode ? 'text-white' : 'text-[#25194D]'
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-base transition-colors duration-500 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}
        >
          {description}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span
            className={`rounded-[48px] py-2 px-7 font-semibold transition-colors duration-500 ${
              darkMode ? 'bg-white text-black' : 'bg-[#25194D] text-white'
            }`}
          >
            ${price.toFixed(2)}
          </span>
        </div>
        <div
          className={`mt-4 flex items-center text-base font-medium transition-colors duration-500 ${
            darkMode ? 'text-white' : 'text-[#25194D]'
          }`}
        >
          <IoCalendarOutline
            className={`mr-2 w-6 h-6 transition-colors duration-500 ${
              darkMode ? 'text-white' : 'text-[#25194D]'
            }`}
          />
          {date}, {time}
        </div>
        <div
          className={`mt-2 flex items-center text-base font-medium transition-colors duration-500 ${
            darkMode ? 'text-white' : 'text-[#25194D]'
          }`}
        >
          <IoLocationSharp
            className={`mr-2 w-6 h-6 transition-colors duration-500 ${
              darkMode ? 'text-white' : 'text-[#25194D]'
            }`}
          />
          {organizer}
        </div>
      </div>
    </div>
  );
};

export default Card;
