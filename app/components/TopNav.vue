<template>
    <nav class="top-nav">
        <div class="container nav-content">
            <NuxtLink to="/" class="logo">
                <h1>Unofficial My Singing Monsters Wiki</h1>
            </NuxtLink>
            <div class="nav-links">
                <NuxtLink to="/monsters">Monsters</NuxtLink>
                <NuxtLink to="/islands">Islands</NuxtLink>
                <NuxtLink to="/classes">Classes</NuxtLink>
                <NuxtLink to="/elements">Elements</NuxtLink>
                <NuxtLink to="/guides">Guides</NuxtLink>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="less">
.top-nav {
    background-color: var(--ctp-mantle);
    border-bottom: 2px solid var(--ctp-surface0); 
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.logo h1 {
    font-size: 1.5rem;
    margin: 0;
    color: var(--ctp-mauve);
    transition: color 0.2s ease;
}

.logo:hover h1 {
    color: var(--ctp-pink);
}

.nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;

    a {
        color: var(--ctp-text);
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        transition: all 0.2s ease;
        white-space: nowrap;

        &:hover {
            background-color: var(--ctp-surface0);
            color: var(--ctp-lavender);
        }

        &.router-link-active {
            background-color: var(--ctp-surface1);
            color: var(--ctp-mauve);
        }
    }
}

@media (max-width: 768px) {
    .top-nav {
        position: static;
        padding: 0.75rem 0;
    }
    
    .nav-content {
        flex-direction: column;
        gap: 0.75rem;
    }

    .logo h1 {
        font-size: 1.25rem;
        text-align: center;
    }
    
    .nav-links {
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;

        a {
            padding: 0.4rem 0.75rem;
            font-size: 0.9rem;
        }
    }
}
</style>