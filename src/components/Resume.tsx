import {
  languagesData,
  frameworksData,
  experienceData,
  educationData,
  talksData,
} from "..";
import ResumeData from "./resume/ResumeData";
import TechData from "./resume/TechData";
import SquareSpinner from "./ui/SquareSpinner";

const Resume = () => {
  return (
    <div
      id="resume"
      className="mx-auto my-10 max-w-4xl bg-white px-4 md:my-20 lg:max-w-[1170px]"
    >
      <p className="relative text-4xl font-bold text-black">
        Resu<span className="text-[#00cc99]">me</span>
        <SquareSpinner />
      </p>
      <div className="my-10 grid grid-cols-1 gap-14 md:my-20 md:grid-cols-2">
        <div className="flex flex-col gap-y-4">
          <span className="text-2xl font-bold">Languages</span>
          <ul className="flex flex-col gap-y-5">
            {languagesData.map((language) => (
              <TechData key={language.name} data={language} />
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-y-4">
          <span className="text-2xl font-bold">
            Frameworks / <span className="text-[#00cc99]">Tools</span>
          </span>
          <ul className="flex flex-col gap-y-5">
            {frameworksData.map((language) => (
              <TechData key={language.name} data={language} />
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div id="experience">
          <p className="text-2xl font-bold text-black">
            Experien<span className="text-[#00cc99]">ce</span>
          </p>
          {experienceData.map((experience) => (
            <ResumeData data={experience} key={experience.paragraphs[0]} />
          ))}
        </div>

        <div
          id="education and talks"
          className="flex flex-col gap-y-10 md:gap-y-20"
        >
          <div id="education">
            <p className="text-2xl font-bold text-black">
              Educat<span className="text-[#00cc99]">ion</span>
            </p>
            {educationData.map((education) => (
              <ResumeData data={education} key={education.paragraphs[0]} />
            ))}
          </div>
          <div id="talks">
            <p className="text-2xl font-bold text-black">
              Tal<span className="text-[#00cc99]">ks</span>
            </p>
            {talksData.map((talk) => (
              <ResumeData data={talk} key={talk.paragraphs[0]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
