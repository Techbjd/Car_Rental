import CarLogos from "../components/CarLogo";
import carsData from "../data/carsData";
import CarCard from "../components/CarCard";
import Tabs from "../components/Tabs";

function Vehicles() {
  return (
    <div>
      {/* Vehicle selection */}
      <section className="py-2 max-w-[1296px] mx-auto px-2">
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-4xl font-bold text-black mb-4">
            Select a vehicle group
          </h1>
          <Tabs />
        </div>

        {/* Cars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {carsData.map((car) => (
            <CarCard key={car.id} car={car} navigateTo="/services" />
          ))}
        </div>
      </section>

      {/* Logos section */}
      <section className="py-12 max-w-[1296px] mx-auto px-4">
        <CarLogos />
      </section>
    </div>
  );
}

export default Vehicles;
