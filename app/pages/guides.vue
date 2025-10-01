<script setup lang="ts">
import { AVAILABLE_GUIDES } from '~/data/guide-metadata';
</script>

<template>
    <div class="container">
        <h1>Guides</h1>
        <p class="subtitle">Helpful guides for My Singing Monsters</p>
        
        <div class="guide-grid">
            <NuxtLink 
                v-for="guide in AVAILABLE_GUIDES" 
                :key="guide.slug"
                :to="`/guide/${guide.slug}`" 
                class="guide-card"
            >
                <h3>{{ guide.title }}</h3>
                <p>{{ guide.description }}</p>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.subtitle {
    color: var(--ctp-subtext0);
    margin-bottom: 2rem;
}

.guide-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
}

.guide-card {
    background: linear-gradient(135deg, var(--ctp-surface0), var(--ctp-surface1));
    border: 1px solid var(--ctp-surface2);
    border-radius: 1rem;
    padding: 2rem;
    transition: all 0.3s ease;
}

.guide-card:hover {
    transform: translateY(-5px);
    border-color: var(--ctp-mauve);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.guide-card h3 {
    color: var(--ctp-lavender);
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
}

.guide-card p {
    color: var(--ctp-subtext0);
    line-height: 1.5;
}
</style>
