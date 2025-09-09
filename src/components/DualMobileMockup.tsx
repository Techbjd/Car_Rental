export default function DualMobileMockup() {
  return (
    <div className="relative w-full h-[700px] bg-transparent">
      {/* First Mobile */}
      <div
        className="
          absolute 
          top-[69px] 
          left-[793px] 
          w-[267px] 
          h-[540px] 
          opacity-100 
          border-2 
          border-gray-900 
          rounded-3xl 
          overflow-hidden 
          shadow-xl 
          bg-black
        "
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-b-2xl"></div>

        {/* Screen */}
        <div className="w-full h-full bg-white"></div>

        {/* Side buttons */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gray-300"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gray-300"></div>
      </div>

      {/* Second Mobile */}
      <div
        className="
          absolute 
          top-[26.5px] 
          left-[964px] 
          w-[267px] 
          h-[540px] 
          opacity-100 
          border-2 
          border-gray-900 
          rounded-3xl 
          overflow-hidden 
          shadow-xl 
          bg-black
        "
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-b-2xl"></div>

        {/* Screen */}
        <div className="w-full h-full bg-white"></div>

        {/* Side buttons */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gray-300"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gray-300"></div>
      </div>
    </div>
  );
}
