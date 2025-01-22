// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
      '@pinia/nuxt',
      'pinia-plugin-persistedstate/nuxt',
      '@nuxt/ui',
      '@nuxt/image',
      '@nuxtjs/tailwindcss',
      '@stefanobartoletti/nuxt-social-share',
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    socialShare: {
        baseUrl: 'elementscalculator.vercel.app'
    },
})