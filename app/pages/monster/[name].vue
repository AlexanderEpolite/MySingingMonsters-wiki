<template>
    <div class="container">
        <div v-if="!monster" class="loading">
            <p>Monster not found</p>
            <NuxtLink to="/monsters">← Back to all monsters</NuxtLink>
        </div>

        <div v-else class="monster-detail">
            <div class="monster-header">
                <img :src="getURLFromName(monster.name, false, 'monster')" :alt="getLocalizedMonsterName(monster.name)"
                    class="monster-image" @error="handleImageError" />
                <div class="monster-info">
                    <h1>{{ getLocalizedMonsterName(monster.name) }}</h1>
                    <div class="badges">
                        <span :class="['badge', monster.rarity]">{{ monster.rarity }}</span>
                        <span class="badge">{{ monster.class }}</span>
                    </div>
                    <div class="elements">
                        <h3>Elements</h3>
                        <div class="element-list">
                            <NuxtLink v-for="element in monster.elements" :key="element"
                                :to="`/element/${element.toLowerCase()}`" class="element-link">
                                <img :src="getElementImage(element)" :alt="element" :title="element"
                                    class="element-icon" @error="handleElementImageError" />
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="basic-info">
                        <p><strong>Beds Required:</strong> {{ monster.beds_required }}</p>
                        <p><strong>Breeding Time:</strong> {{ formatTime(monster.breeding_time) }}</p>
                        <p><strong>Enhanced Breeding Time:</strong> {{ formatTime(monster.breeding_time * 0.75) }}</p>
                    </div>
                </div>
            </div>

            <div class="card" v-if="monster.islands.length > 0">
                <h2>Available Islands</h2>
                <div class="island-list">
                    <NuxtLink v-for="island in monster.islands" :key="island" :to="`/island/${getIslandSlug(island)}`"
                        class="island-card-mini">
                        <img :src="getIslandImage(island)" :alt="island" class="island-mini-image"
                            @error="handleImageError" />
                        <span>{{ island }}</span>
                    </NuxtLink>
                </div>
            </div>

            <div class="card" v-if="monster.breeding.length > 0">
                <h2>Obtaining</h2>
                <div v-for="breedInfo in monster.breeding" :key="breedInfo.island" class="breeding-section">
                    <h3>{{ breedInfo.island }}</h3>
                    <div class="combos">
                        <div v-for="(combo, index) in breedInfo.combos" :key="index" class="combo">
                            <div class="combo-parents">
                                <NuxtLink v-if="!combo.hide_parent_1_link && combo.parent_1_name"
                                    :to="`/monster/${getMonsterSlug(combo.parent_1_name)}`" class="parent-monster">
                                    <img :src="getURLFromName(combo.parent_1_name, false, 'monster')"
                                        :alt="getLocalizedMonsterName(combo.parent_1_name)" class="monster-icon"
                                        @error="handleImageError" />
                                    <span>{{ getLocalizedMonsterName(combo.parent_1_name) }}</span>
                                </NuxtLink>
                                <span v-else class="parent-text">{{ combo.parent_1_name }}</span>

                                <span v-if="combo.parent_2_name" class="combo-plus">+</span>

                                <NuxtLink v-if="combo.parent_2_name"
                                    :to="`/monster/${getMonsterSlug(combo.parent_2_name)}`" class="parent-monster">
                                    <img :src="getURLFromName(combo.parent_2_name, false, 'monster')"
                                        :alt="getLocalizedMonsterName(combo.parent_2_name)" class="monster-icon"
                                        @error="handleImageError" />
                                    <span>{{ getLocalizedMonsterName(combo.parent_2_name) }}</span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card" v-if="monster.island_costs.length > 0">
                <h2>Costs</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Island</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cost in monster.island_costs" :key="cost.island">
                            <td>{{ cost.island }}</td>
                            <td>
                                <div class="currency-cell">
                                    <img :src="getCurrencyImage(cost.unit)" :alt="cost.unit" class="currency-icon" />
                                    {{ formatNumber(cost.cost) }}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="card" v-if="monster.earnings.length > 0">
                <h2>Earnings</h2>
                <div v-for="earning in monster.earnings" :key="earning.island" class="earning-section">
                    <h3>
                        {{ earning.island === "ALL" ? "" : earning.island + " - " }}
                        <img :src="getCurrencyImage(earning.currency)" :alt="earning.currency"
                            class="currency-icon-inline" />
                        Per {{ earning.unit }}
                    </h3>

                    <table class="earnings-table">
                        <thead>
                            <tr>
                                <th>Level</th>
                                <th>0%</th>
                                <th>25%</th>
                                <th>50%</th>
                                <th>75%</th>
                                <th>100%</th>
                                <th>Maximum</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="level in earning.level_earnings" :key="level.level">
                                <td>{{ level.level }}</td>
                                <td>
                                    <div class="currency-cell">
                                        <img :src="getCurrencyImage(earning.currency)" :alt="earning.currency"
                                            class="currency-icon" />
                                        {{ formatNumber(calculateHappinessAmount(level.amount, 0)) }}
                                    </div>
                                </td>
                                <td>
                                    <div class="currency-cell">
                                        <img :src="getCurrencyImage(earning.currency)" :alt="earning.currency"
                                            class="currency-icon" />
                                        {{ formatNumber(calculateHappinessAmount(level.amount, 25)) }}
                                    </div>
                                </td>
                                <td>
                                    <div class="currency-cell">
                                        <img :src="getCurrencyImage(earning.currency)" :alt="earning.currency"
                                            class="currency-icon" />
                                        {{ formatNumber(calculateHappinessAmount(level.amount, 50)) }}
                                    </div>
                                </td>
                                <td>
                                    <div class="currency-cell">
                                        <img :src="getCurrencyImage(earning.currency)" :alt="earning.currency"
                                            class="currency-icon" />
                                        {{ formatNumber(calculateHappinessAmount(level.amount, 75)) }}
                                    </div>
                                </td>
                                <td>
                                    <div class="currency-cell">
                                        <img :src="getCurrencyImage(earning.currency)" :alt="earning.currency"
                                            class="currency-icon" />
                                        {{ formatNumber(calculateHappinessAmount(level.amount, 100)) }}
                                    </div>
                                </td>
                                <td>
                                    <div class="currency-cell">
                                        <img :src="getCurrencyImage(earning.currency)" :alt="earning.currency"
                                            class="currency-icon" />
                                        {{ formatNumber(level.maximum) }}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="card" v-if="monster.island_likes.length > 0">
                <h2>Likes</h2>
                <div v-for="islandLikes in monster.island_likes" :key="islandLikes.island" class="likes-section">
                    <h3>{{ islandLikes.island }}</h3>
                    <div class="likes-grid">
                        <NuxtLink v-for="like in islandLikes.likes" :key="like.name"
                            :to="like.type === 'monster' ? `/monster/${getMonsterSlug(like.name)}` : '#'"
                            class="like-item">
                            <img :src="getURLFromName(like.name, false, like.type)"
                                :alt="like.type === 'monster' ? getLocalizedMonsterName(like.name) : like.name"
                                class="like-icon" @error="handleImageError" />
                            <span>{{ like.type === "monster" ? getLocalizedMonsterName(like.name) : like.name }}</span>
                            <span v-if="like.mystery" class="mystery-badge">Mystery</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.monster-header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    margin-bottom: 2rem;
    align-items: start;
}

