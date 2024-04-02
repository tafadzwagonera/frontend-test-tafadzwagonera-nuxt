// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  css: ['@/assets/css/main.css'],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    }
  },
  ssr: false,
})
