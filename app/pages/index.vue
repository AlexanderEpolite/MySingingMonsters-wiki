<template>
    <div class="container">
        <div class="hero">
            <h1>Unofficial MSM Wiki</h1>
            <p>Your comprehensive guide to monsters, islands, breeding, and more!</p>
        </div>
        
        <div class="quick-links">
            <NuxtLink to="/monsters" class="quick-link-card">
                <h2>Monsters</h2>
                <p>Browse all monsters and their details</p>
            </NuxtLink>
            
            <NuxtLink to="/islands" class="quick-link-card">
                <h2>Islands</h2>
                <p>Explore all islands in the game</p>
            </NuxtLink>
            
            <NuxtLink to="/classes" class="quick-link-card">
                <h2>Classes</h2>
                <p>View monsters by class</p>
            </NuxtLink>
            
            <NuxtLink to="/elements" class="quick-link-card">
                <h2>Elements</h2>
                <p>Filter monsters by element</p>
            </NuxtLink>
        </div>
        
        <div class="card">
            <h2>About This Wiki</h2>
            <p>
                This fan-made wiki is dedicated to providing comprehensive information about 
                My Singing Monsters. Find detailed monster stats, breeding combinations, 
                earning rates, and much more!
            </p>
        </div>
    </div>
</template>

<style scoped>
.hero {
    text-align: center;
    padding: 3rem 0;
    margin-bottom: 2rem;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--ctp-mauve), var(--ctp-pink), var(--ctp-blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero p {
    font-size: 1.25rem;
    color: var(--ctp-subtext0);
}

.quick-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.quick-link-card {
    background: linear-gradient(135deg, var(--ctp-surface0), var(--ctp-surface1));
    border: 2px solid var(--ctp-surface2);
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
}

.quick-link-card:hover {
    transform: translateY(-5px);
    border-color: var(--ctp-mauve);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.quick-link-card h2 {
    color: var(--ctp-lavender);
    margin-bottom: 0.5rem;
    margin-top: 0;
}

.quick-link-card p {
    color: var(--ctp-subtext0);
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .hero h1 {
        font-size: 2rem;
    }
    
    .hero p {
        font-size: 1rem;
    }
}
</style>
