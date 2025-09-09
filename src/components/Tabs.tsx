import carImg from "../assets/carimg.png";
const Tabs = () => {
  const tabs = [
    { label: "All Vehicles", bg: "bg-[#5937E0]", textColor: "text-white", icon: null },
    { label: "Sedan", bg: "bg-[#F9F9F9]", textColor: "text-black", icon: carImg },
    { label: "Cabriolet", bg: "bg-[#F9F9F9]", textColor: "text-black", icon: carImg },
    { label: "Pickup", bg: "bg-[#F9F9F9]", textColor: "text-black", icon: carImg },
    { label: "SUV", bg: "bg-[#F9F9F9]", textColor: "text-black", icon: carImg },
    { label: "Minivan", bg: "bg-[#F9F9F9]", textColor: "text-black", icon: carImg },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 sm:gap-4 md:gap-6 lg:gap-6 w-full max-w-[1008px] mx-auto py-2">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          className={`
            flex items-center justify-center gap-2 
            ${tab.bg} ${tab.textColor} 
            rounded-[50px] 
            px-4 sm:px-6 md:px-6 lg:px-6 
            py-2 sm:py-2 md:py-2 lg:py-2 
            text-sm sm:text-sm md:text-base lg:text-base
            min-w-[100px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[148px]
            transition hover:scale-105
          `}
        >
          {tab.icon && <img src={tab.icon} alt={tab.label} className="w-6 h-6" />}
          <span className="font-medium">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
