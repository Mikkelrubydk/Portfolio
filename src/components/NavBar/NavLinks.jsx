import "./NavBar.css";

const NavLinks = () => {
  return (
    <nav className="NavLinks">
      <ul>
        <li>
          <a href="/#forside">Hjem</a>
        </li>
        <li>
          <a href="/#kompetencer">Kompetencer</a>
        </li>
        <li>
          <a href="/#ommig">Om mig</a>
        </li>
        <li>
          <a href="/#projekter">Projekter</a>
        </li>

        <figure className="socials">
          <a href="https://github.com/Mikkelrubydk" target="_blank">
            <img src="github.svg" alt="Github Logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/mikkel-h%C3%B8j-ruby-b5531228b/"
            target="_blank"
          >
            <img src="linkedin.svg" alt="Linkedin Logo" />
          </a>
        </figure>
      </ul>
    </nav>
  );
};

export default NavLinks;
