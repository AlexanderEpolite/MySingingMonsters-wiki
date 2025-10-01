<template>
    <div class="container">
        <div v-if="!elementName" class="loading">
            <p>Element not found</p>
            <NuxtLink to="/elements">← Back to all elements</NuxtLink>
        </div>
        
        <div v-else>
            <h1>{{ elementName }} Monsters</h1>
            <p class="subtitle">All monsters with the {{ elementName }} element</p>
            
            <ClientOnly>
                <div class="monster-grid">
                    <MonsterCard 
                        v-for="(monster, index) in elementMonsters" 
                        :key="`${monster.name}-${index}`"
                        :monster="monster"
                    />
                </div>
                
                <div v-if="elementMonsters.length === 0" class="no-results">
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
import { computed } from 'vue';
import { monsters } from '~/data/monsters';

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
