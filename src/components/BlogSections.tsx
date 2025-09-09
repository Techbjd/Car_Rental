import React from 'react';

interface BlogCardProps {
  imgSrc: string;
  title: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imgSrc, title, date }) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Image */}
      <div
        className="w-full h-48 sm:h-56 md:h-60 lg:h-64 rounded-[20px] bg-cover bg-center"
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600">{date}</p>
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
 const blogPosts = [
  {
    imgSrc: "https://source.unsplash.com/800x600/?car",
    title: "How to choose the right car",
    date: "News / 12 April 2024",
  },
  {
    imgSrc: "https://source.unsplash.com/800x600/?rental",
    title: "Which plan is right for me?",
    date: "News / 12 April 2024",
  },
  {
    imgSrc: "https://source.unsplash.com/800x600/?speed",
    title: "Enjoy Speed, Choice & Total Control",
    date: "News / 12 April 2024",
  },
];


  return (
    <section className="w-full py-12 sm:py-16 flex flex-col items-center gap-10 px-4 sm:px-6 md:px-12">
      {/* Header */}
      <div className="w-full max-w-[1296px] flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Latest Blog Posts & News
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-[1296px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            imgSrc={post.imgSrc}
            title={post.title}
            date={post.date}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
