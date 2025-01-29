import { FaTimes } from "react-icons/fa";
import { useModalContext } from "../../context/ModalContext";
import { BsGithub } from "react-icons/bs";
interface ModalProps {
  data: {
    imageUrl: string;
    title: string;
    subTitle: string;
    modalData: {
      category: string;
      date: string;
      technology: string;
      productLink?: string;
      githubLink?: string;
      description: {
        main: string;
        paragraphs?: string[];
        keyFeatures?: {
          title: string;
          text: string;
        }[];
      };
    };
  };
}

const Modal: React.FC<ModalProps> = ({ data }) => {
  const { handleModal } = useModalContext();
  const { title, imageUrl, modalData } = data;
  const { category, date, technology, productLink, githubLink, description } =
    modalData;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="relative z-50 flex h-full max-h-[90vh] w-full max-w-4xl flex-col gap-y-5 overflow-y-auto rounded-md bg-[#F5F5F5] py-2 text-black drop-shadow-xl md:py-5">
        <div className="border-text-dark flex flex-row items-center justify-between border-b px-2 py-2 md:px-5">
          <span className="text-2xl font-bold text-black">{title}</span>
          <div className="bg-text-dark hover:bg-text-dark/50 flex flex-row items-center justify-center rounded-full p-3 text-white transition-all duration-200 hover:text-black">
            <FaTimes
              size={20}
              className="cursor-pointer"
              onClick={() => handleModal(false, "none")}
            />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 px-2 md:flex-row md:px-5">
          <div className="md:flex-1">
            <img src={imageUrl} alt={`${title} project image`} />
          </div>

          <div className="flex flex-col gap-y-4 md:max-w-52">
            <div className="flex flex-col gap-y-2">
              <span className="text-xl font-bold">Category</span>
              <span>{category}</span>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-xl font-bold">Date</span>
              <span>{date}</span>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-xl font-bold">Technology</span>
              <span>{technology}</span>
            </div>
            <div className="flex w-44 flex-col gap-y-2">
              <span className="text-xl font-bold">Share in:</span>
              <div className="flex flex-row items-center justify-between rounded-md bg-white px-2 py-1">
                {productLink && (
                  <a
                    href={productLink}
                    className="text-xl transition-all duration-200 hover:text-[#00cc99]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link to page
                  </a>
                )}
                {githubLink && (
                  <a
                    href={githubLink}
                    className="transition-all duration-200 hover:text-[#00cc99]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-6 px-2 md:px-6">
          <span className="text-xl font-bold">Description</span>
          <p className="text-black/40">{description.main}</p>
          {description.paragraphs ? (
            <div>
              <span className="text-xl font-semibold">Inspiration</span>
              <ul className="mt-3 flex flex-col gap-y-4">
                {description.paragraphs?.map((paragraph, index) => (
                  <li key={index} className="text-black/40">
                    {paragraph}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <span className="text-xl font-semibold">Key features</span>
              <ul className="mt-3 flex flex-col gap-y-4">
                {description.keyFeatures?.map((feature, index) => (
                  <li key={index} className="text-black/40">
                    {feature.title && (
                      <span className="mr-2 font-semibold text-black capitalize">
                        {index + 1}. {feature.title}:
                      </span>
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