.monster-image {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 1rem;
    border: 2px solid var(--ctp-surface2);
}

.monster-info h1 {
    margin-bottom: 1rem;
}

.badges {
    margin-bottom: 1.5rem;
}

.elements h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.element-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.element-link {
    display: inline-block;
    transition: transform 0.2s ease;
}

.element-link:hover {
    transform: scale(1.1);
}

.element-icon {
    width: 50px;
    height: auto;
    object-fit: contain;
    display: block;
}

.basic-info p {
    margin-bottom: 0.5rem;
    color: var(--ctp-subtext0);
}

.island-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.island-tag {
    padding: 0.5rem 1rem;
    background-color: var(--ctp-surface1);
    border-radius: 0.5rem;
    border: 1px solid var(--ctp-surface2);
    transition: all 0.2s ease;
}

.island-tag:hover {
    border-color: var(--ctp-blue);
    background-color: var(--ctp-surface2);
}

.island-card-mini {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: var(--ctp-surface1);
    border-radius: 0.5rem;
    border: 1px solid var(--ctp-surface2);
    transition: all 0.2s ease;
}

.island-card-mini:hover {
    border-color: var(--ctp-blue);
    background-color: var(--ctp-surface2);
}

.island-mini-image {
    width: 40px;
    height: 40px;
    object-fit: contain;
    border-radius: 0.25rem;
}

