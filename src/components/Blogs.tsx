import { blogsData } from '..';
import SquareSpinner from './SquareSpinner';

const Blogs: React.FC = () => {
  return (
    <div id="blogs" className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-2xl px-3 md:px-6 lg:max-w-[1170px]">
        <p className="relative text-4xl font-bold capitalize text-black">
          latest <span className="text-green">blogs</span>
          <SquareSpinner />
        </p>

        <ul className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 md:gap-y-20">
          {blogsData.map((blogPost) => (
            <BlogPost key={blogPost.title} data={blogPost} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blogs;

interface BLogType {
  data: {
    date: string;
    paragraph: string;
    imageUrl: string;
    title: string;
    link: string;
  };
}
const BlogPost = ({ data }: BLogType) => {
  const { date, imageUrl, title, paragraph, link } = data;
  return (
    <li className="flex flex-col gap-y-5">
      <img src={imageUrl} alt="Blog Post image" className="md:h-[350px]" />
      <span className="w-fit bg-green px-3 py-2 text-dark-gray">{date}</span>
      <span className="text-2xl font-bold">{title}</span>
      <span className="text-dark-gray">
        {paragraph}
        <a
          className="duration-all text-green transition-all hover:text-opacity-60"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </span>
    </li>
  );
};
