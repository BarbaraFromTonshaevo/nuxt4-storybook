// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxt/fonts'
  ],
  postcss: {
    plugins: {
      autoprefixer: {},
    }
  },
  css: ['./app/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./app/assets/styles/abstracts/breakpoints" as *; @use "./app/assets/styles/abstracts/mixins" as *;'
        }
      }
    }
  },
  fonts: {
    families: [
      {
        name: 'TikTok Sans',
        provider: 'google',
        weights: ['400', '500', '600', '700']
      }
    ]
  }
})