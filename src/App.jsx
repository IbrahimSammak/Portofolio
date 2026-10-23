import { useState } from 'react';
import { person, ausbildung, erfahrung, faehigkeiten, sprachen, projekte } from './data.js';

const navLinks = [
  { id: 'ueber-mich', label: 'Über mich' },
  { id: 'ausbildung', label: 'Ausbildung' },
  { id: 'erfahrung', label: 'Erfahrung' },
  { id: 'faehigkeiten', label: 'Fähigkeiten' },
  { id: 'projekte', label: 'Projekte' },
  { id: 'kontakt', label: 'Kontakt' },
];

function initialen(name) {
  return name
    .split(' ')
    .map((teil) => teil[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function Navigation() {
  const [offen, setOffen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#start" className="logo">{initialen(person.name)}</a>
        <button className="menu-btn" onClick={() => setOffen(!offen)} aria-label="Menü">
          ☰
        </button>
        <nav className={offen ? 'links offen' : 'links'}>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setOffen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="start" className="hero">
      <div className="container hero-inner">
        <div className="avatar">{initialen(person.name)}</div>
        <div>
          <p className="gruss">Hallo, ich bin</p>
          <h1>{person.name}</h1>
          <h2>{person.titel}</h2>
          <p className="kurz">{person.kurz}</p>
          <div className="buttons">
            <a href="#kontakt" className="btn primaer">Kontakt aufnehmen</a>
            <a href="#erfahrung" className="btn">Meine Erfahrung</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Abschnitt({ id, titel, children }) {
  return (
    <section id={id} className="abschnitt">
      <div className="container">
        <h3 className="abschnitt-titel">{titel}</h3>
        {children}
      </div>
    </section>
  );
}

function UeberMich() {
  return (
    <Abschnitt id="ueber-mich" titel="Über mich">
      <div className="ueber-grid">
        <div>
          {person.ueberMich.map((absatz, i) => (
            <p key={i}>{absatz}</p>
          ))}
        </div>
        <ul className="fakten">
          <li><span>Wohnort</span>{person.ort}</li>
          <li><span>E-Mail</span>{person.email}</li>
          <li><span>Sprachen</span>{sprachen.map((s) => s.name).join(', ')}</li>
        </ul>
      </div>
    </Abschnitt>
  );
}

function Ausbildung() {
  return (
    <Abschnitt id="ausbildung" titel="Ausbildung & Abschluss">
      <div className="zeitleiste">
        {ausbildung.map((eintrag, i) => (
          <div key={i} className="eintrag">
            <span className="zeitraum">{eintrag.zeitraum}</span>
            <h4>{eintrag.abschluss}</h4>
            <p className="ort">{eintrag.ort}</p>
            <p>{eintrag.beschreibung}</p>
            {eintrag.note && <p className="note">{eintrag.note}</p>}
          </div>
        ))}
      </div>
    </Abschnitt>
  );
}

function Erfahrung() {
  return (
    <Abschnitt id="erfahrung" titel="Berufserfahrung">
      <div className="zeitleiste">
        {erfahrung.map((job, i) => (
          <div key={i} className="eintrag">
            <span className="zeitraum">{job.zeitraum}</span>
            <h4>{job.position}</h4>
            <p className="ort">{job.firma}</p>
            <ul>
              {job.aufgaben.map((aufgabe, j) => (
                <li key={j}>{aufgabe}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Abschnitt>
  );
}

function Faehigkeiten() {
  return (
    <Abschnitt id="faehigkeiten" titel="Fähigkeiten">
      <div className="skills-grid">
        <div>
          {faehigkeiten.map((skill) => (
            <div key={skill.name} className="skill">
              <div className="skill-kopf">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="balken">
                <div className="fuellung" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="karte">
          <h4>Sprachen</h4>
          {sprachen.map((sprache) => (
            <div key={sprache.name} className="sprache">
              <span>{sprache.name}</span>
              <span className="tag">{sprache.level}</span>
            </div>
          ))}
        </div>
      </div>
    </Abschnitt>
  );
}

function Projekte() {
  return (
    <Abschnitt id="projekte" titel="Projekte">
      <div className="projekt-grid">
        {projekte.map((projekt) => (
          <a key={projekt.titel} href={projekt.link} className="karte projekt">
            <h4>{projekt.titel}</h4>
            <p>{projekt.beschreibung}</p>
            <div className="tags">
              {projekt.technik.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Abschnitt>
  );
}

function Kontakt() {
  return (
    <Abschnitt id="kontakt" titel="Kontakt">
      <p className="kontakt-text">
        Ich freue mich über Ihre Nachricht – ob Jobangebot, Projektidee oder einfach ein Hallo.
      </p>
      <div className="kontakt-grid">
        <a href={`mailto:${person.email}`} className="karte">
          <span>E-Mail</span>
          <strong>{person.email}</strong>
        </a>
        <a href={`tel:${person.telefon.replace(/\s/g, '')}`} className="karte">
          <span>Telefon</span>
          <strong>{person.telefon}</strong>
        </a>
        <a href={person.github} target="_blank" rel="noreferrer" className="karte">
          <span>GitHub</span>
          <strong>Code ansehen</strong>
        </a>
      </div>
    </Abschnitt>
  );
}

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <UeberMich />
        <Ausbildung />
        <Erfahrung />
        <Faehigkeiten />
        <Projekte />
        <Kontakt />
      </main>
      <footer>
        © {new Date().getFullYear()} {person.name} · Alle Rechte vorbehalten
      </footer>
    </>
  );
}
