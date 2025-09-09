import React from "react";
interface BookingFormProps {
  bgClass?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ bgClass }) => {
  return (
    <div
      className={`${bgClass} rounded-[20px] shadow-2xl border border-gray-100 flex flex-col w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[416px] p-6 sm:p-8 md:p-10`}
    >
      <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-center text-gray-800">
        Book your car
      </h2>

      <form className="space-y-4 flex-1 flex flex-col justify-between mt-6">
        {/* Car Type */}
        <div className="relative">
          <select className="w-full p-3 pr-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50 text-gray-800 appearance-none">
            <option>Car type</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Luxury</option>
          </select>
          <svg
            className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Place of Rental */}
        <div className="relative">
          <select className="w-full p-3 pr-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50 text-gray-800 appearance-none">
            <option>Place of rental</option>
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Chicago</option>
          </select>
          <svg
            className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Place of Return */}
        <div className="relative">
          <select className="w-full p-3 pr-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50 text-gray-800 appearance-none">
            <option>Place of return</option>
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Chicago</option>
          </select>
          <svg
            className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Rental Date */}
        <div className="relative">
          <input
            type="date"
            className="w-full p-3 pr-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50 text-gray-800"
          />
          <svg
            className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Return Date */}
        <div className="relative">
          <input
            type="date"
            className="w-full p-3 pr-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50 text-gray-800"
          />
          <svg
            className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Book Now Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Book now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
