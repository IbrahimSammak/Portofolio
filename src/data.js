// Hier deine eigenen Daten eintragen – die ganze Website liest alles aus dieser Datei.

export const person = {
  name: 'Ibrahim Alsammak',
  titel: 'Junior Softwareentwickler',
  ort: 'Deggendorf, Deutschland',
  email: 'Bobosamak57@gmail.com',
  telefon: '+49 162 5871729',
  github: 'https://github.com/',
  kurz:
    'Computer Engineer (B.Sc.) und Masterstudent an der Technischen Hochschule Deggendorf – mit Begeisterung für Webentwicklung, Software Engineering und moderne Technologien.',
  ueberMich: [
    'Als engagierter Masterstudent im Bereich Informatik und Infotronik an der Technischen Hochschule Deggendorf verfüge ich über ein solides theoretisches Fundament und erste praktische Erfahrungen aus meinem Bachelorstudium in Computer Engineering.',
    'Mein Interesse an modernen Technologien und meine schnelle Auffassungsgabe motivieren mich, mein Wissen stetig zu erweitern und innovative Lösungen für komplexe Aufgaben zu entwickeln. Ich arbeite gerne im Team, übernehme Verantwortung und kenne agile Arbeitsweisen wie Scrum.',
  ],
};

export const ausbildung = [
  {
    zeitraum: '06/2019 – 06/2023',
    abschluss: 'Bachelor – Computer Engineering',
    ort: 'Lebanese International University (LIU), Tripoli, Libanon',
    beschreibung:
      'Module u. a. Web Development, Mobile App Development, Software Application and Design, Scripting Languages, Agile Scrum Development sowie Datenstrukturen und Algorithmen.',
    note: '',
  },
  {
    zeitraum: '03/2025 – heute',
    abschluss: 'Master – Informatik und Infotronik',
    ort: 'Technische Hochschule Deggendorf (THD), Deutschland',
    beschreibung:
      'Vertiefung in Informatik und Infotronik mit Fokus auf moderne Software- und Systementwicklung.',
    note: '',
  },
];

export const erfahrung = [
  {
    zeitraum: '06/2023 – 09/2023',
    position: 'Praktikum Webentwicklung',
    firma: 'CEDARS BC – Tripoli, Libanon',
    aufgaben: [
      'Frontend-Entwicklung mit HTML, CSS und JavaScript (inkl. asynchroner Programmierung)',
      'RESTful API-Entwicklung mit Spring Boot und Datenbankintegration',
      'DOM-Manipulation, Event Handling und Responsive Design',
      'Dependency Management, Fehlerbehandlung, Logging und Debugging',
    ],
  },
];

export const faehigkeiten = [
  { name: 'React', level: 85 },
  { name: 'HTML, CSS & JavaScript', level: 80 },
  { name: 'Java', level: 70 },
  { name: 'C / C++', level: 50 },
  { name: 'Python', level: 50 },
  { name: 'SQL & PHP', level: 50 },
  { name: 'Microsoft Office (Word, Excel, PowerPoint, Access)', level: 80 },
];

export const sprachen = [
  { name: 'Arabisch', level: 'Muttersprache' },
  { name: 'Deutsch', level: 'B1–B2' },
  { name: 'Englisch', level: 'B2' },
  { name: 'Französisch', level: 'A2–B1' },
];

export const projekte = [
  {
    titel: 'Websites (Web Development)',
    beschreibung:
      'Mehrere Websites selbstständig konzipiert und entwickelt – Frontend mit HTML, CSS und JavaScript, Backend mit PHP und SQL-Datenbank.',
    technik: ['HTML/CSS', 'JavaScript', 'PHP', 'SQL'],
    link: '#',
  },
  {
    titel: 'Mobile Apps',
    beschreibung:
      'Entwicklung mehrerer Android-Apps, z. B. ein Taschenrechner und eine Chat-App ähnlich wie WhatsApp.',
    technik: ['Java', 'XML'],
    link: '#',
  },
  {
    titel: 'Datenstrukturen & Algorithmen',
    beschreibung:
      'Umsetzung von Arrays, Listen, Stapeln, Warteschlangen und Bäumen sowie Algorithmen zur Suche, Sortierung und Optimierung.',
    technik: ['C++'],
    link: '#',
  },
  {
    titel: 'Automatisierung mit Python',
    beschreibung:
      'Skripte zur Automatisierung von Abläufen und zur Programmsteuerung im Modul Scripting Languages.',
    technik: ['Python'],
    link: '#',
  },
];
