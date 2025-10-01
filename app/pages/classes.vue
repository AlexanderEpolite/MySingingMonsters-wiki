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
                <div class="preview-image">
                    <img :src="monsterClass.previewImage" :alt="`${monsterClass.name} preview`" />
                </div>
                <h3>{{ monsterClass.name }}</h3>
                <p class="count">{{ monsterClass.count }} monster(s)</p>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { monsters } from '~/data/monsters';
import { getURLFromName } from '~/utils/helpers';

const classes = computed(() => {
    const classMap = new Map<string, { count: number; firstMonster: string }>();
    
    monsters.forEach(monster => {
        const existing = classMap.get(monster.class);
        if (existing) {
            existing.count++;
        } else {
            classMap.set(monster.class, { 
                count: 1, 
                firstMonster: monster.name 
            });
        }
    });
    
    return Array.from(classMap.entries()).map(([name, data]) => ({
        name,
        slug: name.toLowerCase().replace(/\s+/g, '-'),
        count: data.count,
        previewImage: getURLFromName(data.firstMonster, false, 'monster')
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
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.class-card:hover {
    transform: translateY(-5px);
    border-color: var(--ctp-mauve);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.preview-image {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    overflow: hidden;
}

.preview-image img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 0.5rem;
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
