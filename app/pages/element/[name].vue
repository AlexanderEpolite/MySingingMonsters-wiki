<template>
    <div class="container">
        <div v-if="!elementName" class="loading">
            <p>Element not found</p>
            <NuxtLink to="/elements">← Back to all elements</NuxtLink>
        </div>
        
        <div v-else>
            <h1>{{ elementName }} Monsters</h1>
            <p class="subtitle">All monsters with the {{ elementName }} element</p>
            
            <div class="monster-grid">
                <NuxtLink 
                    v-for="monster in elementMonsters" 
                    :key="monster.name"
                    :to="`/monster/${getMonsterSlug(monster.name)}`"
                    class="monster-card"
                >
                    <img 
                        :src="getURLFromName(monster.name, true, 'monster')"
                        :alt="monster.name"
                        class="monster-icon"
                        @error="handleImageError"
                    />
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
            
            <div v-if="elementMonsters.length === 0" class="no-results">
                <p>No monsters found with this element.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { monsters } from '~/data/monsters';
import { getURLFromName, getMonsterSlug } from '~/utils/helpers';

const route = useRoute();
const elementSlug = route.params.name as string;

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
}

.monster-card:hover {
    transform: translateY(-5px);
    border-color: var(--ctp-blue);
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
