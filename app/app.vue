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
@import '@/assets/css/main.css';

.main-content {
    min-height: calc(100vh - 300px);
    padding: 2rem 0;
}
</style>
