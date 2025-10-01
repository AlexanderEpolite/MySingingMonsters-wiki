// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon'],
  
  vite: {
    assetsInclude: ['**/*.md']
  },
  
  app: {
    head: {
      title: 'Unofficial My Singing Monsters Wiki',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Unofficial wiki for My Singing Monsters - VERY early in development!' },
        { name: 'color-scheme', content: 'dark' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})