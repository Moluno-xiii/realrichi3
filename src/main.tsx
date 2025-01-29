import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PaletteModalContextProvider } from "./context/PaletteModalContext.tsx";
import { ModalContextProvider } from "./context/ModalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PaletteModalContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </PaletteModalContextProvider>
  </StrictMode>,
);
