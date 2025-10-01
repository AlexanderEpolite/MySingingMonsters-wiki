<template>
    <div class="container">
        <div v-if="!className" class="loading">
            <p>Class not found</p>
            <NuxtLink to="/classes">← Back to all classes</NuxtLink>
        </div>
        
        <div v-else>
            <h1>{{ className }} Monsters</h1>
            <p class="subtitle">All monsters in the {{ className }} class</p>
            
            <div class="monster-grid">
                <MonsterCard 
                    v-for="monster in classMonsters" 
                    :key="monster.name"
                    :monster="monster"
                />
            </div>
            
            <div v-if="classMonsters.length === 0" class="no-results">
                <p>No monsters found in this class.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { monsters } from '~/data/monsters';

const route = useRoute();
const classSlug = route.params.name as string;

const className = computed(() => {
    const found = monsters.find(m => m.class.toLowerCase().replace(/\s+/g, '-') === classSlug);
    return found?.class;
});

const classMonsters = computed(() => {
    if (!className.value) return [];
    return monsters.filter(m => m.class === className.value);
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
</style>
