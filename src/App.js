import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLink from "./components/SocialLink";


function App() {
  return (
    <div>
      <Navbar />
      <Home/>

      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      {/* social link */}
      <SocialLink/>
    </div>
  );
}

export default App;
