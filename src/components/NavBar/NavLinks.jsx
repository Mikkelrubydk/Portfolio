import "./NavBar.css";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="NavLinks">
      <ul>
        <li>
          <Link to="/">Hjem</Link>
        </li>
        <li>
          <Link to="/">Kompetencer</Link>
        </li>
        <li>
          <Link to="/">Om mig</Link>
        </li>
        <li>
          <Link to="/">Projekter</Link>
        </li>

        <figure className="socials">
          <a
            href="https://github.com/Mikkelrubydk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="github.svg" alt="Github Logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/mikkel-h%C3%B8j-ruby-b5531228b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="linkedin.svg" alt="Linkedin Logo" />
          </a>
        </figure>
      </ul>
    </nav>
  );
};

export default NavLinks;
