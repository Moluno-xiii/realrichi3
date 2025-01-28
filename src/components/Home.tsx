import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
const socialLinks = [
  {
    link: "https://github.com/RealRichi3",
    icon: <FaGithub size={24} />,
  },
  {
    link: "https://twitter.com/molunorichie",
    icon: <FaTwitter size={24} />,
  },
  {
    link: "https://www.linkedin.com/in/richie-moluno/",
    icon: <FaLinkedinIn size={24} />,
  },
  {
    link: "https:/@medium.com/@molunorichie",
    icon: <BsMedium size={24} />,
  },
];

const Home = () => {
  return (
    <div
      id="home"
      className="flex h-dvh w-dvw flex-col items-center justify-center gap-y-10 bg-[url('public/background-image.jpg')] bg-cover bg-center bg-no-repeat md:h-[700px]"
    >
      <div className="ring-green animate-pulse rounded-full ring-4 ring-offset-8">
        <img
          src="/profile-pic.jpg"
          alt="profile picture"
          className="h-64 rounded-full"
        />
      </div>
      <h1 className="text-green text-5xl font-semibold uppercase">
        richie moluno
      </h1>
      <span className="text-3xl font-semibold text-white">
        Software Engineer
      </span>
      <ul className="flex flex-row items-center justify-center gap-x-10 rounded-md bg-white px-4 py-2">
        {socialLinks.map((item) => (
          <SocialLink key={item.link} item={item} />
        ))}
      </ul>
      <button className="border-green bg-green hover:text-green rounded-md border-2 px-6 py-3 text-2xl text-white transition-all duration-300 hover:bg-white">
        <a href="/doc/resume.pdf" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
      </button>
    </div>
  );
};

export default Home;

const SocialLink = ({
  item: { link, icon },
}: {
  item: { link: string; icon: React.ReactNode };
}) => {
  return (
    <li className="hover:text-green text-[#6c757d] transition-all duration-300">
      <a href={link} target="_blank" rel="noreferrer">
        {icon}
      </a>
    </li>
  );
};
