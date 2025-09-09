
import { Settings, AirVent, Shield, Thermometer, CheckCheck } from "lucide-react";

const specs = [
  { name: "Gearbox", icon: <Settings className="w-6 h-6 text-black" /> },
  { name: "Air Bags", icon: <AirVent className="w-6 h-6 text-black" /> },
  { name: "Cruise Control" },
  { name: "ABS", icon: <Shield className="w-6 h-6 text-black" /> },
  { name: "Air Conditioner", icon: <Thermometer className="w-6 h-6 text-black" /> },
];

const CarDetails = () => {
  return (
    <div className="w-full min-h-[860px] flex flex-col lg:flex-row justify-center items-start p-6 lg:p-[60px_72px] gap-6">
      {/* Left Column */}
      <div className="flex flex-col gap-5 w-full lg:w-[636px]">
        <div className="flex flex-col gap-5">
          <h1 className="text-[32px] lg:text-[40px] font-bold text-black">BMW</h1>
          <div className="flex gap-1 items-center">
            <span className="text-[32px] lg:text-[40px] font-semibold text-purple-700">$25</span>
            <span className="text-[16px] text-black/60">/ day</span>
          </div>
        </div>

        {/* Car Image */}
        <div
          className="w-full h-[200px] sm:h-[260px] md:h-[303px] bg-cover bg-no-repeat transform scale-x-[-1] rounded-lg"
          style={{
            backgroundImage:
              "url(data:image/jpeg;base64, ...your_car_base64...)", // keep your base64 here
          }}
        />

        {/* Thumbnails */}
        <div className="flex gap-4 sm:gap-6 h-[80px] sm:h-[100px]">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex-1 sm:w-[140px] sm:h-[100px] h-[80px] bg-cover rounded-lg"
              style={{
                backgroundImage:
                  "url(data:image/jpeg;base64, ...your_thumb_base64...)", // keep your base64 here
              }}
            />
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-12 lg:gap-16 w-full lg:w-[636px]">
       
        <div className="flex flex-col gap-6 lg:gap-10">
          <h2 className="text-[20px] lg:text-[24px] font-semibold text-black">
            Technical Specification
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:flex lg:flex-wrap lg:gap-6">
            {specs.map((spec, idx) => (
              <div
                key={idx}
                className="w-full sm:w-[160px] lg:w-[196px] h-[120px] lg:h-[148px] bg-gray-100 rounded-lg flex flex-col justify-center items-start p-4 lg:p-6 gap-3 lg:gap-5"
              >
                {spec.icon}
                <span className="font-semibold">{spec.name}</span>
                <span className="text-black/60">
                  {spec.name === "Gearbox" ? "Manual" : ""}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button className="w-full sm:w-[200px] lg:w-[290px] h-[45px] lg:h-[50px] bg-purple-700 text-white rounded-lg font-semibold">
          Rent a Car
        </button>

        {/* Car Equipment */}
        <div className="flex flex-col gap-6 lg:gap-10">
          <h2 className="text-[20px] lg:text-[24px] font-semibold text-black">
            Car Equipment
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-14">
            <div className="flex flex-col gap-4">
              {["ABS", "Air Bags", "Cruise Control"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 lg:gap-4">
                  <CheckCheck />
                  <span className="text-black/60">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {["ABS", "Air Conditioner"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 lg:gap-4">
                  <CheckCheck />
                  <span className="text-black/60">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
