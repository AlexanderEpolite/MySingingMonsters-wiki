<template>
    <div id="app">
        <TopNav />
        <main class="main-content">
            <NuxtPage />
        </main>
        <Footer />
        <WelcomeModal />
    </div>
</template>

<style>
:root {
    --ctp-rosewater: #f5e0dc;
    --ctp-flamingo: #f2cdcd;
    --ctp-pink: #f5c2e7;
    --ctp-mauve: #cba6f7;
    --ctp-red: #f38ba8;
    --ctp-maroon: #eba0ac;
    --ctp-peach: #fab387;
    --ctp-yellow: #f9e2af;
    --ctp-green: #a6e3a1;
    --ctp-teal: #94e2d5;
    --ctp-sky: #89dceb;
    --ctp-sapphire: #74c7ec;
    --ctp-blue: #89b4fa;
    --ctp-lavender: #b4befe;
    --ctp-text: #cdd6f4;
    --ctp-subtext1: #bac2de;
    --ctp-subtext0: #a6adc8;
    --ctp-overlay2: #9399b2;
    --ctp-overlay1: #7f849c;
    --ctp-overlay0: #6c7086;
    --ctp-surface2: #585b70;
    --ctp-surface1: #45475a;
    --ctp-surface0: #313244;
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    background-color: var(--ctp-base);
}

body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: var(--ctp-base);
    color: var(--ctp-text);
    line-height: 1.6;
    min-height: 100vh;
}

a {
    color: var(--ctp-blue);
    text-decoration: none;
    transition: color 0.2s ease;
}

a:hover {
    color: var(--ctp-sky);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

h1, h2, h3, h4, h5, h6 {
    color: var(--ctp-text);
    margin-bottom: 0.5rem;
}

h1 {
    font-size: 2.5rem;
    color: var(--ctp-mauve);
}

h2 {
    font-size: 2rem;
    color: var(--ctp-pink);
    margin-top: 0.5rem;
}

h3 {
    font-size: 1.5rem;
    color: var(--ctp-lavender);
}

.card {
    background-color: var(--ctp-surface0);
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border: 1px solid var(--ctp-surface2);
}

.monster-icon {
    width: 48px;
    height: 48px;
    object-fit: contain;
    border-radius: 0.25rem;
}

.monster-image {
    width: 100%;
    max-width: 300px;
    height: auto;
    object-fit: contain;
    border-radius: 0.5rem;
}

.grid {
    display: grid;
    gap: 1rem;
}

.grid-2 {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.grid-3 {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    background-color: var(--ctp-surface2);
    color: var(--ctp-text);
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}

.badge.common {
    background-color: var(--ctp-green);
    color: var(--ctp-crust);
}

.badge.rare {
    background-color: var(--ctp-blue);
    color: var(--ctp-crust);
}

.badge.epic {
    background-color: var(--ctp-mauve);
    color: var(--ctp-crust);
}

table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 1rem 0;
    border-radius: 0.5rem;
    overflow: hidden;
    border: 1px solid var(--ctp-surface2);
}

th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid var(--ctp-surface2);
}

th {
    background-color: var(--ctp-surface1);
    color: var(--ctp-lavender);
    font-weight: 600;
}

tr:last-child td {
    border-bottom: none;
}

tr:hover {
    background-color: var(--ctp-surface1);
}

.loading {
    text-align: center;
    padding: 2rem;
    color: var(--ctp-subtext0);
}

.main-content {
    min-height: calc(100vh - 300px);
    padding: 2rem 0;
}
</style>
