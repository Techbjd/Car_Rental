const MoobileDesigne = () => {
  return (
    <div className="min-h-[600px] w-full bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12 lg:py-16">
          {/* Left side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Download <br className="hidden sm:block" />
              mobile app
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 md:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor
              cursus turpis nibh placerat massa. Fermentum urna ut at et in.
              Turpis aliquet cras hendrerit enim condimentum. Condimentum
              interdum risus bibendum urna
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              {/* App Store Button */}
              <button className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition duration-300 flex items-center justify-center space-x-2">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h4v-2h-4v2zm0-4h4v-2h-4v2zm0-4h4v-2h-4v2z" />
                </svg>
                <span className="font-medium">Download on the App Store</span>
              </button>

              {/* Google Play Button */}
              <button className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition duration-300 flex items-center justify-center space-x-2">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.24 10.285V14.4h6.828l.77-3.292h-2.577v-1.926h2.577l-.77-3.292h-6.828v1.926H9.657l-.77 3.292h2.577zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v-2h-4v2zm0-4h4v-2h-4v2zm0-4h4v-2h-4v2z" />
                </svg>
                <span className="font-medium">GET IT ON Google Play</span>
              </button>
            </div>
          </div>

          {/* Right side - Dual Phone Mockups */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-[260px] sm:w-[400px] md:w-[500px] lg:w-[600px] aspect-square">
              {/* First Mobile */}
              <div className="absolute top-[15%] left-0 w-[45%] sm:w-[40%] aspect-[9/18] border-2 border-gray-900 rounded-3xl overflow-hidden shadow-xl bg-black">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 sm:w-20 h-3 sm:h-4 bg-black rounded-b-2xl"></div>
                {/* Screen */}
                <div className="w-full h-full bg-white"></div>
                {/* Side buttons */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 sm:h-8 bg-gray-300"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 sm:h-8 bg-gray-300"></div>
              </div>

              {/* Second Mobile */}
              <div className="absolute top-0 left-[30%] sm:left-[35%] w-[45%] sm:w-[40%] aspect-[9/18] border-2 border-gray-900 rounded-3xl overflow-hidden shadow-xl bg-black">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 sm:w-20 h-3 sm:h-4 bg-black rounded-b-2xl"></div>
                {/* Screen */}
                <div className="w-full h-full bg-white"></div>
                {/* Side buttons */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 sm:h-8 bg-gray-300"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 sm:h-8 bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoobileDesigne;
