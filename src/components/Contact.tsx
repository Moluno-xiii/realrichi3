import { VscMail } from 'react-icons/vsc';
import SquareSpinner from './SquareSpinner';

const Contact: React.FC = () => {
  return (
    <div
      className="bg-dark-gray px-3 pb-40 pt-20 md:pb-60 md:pt-32"
      id="contact"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-y-14 xl:max-w-[1170px]">
        <p className="relative z-10 text-3xl font-semibold capitalize text-white">
          contact <span className="text-green">me</span>
          <SquareSpinner />
        </p>

        <p className="text-xl font-medium text-white">
          Get in <span className="text-green">touch</span>
        </p>

        <div className="flex max-w-96 flex-row items-center gap-10 rounded-lg bg-white px-4 py-6">
          <div className="flex size-20 items-center justify-center rounded-full bg-green">
            <VscMail size={50} color="white" />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <a href="mailto:molunorichie@gmail.com" className="text-[#0A58CA]">
              molunorichie@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
