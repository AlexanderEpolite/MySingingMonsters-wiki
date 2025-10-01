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
                <option value="Supernatural">Supernatural</option>
                <option value="Spectral">Spectral</option>
                <option value="Shugafam">Shugafam</option>
                <option value="Dipster">Dipster</option>
                <option value="Werdos">Werdos</option>
                <option value="Paironormal">Paironormal</option>
                <option value="Primordial">Primordial</option>
                <option value="Titansoul">Titansoul</option>
            </select>
            <select v-model="filterRarity" class="filter-select">
                <option value="">All Rarities</option>
                <option value="common">Common</option>
                <option value="rare">Rare</option>
                <option value="epic">Epic</option>
            </select>
        </div>
        
        <ClientOnly>
            <div class="monster-grid">
                <MonsterCard 
                    v-for="(monster, index) in filteredMonsters" 
                    :key="`${monster.name}-${index}`"
                    :monster="monster"
                />
            </div>
            <div v-if="filteredMonsters.length === 0" class="no-results">
                <p>No monsters found matching your criteria.</p>
            </div>
            <template #fallback>
                <div class="loading">
                    <p>Loading monsters...</p>
                </div>
            </template>
        </ClientOnly>
    </div>
</template>

<style scoped lang="less">
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
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
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

<script lang="ts">
import { defineComponent } from "vue";
import { monsters } from "~/data/monsters";
import { getDisplayName } from "~/utils/helpers";

export default defineComponent({
    data() {
        return {
            searchQuery: "",
            filterClass: "",
            filterRarity: ""
        };
    },
    computed: {
        filteredMonsters() {
            return monsters.filter(monster => {
                const displayName = getDisplayName(monster);
                const matchesSearch = displayName.toLowerCase().includes(this.searchQuery.toLowerCase());
                const matchesClass = !this.filterClass || monster.class === this.filterClass;
                const matchesRarity = !this.filterRarity || monster.rarity === this.filterRarity;
                return matchesSearch && matchesClass && matchesRarity;
            });
        }
    },
    watch: {
        searchQuery(newValue) {
            this.updateQueryString();
        },
        filterClass(newValue) {
            this.updateQueryString();
        },
        filterRarity(newValue) {
            this.updateQueryString();
        }
    },
    mounted() {
        //load initial values from query string
        const query = this.$route.query;
        if (query.search) {
            this.searchQuery = query.search as string;
        }
        if (query.class) {
            this.filterClass = query.class as string;
        }
        if (query.rarity) {
            this.filterRarity = query.rarity as string;
        }
    },
    methods: {
        updateQueryString() {
            const query: Record<string, string> = {};
            
            if (this.searchQuery) {
                query.search = this.searchQuery;
            }
            if (this.filterClass) {
                query.class = this.filterClass;
            }
            if (this.filterRarity) {
                query.rarity = this.filterRarity;
            }
            
            //update the URL without reloading the page
            this.$router.push({ query });
        }
    }
});
</script>