import React from "react";

interface StatsCardProps {
  number: string;
  label: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ number, label }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5937E0]">
        {number}
      </span>
      <p className="text-xs sm:text-sm md:text-base font-bold text-black">
        {label}
      </p>
    </div>
  );
};

export default StatsCard;
