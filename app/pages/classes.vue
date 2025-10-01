<template>
    <div class="container">
        <h1>Monster Classes</h1>
        <p class="subtitle">Browse monsters by their class</p>
        
        <div class="class-grid">
            <NuxtLink 
                v-for="monsterClass in classes" 
                :key="monsterClass.name"
                :to="`/class/${monsterClass.slug}`"
                class="class-card"
            >
                <h3>{{ monsterClass.name }}</h3>
                <p class="count">{{ monsterClass.count }} monster(s)</p>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { monsters } from '~/data/monsters';

const classes = computed(() => {
    const classMap = new Map<string, number>();
    
    monsters.forEach(monster => {
        const count = classMap.get(monster.class) || 0;
        classMap.set(monster.class, count + 1);
    });
    
    return Array.from(classMap.entries()).map(([name, count]) => ({
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

.class-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
}

.class-card {
    background-color: var(--ctp-surface0);
    border: 1px solid var(--ctp-surface2);
    border-radius: 0.75rem;
    padding: 2rem 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
}

.class-card:hover {
    transform: translateY(-5px);
    border-color: var(--ctp-mauve);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.class-card h3 {
    color: var(--ctp-lavender);
    margin-bottom: 0.5rem;
}

.count {
    color: var(--ctp-subtext0);
    font-size: 0.9rem;
}
</style>
