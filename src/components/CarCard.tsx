import { useNavigate } from "react-router-dom";

import React from 'react';

interface Car {
  id: number;
  brand: string;
  model: string;
  price: number;
  features: string[];
  image?: string;
}

interface CarCardProps {
  car: Car;
 onSelect?: (id: number) => void; 
 navigateTo?: string;
}

const CarCard: React.FC<CarCardProps> = ({ car ,onSelect ,navigateTo}) => {
  const navigate = useNavigate();
  const getIcon = (feature: string) => {
    switch (feature.toLowerCase()) {
      case 'automat':
        return (
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'pb 95':
      case 'premium':
      case 'diesel':
        return (
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        );
      case 'air conditioner':
        return (
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (

    <div onClick={() => onSelect && onSelect(car.id)}
      className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition duration-200 cursor-pointer w-full max-w-[416px]"
      
    >
      {/* Car Image */}
      <div className="h-48 md:h-[200px] flex items-center justify-center bg-gray-50">
        <img
          src={car.image || "https://via.placeholder.com/300x150?text=Car"}
          alt={car.brand}
          className="w-full h-full object-contain grayscale"
        />
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <div className="flex justify-between items-start mb-4 md:mb-6">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">{car.brand}</h3>
            <p className="text-sm text-gray-500">{car.model}</p>
          </div>
          <div className="text-right">
            <p className="text-xl md:text-2xl font-bold text-purple-600">${car.price}</p>
            <p className="text-xs text-gray-400">per day</p>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-4 mt-4 text-gray-600">
          {car.features.map((feature, index) => (
            <div key={index} className="flex items-center">
              {getIcon(feature)}
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
<button
  onClick={() => {
    if (navigateTo) {
      navigate(`${navigateTo}?carId=${car.id}`);
    } else if (onSelect) {
      onSelect(car.id);
    }
  }}
  className="mt-6 w-full bg-purple-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-full hover:bg-purple-700 transition font-medium text-sm md:text-base"
>
  View Details
</button>

      </div>
    </div>
  );
};

export default CarCard;
