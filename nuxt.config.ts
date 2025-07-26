// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/ui'],
  css: ['~/assets/style/main.css'],
  app: {
    head: {
      title: 'My Nuxt Blog',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
});
