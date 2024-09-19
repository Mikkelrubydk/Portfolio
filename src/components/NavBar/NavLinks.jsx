import "./NavBar.css";

const NavLinks = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="NavLinks">
      <ul>
        <li>
          <a
            href="#forside"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("forside");
            }}
          >
            Hjem
          </a>
        </li>
        <li>
          <a
            href="#kompetencer"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("kompetencer");
            }}
          >
            Kompetencer
          </a>
        </li>
        <li>
          <a
            href="#ommig"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("ommig");
            }}
          >
            Om mig
          </a>
        </li>
        <li>
          <a
            href="#projekter"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("projekter");
            }}
          >
            Projekter
          </a>
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
