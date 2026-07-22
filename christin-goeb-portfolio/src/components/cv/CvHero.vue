<script setup lang="ts">
import type { HeroContent } from "../../data/cvContent";

defineProps<{
    hero: HeroContent;
}>();
</script>

<template>
    <header class="hero-shell">
        <div class="hero-copy">
            <span class="hero-badge">{{ hero.badge }}</span>
            <h1>{{ hero.name }}</h1>
            <h2>{{ hero.role }}</h2>
            <p>{{ hero.summary }}</p>
            <slot name="actions" />
        </div>

        <aside class="hero-card" :aria-label="hero.profileTitle">
            <p class="hero-card-title">{{ hero.profileTitle }}</p>
            <p v-for="item in hero.profileItems" :key="item">{{ item }}</p>
        </aside>
    </header>
</template>

<style scoped>
.hero-shell {
    max-width: 900px;
    margin: 0 auto 1rem;
    padding: 1.5rem;
    border: 1px solid var(--color-border);
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
    backdrop-filter: blur(12px);
    display: grid;
    grid-template-columns: minmax(0, 1.75fr) minmax(0, 1fr);
    gap: 1rem;
}

.hero-copy h1 {
    margin: 0;
    font-size: clamp(2.4rem, 6vw, 4rem);
    line-height: 0.95;
    letter-spacing: -0.05em;
    color: var(--color-heading);
}

.hero-copy h2 {
    margin: 0.45rem 0 0.85rem;
    font-size: clamp(1.1rem, 2.2vw, 1.35rem);
    font-weight: 600;
    color: var(--color-text-soft);
}

.hero-copy p {
    max-width: 62ch;
    font-size: 1rem;
    color: var(--color-text-soft);
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    margin-bottom: 0.65rem;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    background: rgba(84, 97, 255, 0.08);
    color: #3f4ae4;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.78rem;
    font-weight: 700;
}

.hero-card {
    align-self: start;
    padding: 1rem 1.05rem;
    border-radius: 18px;
    background: rgba(248, 250, 252, 0.92);
    border: 1px solid rgba(148, 163, 184, 0.25);
}

.hero-card-title {
    margin-bottom: 0.55rem;
    color: var(--color-heading);
    font-weight: 700;
}

.hero-card p {
    margin-bottom: 0.22rem;
    color: var(--color-text-soft);
}

@media (max-width: 760px) {
    .hero-shell {
        grid-template-columns: 1fr;
        padding: 1.2rem;
    }
}
</style>