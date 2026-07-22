<script setup lang="ts">
defineProps<{
    skills: string[];
}>();
</script>

<template>
    <div class="skill-cloud">
        <span v-for="skill in skills" :key="skill" class="skill-pill">
            {{ skill }}
        </span>
    </div>
</template>

<style scoped>
.skill-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
}

.skill-pill {
    display: inline-flex;
    align-items: center;
    padding: 0.34rem 0.75rem;
    border-radius: 999px;
    border: 1px solid rgba(148, 163, 184, 0.32);
    background: rgba(241, 245, 249, 0.95);
    color: var(--color-heading);
    font-size: 0.92rem;
}
</style>