import { IoHomeOutline } from "react-icons/io5";
import { SlGraduation } from "react-icons/sl";
import { PiUserCircleThin } from "react-icons/pi";
import { PiScrollThin } from "react-icons/pi";
import { VscMail } from "react-icons/vsc";
import { SlBriefcase } from "react-icons/sl";
// import { FaPalette } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import React, { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
// import { usePaletteModalContext } from "../../context/PaletteModalContext";

const navLinks = [
  {
    name: "home",
    icon: <IoHomeOutline size={25} />,
  },
  {
    name: "about",
    icon: <PiUserCircleThin size={25} />,
  },
  {
    name: "resume",
    icon: <SlGraduation size={25} />,
  },
  {
    name: "portfolio",
    icon: <SlBriefcase size={25} />,
  },
  {
    name: "blogs",
    icon: <PiScrollThin size={25} />,
  },
  {
    name: "contact",
    icon: <VscMail size={25} />,
  },
];

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  // const {isPaletteModalOpen, handleOpenPaletteModal } = usePaletteModalContext();
  return (
    <nav className="sticky top-0 z-20 shadow-sm shadow-[#00cc99]">
      <ul className="relative hidden h-full flex-row items-center justify-center bg-white md:flex">
        {navLinks.map((link) => (
          <LinkComponent key={link.name} link={link} />
        ))}
      </ul>
      <div className="absolute -top-0 right-0 space-y-10 space-x-10 md:top-[70px]">
        <div className="flex flex-row items-start justify-between gap-x-3">
          {/* <div
            className="cursor-pointer rounded-full bg-[#434343] p-4"
            onClick={handleOpenPaletteModal}
          >
            <FaPalette className="scale-animation size-8 text-[#161616]" />
          </div> */}
          {/* {isPaletteModalOpen && <PaletteModal />} */}
        </div>
      </div>
      <div
        className="absolute top-8 left-4 cursor-pointer rounded-lg bg-[#00cc99] p-2 md:hidden"
        onClick={handleOpenMenu}
      >
        <TiThMenuOutline color="white" size={30} />
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 bottom-0 left-0 flex h-dvh w-60 flex-col gap-y-5 bg-[#00cc99] px-3 py-10 md:hidden">
          <LiaTimesSolid
            onClick={handleCloseMenu}
            size={30}
            className="cursor-pointer self-end text-white"
          />
          <ul className="flex flex-col gap-y-3">
            {navLinks.map((link) => (
              <LinkComponent
                key={link.name}
                link={link}
                onCloseMenu={handleCloseMenu}
              />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default HeaderNav;

interface LinkComponentProps {
  link: {
    name: string;
    icon: React.ReactNode;
  };
  onCloseMenu?: () => void;
}

const LinkComponent = ({ link, onCloseMenu }: LinkComponentProps) => {
  return (
    <li className="" onClick={onCloseMenu}>
      <a
        href={`#${link.name}`}
        className="flex flex-col items-center justify-center gap-y-2 px-4 py-2 capitalize transition-all duration-300 hover:bg-[#00cc99] hover:text-white [&.active]:bg-[#00cc99] [&.active]:text-white"
      >
        <span className="">{link.icon}</span>
        <span className="text-sm">{link.name}</span>
      </a>
    </li>
  );
};
