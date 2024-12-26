import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import DownloadCv from "./components/Cv/DownloadCv";
import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Navbar";
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
      <Work />
      <DownloadCv />
      <Contact />
    </div>
  );
}

export default App;
