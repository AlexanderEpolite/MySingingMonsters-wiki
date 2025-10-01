<template>
    <div class="container">
        <h1>Guides</h1>
        <p class="subtitle">Helpful guides for My Singing Monsters</p>
        
        <div class="guide-grid">
            <NuxtLink to="/guide/shard-farming" class="guide-card">
                <h3>Shard Farming</h3>
                <p>Learn how to breed different monsters and understand breeding mechanics</p>
            </NuxtLink>
            
            <NuxtLink to="/guide/earning" class="guide-card">
                <h3>💰 Earning Guide</h3>
                <p>Maximize your coin and diamond earnings with optimal strategies</p>
            </NuxtLink>
            
            <NuxtLink to="/guide/likes" class="guide-card">
                <h3>❤️ Likes Guide</h3>
                <p>Increase monster happiness by placing their favorite items nearby</p>
            </NuxtLink>
            
            <NuxtLink to="/guide/beginners" class="guide-card">
                <h3>📚 Beginner's Guide</h3>
                <p>New to the game? Start here to learn the basics</p>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.subtitle {
    color: var(--ctp-subtext0);
    margin-bottom: 2rem;
}

.guide-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
}

.guide-card {
    background: linear-gradient(135deg, var(--ctp-surface0), var(--ctp-surface1));
    border: 1px solid var(--ctp-surface2);
    border-radius: 1rem;
    padding: 2rem;
    transition: all 0.3s ease;
}

.guide-card:hover {
    transform: translateY(-5px);
    border-color: var(--ctp-mauve);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.guide-card h3 {
    color: var(--ctp-lavender);
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
}

.guide-card p {
    color: var(--ctp-subtext0);
    line-height: 1.5;
}
</style>
