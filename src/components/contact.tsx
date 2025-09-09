import { MapPin, Mail, Phone, Clock } from 'lucide-react';
const Contacts = () => {
  const contactItems = [
    {
      icon: <MapPin className="w-5 h-5 text-white" />,
      label: 'Address',
      value: 'Oxford Ave. Cary, NC 27511',
    },
    {
      icon: <Mail className="w-5 h-5 text-white" />,
      label: 'Email',
      value: 'nwiger@yahoo.com',
    },
    {
      icon: <Phone className="w-5 h-5 text-white" />,
      label: 'Phone',
      value: '+537 547-6401',
    },
    {
      icon: <Clock className="w-5 h-5 text-white" />,
      label: 'Opening Hours',
      value: 'Sun-Mon: 10am - 10pm',
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto flex  py-6 md:p-16 gap-6">
      {contactItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 w-full sm:w-[336px] md:w-[305px] p-4 bg-gray-50 rounded-lg"
        >
          <div className="w-14 h-14 bg-[#FF9E0C] rounded-full flex items-center justify-center relative">
            {item.icon}
          </div>
          <div className="flex flex-col justify-center gap-1">
            <span className="font-normal text-lg text-gray-800">{item.label}</span>
            <span className="font-semibold text-lg text-gray-800">{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
