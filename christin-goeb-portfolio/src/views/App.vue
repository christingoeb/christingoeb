<script setup lang="ts">
const skills = [
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
  "LLM APIs"
]

const experience = [
  {
    period: "01/2025 – 06/2026",
    role: "Wissenschaftliche Hilfskraft",
    company: "HTWK Leipzig · Erasmus+ Projekt ACTIVATE",
    details:
      "Entwicklung eines webbasierten Dashboards mit Vue.js und Node.js. Integration von Large Language Models sowie Entwicklung einer End-to-End-Pipeline zur Verarbeitung von Audio- und Feedbackdaten."
  },
  {
    period: "04/2022 – 06/2022",
    role: "Praktikum Software Engineering",
    company: "Toolstage Software Engineering",
    details:
      "Weiterentwicklung einer produktiven Kundenwebsite mit PHP und Joomla sowie erste Erfahrungen mit React Native."
  }
]

const projects = [
  {
    name: "ACTIVATE Dashboard",
    summary:
      "Entwicklung eines webbasierten Dashboards zur Unterstützung medizinischer Debriefings mit KI-gestützter Verarbeitung strukturierter Feedbackdaten.",
    tech: "Vue.js · TypeScript · Node.js · Python · SPARQL · LLMs"
  },
  {
    name: "Masterarbeit",
    summary:
      "Entwicklung einer End-to-End-Pipeline für Speech-to-Text, Sprecherdiarisierung und Wissensgraphen zur automatisierten Analyse kollaborativen Feedbacks.",
    tech: "Python · RDF · SPARQL · faster-whisper · pyannote.audio"
  },
  {
    name: "SQL Assessment System",
    summary:
      "Automatisierte Lernstandsüberprüfung von SQL-Aufgaben in Moodle im Rahmen der Bachelorarbeit.",
    tech: "SQLite · Moodle · CodeRunner · SQL"
  }
]
</script>
<template>
  <div class="cv-page">
    <header class="hero">
      <div class="hero-left">
        <span class="badge">Hallo, ich bin</span>
        <h1>Christin Göb</h1>
        <h2>Full-Stack Softwareentwicklerin</h2>
        <p>
          M.Sc. Medieninformatik mit Schwerpunkt auf
          modernen Webanwendungen, KI-gestützter Software
          und intuitiven Benutzeroberflächen.
        </p>
        <div class="buttons">
          <a href="#projects" class="btn-primary">Projekte</a>
          <a href="#experience" class="btn-secondary">Erfahrung</a>
        </div>
      </div>
      <div class="hero-right">
        <div class="profile-card">
          <p class="profile-card-title">Kurzprofil</p>
          <p>Leipzig, Deutschland</p>
          <p>M.Sc. Medieninformatik</p>
          <p>Interesse: Web, Daten, KI</p>
        </div>
      </div>
    </header>

    <main class="cv-layout">
      <section class="cv-section">
        <h2>Profil</h2>
        <p>
          Medieninformatikerin (M.Sc.) mit Erfahrung in der Entwicklung
          moderner Webanwendungen und KI-gestützter Systeme. Schwerpunkt auf
          Full-Stack-Entwicklung mit Vue.js, TypeScript, Node.js und Python.
          Begeistert von der Entwicklung intuitiver Software, sauberem Code
          und innovativen Lösungen mit modernen Technologien.
        </p>
      </section>

      <section class="cv-section">
        <h2>Technologien</h2>
        <div class="skills">
          <span v-for="skill in skills" :key="skill" class="skill">
            {{ skill }}
          </span>
        </div>
      </section>

      <section id="experience" class="cv-section">
        <h2>Berufserfahrung</h2>

        <article v-for="item in experience" :key="item.role" class="entry">
          <p class="meta">{{ item.period }}</p>
          <h3>{{ item.role }}</h3>
          <p class="company">{{ item.company }}</p>
          <p>{{ item.details }}</p>
        </article>
      </section>

      <section id="projects" class="cv-section">
        <h2>Projekte</h2>

        <article v-for="project in projects" :key="project.name" class="entry">
          <h3>{{ project.name }}</h3>
          <p>{{ project.summary }}</p>
          <p class="tech">{{ project.tech }}</p>
        </article>
      </section>

      <section class="cv-section">
        <h2>Ausbildung</h2>

        <article class="entry">
          <h3>M.Sc. Medieninformatik</h3>
          <p>HTWK Leipzig · Abschlussnote 1,4</p>
        </article>

        <article class="entry">
          <h3>B.Sc. Digitale Medien</h3>
          <p>Hochschule Fulda · Abschlussnote 1,6</p>
        </article>
      </section>

      <section class="cv-section">
        <h2>Kontakt</h2>

        <p class="contact-row">
          <span class="contact-label">E-Mail</span>
          <a href="mailto:christin.goeb@t-online.de">
            christin.goeb@t-online.de
          </a>
        </p>

        <p class="contact-row">
          <span class="contact-label">Standort</span>
          <span>Leipzig, Deutschland</span>
        </p>

        <p class="contact-row">
          <span class="contact-label">LinkedIn</span>
          <a href="https://www.linkedin.com/in/christin-g%C3%B6b-b1a914222/" target="_blank" rel="noreferrer">
            Christin Göb
          </a>
        </p>
      </section>
    </main>

    <footer class="cv-footer">
      <p>© {{ new Date().getFullYear() }} Christin Göb</p>
      <router-link to="/impressum">Impressum</router-link>
    </footer>
  </div>
