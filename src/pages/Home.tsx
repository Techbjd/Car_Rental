import React from "react";
import CarCard from "../components/CarCard";
import carsData from "../data/carsData";
import HeroSections from "../components/HeroSections"; // fixed typo
import FactsSection from "../components/FactsSection";
import Banner from "../components/Banner"; // fixed typo
import MobileDesign from "../components/MobileApp"; // fixed typo
import InfoBlock from "../components/InfoBlock";
import InfoSectionHome from "../components/InfoBlockHome";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 w-full h-auto">
      {/* Hero Section */}
      <div className="p-3">
        <HeroSections />
      </div>

      {/* Info Block */}
      <InfoBlock />

      {/* Info Section Home */}
      <InfoSectionHome />

      {/* Cars Grid */}
      <section className="py-12 max-w-[1296px] mx-auto">
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">
              Choose the car that suits you
            </h2>
            <a
              href="/vehicles"
              className="text-purple-600 hover:underline flex items-center"
            >
              View All →
            </a>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {carsData.map((car) => (
              <CarCard key={car.id} car={car} navigateTo="/services"
               />
            ))}
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <FactsSection />

      {/* Mobile Design Section */}
      <MobileDesign />

      {/* Banner */}
      <Banner />
    </div>
  );
};

export default Home;
