import React from "react";

const BlogCard: React.FC = () => {
  return (
    <div className="relative mx-auto bg-[#5937E0] rounded-3xl shadow-2xl max-w-[1296px] mt-8 sm:mt-10">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M20,10 L35,17.32 L35,34.64 L20,42 L5,34.64 L5,17.32 Z"
                fill="white"
              />
            </pattern>
          </defs>
          <rect width="55%" height="20%" fill="url(#hex)" />
        </svg>
      </div>

      {/* Inner content */}
      <div className="relative px-4 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-14 md:py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Phone mockup */}
        <div className="flex-1 flex justify-center md:justify-start relative z-20">
          <div className="relative w-32 sm:w-40 md:w-56 lg:w-72 h-[260px] sm:h-[360px] md:h-[480px] lg:h-[600px]">
            {/* Phone frame */}
            <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl border border-gray-800"></div>

            {/* Phone screen */}
            <div className="absolute inset-2 sm:inset-3 bg-gray-100 rounded-2xl"></div>

            {/* Top bar */}
            <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-12 sm:w-16 md:w-20 h-3 sm:h-4 bg-black rounded-full flex items-center justify-center gap-1">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            </div>

            {/* Side buttons */}
            <div className="absolute left-0 top-12 sm:top-16 w-0.5 sm:w-1 h-16 sm:h-20 bg-gray-800 rounded-l-full"></div>
            <div className="absolute right-0 top-12 sm:top-16 w-0.5 sm:w-1 h-16 sm:h-20 bg-gray-800 rounded-r-full"></div>

            {/* Bottom home button */}
            <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 w-6 sm:w-8 md:w-10 h-1 bg-gray-800 rounded-full"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-20 relative">
          <h2 className="text-xs sm:text-sm md:text-base font-semibold text-white uppercase tracking-wider mb-2 sm:mb-4">
            Download Our App
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-snug">
            Get the App Now
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white mb-6 md:mb-8 leading-relaxed">
            Experience our app with smooth performance and modern design. Stay
            connected, stay updated, and enjoy the convenience at your
            fingertips.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a
              href="#"
              className="flex items-center justify-center bg-white text-black px-3 sm:px-5 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg text-xs sm:text-sm md:text-base"
            >
              Download on the App Store
            </a>

            <a
              href="#"
              className="flex items-center justify-center bg-white text-black px-3 sm:px-5 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg text-xs sm:text-sm md:text-base"
            >
              GET IT ON Google Play
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
