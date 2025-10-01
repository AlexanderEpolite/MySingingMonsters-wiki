<template>
    <div class="container">
        <h1>All Islands</h1>
        <p class="subtitle">Explore all islands in My Singing Monsters</p>
        
        <div class="island-grid">
            <NuxtLink 
                v-for="island in islands" 
                :key="island.name"
                :to="`/island/${getIslandSlug(island.name)}`"
                class="island-card"
            >
                <img 
                    :src="getIslandImage(island.name)"
                    :alt="island.name"
                    class="island-image"
                    @error="handleImageError"
                />
                <h3>{{ island.name }}</h3>
                <span class="badge">{{ island.type }}</span>
                <p class="description">{{ island.description }}</p>
                <div class="elements">
                    <span v-for="element in island.elements" :key="element" class="element-badge">
                        {{ element }}
                    </span>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { islands } from '~/data/islands';
import { getIslandSlug, getIslandImage } from '~/utils/helpers';

const handleImageError = (event: Event) => {
    const target = event.target as HTMLImageElement;
    target.src = '/images/placeholder.webp';
};
</script>

<style scoped>
.subtitle {
    color: var(--ctp-subtext0);
    margin-bottom: 2rem;
}

.island-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
}

.island-card {
    background-color: var(--ctp-surface0);
    border: 1px solid var(--ctp-surface2);
    border-radius: 0.75rem;
    padding: 1.5rem;
    transition: all 0.3s ease;
    cursor: pointer;
}

.island-card:hover {
    transform: translateY(-5px);
    border-color: var(--ctp-blue);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.island-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
}

.island-card h3 {
    color: var(--ctp-text);
    margin-bottom: 0.75rem;
}

.description {
    color: var(--ctp-subtext0);
    font-size: 0.9rem;
    margin: 1rem 0;
    line-height: 1.5;
}

.elements {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
}

.element-badge {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    background-color: var(--ctp-surface2);
    border-radius: 0.25rem;
    color: var(--ctp-subtext0);
}
</style>
