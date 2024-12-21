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
      'nuxt-og-image'
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    socialShare: {
        baseUrl: 'https://calculate-astrology.netlify.app'
    },
    site: { 
        url: 'https://calculate-astrology.netlify.app', 
        name: 'Calculate your dominant element!' 
    }, 
    ogImage: {
        fonts: [
          'Lato:700'
        ]
    }
})