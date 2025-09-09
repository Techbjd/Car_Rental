import BookingForm from '../components/BookingForm';
import ContactsDetails from '../components/contactItems';
import BlogSection from '../components/BlogSections';
import CarLogo from '../components/CarLogo';
const Contact = () => {
  return (
    <div>
      {/* Header */}
      <div className="w-full md:h-[240px] flex flex-col items-center justify-center gap-6 rounded-[40px] bg-white">
        <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-center">
          Contact Us
        </h1>
        <p className="font-sans font-normal text-[20px] text-center text-gray-600">
          Home <span className="font-bold">/ Contact Us</span>
        </p>
      </div>

      {/* Main content */}
      <div className="w-full justify-center items-center-safe  mx-auto flex flex-col lg:flex-row gap-6 p-6 md:max-w-[1296px] md:p-12">
        {/* Booking Form */}
          <BookingForm  bgClass="bg-[#5937E0]" />
        

        {/* Image */}
        <div className="flex-1 flex justify-center items-center w-full ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxmCOHfuCTer0D1DhhLLEDvl8o9vrYIxf0Q&s" // add your image path
            alt="Contact"
            className="w-full max-w-[856px] h-auto rounded-[20px] transform "
          />
        </div>
      </div>
      <ContactsDetails />
      <CarLogo />
      <BlogSection />
    </div>
  );
};

export default Contact;
