import React from "react";
interface ReviewCardProps {
  name: string;
  company: string;
  text: string;
  image: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, company, text, image }) => {
  return (
    <section className="relative  bg-[#f9f9f9] rounded-2xl  sm:w-[400px] md:w-6/7  h-auto   items-center shadow-md overflow-hidden">
      {/* Review Content */}
      <div className="w-full h-[200px] flex items-center justify-center px-6 text-center">
        <p className="text-gray-500">"{text}"</p>
      </div>

      {/* Footer */}
      <div className="w-full bg-[#5937E0] text-white py-10 text-center rounded-b-2xl mt-auto">
        <h4 className="font-bold text-lg">{name}</h4>
        <p className="text-sm opacity-80">{company}</p>
      </div>

      {/* Avatar */}
      <div className="absolute  left-1/2 -translate-x-1/2 -translate-y-3/2 top-[290px] ">
        <img
          className="w-[84px] h-[84px] rounded-full bg-white object-cover border-4 border-white shadow-md"
          src={image}
          alt={name}
        />
      </div>
    </section>
  )
}

export default ReviewCard
