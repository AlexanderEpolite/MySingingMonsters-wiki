<template>
    <div class="container">
        <div v-if="!elementName" class="loading">
            <p>Element not found</p>
            <NuxtLink to="/elements">← Back to all elements</NuxtLink>
        </div>
        
        <div v-else>
            <h1>{{ elementName }} Monsters</h1>
            <p class="subtitle">All monsters with the {{ elementName }} element</p>
            
            <div class="filters">
                <select v-model="sortBy" class="filter-select">
                    <option value="elements">Sort by: Elements (Default)</option>
                    <option value="name">Sort by: Name</option>
                    <option value="rarity">Sort by: Rarity</option>
                    <option value="cost">Sort by: Cost</option>
                    <option value="beds">Sort by: Beds Required</option>
                </select>
            </div>
            
            <ClientOnly>
                <div class="monster-grid">
                    <MonsterCard 
                        v-for="(monster, index) in sortedMonsters" 
                        :key="`${monster.name}-${index}`"
                        :monster="monster"
                    />
                </div>
                
                <div v-if="sortedMonsters.length === 0" class="no-results">
                    <p>No monsters found with this element.</p>
                </div>
                <template #fallback>
                    <div class="loading">
                        <p>Loading monsters...</p>
                    </div>
                </template>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { monsters } from '~/data/monsters';
import { getDisplayName } from '~/utils/helpers';

const route = useRoute();
const elementSlug = route.params.name as string;
const sortBy = ref('elements');

const elementName = computed(() => {
    const found = monsters.find(m => 
        m.elements.some(e => e.toLowerCase().replace(/\s+/g, '-') === elementSlug)
    );
    return found?.elements.find(e => e.toLowerCase().replace(/\s+/g, '-') === elementSlug);
});

const elementMonsters = computed(() => {
    if (!elementName.value) return [];
    return monsters.filter(m => m.elements.includes(elementName.value!));
});

const sortedMonsters = computed(() => {
    const sorted = [...elementMonsters.value];
    
    switch (sortBy.value) {
        case 'name':
            return sorted.sort((a, b) => getDisplayName(a).localeCompare(getDisplayName(b)));
            
        case 'rarity':
            const rarityOrder = { 'common': 0, 'rare': 1, 'epic': 2 };
            return sorted.sort((a, b) => {
                const rarityDiff = rarityOrder[a.rarity] - rarityOrder[b.rarity];
                if (rarityDiff !== 0) return rarityDiff;
                return getDisplayName(a).localeCompare(getDisplayName(b));
            });
            
        case 'cost':
            return sorted.sort((a, b) => {
                const costA = a.island_costs[0]?.cost || 0;
                const costB = b.island_costs[0]?.cost || 0;
                if (costA !== costB) return costA - costB;
                return getDisplayName(a).localeCompare(getDisplayName(b));
            });
            
        case 'beds':
            return sorted.sort((a, b) => {
                const bedsDiff = a.beds_required - b.beds_required;
                if (bedsDiff !== 0) return bedsDiff;
                return getDisplayName(a).localeCompare(getDisplayName(b));
            });
            
        case 'elements':
        default:
            return sorted.sort((a, b) => {
                const elementDiff = a.elements.length - b.elements.length;
                if (elementDiff !== 0) return elementDiff;
                return getDisplayName(a).localeCompare(getDisplayName(b));
            });
    }
});
</script>

<style scoped>
.subtitle {
    color: var(--ctp-subtext0);
    margin-bottom: 1rem;
}

.filters {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.filter-select {
    padding: 0.75rem 1rem;
    background-color: var(--ctp-surface0);
    border: 1px solid var(--ctp-surface2);
    border-radius: 0.5rem;
    color: var(--ctp-text);
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s ease;
    cursor: pointer;
}

.filter-select:focus {
    border-color: var(--ctp-mauve);
}

.monster-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
}

.no-results {
    text-align: center;
    padding: 3rem;
    color: var(--ctp-subtext0);
}

.loading {
    text-align: center;
    padding: 3rem;
    color: var(--ctp-subtext0);
    font-size: 1.2rem;
}
</style>
