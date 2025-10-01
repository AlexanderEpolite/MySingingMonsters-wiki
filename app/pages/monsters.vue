<template>
    <div class="container">
        <h1>All Monsters</h1>
        <p class="subtitle">Browse all monsters from My Singing Monsters</p>
        
        <div class="filters">
            <input v-model="searchQuery" type="text" placeholder="Search monsters..." class="search-input" />

            <select v-model="filterClass" class="filter-select">
                <option value="">All Classes</option>
                <option value="Natural">Natural</option>
                <option value="Fire">Fire</option>
                <option value="Ethereal">Ethereal</option>
                <option value="Magical">Magical</option>
                <option value="Seasonal">Seasonal</option>
                <option value="Mythical">Mythical</option>
                <option value="Celestial">Celestial</option>
                <option value="Legendary">Legendary</option>
            </select>

            <select v-model="filterRarity" class="filter-select">
                <option value="">All Rarities</option>
                <option value="common">Common</option>
                <option value="rare">Rare</option>
                <option value="epic">Epic</option>
            </select>
        </div>
        
        <div class="monster-grid">
            <NuxtLink v-for="monster in filteredMonsters" :key="monster.name"
                :to="`/monster/${getMonsterSlug(monster.name)}`" class="monster-card">
                <img :src="getURLFromName(monster.name, false, 'monster')" :alt="monster.name" class="monster-icon"
                    @error="handleImageError" loading="lazy" />
                <h3>{{ monster.name }}</h3>
                <div class="monster-meta">
                    <span :class="['badge', monster.rarity]">{{ monster.rarity }}</span>
                    <span class="badge">{{ monster.class }}</span>
                </div>
                <div class="elements">
                    <span v-for="element in monster.elements" :key="element" class="element-badge">
                        {{ element }}
                    </span>
                </div>
            </NuxtLink>
        </div>

        <div v-if="filteredMonsters.length === 0" class="no-results">
            <p>No monsters found matching your criteria.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { monsters } from '~/data/monsters';
import { getURLFromName, getMonsterSlug } from '~/utils/helpers';

const searchQuery = ref('');
const filterClass = ref('');
const filterRarity = ref('');

const filteredMonsters = computed(() => {
    return monsters.filter(monster => {
        const matchesSearch = monster.name.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesClass = !filterClass.value || monster.class === filterClass.value;
        const matchesRarity = !filterRarity.value || monster.rarity === filterRarity.value;

        return matchesSearch && matchesClass && matchesRarity;
    });
});

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

.filters {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.search-input,
.filter-select {
    padding: 0.75rem 1rem;
    background-color: var(--ctp-surface0);
    border: 1px solid var(--ctp-surface2);
    border-radius: 0.5rem;
    color: var(--ctp-text);
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s ease;
}

.search-input {
    flex: 1;
    min-width: 250px;
}

.search-input:focus,
.filter-select:focus {
    border-color: var(--ctp-mauve);
}

.filter-select {
    cursor: pointer;
}

.monster-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
}

.monster-card {
    background-color: var(--ctp-surface0);
    border: 1px solid var(--ctp-surface2);
    border-radius: 0.75rem;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
}

.monster-card:hover {
    transform: translateY(-5px);
    border-color: var(--ctp-mauve);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.monster-card img {
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
}

.monster-card h3 {
    color: var(--ctp-text);
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
}

.monster-meta {
    margin-bottom: 0.5rem;
}

.elements {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    justify-content: center;
}

.element-badge {
    font-size: 0.75rem;
    padding: 0.2rem 0.5rem;
    background-color: var(--ctp-surface2);
    border-radius: 0.25rem;
    color: var(--ctp-subtext0);
}

.no-results {
    text-align: center;
    padding: 3rem;
    color: var(--ctp-subtext0);
}
</style>
