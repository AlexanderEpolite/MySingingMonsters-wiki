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
                <ClientOnly>
                    <div v-if="islandMonsters.length === 0" class="no-monsters">
                        <p>No monsters data available for this island yet.</p>
                    </div>
                    
                    <div v-else>
                        <!-- Common Monsters -->
                        <div v-if="groupedMonsters.common.length > 0" class="monster-section">
                            <h3 class="rarity-header">Common</h3>
                            <div class="monster-grid">
                                <NuxtLink 
                                    v-for="(monster, index) in groupedMonsters.common" 
                                    :key="`${monster.name}-${index}`"
                                    :to="`/monster/${getMonsterSlug(monster.name)}`"
                                    class="monster-card"
                                >
                                    <img 
                                        :key="monster.name"
                                        :src="getURLFromName(monster.name, false, 'monster')"
                                        :alt="monster.name"
                                        class="monster-icon"
                                        @error="handleImageError"
                                    />
                                    <span>{{ monster.name }}</span>
                                </NuxtLink>
                            </div>
                        </div>
                        
                        <!-- Rare Monsters -->
                        <div v-if="groupedMonsters.rare.length > 0" class="monster-section">
                            <h3 class="rarity-header">Rare</h3>
                            <div class="monster-grid">
                                <NuxtLink 
                                    v-for="(monster, index) in groupedMonsters.rare" 
                                    :key="`${monster.name}-${index}`"
                                    :to="`/monster/${getMonsterSlug(monster.name)}`"
                                    class="monster-card"
                                >
                                    <img 
                                        :key="monster.name"
                                        :src="getURLFromName(monster.name, false, 'monster')"
                                        :alt="monster.name"
                                        class="monster-icon"
                                        @error="handleImageError"
                                    />
                                    <span>{{ monster.name }}</span>
                                </NuxtLink>
                            </div>
                        </div>
                        
                        <!-- Epic Monsters -->
                        <div v-if="groupedMonsters.epic.length > 0" class="monster-section">
                            <h3 class="rarity-header">Epic</h3>
                            <div class="monster-grid">
                                <NuxtLink 
                                    v-for="(monster, index) in groupedMonsters.epic" 
                                    :key="`${monster.name}-${index}`"
                                    :to="`/monster/${getMonsterSlug(monster.name)}`"
                                    class="monster-card"
                                >
                                    <img 
                                        :key="monster.name"
                                        :src="getURLFromName(monster.name, false, 'monster')"
                                        :alt="monster.name"
                                        class="monster-icon"
                                        @error="handleImageError"
                                    />
                                    <span>{{ monster.name }}</span>
                                </NuxtLink>
                            </div>
                        </div>
                        
                        <!-- Ethereal/Mythical Monsters -->
                        <div v-if="groupedMonsters.special.length > 0" class="monster-section">
                            <h3 class="rarity-header">Ethereal/Mythical</h3>
                            <div class="monster-grid">
                                <NuxtLink 
                                    v-for="(monster, index) in groupedMonsters.special" 
                                    :key="`${monster.name}-${index}`"
                                    :to="`/monster/${getMonsterSlug(monster.name)}`"
                                    class="monster-card"
                                >
                                    <img 
                                        :key="monster.name"
                                        :src="getURLFromName(monster.name, false, 'monster')"
                                        :alt="monster.name"
                                        class="monster-icon"
                                        @error="handleImageError"
                                    />
                                    <span>{{ monster.name }}</span>
                                </NuxtLink>
                            </div>
                        </div>
                        
                        <!-- Seasonal Monsters -->
                        <div v-if="groupedMonsters.seasonal.length > 0" class="monster-section">
                            <h3 class="rarity-header">Seasonal</h3>
                            <div class="monster-grid">
                                <NuxtLink 
                                    v-for="(monster, index) in groupedMonsters.seasonal" 
                                    :key="`${monster.name}-${index}`"
                                    :to="`/monster/${getMonsterSlug(monster.name)}`"
                                    class="monster-card"
                                >
                                    <img 
                                        :key="monster.name"
                                        :src="getURLFromName(monster.name, false, 'monster')"
                                        :alt="monster.name"
                                        class="monster-icon"
                                        @error="handleImageError"
                                    />
                                    <span>{{ monster.name }}</span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    
                    <template #fallback>
                        <div class="loading">
                            <p>Loading monsters...</p>
                        </div>
                    </template>
                </ClientOnly>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { islands } from '~/data/islands';
import { monsters } from '~/data/monsters';
import { getIslandSlug, getMonsterSlug, getURLFromName, formatNumber } from '~/utils/helpers';
import type { Monster } from '~/types/monster';

const route = useRoute();
const islandSlug = route.params.name as string;

const island = computed(() => {
    return islands.find(i => getIslandSlug(i.name) === islandSlug);
});

const islandMonsters = computed(() => {
    if (!island.value) return [];
    return monsters.filter(m => m.islands.includes(island.value!.name as any));
});

const groupedMonsters = computed(() => {
    const common: Monster[] = [];
    const rare: Monster[] = [];
    const epic: Monster[] = [];
    const special: Monster[] = []; // Ethereal/Mythical
    const seasonal: Monster[] = [];
    
    islandMonsters.value.forEach(monster => {
        // Check if it's a seasonal monster
        if (monster.class === 'Seasonal') {
            seasonal.push(monster);
        }
        // Check if it's Ethereal or Mythical
        else if (monster.class === 'Ethereal' || monster.class === 'Mythical') {
            special.push(monster);
        }
        // Group by rarity
        else if (monster.rarity === 'common') {
            common.push(monster);
        } else if (monster.rarity === 'rare') {
            rare.push(monster);
        } else if (monster.rarity === 'epic') {
            epic.push(monster);
        }
    });
    
    return { common, rare, epic, special, seasonal };
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

.monster-section {
    margin-bottom: 2rem;
}

.rarity-header {
    color: var(--ctp-lavender);
    font-size: 1.25rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--ctp-surface2);
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

.loading {
    text-align: center;
    padding: 3rem;
    color: var(--ctp-subtext0);
    font-size: 1.2rem;
}
</style>
