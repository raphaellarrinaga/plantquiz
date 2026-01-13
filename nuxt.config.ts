// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // modules: ['@nuxtjs/google-fonts'],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Plantquiz',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  },

  // Global CSS.
  css: [
    '@/assets/sass/global.scss'
  ],

  vite: {
    css: {
      preprocessorMaxWorkers: true,
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/sass/_abstracts.scss" as *;',
        },
      },
    },
  },

  googleFonts: {
    display: 'swap',
    families: {
      Roboto: [400, 500, 700],
    }
  },

}
