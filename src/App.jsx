import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Component/Nav";
import Banner from "./Component/Banner";
import AboutMe from "./Component/AboutMe";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import Footer from "./Component/Footer";
import Education from "./Component/Education";
import Experience from "./Component/Experience";
import StarryBackground from "./Component/StarryBackground";
import IntroScreen from "./Component/IntroScreen";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [introDone, setIntroDone] = useState(false);

  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <>
      {/* Starry background always visible */}
      <StarryBackground />

      {/* IntroScreen overlays on top of stars */}
      {!introDone && <IntroScreen onFinish={() => setIntroDone(true)} />}

      {/* Portfolio content over the same Starry background */}
      {introDone && (
        <div className="relative z-0 text-white">
          <div className="container mx-auto sticky top-0 z-[999]">
            <Nav />
            <Banner />
            <AboutMe />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
