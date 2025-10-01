<template>
    <NuxtLink 
        :to="`/monster/${getMonsterSlug(getDisplayName(monster))}`" 
        class="monster-card"
    >
        <img 
            :key="monster.name"
            :src="getURLFromName(monster.name, false, 'monster')" 
            :alt="getDisplayName(monster)" 
            class="monster-icon"
            @error="handleImageError"
        />
        <h3>{{ getDisplayName(monster) }}</h3>
        <div class="monster-meta">
            <span :class="['badge', monster.rarity]">{{ monster.rarity }}</span>
            <span class="badge">{{ monster.class }}</span>
        </div>
        <div class="elements">
            <NuxtLink
                v-for="element in monster.elements"
                :key="element"
                :to="`/element/${element.toLowerCase()}`"
                class="element-link"
                @click.stop
            >
                <img 
                    :key="element"
                    :src="getElementImage(element)" 
                    :alt="element" 
                    :title="element"
                    class="element-icon"
                    @error="handleElementImageError"
                />
            </NuxtLink>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { Monster } from '~/types/monster';
import { getURLFromName, getMonsterSlug, getDisplayName, getElementImage } from '~/utils/helpers';

interface Props {
    monster: Monster;
}

defineProps<Props>();

const handleImageError = (event: Event) => {
    const target = event.target as HTMLImageElement;
    target.src = '/images/placeholder.webp';
};

const handleElementImageError = (event: Event) => {
    const target = event.target as HTMLImageElement;
    // Hide the image if it fails to load
    target.style.display = 'none';
};
</script>

<style scoped>
.monster-card {
    background-color: var(--ctp-surface0);
    border: 1px solid var(--ctp-surface2);
    border-radius: 0.75rem;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 250px;
}

.monster-card:hover {
    transform: translateY(-5px);
    border-color: var(--ctp-mauve);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.monster-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
    object-fit: contain;
    display: block;
    flex-shrink: 0;
}

.monster-card h3 {
    color: var(--ctp-text);
    font-size: 1.4rem;
    margin-bottom: 0.75rem;
}

.monster-meta {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
}

.badge {
    padding: 0.25rem 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.85rem;
    font-weight: 500;
    text-transform: capitalize;
}

.badge.common {
    background-color: var(--ctp-surface2);
    color: var(--ctp-text);
}

.badge.rare {
    background-color: var(--ctp-blue);
    color: var(--ctp-crust);
}

.badge.epic {
    background-color: var(--ctp-mauve);
    color: var(--ctp-crust);
}

.elements {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
}

.element-link {
    display: inline-block;
    transition: transform 0.2s ease;
}

.element-link:hover {
    transform: scale(1.1);
}

.element-icon {
    width: 32px;
    height: 32px;
    object-fit: contain;
    display: block;
    flex-shrink: 0;
}
</style>
