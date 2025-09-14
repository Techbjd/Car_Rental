import { Settings, AirVent, Shield, Thermometer, CheckCheck } from "lucide-react";
import { addToCart } from "../redux/slices/counter";
import { useAppDispatch } from "../redux/hooks";
import carsData from "../data/carsData";
import { useState, type JSX } from "react";
import React from "react";
interface CarDetailsProps {
  carId: number;
}

// Map features to icons dynamically
const featureIcons: Record<string, JSX.Element | null> = {
  "Automat": <Settings className="w-6 h-6 text-black" />,
  "Air Bags": <AirVent className="w-6 h-6 text-black" />,
  "Cruise Control": null,
  "ABS": <Shield className="w-6 h-6 text-black" />,
  "Air Conditioner": <Thermometer className="w-6 h-6 text-black" />,
  "PB 95": null, 
};

const CarDetails: React.FC<CarDetailsProps> = ({ carId }) => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState("");

  const car = carsData.find((c) => c.id === carId);

  if (!car) return <p className="text-center text-red-500">Car not found!</p>;

  const handleRent = () => {
    dispatch(addToCart(car));
    setMessage(`${car.brand} ${car.model} added to cart!`);
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="w-full min-h-[860px] flex flex-col lg:flex-row justify-center items-start p-6 lg:p-[60px_72px] gap-6 relative">
      {message && (
        <div className="absolute top-0 right-0 m-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          {message}
        </div>
      )}

      {/* Left Column */}
      <div className="flex flex-col gap-5 w-full lg:w-[636px]">
        <div className="flex flex-col gap-5">
          <h1 className="text-[32px] lg:text-[40px] font-bold text-black">
            {car.brand} {car.model}
          </h1>
          <div className="flex gap-1 items-center">
            <span className="text-[32px] lg:text-[40px] font-semibold text-purple-700">
              ${car.price}
            </span>
            <span className="text-[16px] text-black/60">/ day</span>
          </div>
        </div>

        {/* Car Image */}
        <div
          className="w-full h-[200px] sm:h-[260px] md:h-[303px] bg-cover bg-no-repeat transform scale-x-[-1] rounded-lg"
          style={{
            backgroundImage: `url(${car.image || 'https://via.placeholder.com/300'})`,
          }}
        />

        {/* Thumbnails */}
        <div className="flex gap-4 sm:gap-6 h-[80px] sm:h-[100px]">
          {car.features.slice(0, 3).map((_, i) => (
            <div
              key={i}
              className="flex-1 sm:w-[140px] sm:h-[100px] h-[80px] bg-cover rounded-lg"
              style={{
                backgroundImage: `url(${car.image || 'https://via.placeholder.com/150'})`,
                
              }}
              
            />
          ))} 
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-12 lg:gap-16 w-full lg:w-[636px]">
        {/* Technical Specs */}
        <div className="flex flex-col gap-6 lg:gap-10">
          <h2 className="text-[20px] lg:text-[24px] font-semibold text-black">
            Technical Specification
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:flex lg:flex-wrap lg:gap-6">
            {car.features.map((feature, idx) => (
              <div
                key={idx}
                className="w-full sm:w-[160px] lg:w-[196px] h-[120px] lg:h-[148px] bg-gray-100 rounded-lg flex flex-col justify-center items-start p-4 lg:p-6 gap-3 lg:gap-5"
              >
                {featureIcons[feature] || null}
                <span className="font-semibold">{feature}</span>
                <span className="text-black/60">
                  {feature === "Automat" ? "Manual" : ""}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Rent Button */}
        <button
          onClick={handleRent}
          className="w-full sm:w-[200px] lg:w-[290px] h-[45px] lg:h-[50px] bg-purple-700 text-white rounded-lg font-semibold"
        >
          Rent a Car
        </button>

        {/* Car Equipment */}
        <div className="flex flex-col gap-6 lg:gap-10">
          <h2 className="text-[20px] lg:text-[24px] font-semibold text-black">
            Car Equipment
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-14">
            {car.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 lg:gap-4">
                <CheckCheck />
                <span className="text-black/60">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
