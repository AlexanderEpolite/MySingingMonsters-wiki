<template>
    <div class="container">
        <h1>Shard Farming Guide</h1>
        
        <div class="card">
            <h2>Early Game Farming</h2>
        </div>
        
        <div class="card">
            <h2>Mid Game Farming</h2>
        </div>
        
        <div class="card">
            <h2>Late Game Farming</h2>
            <p>
                stuff here
            </p>
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
