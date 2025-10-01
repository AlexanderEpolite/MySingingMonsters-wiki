<template>
    <div class="container">
        <h1>Elements</h1>
        <p class="subtitle">Browse monsters by their elements</p>
        
        <div class="element-grid">
            <NuxtLink 
                v-for="element in elements" 
                :key="element.name"
                :to="`/element/${element.slug}`"
                class="element-card"
            >
                <h3>{{ element.name }}</h3>
                <p class="count">{{ element.count }} monster(s)</p>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { monsters } from '~/data/monsters';

const elements = computed(() => {
    const elementMap = new Map<string, number>();
    
    monsters.forEach(monster => {
        monster.elements.forEach(element => {
            const count = elementMap.get(element) || 0;
            elementMap.set(element, count + 1);
        });
    });
    
    return Array.from(elementMap.entries()).map(([name, count]) => ({
        name,
        slug: name.toLowerCase().replace(/\s+/g, '-'),
        count
    })).sort((a, b) => a.name.localeCompare(b.name));
});
</script>

<style scoped>
.subtitle {
    color: var(--ctp-subtext0);
    margin-bottom: 2rem;
}

.element-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1rem;
}

.element-card {
    background-color: var(--ctp-surface0);
    border: 1px solid var(--ctp-surface2);
    border-radius: 0.75rem;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
}

.element-card:hover {
    transform: translateY(-5px);
    border-color: var(--ctp-blue);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.element-card h3 {
    color: var(--ctp-lavender);
    margin-bottom: 0.5rem;
    font-size: 1rem;
}

.count {
    color: var(--ctp-subtext0);
    font-size: 0.85rem;
}
</style>
