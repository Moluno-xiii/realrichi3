import SquareSpinner from "./ui/SquareSpinner";
import { contributionsData, portfolioData } from "..";
import { LuExternalLink } from "react-icons/lu";
import { useModalContext } from "../context/ModalContext";

const Portfolio: React.FC = () => {
  return (
    <div id="portfolio" className="bg-dark-gray py-10 md:py-20">
      <div className="mx-auto flex max-w-3xl flex-col gap-y-36 px-3 lg:max-w-[1170px] lg:px-10">
        {/* abstract this to one component */}
        <div id="opensource">
          <p className="relative mb-10 text-4xl font-bold text-white capitalize">
            opensource contri<span className="text-[#00cc99]">butions</span>
            <SquareSpinner />
          </p>
          <div className="text-text-dark flex flex-col justify-center gap-y-10">
            <span>
              Open source contributions have been an integral part of my journey
              as a software developer. I firmly believe in the power of
              collaboration and the collective intelligence of the developer
              community.
            </span>
            <span>
              In this section, I am excited to showcase some of my notable open
              source contributions. From bug fixes and feature enhancements to
              creating new libraries, each contribution represents my dedication
              to giving back to the developer community.
            </span>

            <div className="flex flex-col gap-y-10">
              <button className="w-fit cursor-pointer place-self-center border-b-2 border-b-[#00cc99] bg-zinc-600 px-4 py-2 text-white transition-all duration-200 hover:text-black">
                All
              </button>

              <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {contributionsData.map((contribution) => (
                  <OpenSourceProject
                    data={contribution}
                    key={contribution.title}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div id="portfolio">
          <p className="relative mb-10 text-4xl font-bold text-white capitalize">
            portfol<span className="text-[#00cc99]">io</span>
            <SquareSpinner />
          </p>
          <div className="text-text-dark flex flex-col justify-center gap-y-10">
            <span>
              Throughout my journey, I&apos;ve worked on a variety of projects,
              both individually and as part of collaborative teams. These
              experiences have taught me the value of collaboration,
              adaptability, and continuous learning. I firmly believe in an
              iterative and hypothesis-driven approach to development,
              constantly seeking to improve and innovate.
            </span>

            <div className="flex flex-col gap-y-10">
              <button className="w-fit cursor-pointer place-self-center border-b-2 border-b-[#00cc99] bg-zinc-600 px-4 py-2 text-white transition-all duration-200 hover:text-black">
                All
              </button>

              <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {portfolioData.map((contribution) => (
                  <OpenSourceProject
                    data={contribution}
                    key={contribution.title}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

interface PropTypes {
  data: {
    imageUrl: string;
    title: string;
    subTitle: string;
  };
}

const OpenSourceProject = ({ data }: PropTypes) => {
  const { handleModal, isModalOpen } = useModalContext();
  const { imageUrl, title, subTitle } = data;

  return (
    <li
      className="relative max-h-[400px] cursor-pointer text-white/70 backdrop-blur-lg"
      onClick={() => handleModal(true)}
    >
      <div className="h-full">
        <img src={imageUrl} alt="project image" className="h-full" />
      </div>
      <span className="absolute top-20 left-5 bg-black/30 px-4 py-2 text-xl font-medium capitalize">
        {title}
      </span>
      <span className="absolute right-0 bottom-10 bg-black/20 px-3 py-1 capitalize">
        {subTitle}
      </span>
      <LuExternalLink
        color="[#00cc99]"
        size={25}
        className="absolute bottom-5 left-5"
      />

      {isModalOpen && <span>modal is open</span>}
    </li>
  );
};
