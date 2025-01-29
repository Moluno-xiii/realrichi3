import HeaderNav from "./components/ui/HeaderNav";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import { usePaletteModalContext } from "./context/PaletteModalContext";

function App() {
  const { handleClosePaletteModal } = usePaletteModalContext();
  return (
    <div className="font-poppins">
      <HeaderNav />
      <Home />
      <div onClick={handleClosePaletteModal}>
        <About />
        <Resume />
        <Portfolio />
        <Blogs />
        <Contact />
      </div>
    </div>
  );
}

export default App;
