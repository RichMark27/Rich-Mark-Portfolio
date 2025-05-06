import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";

function NavObserver() {
  const [activeSection, setActiveSection] = useState("Home");
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -50% 0px",
        threshold: 0.5,
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} sectionRefs={sectionRefs} />
    </>
  );
}

export default NavObserver;
