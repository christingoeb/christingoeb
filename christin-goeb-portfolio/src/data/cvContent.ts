export interface HeroContent {
  badge: string;
  name: string;
  role: string;
  summary: string;
  profileTitle: string;
  profileItems: string[];
}

export interface EntryContent {
  period?: string;
  title: string;
  subtitle?: string;
  description?: string;
  tech?: string;
}

export interface ContactContent {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

export interface CvContent {
  hero: HeroContent;
  profile: string;
  skills: string[];
  experience: EntryContent[];
  projects: EntryContent[];
  education: EntryContent[];
  contacts: ContactContent[];
}

export const cvContent: CvContent = {
  hero: {
    badge: "Hallo, ich bin",
    name: "Christin Göb",
    role: "Full-Stack Softwareentwicklerin",
    summary:
      "M.Sc. Medieninformatik mit Schwerpunkt auf modernen Webanwendungen, KI-gestützter Software und intuitiven Benutzeroberflächen.",
    profileTitle: "Kurzprofil",
    profileItems: [
      "Leipzig, Deutschland",
      "M.Sc. Medieninformatik",
      "Interesse: Web, Daten, KI",
    ],
  },
  profile:
    "Medieninformatikerin (M.Sc.) mit Erfahrung in der Entwicklung moderner Webanwendungen und KI-gestützter Systeme. Schwerpunkt auf Full-Stack-Entwicklung mit Vue.js, TypeScript, Node.js und Python. Begeistert von der Entwicklung intuitiver Software, sauberem Code und innovativen Lösungen mit modernen Technologien.",
  skills: [
    "Vue.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Python",
    "Next.js",
    "React",
    "Flutter",
    "SQL",
    "MySQL",
    "SPARQL",
    "RDF",
    "Git",
    "Docker",
    "LLM APIs",
  ],
  experience: [
    {
      period: "01/2025 – 06/2026",
      title: "Wissenschaftliche Hilfskraft",
      subtitle: "HTWK Leipzig · Erasmus+ Projekt ACTIVATE",
      description:
        "Entwicklung eines webbasierten Dashboards mit Vue.js und Node.js. Integration von Large Language Models sowie Entwicklung einer End-to-End-Pipeline zur Verarbeitung von Audio- und Feedbackdaten.",
    },
    {
      period: "04/2022 – 06/2022",
      title: "Praktikum Software Engineering",
      subtitle: "Toolstage Software Engineering",
      description:
        "Weiterentwicklung einer produktiven Kundenwebsite mit PHP und Joomla sowie erste Erfahrungen mit React Native.",
    },
  ],
  projects: [
    {
      title: "ACTIVATE Dashboard",
      description:
        "Entwicklung eines webbasierten Dashboards zur Unterstützung medizinischer Debriefings mit KI-gestützter Verarbeitung strukturierter Feedbackdaten.",
      tech: "Vue.js · TypeScript · Node.js · Python · SPARQL · LLMs",
    },
    {
      title: "Masterarbeit",
      description:
        "Entwicklung einer End-to-End-Pipeline für Speech-to-Text, Sprecherdiarisierung und Wissensgraphen zur automatisierten Analyse kollaborativen Feedbacks.",
      tech: "Python · RDF · SPARQL · faster-whisper · pyannote.audio",
    },
    {
      title: "SQL Assessment System",
      description:
        "Automatisierte Lernstandsüberprüfung von SQL-Aufgaben in Moodle im Rahmen der Bachelorarbeit.",
      tech: "SQLite · Moodle · CodeRunner · SQL",
    },
  ],
  education: [
    {
      title: "M.Sc. Medieninformatik",
      subtitle: "HTWK Leipzig · Abschlussnote 1,4",
    },
    {
      title: "B.Sc. Digitale Medien",
      subtitle: "Hochschule Fulda · Abschlussnote 1,6",
    },
  ],
  contacts: [
    {
      label: "E-Mail",
      value: "christin.goeb@t-online.de",
      href: "mailto:christin.goeb@t-online.de",
    },
    {
      label: "Standort",
      value: "Leipzig, Deutschland",
    },
    {
      label: "LinkedIn",
      value: "Christin Göb",
      href: "https://www.linkedin.com/in/christin-g%C3%B6b-b1a914222/",
      external: true,
    },
  ],
};
