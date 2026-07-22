<script setup lang="ts">
import CvContactRow from "../components/cv/CvContactRow.vue";
import CvEntryCard from "../components/cv/CvEntryCard.vue";
import CvHero from "../components/cv/CvHero.vue";
import CvSection from "../components/cv/CvSection.vue";
import CvSkillCloud from "../components/cv/CvSkillCloud.vue";
import { cvContent } from "../data/cvContent";

const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="page-shell">
    <CvHero :hero="cvContent.hero" />

    <main class="cv-layout">
      <CvSection title="Profil">
        <p class="section-copy">{{ cvContent.profile }}</p>
      </CvSection>

      <CvSection title="Technologien">
        <CvSkillCloud :skills="cvContent.skills" />
      </CvSection>

      <CvSection id="experience" title="Berufserfahrung">
        <div class="entry-grid">
          <CvEntryCard v-for="item in cvContent.experience" :key="`${item.title}-${item.period}`" :entry="item" />
        </div>
      </CvSection>

      <CvSection id="projects" title="Projekte">
        <div class="entry-grid">
          <CvEntryCard v-for="project in cvContent.projects" :key="project.title" :entry="project" />
        </div>
      </CvSection>

      <CvSection title="Ausbildung">
        <div class="entry-grid">
          <CvEntryCard v-for="item in cvContent.education" :key="item.title" :entry="item" />
        </div>
      </CvSection>

      <CvSection title="Kontakt">
        <div class="contact-grid">
          <CvContactRow v-for="contact in cvContent.contacts" :key="contact.label" :contact="contact" />
        </div>
      </CvSection>
    </main>

    <footer class="cv-footer">
      <p>© {{ currentYear }} Christin Göb</p>
      <router-link to="/impressum">Impressum</router-link>
      <router-link to="/datenschutz">Datenschutz</router-link>
    </footer>
  </div>
</template>

<style scoped>
.page-shell {
  min-height: 100vh;
  padding: 2rem 1rem 3rem;
  background:
    radial-gradient(circle at top left, rgba(84, 97, 255, 0.1), transparent 34%),
    linear-gradient(180deg, #f6f7fb 0%, #fbfbfd 48%, #f4f6fb 100%);
  color: var(--color-text);
}

.cv-layout {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
}

.section-copy {
  max-width: 70ch;
}

.entry-grid,
.contact-grid {
  display: grid;
  gap: 0.75rem;
}

.cv-footer {
  max-width: 900px;
  margin: 1rem auto 0;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: var(--color-text-muted);
  font-size: 0.95rem;
}

.cv-footer a {
  color: inherit;
}

@media (max-width: 680px) {
  .page-shell {
    padding: 1rem 0.8rem 2rem;
  }

  .cv-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
