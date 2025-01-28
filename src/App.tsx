import HeaderNav from "./components/HeaderNav";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="font-poppins">
      <HeaderNav />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
