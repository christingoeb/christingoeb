<script setup lang="ts">
defineProps<{
    id?: string;
    title: string;
    description?: string;
}>();
</script>

<template>
    <section :id="id" class="section-shell">
        <header class="section-header">
            <h2>{{ title }}</h2>
            <p v-if="description">{{ description }}</p>
        </header>

        <div class="section-body">
            <slot />
        </div>
    </section>
</template>

<style scoped>
.section-shell {
    padding: 1.2rem 1.25rem;
    border: 1px solid var(--color-border);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.82);
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05);
}

.section-header {
    margin-bottom: 0.95rem;
}

.section-header h2 {
    margin: 0;
    color: var(--color-heading);
    font-size: 1.05rem;
    font-weight: 700;
    letter-spacing: -0.02em;
}

.section-header p {
    margin-top: 0.35rem;
    color: var(--color-text-soft);
}

.section-body {
    min-width: 0;
}
</style>