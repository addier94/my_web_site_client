import { I18N } from './config'
export default {
  head: {
    title: 'Dev.to clone with NuxtJS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Building a dev.to clone with Nuxt.js and new fetch() hook'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Inter:400,500,600&display=swap'
      }
    ]
  },
  loading: false, // disable loading bar
  css: [
    '~/assets/styles/reset.scss',
    '~/assets/styles/base.scss',
    '~/assets/styles/highlight.scss',
    '~/assets/styles/app.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  styleResources: {
    scss: ['~/assets/styles/tokens.scss']
  },
  plugins: [
    '~/plugins/vue-placeholders.js',
    '~/plugins/vue-observe-visibility.client.js',
    '~/plugins/fontawesome.js',
    '~/plugins/tooltip.js',
    { src: '~/plugins/vuelidate' },
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    'nuxt-ackee',
    ['nuxt-i18n', I18N],
    '@nuxtjs/axios',
    [
      'vue-sweetalert2/nuxt',
    ],
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:5000'
  },
  ackee: {
    server: 'https://ackee.nuxtjs.com',
    domainId: '6336379b-8d3e-4069-9d2e-897be6a7ed4e'
  }
}
