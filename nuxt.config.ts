// https://nuxt.com/docs/api/configuration/nuxt-config
const config = {
  head: {
    title: 'Nuxt 3 custom install',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    bodyAttrs: {
      class: 'rbt-header-sticky'
    },
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [
    '~/assets/css/main.scss',
    '~/assets/scss/style.scss',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
      ignore: ['**/*.stories.js'],
      extensions: ['vue'],
    },
  ],
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3000' // provide a default value
  },
  plugins: ['~/plugins/pinia.js'],

}

export default defineNuxtConfig(config)
