import "../Footer/Footer.css";
import Animation from "../Animation/Animation.jsx";

const Footer = () => {
  return (
    <footer className="footer">
      <article>
        <Animation animationClass="slideInBottom">
          <h2>Navigation</h2>
          <nav>
            <ul>
              <li>
                <a href="/">Hjem</a>
              </li>
              <li>
                <a href="#kompetencer">Kompetencer</a>
              </li>
              <li>
                <a href="#ommmig">Om mig</a>
              </li>
              <li>
                <a href="#projekter">Projekter</a>
              </li>
            </ul>
          </nav>
        </Animation>
      </article>
      <article>
        <Animation animationClass="slideInBottom">
          <h2>Kontakt mig</h2>
          <div className="kontaktinfo">
            <p>Knudrisgade 9, st</p>
            <p>8000 Aarhus C</p>
            <p>
              <a href="tel:+4542610079">+45 42 61 00 79</a>
            </p>
            <p>
              <a href="mailto:Mikkelruby1@hotmail.com">
                Mikkelruby1@hotmail.com
              </a>
            </p>
          </div>
          <figure className="footersocials">
            <a
              href="https://www.linkedin.com/in/mikkel-h%C3%B8j-ruby-b5531228b/"
              aria-label="LinkedIn"
              target="_blank"
            >
              <img src="/public/linkedin2.svg" alt="LinkedIn Logo" />
            </a>
            <a
              href="https://www.instagram.com/mikkelruby"
              aria-label="Instagram"
              target="_blank"
            >
              <img src="/public/insta.svg" alt="Instagram Logo" />
            </a>
            <a
              href="https://www.facebook.com/mikkelruby"
              aria-label="Facebook"
              target="_blank"
            >
              <img src="/public/facebook.svg" alt="Facebook Logo" />
            </a>
          </figure>
        </Animation>
      </article>
      <article>
        <Animation animationClass="slideInBottom">
          <h2>Er vi et match?</h2>
          <p>
            Jeg er i øjeblikket på udkig efter en praktikplads, hvor jeg kan få
            mulighed for at arbejde med frontend-udvikling og videreudvikle mine
            færdigheder inden for webteknologier som HTML, CSS, JavaScript og
            React.
          </p>
          <div className="knap">
            <a
              href="/materialer/mikkelruby-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="forsideknap"
            >
              Hent CV
            </a>
          </div>
        </Animation>
      </article>
      <p className="copyright">
        © 2024 Mikkel Ruby. Alle rettigheder forbeholdes.
      </p>
    </footer>
  );
};

export default Footer;
