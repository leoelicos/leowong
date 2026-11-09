import { useRef } from "react";
import {
  about,
  contact,
  cvHref,
  experience,
  person,
  skills,
  work,
  type Skill,
} from "./content";
import { linkProps } from "./links";
import { Scene } from "./Scene";
import { SkillIcon } from "./SkillIcon";

function SkillList({ items }: { readonly items: readonly Skill[] }) {
  return (
    <ul className="tags">
      {items.map((skill) => (
        <li key={skill.name}>
          <span className="skill">
            <SkillIcon id={skill.icon} />
            <span>{skill.name}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export function App() {
  const heroRef = useRef<HTMLElement>(null);

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
              <a href="#experience">Experience</a>
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
        <section
          className="hero"
          id="top"
          aria-labelledby="name"
          ref={heroRef}>
          <Scene target={heroRef} />
          <div className="hero-copy">
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
                <a className="button" href={cvHref} {...linkProps(cvHref)}>
                  CV
                </a>
                <a
                  className="button button-quiet"
                  href="https://ingre.vercel.app/"
                  {...linkProps("https://ingre.vercel.app/")}>
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
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <h3>Web</h3>
          <SkillList items={skills.web} />
          <h3>Quality and shipping</h3>
          <SkillList items={skills.quality} />
          <h3>In progress</h3>
          <SkillList items={skills.inProgress} />
        </section>

        <section id="experience" aria-labelledby="experience-heading">
          <h2 id="experience-heading">Experience</h2>
          <article>
            <h3>{experience.org}</h3>
            <p className="role-dates">{experience.dates}</p>
            <p>{experience.summary}</p>
            <ul className="roles">
              {experience.roles.map((role) => (
                <li key={role.title}>
                  <span className="role-title">{role.title}</span>
                  <span className="role-dates">{role.dates}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section id="work" aria-labelledby="work-heading">
          <h2 id="work-heading">Work</h2>
          <article>
            <h3>{work.name}</h3>
            <p>{work.summary}</p>
            <p>{work.detail}</p>
            <ul className="work-bullets">
              {work.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <dl>
              {work.facts.map((fact) => (
                <div key={fact.term}>
                  <dt>{fact.term}</dt>
                  <dd>
                    {fact.href !== undefined ? (
                      <a href={fact.href} {...linkProps(fact.href)}>
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
                  <a href={link.href} {...linkProps(link.href)}>
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
                <a href={link.href} {...linkProps(link.href)}>
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
