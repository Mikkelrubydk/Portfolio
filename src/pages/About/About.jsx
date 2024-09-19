import "../About/About.css";
import Animation from "../../components/Animation/Animation.jsx";

const About = () => {
  return (
    <>
      <section className="about">
        <figure>
          <Animation animationClass="slideInLeft">
            <img src="/aboutbillede.webp" alt="Billede af mig" />
          </Animation>
        </figure>
        <article>
          <Animation animationClass="slideInRight">
            <h2 className="forsideoverskrift">PASSION FOR PERFEKTION</h2>
            <p>
              Mit navn er Mikkel Ruby, jeg er 23 år gammel og er i gang med mit
              tredje semester på Multimediedesign-uddannelsen på Aarhus
              Erhvervsakademi, hvor jeg specialiserer mig i programmering.{" "}
              <br />
              <br />
              Jeg valgte denne uddannelse, fordi den giver mig mulighed for at
              kombinere kreativ udfoldelse med praktisk erfaring. Jeg har altid
              haft en passion for at finde nye måder at udtrykke mig på gennem
              teknologi og design. På uddannelsen har jeg især udviklet en stor
              forkærlighed for frontend udvikling. Jeg finder det utroligt
              spændende at skabe interaktive og engagerende digitale oplevelser,
              som både fanger brugerens opmærksomhed og opfylder deres behov.{" "}
              <br />
              <br /> Frontend udvikling giver mig mulighed for at arbejde med et
              væld af værktøjer og teknologier for at skabe løsninger, der er
              både visuelt tiltalende og funktionelle. Jeg sætter pris på den
              kreative proces, der går forud for at designe brugergrænseflader,
              der ikke kun ser godt ud, men også fungerer problemfrit og er
              skræddersyet til brugerens adfærd og behov. Det er denne balance
              mellem æstetik og funktionalitet, der gør frontend udvikling så
              fascinerende og givende for mig. Jeg ser frem til at fortsætte med
              at udvikle mine færdigheder og finde nye måder at anvende min
              viden på i fremtidige projekter og udfordringer.
            </p>
          </Animation>
        </article>
      </section>
      <section className="programmer">
        <Animation animationClass="slideInBottom">
          <h2 className="forsideoverskrift">Værktøjer</h2>
        </Animation>
        <Animation animationClass="slideInBottom">
          <div className="program-wrapper">
            <figure>
              <img src="/html.svg" alt="HTML Logo" />
              <figcaption>HTML5</figcaption>
            </figure>

            <figure>
              <img src="/css.svg" alt="CSS Logo" />
              <figcaption>CSS3</figcaption>
            </figure>

            <figure>
              <img src="/js.svg" alt="JavaScript Logo" />
              <figcaption>JavaScript</figcaption>
            </figure>

            <figure>
              <img src="react.svg" alt="React Logo" />
              <figcaption>React</figcaption>
            </figure>

            <figure>
              <img src="/githubblaa.svg" alt="GitHub Logo" />
              <figcaption>GitHub</figcaption>
            </figure>

            <figure>
              <img src="/vsc.svg" alt="Visual Studio Code Logo" />
              <figcaption>VSC</figcaption>
            </figure>

            <figure>
              <img src="/ps.svg" alt="Photoshop Logo" />
              <figcaption>Photoshop</figcaption>
            </figure>

            <figure>
              <img src="/ai.svg" alt="Illustrator Logo" />
              <figcaption>Illustrator</figcaption>
            </figure>

            <figure>
              <img src="/figma.svg" alt="Figma Logo" />
              <figcaption>Figma</figcaption>
            </figure>
          </div>
        </Animation>
      </section>

      <section className="udtalelser">
        <h2 className="forsideoverskrift">Udtalelser</h2>
        <div className="udtalelse-wrapper">
          <article>
            <Animation animationClass="slideInLeft">
              <img src="/valdemar.webp" alt="Billede af Valdemar" />
              <h3>Valdemar Berg</h3>
              <h4>Tidl. kollega</h4>
              <p>
                "Mikkel er en utrolig positiv og imødekommende person at arbejde
                sammen med. Hans smittende energi løfter stemningen blandt
                kollegerne og motiverer dem til at yde mere. Han er engageret i
                sine opgaver og meget fleksibel, når det kræves. Mikkel er
                generelt en fantastisk kollega, der både skaber en sjov
                atmosfære, men også ved, hvornår det er tid til at tage tingene
                seriøst."
              </p>
            </Animation>
          </article>

          <article>
            <Animation animationClass="slideInBottom">
              <img src="/louise.webp" alt="Billede af Louise" />
              <h3>Louise Thysen</h3>
              <h4>Medstuderende</h4>
              <p>
                "Mikkel er imødekommende og nem at arbejde sammen med i
                projekter. Han er fantastisk til at gribe vores sjove ideer og
                skabe noget unikt ud af dem. Med sin rolige og humoristiske
                personlighed bidrager han altid til et godt arbejdsmiljø."
              </p>
            </Animation>
          </article>

          <article>
            <Animation animationClass="slideInRight">
              <img src="/emil.webp" alt="" />
              <h3>Emil Klein</h3>
              <h4>Tidl. kollega</h4>
              <p>
                "Man skal lede længe efter en medarbejder med så positiv energi
                som Mikkel. Han gør en stor indsats for at skabe et trygt og
                sikkert arbejdsmiljø, og det er altid en glæde at samarbejde med
                ham. Når han får en opgave, leverer han altid 110%, og intet
                mindre. Han er altid klar på en udfordring, og hans nysgerrighed
                og vilje til at lære er virkelig beundringsværdig."
              </p>
            </Animation>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
