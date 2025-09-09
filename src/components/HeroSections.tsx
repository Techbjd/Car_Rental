import BookingForm from "./BookingForm"; 

export default function Hero() {
  return (
    <section className="w-full bg-white py-2">
      {/* Purple container centered with max-width */}
      <div className="relative w-full max-w-[1296px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 bg-[#5937E0] rounded-[40px] px-6 md:px-12 py-16 overflow-hidden">
        
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?w=1200&auto=format&fit=crop&q=60"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />

        {/* Left side: Text + Button */}
        <div className="relative z-10 flex flex-col items-start gap-6 max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Experience the road <br /> like never before
          </h1>
          <p className="text-base md:text-lg opacity-80">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus
            porttitor tristique et gravida. Quis nunc interdum gravida
            ullamcorper.
          </p>
          <button className="bg-[#FFA800] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e69500] transition">
            View all cars
          </button>
        </div>

        {/* Right side: Booking Form (white box inside purple) */}
        <div className="relative z-10 w-full max-w-md rounded-2xl p-8">
          <BookingForm bgClass="bg-white" />
        </div>
      </div>
    </section>
  );
}
