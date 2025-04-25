import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutMeSection from "./sections/AboutMeSection";
import PortfolioSection from "./sections/PortfolioSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactMeSection from "./sections/ContactMeSection";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <main>
      <Navbar />
      <div className="pb-16">
        <HeroSection />
      </div>
      <AboutMeSection />
      <PortfolioSection />
      <ExperienceSection />
      <ContactMeSection />
    </main>
  );
}

export default App;
