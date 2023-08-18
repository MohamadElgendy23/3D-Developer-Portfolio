import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <br /> <br /> <br /> <br /> <br />
          <Hero />
          <About />
          {/* <Experience />
          <Tech />
          <Works /> */}
          <div className="relative z-0">
            {/* <Contact />
            <StarsCanvas /> */}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
