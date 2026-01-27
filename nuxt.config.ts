// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // modules: ['@nuxtjs/google-fonts'],

  // Global page headers: https://nuxt.com/docs/4.x/getting-started/seo-meta
  app: {
    head: {
      title: 'Plantquiz',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Application de reconnaissance de plantes sauvages.' },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Mon App Nuxt' },
        { property: 'og:description', content: 'Application de reconnaissance de plantes sauvages.' },
        { property: 'og:image', content: 'https://plantqz.netlify.app/cgn-og-cover.png' },
      ],
      htmlAttrs: {
        lang: 'fr',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' }
      ],
    },
  },

// 3. PWA module configuration.
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Plant quiz',
      short_name: 'Plantquiz',
      description: 'Application de reconnaissance de plantes sauvages.',
      theme_color: '#541E76',
      background_color: '#ffffff',
      icons: [
        {
          src: '/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: '/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    client: {
      installPrompt: true, // Affiche une bannière d'installation si supporté
    },
    devOptions: {
      enabled: true // Permet de tester la PWA en mode développement
    }
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
