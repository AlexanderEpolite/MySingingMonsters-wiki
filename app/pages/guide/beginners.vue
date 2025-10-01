<template>
    <div class="container">
        <h1>Beginner's Guide</h1>
        
        <div class="card">
            <h2>Welcome to My Singing Monsters!</h2>
            <p>
                Welcome to the musical world of My Singing Monsters! This guide will help you 
                get started on your journey to creating the perfect monster orchestra.
            </p>
        </div>
        
        <div class="card">
            <h2>Getting Started</h2>
            <h3>First Steps</h3>
            <ul>
                <li><strong>Plant Island:</strong> Your starting island where you'll place your first monsters</li>
                <li><strong>Natural Monsters:</strong> Begin with single-element monsters like Toe Jammer, Mammott, and Potbelly</li>
                <li><strong>Breeding Structure:</strong> Build this early to start breeding multi-element monsters</li>
                <li><strong>Nursery:</strong> Where bred monster eggs hatch - essential for expansion</li>
            </ul>
        </div>
        
        <div class="card">
            <h2>Core Gameplay Loop</h2>
            <ol>
                <li>Place monsters on your islands</li>
                <li>Collect coins they produce</li>
                <li>Use coins to buy more monsters and decorations</li>
                <li>Breed monsters to get new species</li>
                <li>Level up monsters with treats to increase earnings</li>
                <li>Expand to new islands as you progress</li>
            </ol>
        </div>
        
        <div class="card">
            <h2>Important Early Tips</h2>
            <ul>
                <li>Focus on filling Plant Island with earning monsters first</li>
                <li>Don't spend diamonds on speeding up breeding - save them for important purchases</li>
                <li>Complete goals and achievements for rewards</li>
                <li>Join a tribe for additional benefits and currency</li>
                <li>Check in regularly to collect earnings before they cap</li>
                <li>Breed monsters during your sleep/work time to maximize efficiency</li>
            </ul>
        </div>
        
        <div class="card">
            <h2>Island Progression</h2>
            <p>
                As you progress, you'll unlock new islands with different elements:
            </p>
            <ul>
                <li><strong>Natural Islands:</strong> Plant, Cold, Air, Water, Earth (starting islands)</li>
                <li><strong>Ethereal Islands:</strong> Unlock at level 9 for Ethereal monsters</li>
                <li><strong>Fire Islands:</strong> Available once you reach higher levels</li>
                <li><strong>Magical Islands:</strong> Unlock the Magical class at level 9</li>
            </ul>
            <NuxtLink to="/islands" class="guide-link">View All Islands →</NuxtLink>
        </div>
        
        <div class="card">
            <h2>Next Steps</h2>
            <p>Ready to dive deeper? Check out these resources:</p>
            <div class="link-grid">
                <NuxtLink to="/guide/breeding" class="guide-link">Breeding Guide →</NuxtLink>
                <NuxtLink to="/guide/earning" class="guide-link">Earning Guide →</NuxtLink>
                <NuxtLink to="/monsters" class="guide-link">Monster List →</NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card ul,
.card ol {
    margin-left: 1.5rem;
    color: var(--ctp-subtext0);
}

.card li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
}

.card li strong {
    color: var(--ctp-lavender);
}

.card h3 {
    color: var(--ctp-pink);
    margin: 1rem 0 0.5rem 0;
}

.link-grid {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    flex-wrap: wrap;
}

.guide-link {
    padding: 0.75rem 1.5rem;
    background-color: var(--ctp-surface1);
    border-radius: 0.5rem;
    border: 1px solid var(--ctp-surface2);
    transition: all 0.2s ease;
    display: inline-block;
}

.guide-link:hover {
    border-color: var(--ctp-mauve);
    background-color: var(--ctp-surface2);
    transform: translateX(5px);
}
</style>