</template>

<style scoped>
.cv-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #f3f4f6 0%, #fafafa 100%);
  color: #1f1f1f;
  padding: 2.2rem 1rem 3rem;
}

.hero {
  max-width: 860px;
  margin: 0 auto 1rem;
  padding: 1.2rem;
  border: 1px solid #d9dde3;
  border-radius: 8px;
  background: #ffffff;
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 1.2rem;
}

.badge {
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #4b5563;
}

.hero-left h1 {
  font-size: clamp(1.9rem, 4vw, 2.4rem);
  line-height: 1.15;
  color: #111827;
  margin-bottom: 0.2rem;
}

.hero-left h2 {
  font-size: 1.05rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.7rem;
}

.hero-left p {
  color: #374151;
  max-width: 55ch;
}

.buttons {
  margin-top: 1rem;
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.buttons a {
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 600;
  padding: 0.45rem 0.8rem;
  border-radius: 6px;
}

.btn-primary {
  background: #1f2937;
  color: #ffffff;
  border: 1px solid #1f2937;
}

.btn-secondary {
  background: #ffffff;
  color: #1f2937;
  border: 1px solid #cfd5de;
}

.profile-card {
  border: 1px solid #e2e7ee;
  border-radius: 6px;
  padding: 0.8rem;
  background: #f8fafc;
  align-self: start;
}

.profile-card-title {
  font-weight: 700;
  margin-bottom: 0.35rem;
}

.profile-card p {
  margin-bottom: 0.2rem;
  color: #4b5563;
  font-size: 0.92rem;
}

.cv-layout {
  max-width: 860px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
}

.cv-section {
  background: #ffffff;
  border: 1px solid #d9dde3;
  padding: 1rem 1.05rem;
  border-radius: 8px;
}

.cv-section h2 {
  font-size: 1.05rem;
  margin-bottom: 0.8rem;
  color: #111827;
}

.entry {
  padding: 0.85rem 0;
  border-top: 1px solid #eceff3;
}

.entry:first-of-type {
  border-top: 0;
  padding-top: 0;
}

.entry h3 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: #111827;
}

.meta {
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 0.12rem;
}

.company {
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.tech {
  margin-top: 0.35rem;
  color: #4b5563;
  font-size: 0.92rem;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.skill {
  border: 1px solid #d9dde3;
  background: #f8fafc;
  border-radius: 999px;
  padding: 0.2rem 0.65rem;
  font-size: 0.88rem;
  color: #374151;
}

.cv-section a {
  color: #1f2937;
}

.contact-row {
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 0.7rem;
  margin-bottom: 0.3rem;
}

.contact-label {
  color: #6b7280;
}

.cv-footer {
  max-width: 860px;
  margin: 1rem auto 0;
  color: #6b7280;
  font-size: 0.9rem;
  text-align: right;
}

@media (max-width: 640px) {
  .cv-page {
    padding: 1.2rem 0.8rem 2rem;
  }

  .hero {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  .contact-row {
    grid-template-columns: 1fr;
    gap: 0.15rem;
  }

  .cv-footer {
    text-align: left;
  }
}
</style>
