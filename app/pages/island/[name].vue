<template>
    <div class="container">
        <div v-if="!island" class="loading">
            <p>Island not found</p>
            <NuxtLink to="/islands">← Back to all islands</NuxtLink>
        </div>
        
        <div v-else>
            <h1>{{ island.name }}</h1>
            <span class="badge">{{ island.type }}</span>
            
            <div class="card">
                <h2>Description</h2>
                <p>{{ island.description }}</p>
            </div>
            
            <div class="card">
                <h2>Island Information</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <strong>Type:</strong> {{ island.type }}
                    </div>
                    <div class="info-item" v-if="island.maxLevel > 0">
                        <strong>Max Level:</strong> {{ island.maxLevel }}
                    </div>
                    <div class="info-item">
                        <strong>Unlock Cost:</strong> {{ formatNumber(island.unlockCost) }} {{ island.currency }}
                    </div>
                </div>
            </div>
            
            <div class="card">
                <h2>Elements</h2>
                <div class="elements">
                    <span v-for="element in island.elements" :key="element" class="element-badge">
                        {{ element }}
                    </span>
                </div>
            </div>
            
            <div class="card">
                <h2>Monsters on {{ island.name }}</h2>
                <div class="monster-grid">
                    <NuxtLink 
                        v-for="monster in islandMonsters" 
                        :key="monster.name"
                        :to="`/monster/${getMonsterSlug(monster.name)}`"
                        class="monster-card"
                    >
                        <img 
                            :src="getURLFromName(monster.name, false, 'monster')"
                            :alt="monster.name"
                            class="monster-icon"
                            @error="handleImageError"
                        />
                        <span>{{ monster.name }}</span>
                    </NuxtLink>
                </div>
                <p v-if="islandMonsters.length === 0" class="no-monsters">
                    No monsters data available for this island yet.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { islands } from '~/data/islands';
import { monsters } from '~/data/monsters';
import { getIslandSlug, getMonsterSlug, getURLFromName, formatNumber } from '~/utils/helpers';

const route = useRoute();
const islandSlug = route.params.name as string;

const island = computed(() => {
    return islands.find(i => getIslandSlug(i.name) === islandSlug);
});

const islandMonsters = computed(() => {
    if (!island.value) return [];
    return monsters.filter(m => m.islands.includes(island.value!.name as any));
});

const handleImageError = (event: Event) => {
    const target = event.target as HTMLImageElement;
    target.src = '/images/placeholder.webp';
};
</script>

<style scoped>
.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.info-item {
    padding: 1rem;
    background-color: var(--ctp-surface1);
    border-radius: 0.5rem;
}

.info-item strong {
    color: var(--ctp-lavender);
    display: block;
    margin-bottom: 0.25rem;
}

.elements {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.element-badge {
    padding: 0.5rem 1rem;
    background-color: var(--ctp-surface1);
    border-radius: 0.5rem;
    font-weight: 500;
}

.monster-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1rem;
}

.monster-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: var(--ctp-surface1);
    border-radius: 0.5rem;
    transition: all 0.2s ease;
    text-align: center;
}

.monster-card:hover {
    background-color: var(--ctp-surface2);
    transform: translateY(-3px);
}

.monster-card img {
    width: 64px;
    height: 64px;
    margin-bottom: 0.5rem;
}

.monster-card span {
    font-size: 0.9rem;
}

.no-monsters {
    text-align: center;
    color: var(--ctp-subtext0);
    padding: 2rem;
}
</style>
