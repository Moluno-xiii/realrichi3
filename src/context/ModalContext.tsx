import { createContext, PropsWithChildren, useContext, useState } from "react";

type ModalContextType = {
  isModalOpen: boolean;
  handleModal: (state: boolean) => void;
};

const defaultState = {
  isModalOpen: false,
  handleModal: () => {},
};

const ModalContext = createContext<ModalContextType>(defaultState);

const ModalContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isModalOpen, handleIsModalOpen] = useState(false);

  function handleModal(state: boolean) {
    handleIsModalOpen(state);
  }

  return (
    <ModalContext.Provider value={{ isModalOpen, handleModal }}>
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
