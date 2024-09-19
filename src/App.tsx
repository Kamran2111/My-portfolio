import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Navbar";
import Services from "./components/Services/Services";
import Work from "./components/Work/Work";
import "./index.css";

function App() {
  return (
    <div
      className="bg-site bg-no-repeat bg-cover overflow-hidden
    "
    >
      <Header />
      <Banner />
      <Navbar />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
