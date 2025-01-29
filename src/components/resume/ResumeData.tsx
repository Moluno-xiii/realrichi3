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
      <span className="text-dark-gray mt-6 font-semibold capitalize">
        {year}
      </span>
      <span className="text-dark-gray mt-3 w-fit bg-[#00cc99] px-2 py-1 capitalize">
        {title}
      </span>
      {subLink ? (
        <a
          href={subLink}
          className="font-bold text-blue-600 capitalize transition-all duration-300 hover:text-blue-600/60"
          target="_blank"
          rel="noopener noreferrer"
        >
          {subTitle}
        </a>
      ) : (
        <span className="font-bold text-[#8A8A8A] capitalize">{subTitle}</span>
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
