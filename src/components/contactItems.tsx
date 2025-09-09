import { MapPin, Mail, Phone, Clock } from 'lucide-react';
const ContactsDetails = () => {
  const contactItems = [
    {
      icon: <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
      label: 'Address',
      value: 'Oxford Ave. Cary, NC 27511',
    },
    {
      icon: <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
      label: 'Email',
      value: 'nwiger@yahoo.com',
    },
    {
      icon: <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
      label: 'Phone',
      value: '+537 547-6401',
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
      label: 'Opening Hours',
      value: 'Sun-Mon: 10am - 10pm',
    },
  ];
  return (
    <div className="w-full max-w-[1296px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-12 py-8 sm:py-12">
      {contactItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 w-full p-4 sm:p-6 bg-gray-50 rounded-lg shadow-sm"
        >
          {/* Icon container */}
          <div className="flex items-center justify-center rounded-full bg-[#FF9E0C] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0">
            {item.icon}
          </div>

          {/* Text container */}
          <div className="flex flex-col justify-center">
            <span className="font-medium text-sm sm:text-base md:text-lg text-gray-700">
              {item.label}
            </span>
            <span className="font-semibold text-base sm:text-lg md:text-xl text-gray-900">
              {item.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactsDetails;
