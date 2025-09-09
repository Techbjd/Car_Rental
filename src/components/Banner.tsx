const Banner = () => {
  return (
    <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6">
      <div className="w-full max-w-7xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden bg-[#5937E0] p-6 sm:p-12"
          
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Car silhouette */}
          <div className="absolute w-full h-full right-4 sm:right-8 lg:right-16 top-1/2 transform -translate-y-1/2  sm:w-56 lg:w-[580px]  sm:h-48 lg:h-[480px]">
            <img
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
              alt="Car silhouette"
              className="w-full h-full object-contain opacity-15"
            />
          </div>

          {/* Main content */}
          <div className="relative z-10 text-center sm:text-left max-w-full sm:max-w-2xl mx-auto sm:mx-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Enjoy every mile with
              <br />
              adorable companionship.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-4 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg">
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat
            </p>

            {/* Compact Search Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white/90 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-lg border border-white/20 max-w-md sm:max-w-lg mx-auto sm:mx-0">
              <input
                type="text"
                placeholder="City"
                className="flex-1 px-3 py-2 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 text-sm sm:text-base"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm sm:text-base w-full sm:w-auto">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