.breeding-section,
.earning-section,
.likes-section {
    margin-bottom: 1.5rem;
}

.breeding-section h3,
.earning-section h3,
.likes-section h3 {
    color: var(--ctp-lavender);
    margin-bottom: 1rem;
}

.combos {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.combo {
    background-color: var(--ctp-surface1);
    padding: 1rem;
    border-radius: 0.5rem;
}

.combo-parents {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.parent-monster {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background-color: var(--ctp-surface0);
    border-radius: 0.5rem;
    transition: background-color 0.2s ease;
}

.parent-monster:hover {
    background-color: var(--ctp-surface2);
}

.parent-monster img {
    width: 40px;
    height: 40px;
}

.parent-text {
    color: var(--ctp-subtext0);
}

.combo-plus {
    font-size: 1.5rem;
    color: var(--ctp-mauve);
    font-weight: bold;
}

.earnings-table {
    width: 100%;
    overflow-x: auto;
}

.likes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
}

.like-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: var(--ctp-surface1);
    border-radius: 0.5rem;
    text-align: center;
    transition: all 0.2s ease;
    cursor: pointer;
}

.like-item:hover {
    background-color: var(--ctp-surface2);
    transform: translateY(-2px);
}

.like-icon {
    width: 64px;
    height: 64px;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    object-fit: contain;
}

.mystery-badge {
    font-size: 0.75rem;
    padding: 0.2rem 0.5rem;
    background-color: var(--ctp-mauve);
    color: var(--ctp-crust);
    border-radius: 0.25rem;
    margin-top: 0.25rem;
}

.currency-icon {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 0.25rem;
}

.currency-icon-inline {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin: 0 0.25rem;
}

.currency-cell {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

@media (max-width: 768px) {
    .monster-header {
        grid-template-columns: 1fr;
    }

    .earnings-table {
        display: block;
        overflow-x: auto;
    }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { monsters } from "~/data/monsters";
import { getURLFromName, formatTime, formatNumber, getMonsterSlug, getIslandSlug, getCurrencyImage, getIslandImage, getElementImage } from "~/utils/helpers";

export default defineComponent({
    data() {
        return {
            monsterSlug: useRoute().params.name as string
        };
    },
    computed: {
        monster() {
            return monsters.find(m => getMonsterSlug(m.name) === this.monsterSlug);
        }
    },
    methods: {
        calculateHappinessAmount(baseAmount: number, happiness: number): number {
            const multiplier = 1 + (happiness / 100);
            return Math.floor(baseAmount * multiplier);
        },
        handleImageError(event: Event) {
            const target = event.target as HTMLImageElement;
            target.src = "/images/placeholder.webp";
        },
        handleElementImageError(event: Event) {
            const target = event.target as HTMLImageElement;
            target.style.display = 'none';
        },
        getLocalizedMonsterName(monsterName: string): string {
            //find the monster by name
            const monster = monsters.find(m => m.name === monsterName);
            if(!monster) {
                return monsterName;
            }

            //get the localized name for "en" language
            const localizedName = monster.localized_names.find(ln => ln.language === "en");
            return localizedName ? localizedName.name : monsterName;
        },
        getURLFromName,
        formatTime,
        formatNumber,
        getMonsterSlug,
        getIslandSlug,
        getCurrencyImage,
        getIslandImage,
        getElementImage
    }
});
</script>