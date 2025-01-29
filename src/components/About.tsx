const details = [
  {
    title: "name",
    value: "richie moluno",
    link: false,
  },
  {
    title: "address",
    value: "Birmingham united kingdom",
    link: false,
  },
  {
    title: "email",
    value: "molunorichie@gmail.com",
    link: true,
    route: "mailto:molunorichie@gmail.com",
  },
  {
    title: "twitter",
    value: "molunorichie",
    link: true,
    route: "https://x.com/molunorichie",
  },
];

const About = () => {
  return (
    <div id="about" className="bg-dark-gray px-3 py-20 md:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl lg:max-w-[1170px]">
        <p className="mb-3 text-4xl font-bold text-white max-lg:mb-10">
          About <span className="text-[#00cc99]">Me</span>
        </p>

        <div className="text-text-dark flex flex-col justify-between gap-14 lg:flex-row">
          <div className="flex max-w-xl flex-col gap-y-14 xl:max-w-[720px]">
            <span className="">
              Welcome to my portfolio website! I&apos;m Richie Moluno, a
              software engineer with a pasion for creating impactful solutions.
              As a Mechanical Engineering graduate, I bring a unique perspective
              to the world of software developement.
              <br />
              My diverse background allows me to approach problems with a fresh
              mindset, combining my analytical skills with a creative approach
              to build innovative applications.
              <br />
              Throughout my journey, I&apos;ve worked on a variety of projects,
              both individually and as part of collaborative teams. These
              experiences have taught me the value of collaboration,
              adaptability, and continuous learning. I firmly believe in an
              iterative and hypothesis-driven approach to developement,
              constantly seeking to improve and innovate.
            </span>

            <ul className="flex flex-col gap-y-4">
              {details.map((detail) => (
                <Detail key={detail.title} detail={detail} />
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center gap-y-20 md:h-[400px] md:w-[300px]">
            <div className="hidden h-[400px] w-[300px] border-4 border-[#00cc99] md:absolute md:inline-block"></div>
            <img
              src="/profile-pic.jpg"
              alt="profile picture"
              className="md:relative md:-left-10"
            />
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-y-5 text-center xl:items-start">
          <span className="text-5xl font-bold text-[#00cc99]">8+</span>
          <span className="text-text-dark capitalize">projects done</span>
        </div>
      </div>
    </div>
  );
};

export default About;

interface DetailProps {
  detail: {
    title: string;
    value: string;
    link: boolean;
    route?: string;
  };
}
const Detail = ({ detail: { title, value, link, route } }: DetailProps) => {
  return (
    <li>
      <label htmlFor={title} className="pr-2 font-bold capitalize">
        {title}:
      </label>
      {link ? (
        <a href={route} className="text-[#0A58CA]">
          {value}
        </a>
      ) : (
        <span className="capitalize" id={title}>
          {value}
        </span>
      )}
    </li>
  );
};
