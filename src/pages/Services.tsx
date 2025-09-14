import { Link } from "react-router-dom";
import CarDetails from "../components/CarDetails";
import carsData from "../data/carsData";
import CarCard from "../components/CarCard";
import { useState } from "react";

function Services() {
 
 const [selectedCarId, setSelectedCarId] = useState<number>(carsData[0].id);
console.log(setSelectedCarId)
 return (
    <div>
      {/* Car details section */}
      <CarDetails carId={selectedCarId}  />

      {/* Other cars section */}
      <section className="py-8 sm:py-12 lg:py-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Other Cars</h2>
          <Link
            to="/vehicles"
            className="text-purple-600 hover:underline flex items-center"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {carsData.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
