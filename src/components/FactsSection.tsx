const App = () => {
  return (
    <div className="min-h-[500px] md:min-h-[606px] flex  items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl mx-auto bg-[#5937E0] rounded-3xl">
        <div
          className="rounded-3xl p-6 md:p-12 relative overflow-hidden"
          style={{
            backgroundImage:
              'url("https://share.google/images/74IxOlW1bwxduwU4X")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Blurred background glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/2 h-40 md:h-64 rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Facts In Numbers
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-8 md:mb-12 leading-relaxed">
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
              bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
              fermentum
            </p>

            <div className="flex  flex-wrap justify-center gap-6  flex-row md:flex-nowrap">
              {/* Card Component */}
              {[
                { number: "540+", label: "Cars" },
                { number: "20k+", label: "Customers" },
                { number: "25+", label: "Years" },
                { number: "20m+", label: "Miles" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 w-[150px] sm:w-[200px] md:w-[240px] backdrop-blur-sm rounded-2xl p-4 sm:p-6 flex items-center space-x-3 sm:space-x-4 shadow-lg border border-white/20"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    {/* Just reusing one icon for demo — replace individually */}
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                      {item.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
