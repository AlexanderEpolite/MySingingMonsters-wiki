<template>
    <div class="container">
        <h1>Likes Guide</h1>
        
        <div class="card">
            <h2>Understanding Monster Likes</h2>
            <p>
                Every monster has specific items (decorations or other monsters) that they like. 
                Placing these items near your monsters increases their happiness, which boosts 
                their earning rate by up to 25%!
            </p>
        </div>
        
        <div class="card">
            <h2>How Likes Work</h2>
            <ul>
                <li><strong>Happiness Bonus:</strong> Each liked item near a monster increases happiness by 25%</li>
                <li><strong>Maximum Bonus:</strong> You can get up to 100% happiness (4 liked items) for a 25% earning boost</li>
                <li><strong>Range:</strong> Liked items must be within a certain range of the monster to count</li>
                <li><strong>Multiple Monsters:</strong> A single liked item can affect multiple monsters if they're close enough</li>
            </ul>
        </div>
        
        <div class="card">
            <h2>Strategies for Maximizing Happiness</h2>
            <ul>
                <li>Group monsters with similar likes together to share decorations</li>
                <li>Check each monster's page to see what they like</li>
                <li>Prioritize placing likes for your highest-earning monsters</li>
                <li>Some decorations are liked by multiple monsters - these are very efficient</li>
                <li>Monster likes (other monsters they like to be near) don't cost extra space</li>
            </ul>
        </div>
        
        <div class="card">
            <h2>Finding Monster Likes</h2>
            <p>
                Each monster's page shows what they like on each island. Click on any monster 
                to see their specific preferences!
            </p>
            <NuxtLink to="/monsters" class="guide-link">Browse Monsters →</NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.card ul {
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

.guide-link {
    padding: 0.75rem 1.5rem;
    background-color: var(--ctp-surface1);
    border-radius: 0.5rem;
    border: 1px solid var(--ctp-surface2);
    transition: all 0.2s ease;
    display: inline-block;
    margin-top: 1rem;
}

.guide-link:hover {
    border-color: var(--ctp-mauve);
    background-color: var(--ctp-surface2);
    transform: translateX(5px);
}
</style>
