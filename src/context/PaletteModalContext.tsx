import { createContext, PropsWithChildren, useContext, useState } from "react";

const defaultValue = {
  isPaletteModalOpen: false,
  handleOpenPaletteModal: () => {},
  handleClosePaletteModal: () => {},
};

const PaletteModalContext = createContext(defaultValue);

const PaletteModalContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isPaletteModalOpen, setIsPaletteModalOpen] = useState(false);

  const handleOpenPaletteModal = () => {
    setIsPaletteModalOpen(!isPaletteModalOpen);
  };

  const handleClosePaletteModal = () => {
    setIsPaletteModalOpen(false);
  };
  return (
    <PaletteModalContext.Provider
      value={{
        isPaletteModalOpen,
        handleOpenPaletteModal,
        handleClosePaletteModal,
      }}
    >
      {children}
    </PaletteModalContext.Provider>
  );
};

const usePaletteModalContext = () => {
  const context = useContext(PaletteModalContext);
  if (!context) throw new Error("context was used outside of it's scope");
  return context;
};

export { PaletteModalContextProvider, usePaletteModalContext };
