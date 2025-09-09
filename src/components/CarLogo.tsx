export default function CarLogo() {
  const logos = [
    { src: "/src/logos/toyota.png", alt: "Toyota" },
    { src: "/src/logos/ford.png", alt: "Ford" }, 
    { src: "/src/logos/mercedes.png", alt: "Mercedes" },
    { src: "/src/logos/jeep.png", alt: "Jeep" },
    { src: "/src/logos/bmw.png", alt: "BMW" },
    { src: "/src/logos/audi.png", alt: "Audi" },
  ];

  return (
    <div className="flex justify-center py-6 px-4">
      <div className="bg-white rounded-[40px] max-w-[1296px] w-full flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-10 px-6 md:px-12 py-10 ">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="h-12 w-auto sm:h-14 md:h-[53px] object-contain"
          />
        ))}
      </div>
    </div>
  );
}
