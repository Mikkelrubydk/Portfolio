import { useState, useEffect } from "react";
import "../NavBar/NavBar.css";

const ScrollPoint = () => {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Bestem hvilken prik der skal være aktiv baseret på scroll-position
      if (scrollPosition < viewportHeight) {
        setActiveDot(0);
      } else if (scrollPosition < 2 * viewportHeight) {
        setActiveDot(1);
      } else if (scrollPosition < 3 * viewportHeight) {
        setActiveDot(2);
      } else if (scrollPosition < 4 * viewportHeight) {
        setActiveDot(3);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Ryd op ved unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (index) => {
    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top: index * viewportHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="ScrollPrikker">
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          onClick={() => scrollToSection(index)}
          className={
            activeDot === index
              ? `dot ${index === 2 ? "special-dot" : "active"}`
              : "dot"
          }
        ></div>
      ))}
    </section>
  );
};

export default ScrollPoint;
