import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import CanProvide from "./sections/CanProvide";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Project from "./sections/Project";
import Skill from "./sections/Skill";
import ContactForm from "./sections/ContactForm";
import Footer from "./sections/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CanProvide />
      <About />
      <Experience />
      <Project />
      <Skill />
      <ContactForm />
      <Footer />
    </main>
  );
}

export default App;
