<script setup lang="ts">
import type { ContactContent } from "../../data/cvContent";

defineProps<{
    contact: ContactContent;
}>();
</script>

<template>
    <p class="contact-row">
        <span class="contact-label">{{ contact.label }}</span>

        <a v-if="contact.href" :href="contact.href" :target="contact.external ? '_blank' : undefined"
            :rel="contact.external ? 'noreferrer' : undefined">
            {{ contact.value }}
        </a>

        <span v-else>{{ contact.value }}</span>
    </p>
</template>

<style scoped>
.contact-row {
    display: grid;
    grid-template-columns: 92px minmax(0, 1fr);
    gap: 0.75rem;
    align-items: start;
    padding-bottom: 0.3rem;
}

.contact-label {
    color: var(--color-text-muted);
}

.contact-row a {
    color: var(--color-heading);
    text-decoration-thickness: 0.08em;
    text-underline-offset: 0.18em;
}

@media (max-width: 640px) {
    .contact-row {
        grid-template-columns: 1fr;
        gap: 0.15rem;
    }
}
</style>