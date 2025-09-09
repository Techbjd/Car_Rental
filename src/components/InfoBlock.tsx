import { MapPin, Car, Wallet } from "lucide-react";
function InfoBlock() {
  return (
    <div className="w-full flex justify-center bg-white">
      {/* Container */}
      <div className="max-w-[1296px] w-full px-4 sm:px-8 md:px-12 lg:px-[72px] py-10 sm:py-14 lg:py-[60px] rounded-xl bg-white shadow-md">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Availability block */}
          <div className="flex flex-col items-center text-center gap-3 p-6 rounded-xl shadow-sm">
            <MapPin className="text-gray-600 w-10 h-10 sm:w-12 sm:h-12" />
            <span className="font-semibold text-gray-700">Availability</span>
            <span className="px-4 py-2 rounded-full text-xs sm:text-sm text-gray-700 bg-gray-100">
              24/7 Support, Multiple Locations, Easy Pickup
            </span>
          </div>

          {/* Comfort block */}
          <div className="flex flex-col items-center text-center gap-3 p-6 rounded-xl shadow-sm">
            <Car className="text-gray-600 w-10 h-10 sm:w-12 sm:h-12" />
            <span className="font-semibold text-gray-700">Comfort</span>
            <span className="px-4 py-2 rounded-full text-xs sm:text-sm text-gray-700 bg-gray-100">
              Luxury Seating, AC Cars, Smooth Ride
            </span>
          </div>

          {/* Saving block */}
          <div className="flex flex-col items-center text-center gap-3 p-6 rounded-xl shadow-sm">
            <Wallet className="text-gray-600 w-10 h-10 sm:w-12 sm:h-12" />
            <span className="font-semibold text-gray-700">Saving</span>
            <span className="px-4 py-2 rounded-full text-xs sm:text-sm text-gray-700 bg-gray-100">
              Best Price Deals, Discounts, No Hidden Fees
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default InfoBlock;
