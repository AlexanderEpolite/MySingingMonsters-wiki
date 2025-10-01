<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>My Singing Monsters Wiki</h3>
                    <p>Your comprehensive resource for all things MSM</p>
                    <a href="https://github.com/AlexanderEpolite/MySingingMonsters-wiki" target="_blank"
                        rel="noopener noreferrer" class="github-link">
                        <Icon name="uil:github" />
                        <span>Contribute on GitHub</span>
                    </a>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <div class="footer-links">
                        <NuxtLink to="/monsters">Monsters</NuxtLink>
                        <NuxtLink to="/islands">Islands</NuxtLink>
                        <NuxtLink to="/guides">Guides</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="footer-disclaimers">
                <p class="disclaimer">
                    Portions of the materials used are trademarks and/or copyrighted works of Big Blue Bubble.
                    All rights reserved by Big Blue Bubble. This material is not official and is not endorsed by Big
                    Blue Bubble.
                </p>
                <p class="disclaimer">
                    Some information from this website obtained from MySingingMonsters Fandom, available from CC-BY-SA.
                </p>
            </div>
            <div class="footer-bottom">
                <p>&copy; {{ currentYear }} My Singing Monsters Wiki. Fan-made resource.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="less">
.footer {
    background-color: var(--ctp-mantle);
    border-top: 2px solid var(--ctp-surface0);
    margin-top: 4rem;
    padding: 3rem 0 1rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h3 {
    color: var(--ctp-mauve);
    margin-bottom: 1rem;
    font-size: 1.25rem;
}

.footer-section h4 {
    color: var(--ctp-pink);
    margin-bottom: 0.75rem;
    font-size: 1rem;
}

.footer-section p {
    color: var(--ctp-subtext0);
    font-size: 0.9rem;
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.footer-links a {
    color: var(--ctp-text);
    font-size: 0.9rem;
    transition: color 0.2s ease;
}

.footer-links a:hover {
    color: var(--ctp-lavender);
}

.footer-disclaimers {
    border-top: 1px solid var(--ctp-surface1);
    border-bottom: 1px solid var(--ctp-surface1);
    padding: 1.5rem 0;
    margin: 2rem 0 1rem;
}

.disclaimer {
    color: var(--ctp-subtext0);
    font-size: 0.85rem;
    line-height: 1.5;
    margin-bottom: 0.75rem;
}

.disclaimer:last-child {
    margin-bottom: 0;
}

.footer-bottom {
    text-align: center;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: center;
}

.footer-bottom p {
    color: var(--ctp-overlay0);
    font-size: 0.85rem;
}

.github-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: var(--ctp-surface0);
    border-radius: 8px;
    color: var(--ctp-text);
    font-size: 0.9rem;
    transition: all 0.2s ease;
    text-decoration: none;
}

.github-link:hover {
    background-color: var(--ctp-surface1);
    transform: translateY(-2px);
}

.github-link svg {
    font-size: 1.2rem;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            currentYear: new Date().getFullYear()
        };
    }
});
</script>