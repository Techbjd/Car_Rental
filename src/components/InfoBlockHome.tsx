
const steps = [
  {
    number: "1",
    title: "Erat at semper",
    desc: "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat.",
  },
  {
    number: "2",
    title: "Urna nec vivamus risus duis arcu",
    desc: "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida.",
  },
  {
    number: "3",
    title: "Lobortis euismod imperdiet tempus",
    desc: "Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc.",
  },
  {
    number: "4",
    title: "Cras nulla aliquet nam eleifend amet et",
    desc: "Aliquam adipiscing velit semper morbi. Quis nunc interdum gravida ullamcorper sed integer.",
  },
];

const InfoSectionHome = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-16">
      <div className="max-w-[1296px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20 px-4 sm:px-8 lg:px-16">
        
        {/* Left Image */}
        <div
          className="w-full h-64 sm:h-80 lg:w-[550px] lg:h-[549px] rounded-2xl bg-cover bg-center flex-shrink-0"
          style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6hxWnMrJjnaNEdqm4l8Wb3On2PSlvNRODhQ&s')`,
          }}
        />

        {/* Right Content */}
        <div className="flex-1 flex flex-col gap-8 w-full">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              {/* Step header */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  {step.number}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
              </div>
              {/* Step description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSectionHome;
