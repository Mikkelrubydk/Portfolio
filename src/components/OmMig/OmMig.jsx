import "../OmMig/OmMig.css";
import { Link } from "react-router-dom";
import Animation from "../Animation/Animation.jsx";

const OmMig = () => {
  return (
    <section className="ommig" id="ommig">
      <Animation animationClass="slideInLeft">
        <article>
          <h2 className="forsideoverskrift">LÆR MIG AT KENDE</h2>
          <p>
            Mit navn er Mikkel Ruby, og jeg er en 23-årig frontend-udvikler
            under uddannelse som multimediedesigner på Erhvervsakademi Aarhus.
            Jeg har en passion for at skabe intuitive og æstetisk tiltalende
            brugeroplevelser på tværs af digitale platforme. Mit fokus er på
            frontend-udvikling, hvor jeg bruger teknologier som HTML, CSS,
            JavaScript og React til at bygge responsive og interaktive
            webapplikationer. <br /> <br />
            Jeg er engageret i at forbedre mine evner som frontend-udvikler ved
            løbende at udvikle mine kompetencer og udforske nye måder at
            optimere mine løsninger på.
          </p>
          <div className="knap">
            <Link to="/about">
              <button className="forsideknap">Læs mere</button>
            </Link>
            <a
              href="./mikkelruby-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="forsideknap">Hent CV</button>
            </a>
          </div>
        </article>
      </Animation>

      <Animation animationClass="slideInRight">
        <figure>
          <div className="fotofilter"></div>
          <img src="./ommigfoto.webp" alt="Billede af mig" />
        </figure>
      </Animation>
    </section>
  );
};

export default OmMig;
