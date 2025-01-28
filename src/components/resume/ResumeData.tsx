interface ResumeProps {
  data: {
    year: string;
    title?: string;
    subLink?: string;
    subTitle: string;
    paragraphs: string[];
  };
}

const ResumeData = ({
  data: { year, title, subTitle, subLink, paragraphs },
}: ResumeProps) => {
  return (
    <li className="flex flex-col gap-y-2 md:ml-10">
      <span className="mt-6 font-semibold capitalize text-dark-gray">
        {year}
      </span>
      <span className="mt-3 w-fit bg-green px-2 py-1 capitalize text-dark-gray">
        {title}
      </span>
      {subLink ? (
        <a
          href={subLink}
          className="font-bold capitalize text-blue-600 transition-all duration-300 hover:text-opacity-60"
          target="_blank"
          rel="noopener noreferrer"
        >
          {subTitle}
        </a>
      ) : (
        <span className="font-bold capitalize text-[#8A8A8A]">{subTitle}</span>
      )}
      <ul className="flex flex-col gap-y-10">
        {paragraphs.map((paragraph) => (
          <li key={paragraph} className="text-[#8A8A8A]">
            -- {paragraph}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ResumeData;
