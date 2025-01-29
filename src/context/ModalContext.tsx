import { createContext, PropsWithChildren, useContext, useState } from "react";

type ModalContextType = {
  isModalOpen: boolean;
  handleModal: (state: boolean, value: string) => void;
  currentlyOpenModal: string;
};

const defaultState = {
  isModalOpen: false,
  handleModal: () => {},
  currentlyOpenModal: "none",
};

const ModalContext = createContext<ModalContextType>(defaultState);

const ModalContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isModalOpen, handleIsModalOpen] = useState(false);
  const [currentlyOpenModal, setCurrentlyOpenModal] = useState("none");

  function handleModal(state: boolean, value: string) {
    handleIsModalOpen(state);
    setCurrentlyOpenModal(value);
    if (state) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }

  return (
    <ModalContext.Provider
      value={{ isModalOpen, handleModal, currentlyOpenModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("context was used outside of it's scope");
  return context;
};

export { useModalContext, ModalContextProvider };
