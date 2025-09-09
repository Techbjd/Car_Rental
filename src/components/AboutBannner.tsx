import blurcar from "../assets/blurcar.png"; 
import React from "react";
interface AboutBannerProps {
  imageSrc: string;
}

const AboutBanner: React.FC<AboutBannerProps> = ({ imageSrc }) => {
  return (
    <div className="relative max-w-[1296px] mx-auto rounded-xl overflow-hidden bg-[#5937E0]">
      {/* Inner content */}
      <div className="relative  flex flex-col lg:flex-row items-center p-6 sm:p-8 md:p-12 gap-6 lg:gap-12">
        
        {/* Left content */}
        <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug text-white">
            Looking for a car?
          </p>
          <span className="font-semibold text-lg sm:text-2xl md:text-4xl text-white">
            +537 547-6401
          </span>
          <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed text-gray-100 bg-white/20 rounded-md p-4">
            Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in.
            Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis elit magna magna at. 
            Fames etiam quis diam nunc. Gravida auctor fermentum morbi vulputate ac egestas orci. 
            Pretium convallis id diam sed commodo vestibulum lobortis volutpat praesent. Cras nulla 
            semper tellus enim malesuada ornare curabitur dui.
          </p>
          <button className="w-[120px] sm:w-[132px] rounded-[12px] py-2 sm:py-3 text-white bg-yellow-400 hover:bg-yellow-500 text-sm sm:text-lg opacity-100 mx-auto lg:mx-0">
            Book Now
          </button>
        </div>

        {/* Right content (image stays but invisible for layout balance) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={imageSrc || blurcar}
            alt="Car"
            className="w-2/3 sm:w-1/2 md:w-3/4 lg:w-full h-auto object-contain opacity-25"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
