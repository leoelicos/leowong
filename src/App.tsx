import { contact, person, skills, work } from "./content";

function external(href: string) {
  return href.startsWith("http")
    ? ({ target: "_blank", rel: "noreferrer" } as const)
    : {};
}

export function App() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#top">
          {person.name}
        </a>
        <nav aria-label="Sections">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content">
        <section className="hero" id="top" aria-labelledby="name">
          <div>
            <p className="eyebrow">
              {person.role}, {person.place}
            </p>
            <h1 id="name">{person.name}</h1>
            <p className="lede">{person.summary}</p>
            <p className="actions">
              <a className="button" href={`mailto:${person.email}`}>
                Email
              </a>
              <a className="button button-quiet" href="https://ingre.vercel.app/">
                ingré
              </a>
            </p>
          </div>
          <img
            className="portrait"
            src="/avatar.png"
            width="512"
            height="512"
            alt="Leo Wong"
          />
        </section>

        <section id="about" aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <p>
            An iPhone app and an Android app are in progress. They will use the
            same recipes as the website.
          </p>
          <h3>Web</h3>
          <ul className="tags">
            {skills.web.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <h3>In progress</h3>
          <ul className="tags">
            {skills.inProgress.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section id="work" aria-labelledby="work-heading">
          <h2 id="work-heading">Work</h2>
          <article>
            <h3>{work.name}</h3>
            <p>{work.summary}</p>
            <p>{work.detail}</p>
            <dl>
              {work.facts.map((fact) => (
                <div key={fact.term}>
                  <dt>{fact.term}</dt>
                  <dd>
                    {"href" in fact ? (
                      <a href={fact.href} {...external(fact.href)}>
                        {fact.detail}
                      </a>
                    ) : (
                      fact.detail
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <ul className="links">
              {work.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} {...external(link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact</h2>
          <ul className="links">
            {contact.map((link) => (
              <li key={link.href}>
                <a href={link.href} {...external(link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>
          {person.name}. {person.place}.
        </p>
      </footer>
    </>
  );
}
