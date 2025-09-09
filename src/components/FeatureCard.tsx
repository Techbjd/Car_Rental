import React from "react";

interface FeatureCardProps {
  title: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, desc }) => {
  return (
    <div className="flex flex-col gap-2 sm:gap-3">
      <p className="text-xl sm:text-2xl font-semibold">{title}</p>
      <p className="text-sm sm:text-base md:text-base text-gray-700 leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

export default FeatureCard;
