<template>
    <div class="container">
        <div v-if="loading" class="loading">
            <p>Loading guide...</p>
        </div>

        <div v-else-if="error" class="error-state">
            <h1>Guide Not Found</h1>
            <p>The guide "{{ guideName }}" could not be found.</p>
            <NuxtLink to="/guides" class="back-link">← Back to Guides</NuxtLink>
        </div>
        
        <div v-else-if="content">
            <div class="guide-content" v-html="content"></div>
            
            <a :href="`https://github.com/AlexanderEpolite/MySingingMonsters-wiki/edit/main/app/data/guides/${guideName}.md`"
                target="_blank" rel="noopener noreferrer" class="edit-link">
                Edit this guide on GitHub
            </a>
        </div>
    </div>
</template>

<style scoped lang="less">
.loading {
    text-align: center;
    padding: 4rem 0;
    color: var(--ctp-subtext0);
}

.error-state {
    text-align: center;
    padding: 4rem 0;
}

.error-state h1 {
    color: var(--ctp-red);
    margin-bottom: 1rem;
}

.error-state p {
    color: var(--ctp-subtext0);
    margin-bottom: 2rem;
}

.back-link {
    color: var(--ctp-mauve);
    text-decoration: none;
    transition: color 0.2s ease;
}

.back-link:hover {
    color: var(--ctp-lavender);
}

.guide-content {
    max-width: 100%;
}

//markdown content styling
.guide-content :deep(h1) {
    color: var(--ctp-text);
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid var(--ctp-surface2);
    padding-bottom: 0.5rem;
}

.guide-content :deep(h2) {
    color: var(--ctp-lavender);
    font-size: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
}

.guide-content :deep(h3) {
    color: var(--ctp-pink);
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
}

.guide-content :deep(p) {
    color: var(--ctp-text);
    line-height: 1.8;
    margin-bottom: 1.25rem;
}

.guide-content :deep(ul),
.guide-content :deep(ol) {
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--ctp-subtext0);
}

.guide-content :deep(li) {
    margin-bottom: 0.75rem;
    line-height: 1.6;
}

.guide-content :deep(li strong) {
    color: var(--ctp-lavender);
}

.guide-content :deep(a) {
    color: var(--ctp-mauve);
    text-decoration: none;
    transition: color 0.2s ease;
}

.guide-content :deep(a:hover) {
    color: var(--ctp-lavender);
    text-decoration: underline;
}

.guide-content :deep(code) {
    background-color: var(--ctp-surface0);
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-family: "Monaco", "Courier New", monospace;
    font-size: 0.9em;
    color: var(--ctp-green);
}

.guide-content :deep(pre) {
    background-color: var(--ctp-surface0);
    border: 1px solid var(--ctp-surface2);
    border-radius: 0.5rem;
    padding: 1rem;
    overflow-x: auto;
    margin-bottom: 1.5rem;
}

.guide-content :deep(pre code) {
    background-color: transparent;
    padding: 0;
    color: var(--ctp-text);
}

.guide-content :deep(blockquote) {
    border-left: 4px solid var(--ctp-mauve);
    padding-left: 1rem;
    margin: 1.5rem 0;
    color: var(--ctp-subtext0);
    font-style: italic;
}

.guide-content :deep(table) {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 1rem 0;
    border-radius: 0.5rem;
    overflow: hidden;
    border: 1px solid var(--ctp-surface2);
}

.guide-content :deep(th),
.guide-content :deep(td) {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid var(--ctp-surface2);
}

.guide-content :deep(th) {
    background-color: var(--ctp-surface1);
    color: var(--ctp-lavender);
    font-weight: 600;
}

.guide-content :deep(tr:last-child td) {
    border-bottom: none;
}

.guide-content :deep(tbody tr:hover) {
    background-color: var(--ctp-surface1);
}

.guide-content :deep(hr) {
    border: none;
    border-top: 2px solid var(--ctp-surface2);
    margin: 2rem 0;
}

.guide-content :deep(img) {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 1rem 0;
    border: 2px solid var(--ctp-surface2);
}

.edit-on-github {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 2px solid var(--ctp-surface2);
    text-align: center;
}

</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            guideName: "" as string,
            content: null as string | null,
            loading: true,
            error: false
        };
    },
    async mounted() {
        const route = useRoute();
        this.guideName = route.params.name as string;

        const { loadGuide } = useMarkdown();

        try {
            const html = await loadGuide(this.guideName);
            if (html) {
                this.content = html;
            } else {
                this.error = true;
            }
        } catch (e) {
            this.error = true;
            console.error("Error loading guide:", e);
        } finally {
            this.loading = false;
        }
    }
});
</script>