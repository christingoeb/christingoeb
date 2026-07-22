<script setup lang="ts">
import type { EntryContent } from "../../data/cvContent";

defineProps<{
    entry: EntryContent;
}>();
</script>

<template>
    <article class="entry-card">
        <p v-if="entry.period" class="entry-period">{{ entry.period }}</p>
        <h3>{{ entry.title }}</h3>
        <p v-if="entry.subtitle" class="entry-subtitle">{{ entry.subtitle }}</p>
        <p v-if="entry.description" class="entry-description">{{ entry.description }}</p>
        <p v-if="entry.tech" class="entry-tech">{{ entry.tech }}</p>
    </article>
</template>

<style scoped>
.entry-card {
    padding: 0.2rem 0 0.95rem;
    border-bottom: 1px solid rgba(148, 163, 184, 0.2);
}

.entry-card:last-child {
    padding-bottom: 0;
    border-bottom: 0;
}

.entry-period {
    margin-bottom: 0.2rem;
    color: var(--color-text-muted);
    font-size: 0.88rem;
}

.entry-card h3 {
    margin: 0;
    color: var(--color-heading);
    font-size: 1rem;
    font-weight: 700;
}

.entry-subtitle,
.entry-description,
.entry-tech {
    margin-top: 0.22rem;
    color: var(--color-text-soft);
}

.entry-subtitle {
    font-weight: 600;
}

.entry-tech {
    font-size: 0.92rem;
}
</style>