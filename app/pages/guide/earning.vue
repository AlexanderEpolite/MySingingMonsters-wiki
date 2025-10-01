<template>
    <div class="container">
        <h1>Earning Guide</h1>
        
        <div class="card">
            <h2>Maximizing Your Earnings</h2>
            <p>
                In My Singing Monsters, you'll earn various currencies that help you expand your islands 
                and collect more monsters. Here's how to optimize your earning strategy.
            </p>
        </div>
        
        <div class="card">
            <h2>Currency Types</h2>
            <ul>
                <li><strong>Coins:</strong> The primary currency earned from monsters on Natural islands. Used for buying monsters, decorations, and structures.</li>
                <li><strong>Diamonds:</strong> Premium currency obtained through achievements, daily rewards, and purchases. Speed up breeding and construction.</li>
                <li><strong>Shards:</strong> Earned from Ethereal monsters. Used to buy Ethereal items and monsters.</li>
                <li><strong>Treats:</strong> Used to level up monsters, increasing their earning potential.</li>
                <li><strong>Keys:</strong> Used to unlock special content and party islands.</li>
                <li><strong>Relics:</strong> Found in the Tribal Island, used for tribal purchases.</li>
                <li><strong>Starpower:</strong> Earned on Celestial Island from feeding Celestials.</li>
            </ul>
        </div>
        
        <div class="card">
            <h2>Tips for Maximum Earnings</h2>
            <ul>
                <li>Level up your monsters - higher level monsters earn more per minute</li>
                <li>Increase monster happiness by placing their liked items nearby (up to 25% bonus)</li>
                <li>Collect earnings regularly to avoid hitting the maximum cap</li>
                <li>Place multiple copies of popular monsters on Gold Island for bonus earnings</li>
                <li>Complete daily and weekly goals for diamond rewards</li>
                <li>Participate in events for special currency bonuses</li>
            </ul>
        </div>
        
        <div class="card">
            <h2>Earning Efficiency</h2>
            <p>
                Different monsters have different earning rates. Check each monster's page to see their 
                earnings at different levels. Some monsters are better for coin farming than others!
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
