import ReviewCard from "../components/reviewCard";
import AboutQuestion from "../components/AboutQuestion";
import ProfileCard from "../components/ProfileCard";
import AboutBanner from "../components/AboutBannner";
import BlogCard from "../components/BlogCard";
import FeatureCard from "../components/FeatureCard";
import StatsCard from "../components/StatsCard";
function About() {
  const testimonials = [
  {
    text: "Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque",
    company: "Kuphal LLC",
    name: "Emanuel Boyle",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    text: "Aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Eget velit volutpat quisque odio purus feugiat.",
    company: "Smith Inc",
    name: "Sophia Turner",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    text: "In gravida neque amet erat volutpat quisque odio purus feugiat. Pellentesque mollis nec dignissim maecenas.",
    company: "Johnson LLC",
    name: "Alex Martin",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
];

  const features = [
    {
      title: "Variety Brands",
      desc: "Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio.",
    },
    {
      title: "Awesome Support",
      desc: "Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit.",
    },
    {
      title: "Maximum Freedom",
      desc: "Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in.",
    },
    {
      title: "Flexibility on the Go",
      desc: "Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis. Faucibus rhoncus. Iaculis dignissim aenean pellentesque nisl.",
    },
  ];

  const stats = [
    { number: "200+", label: "Happy Customers" },
    { number: "540+", label: "Count of Cars" },
    { number: "25+", label: "Years of Experience" },
  ];

  const questionsdata = [
    {
      question: "What is the car rental process?",
      answer:
        "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa...",
    },
    {
      question: "Do you offer insurance?",
      answer:
        "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa...",
    },
    {
      question: "Can I change my booking?",
      answer:
        "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa...",
    },
    { question: "Can I rent a car without a credit card?", answer: "Answer coming soon..." },
    { question: "Does Car Rental allow me to tow with or attach a hitch?", answer: "Answer coming soon..." },
    { question: "Does Car Rental offer coverage products?", answer: "Answer coming soon..." },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="w-full h-auto flex flex-col items-center justify-center gap-4 rounded-[40px] px-4 sm:px-6 md:px-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center">About Us</h1>
        <p className="text-base sm:text-lg md:text-xl text-center text-gray-600">
          Home / About Us
        </p>
      </div>

      {/* About Info Section */}
      <section className="w-full px-4 sm:px-6 md:px-20 lg:px-32 py-16 flex flex-col gap-12 mx-auto">
        <div className="max-w-[1296px] mx-auto flex flex-col md:flex-row gap-10">
          {/* Title */}
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
              Where every driver feels extraordinary
            </h2>
          </div>

          {/* Features */}
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {features.map((item, index) => (
              <FeatureCard key={index} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <div className="w-full flex justify-center px-4 sm:px-6 md:px-12 pb-16">
        <video
          src=""
          className="w-full max-w-[1296px] h-auto md:h-[600px] rounded-[20px] object-cover bg-black"
          controls
          aria-label="About company introduction video"
        />
      </div>

      {/* Stats Section */}
      <div className="w-full flex justify-center px-4 sm:px-6 md:px-12 pb-16">
        <div className="max-w-[1296px] w-full flex flex-wrap justify-around gap-8">
          {stats.map((item, index) => (
            <StatsCard key={index} number={item.number} label={item.label} />
          ))}
        </div>
      </div>

      {/* Blog */}
      <BlogCard />

      {/* Reviews */}
      <div className="w-full  m-auto md:max-w-[1296px] grid grid-cols-1 gap-2 p-4 md:grid-cols-2 lg:grid-cols-3 ">
        {testimonials.map((user, index) => (
          <div key={index} className="flex justify-center">
          <ReviewCard
            key={index}
            name={user.name}
            company={user.company}
            text={user.text}
            image={user.image}
          />
          </div>
        ))}
      </div>

      {/* Profile + FAQ */}
      <ProfileCard />
      <AboutQuestion questions={questionsdata} />

      {/* About Banner */}
      <AboutBanner imageSrc="" />
    </>
  );
}

export default About;
